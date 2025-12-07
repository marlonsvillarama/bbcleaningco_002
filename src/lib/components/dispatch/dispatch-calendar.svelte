<script>
    import { cn } from "@/utils";
    import { getContext } from "svelte";
    import { appState } from "@/data/state.svelte";
    
    let { date } = $props();
    const USER_ROLE = getContext('USER_ROLE');
    // const CALENDAR_DATE = getContext('CALENDAR_DATE')() || new Date();
    // console.log('+CALENDAR CALENDAR_DATE', CALENDAR_DATE());

    // $effect(() => console.log('+CALENDAR calendarDate', appState.calendarDate));

    // let now = new Date();
    // console.log('+CALENDAR appState.calendarDate', appState.calendarDate);
    let currentDate = $state(new Date(date));
    let startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    let endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    let weeks = [];
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
    
    let weekDays = weeks[1].map(d => d.toLocaleDateString(undefined, { weekday: 'short'}).toUpperCase());
    console.log('weekDays', weekDays);
</script>

<div class="w-full grid mb-8">
    <!-- Calendar Header -->
        <div class="flex items-center justify-between">
            <h1>{appState.calendarDate}</h1>
        </div>

    <div class="grid border-1 border-gray-200 rounded-sm grid-cols-7">
        {#each weekDays as weekDay, i}
            <div class="cell text-xs font-bold px-3 py-2 {i < weekDays.length - 1 ? 'border-r': ''} border-b border-gray-200">{weekDay}</div>
        {/each}
        {#each weeks as week, i}
            {#each week as day, j}
                <div
                    class={cn(
                        "cell text-xs font-normal min-h-[120px] px-3 py-2 border-gray-200",
                        j < week.length - 1 ? 'border-r': '',
                        i < weeks.length - 1 ? 'border-b' : '',
                        !!day === false ? 'bg-gray-50' : 'bg-transparent',
                        // !!day === false ? 'bg-[linear-gradient(135deg,#98cd8d_4.17%,#f6f0cf_4.17%,#f6f0cf_50%,#98cd8d_50%,#98cd8d_54.17%,#f6f0cf_54.17%,#f6f0cf_100%)]' : '',
                        'bg-size-[16.97px_16.97px]'
                        )}>
                    {day ? day.getDate() : ''}
                </div>
            {/each}
        {/each}
    </div>
</div>