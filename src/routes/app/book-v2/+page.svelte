<script>
    import { cn } from "@/utils";
    import { getContext, onMount } from "svelte";
    import Button from "@/components/ui/button/button.svelte";
    import * as Dialog from "@/components/ui/dialog/index";
    // import DateNavigator from "@/components/global/date-navigator.svelte";
    import DispatchCalendar from "@/components/dispatch/dispatch-calendar.svelte";

    let selectedDate = $state(new Date());
    let selectedSlot = $state('AM');
    let openCalendar = $state(false);
    let hasSelectedDateSlot = $state(false);
    let selectedDateSlotText = $derived.by(() => {
        return `${selectedDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })} (${selectedSlot})`
    });

    const USER_CONTEXT = getContext('USER_CONTEXT');
	let calendarDate = $state(new Date());
	let weeks = $state([]);
	let weekDays = $state([]);

    const onSelectSlot = () => {
        hasSelectedDateSlot = true;
        openCalendar = false;
    };

	const updateMonth = () => {
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
				(dateOfMonth.getDay().toString() === USER_CONTEXT.settings.week_start.toString())
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

	onMount(() => {
		updateMonth();
	});
</script>

<div class="grid gap-4 px-4">
	<div class="border-b border-gray-200 flex flex-row items-center justify-between pt-2 pb-2">
		<h1 class="text-gray-700 text-xl font-semibold">New Inquiry</h1>
		<Button variant="default" size="sm" class="disabled bg-transparent shadow-none hover:bg-transparent cursor-arrow">
			<!-- <Save /> -->
			<span class="hidden lg:inline">&nbsp;</span>
		</Button>
	</div>

	<div class="grid items-start px-4 py-3">

        <!-- Select the date -->
        <div class="grid grid-cols-[150px_1fr] items-center w-full">
            <span class="text-sm text-foreground font-semibold">Select Date</span>
            <div class="flex items-center gap-2">
				<!-- Dispatch calendar dialog -->
				<Dialog.Root bind:open={openCalendar}>
					<Dialog.Trigger class="text-sm font-normal bg-white border py-1 w-[240px]">
                        {#if hasSelectedDateSlot}
                            {selectedDateSlotText}
                        {:else}
                            Open calendar
                        {/if}
					</Dialog.Trigger>
					<Dialog.Content class="w-[90%] min-w-[1024px] max-w-[1280px] max-h-[90%] overflow-scroll">
                        <DispatchCalendar bind:value={selectedDate} bind:slot={selectedSlot} onselect={onSelectSlot} />
						<!-- <DateNavigator bind:date={calendarDate} onnavigate={updateMonth} /> -->

						<!-- <div class="grid mb-8"> -->
						<!-- Calendar Header -->
							<!-- <div class="flex items-center justify-between">
								<h1>{calendarDate}</h1>
							</div> -->

							<!-- <div class="grid border-1 border-gray-300 rounded-sm grid-cols-7">
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
													<-- border-transparent hover:border-gray-200  --
													<Button onclick={() => selectDateAndSlot(day.getFullYear(), day.getMonth(), day.getDate(), 'AM')}
														class="shadow-none flex items-center justify-between text-xs bg-gray-50 border-none hover:bg-gray-100 pl-2 pr-0.5 py-3 rounded-sm">
														<-- <div class=""> --
														<div class="text-gray-500">AM</div>
														<div class="px-1 py-1 font-semibold bg-accent/50 rounded-sm min-w-[30px]">20</div>
														<-- </div> --
													</Button>
													<Button
														class="shadow-none flex items-center justify-between text-xs bg-gray-50 border-none hover:bg-gray-100 pl-2 pr-0.5 py-3 rounded-sm">
														<-- <div class=""> --
														<div class="text-gray-500">PM</div>
														<div class="px-1 py-1 font-semibold bg-accent/50 rounded-sm min-w-[30px]">1</div>
														<-- </div> --
													</Button>
													<Button
														class="shadow-none flex items-center justify-between text-xs bg-gray-50 border-none hover:bg-gray-100 pl-2 pr-0.5 py-3 rounded-sm">
														<-- <div class=""> --
														<div class="text-gray-500">Off-time</div>
														<div class="px-1 py-1 font-semibold bg-accent/50 rounded-sm min-w-[30px]">20</div>
														<-- </div> --
													</Button>
												</div>
											{/if}
										</div>
									{/each}
								{/each}
							</div> -->
						<!-- </div> -->
					</Dialog.Content>
				</Dialog.Root>
            </div>
        </div>

    </div>
</div>
