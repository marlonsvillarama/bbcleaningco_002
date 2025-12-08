<script>
    import Button from "@/components/ui/button/button.svelte";
    import {
        ChevronLeft,
        ChevronRight
    } from "@lucide/svelte";
    import { appState } from "@/data/state.svelte";

    let {
        date = $bindable(),
        onnavigate
    } = $props();
    let calendarDate = $state(date);
    let monthText = $derived(calendarDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }));
    let prevDisabled = $derived(calendarDate.getMonth() === (new Date()).getMonth() && calendarDate.getFullYear() === (new Date()).getFullYear());

	const updateMonth = (value) => {
        let now = new Date();
		let d = calendarDate.getDate();
		calendarDate.setMonth(calendarDate.getMonth() + +value);
        console.log(`+NAVIGATOR updateMonth, value = ${value}, calendarDate ==>`, calendarDate);

		if (calendarDate.getDate() !== d) {
			calendarDate.setDate(0);
		}

        calendarDate = calendarDate;
		date = calendarDate;
        console.log('calendarDate', date);
        monthText = calendarDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        prevDisabled = calendarDate.getMonth() === now.getMonth() &&
            calendarDate.getFullYear() === now.getFullYear();

        onnavigate();
	};

    const gotoCurrent = () => {
        calendarDate = new Date();
        console.log('gotoCurrent > calendarDate ==>', calendarDate);
        calendarDate = calendarDate;
        date = calendarDate;

        onnavigate();
    };
</script>

<div class="flex items-center gap-2">
    <Button variant="outline" size="sm" class="shadow-sm" onclick={() => updateMonth(-1)} disabled={prevDisabled}>
        <ChevronLeft />
    </Button>
    <div class="text-sm font-semibold bg-accent/40 rounded-xs px-4 py-1.5 w-[200px] text-center">
        {monthText}
    </div>
    <Button variant="outline" size="sm" class="shadow-sm" onclick={() => updateMonth(1)}>
        <ChevronRight />
    </Button>

    <Button variant="secondary" class="ml-8" onclick={gotoCurrent}>
        Go to current month
    </Button>
</div>
