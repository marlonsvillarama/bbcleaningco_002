<script>
    import { cn } from "@/utils";
    import { getContext, onMount } from "svelte";
    import Button from "@/components/ui/button/button.svelte";
    import DateNavigator from "@/components/global/date-navigator.svelte";

    let {
        value = $bindable(),
        slot = $bindable(),
        open = $bindable(),
        onselect
    } = $props();

    const DAYS_OF_WEEK = [
        'SUN',
        'MON',
        'TUE',
        'WED',
        'THU',
        'FRI',
        'SAT',
        'SUN'
    ];
    const USER_CONTEXT = getContext('USER_CONTEXT');

    const parseValue = () => {
        if (!value) return '';

        if (Object.prototype.toString.call(value) === '[object Date]') {
            return value;
        }

        if (value.length < 8) return '';

        let year = value.slice(0, 4);
        let month = value.slice(4, 6);
        let day = value.slice(6);
        return new Date(year, parseInt(month) - 1, parseInt(day));
    };

    const selectDateAndSlot = (d, s) => {
        value = d;
        slot = s;
        open = false;
        console.log(`slot = ${s}; value ==> ${value}; open = ${open}`);
        onselect();
    };

    const normalizeDate = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    };

	const updateMonth = () => {
		calendarDate = calendarDate;

		let currentDate = $state(new Date(calendarDate));
		let startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
		let endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

		weeks = [];
		let monthDates = [];
		let dayValue = startOfMonth.getDate();
        const NOW = normalizeDate(new Date());
		do {
			currentDate.setDate(dayValue);

			let dateOfMonth = normalizeDate(new Date(currentDate));
			monthDates.push(dateOfMonth);
			if (dateOfMonth.getDate() === 1 ||
				(dateOfMonth.getDay().toString() === USER_CONTEXT.settings.week_start.toString())
			) {
				weeks.push([]);
			}

			weeks[weeks.length - 1].push(dateOfMonth.getTime() >= NOW.getTime() ? dateOfMonth : '');
			dayValue++;
		} while (dayValue <= endOfMonth.getDate());

		if (weeks[0].length < 7) {
			for (let i = 0, count = 7 - (weeks[0].length); i < count; i++) {
				weeks[0].unshift('');
			}
		}

		if (weeks[weeks.length - 1].length < 7) {
			for (let i = 0, count = 7 - (weeks[weeks.length - 1].length); i < count; i++) {
				weeks[weeks.length - 1].push('');
			}
		}
		
		weeks = weeks;
		// weekDays = weeks[1].map(d => d.toLocaleDateString(undefined, { weekday: 'short'}).toUpperCase());
		weekDays = DAYS_OF_WEEK.slice(USER_CONTEXT.settings.week_start, 7 + USER_CONTEXT.settings.week_start);
	};

	let calendarDate = $state(parseValue(value) || new Date());
    let calendarSlot = $state(slot || 'AM');
	let weeks = $state([]);
	let weekDays = $state([]);

	onMount(() => {
		updateMonth();
	});
</script>

<div class="w-full grid gap-4">
    <DateNavigator bind:date={calendarDate} onnavigate={updateMonth} />

    <div class="grid border-1 border-gray-300 rounded-sm grid-cols-7">
        {#each weekDays as weekDay, i}
            <div class="bg-accent/20 text-xs font-bold px-3 py-2 {i < weekDays.length - 1 ? 'border-r': ''} border-b border-gray-300">{weekDay}</div>
        {/each}
        {#each weeks as week, i}
            {#each week as d, j}
                <div
                    class={cn(
                        "grid items-center gap-2 cell font-normal min-h-[120px] px-3 py-2 border-gray-300",
                        j < week.length - 1 ? 'border-r': '',
                        i < weeks.length - 1 ? 'border-b' : '',
                        !!d === true ? '' : 'bg-gray-50',
                    )}>
                    <span class="text-md font-bold">{d ? d.getDate() : ''}</span>
                    {#if d}
                        <div class="grid gap-2 pb-2">
                            <Button onclick={() => selectDateAndSlot(d, 'AM')}
                                class="shadow-none flex items-center justify-between text-xs bg-gray-50 border-none hover:bg-gray-100 pl-2 pr-0.5 py-3 rounded-sm">
                                <div class="text-gray-500">AM</div>
                                <div class="px-1 py-1 font-semibold bg-accent/50 rounded-sm min-w-[30px]">20</div>
                            </Button>
                            <Button onclick={() => selectDateAndSlot(d, 'PM')}
                                class="shadow-none flex items-center justify-between text-xs bg-gray-50 border-none hover:bg-gray-100 pl-2 pr-0.5 py-3 rounded-sm">
                                <div class="text-gray-500">PM</div>
                                <div class="px-1 py-1 font-semibold bg-accent/50 rounded-sm min-w-[30px]">1</div>
                            </Button>
                            <Button onclick={() => selectDateAndSlot(d, 'Off')}
                                class="shadow-none flex items-center justify-between text-xs bg-gray-50 border-none hover:bg-gray-100 pl-2 pr-0.5 py-3 rounded-sm">
                                <div class="text-gray-500">Off-time</div>
                                <div class="px-1 py-1 font-semibold bg-accent/50 rounded-sm min-w-[30px]">20</div>
                            </Button>
                        </div>
                    {/if}
                </div>
            {/each}
        {/each}
    </div>
</div>