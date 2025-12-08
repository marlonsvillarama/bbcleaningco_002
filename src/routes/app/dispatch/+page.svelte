<script>
	import { getContext, onMount, setContext } from "svelte";
	import { cn } from "@/utils";
	import Button from "@/components/ui/button/button.svelte";
	import DateNavigator from "@/components/global/date-navigator.svelte";
	// import DispatchCalendar from "@/components/dispatch/dispatch-calendar.svelte";
	import {
		ChevronLeft,
		ChevronRight,
		Plus
	} from "@lucide/svelte";
	import { appState } from "@/data/state.svelte";

    const USER_ROLE = getContext('USER_ROLE');
	let calendarDate = $state(new Date());

	let weeks = $state([]);
	let weekDays = $state([]);
	const updateMonth = () => {
		// appState.calendarDate = calendarDate;
		calendarDate = calendarDate;

		let currentDate = $state(new Date(calendarDate));
		let startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
		let endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

		weeks = [];
		let monthDates = [];
		let dayValue = startOfMonth.getDate();
		do {
			currentDate.setDate(dayValue);

			let dateOfMonth = new Date(currentDate);
			monthDates.push(dateOfMonth);
			if (dateOfMonth.getDate() === 1 ||
				(dateOfMonth.getDay().toString() === USER_ROLE.week_start.toString())
			) {
				weeks.push([]);
			}
			
			weeks[weeks.length - 1].push(dateOfMonth);
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
		weekDays = weeks[1].map(d => d.toLocaleDateString(undefined, { weekday: 'short'}).toUpperCase());
	};

	onMount(() => updateMonth());
</script>

<div class="flex-1 grid gap-4 px-4 h-full">
	<div class="border-b border-gray-200 flex flex-row items-center justify-between pt-2 pb-2">
        <h1 class="text-gray-700 text-xl font-semibold">Dispatch</h1>

		<DateNavigator bind:date={calendarDate} onnavigate={updateMonth} />
	</div>

	<div class="w-full grid mb-8">
    <!-- Calendar Header -->
        <!-- <div class="flex items-center justify-between">
            <h1>{calendarDate}</h1>
        </div> -->

		<div class="grid border-1 border-gray-300 rounded-sm grid-cols-7">
			{#each weekDays as weekDay, i}
				<div class="bg-accent/20 text-xs font-bold px-3 py-2 {i < weekDays.length - 1 ? 'border-r': ''} border-b border-gray-300">{weekDay}</div>
			{/each}
			{#each weeks as week, i}
				{#each week as day, j}
					<div
						class={cn(
							"grid items-center gap-2 cell font-normal min-h-[120px] px-3 py-2 border-gray-300",
							j < week.length - 1 ? 'border-r': '',
							i < weeks.length - 1 ? 'border-b' : '',
							!!day === true ? '' : 'bg-gray-50',
							// !!day === false ? 'bg-[linear-gradient(135deg,#98cd8d_4.17%,#f6f0cf_4.17%,#f6f0cf_50%,#98cd8d_50%,#98cd8d_54.17%,#f6f0cf_54.17%,#f6f0cf_100%)]' : '',
							// 'bg-size-[16.97px_16.97px]'
							)}>
						<span class="text-md font-bold">{day ? day.getDate() : ''}</span>
						{#if day}
							<div class="grid gap-2 pb-2">
								<!-- border-transparent hover:border-gray-200  -->
								<Button class="shadow-none flex items-center justify-between text-xs bg-gray-50 border-none hover:bg-gray-100 pl-2 pr-0.5 py-3 rounded-sm">
									<!-- <div class=""> -->
									<div class="text-gray-500">AM</div>
									<div class="px-1 py-1 font-semibold bg-accent/50 rounded-sm min-w-[30px]">20</div>
									<!-- </div> -->
								</Button>
								<Button class="shadow-none flex items-center justify-between text-xs bg-gray-50 border-none hover:bg-gray-100 pl-2 pr-0.5 py-3 rounded-sm">
									<!-- <div class=""> -->
									<div class="text-gray-500">PM</div>
									<div class="px-1 py-1 font-semibold bg-accent/50 rounded-sm min-w-[30px]">1</div>
									<!-- </div> -->
								</Button>
								<Button class="shadow-none flex items-center justify-between text-xs bg-gray-50 border-none hover:bg-gray-100 pl-2 pr-0.5 py-3 rounded-sm">
									<!-- <div class=""> -->
									<div class="text-gray-500">Off-time</div>
									<div class="px-1 py-1 font-semibold bg-accent/50 rounded-sm min-w-[30px]">20</div>
									<!-- </div> -->
								</Button>
							</div>
						{/if}
					</div>
				{/each}
			{/each}
		</div>
	</div>
</div>
