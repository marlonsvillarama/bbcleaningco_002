<script>
    import { cn } from "@/utils";
    import { getContext, onMount } from "svelte";
    import Button from "@/components/ui/button/button.svelte";
    import * as Dialog from "@/components/ui/dialog/index";
    import * as Select from "@/components/ui/select/index";
    // import DateNavigator from "@/components/global/date-navigator.svelte";
    import DispatchCalendar from "@/components/dispatch/dispatch-calendar.svelte";

    import {
        RotateCcw,
        Save
    } from "@lucide/svelte";

    let { data } = $props();
    let {
        lists,
        cities,
        provinces,
        regions
    } = data;

    const FORM_KEYS = [ 'city', 'date', 'province', 'region', 'slot' ];
    let selectedDate = $state(new Date());
    let selectedSlot = $state('AM');
    let openCalendar = $state(false);
    let hasSelectedDateSlot = $state(false);
    let selectedDateSlotText = $derived.by(() => {
        return selectedDate ?
        `${selectedDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })} (${selectedSlot})` : 'Open calendar'
    });

    let formValues = $state({});
    let selectedRegion = $state('');
    let selectedProvince = $state('');
    let selectedCity = $state('');
    let provinceCities = $state([]);
    let isValidForm = $state(false);

    const onSelectCity = () => {
        selectedCity = cities.find(c => c.id === formValues.city);
        console.log('+onSelectCity formValues', formValues);
        validateForm();
    };

    const onSelectProvince = () => {
        console.log(`onSelectProvince formValues`, formValues);
        selectedProvince = provinces.find(p => p.id === formValues.province) || '';
        console.log(`onSelectProvince selectedProvince`, selectedProvince);

        selectedRegion = regions.find(r => r.id === selectedProvince.region) || '';
        formValues.region = selectedProvince?.region || '';
        console.log(`onSelectProvince selectedRegion`, selectedRegion);

        provinceCities = cities.filter(c => c.province === selectedProvince.id) || [];
        provinceCities.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });
        console.log(`onSelectProvince provinceCities`, provinceCities);

        formValues.city = '';
        selectedCity = '';
        validateForm();
    };

    const onSelectSlot = () => {
        formValues.date = selectedDate;
        formValues.slot = selectedSlot;
        hasSelectedDateSlot = true;
        openCalendar = false;
        validateForm();
    };

    const resetForm = () => {
        if (confirm('Are you sure you want to clear all form fields?') === false) return;

        let fields = [ 'city', 'date', 'province', 'region', 'slot' ];
        FORM_KEYS.forEach(key => formValues[key] = '');

        selectedDate = '';
        selectedSlot = '';
        selectedRegion = '';
        selectedProvince = '';
        selectedCity = '';
    };

    const submitForm = () => {
        if (validateForm() === false) { return; }

        alert('implement submitForm');
    };

    const validateForm = () => {
        let count = 0;
        FORM_KEYS.forEach(key => {
            if (formValues[key]) count++;
        });

        console.log(`count = ${count}; fields = ${FORM_KEYS.length}; formValues ==>`, formValues);
        isValidForm = FORM_KEYS.length.toString() === count.toString();
        return isValidForm;
    };
</script>

<div class="grid gap-4 px-4">
	<div class="border-b border-gray-200 flex flex-row items-center justify-between pt-2 pb-2">
		<h1 class="text-gray-700 text-xl font-semibold">New Inquiry</h1>
		<Button variant="default" size="sm" class="disabled bg-transparent shadow-none hover:bg-transparent cursor-arrow">
			<span class="hidden lg:inline">&nbsp;</span>
		</Button>
	</div>

	<div class="grid gap-6 items-start px-4 py-3">

        <!-- Select the date -->
        <div class="grid grid-cols-[150px_1fr] items-center w-full">
            <span class="text-sm text-foreground font-semibold">Proposed Date</span>
            <div class="flex items-center gap-2">
				<!-- Dispatch calendar dialog -->
				<Dialog.Root bind:open={openCalendar}>
					<Dialog.Trigger class="text-sm font-normal bg-white border py-1 w-[300px]">
                        {#if hasSelectedDateSlot}
                            {selectedDateSlotText}
                        {:else}
                            Open calendar
                        {/if}
					</Dialog.Trigger>
					<Dialog.Content class="w-[90%] min-w-[1024px] max-w-[1280px] max-h-[90%] overflow-scroll">
                        <DispatchCalendar bind:value={selectedDate} bind:slot={selectedSlot} onselect={onSelectSlot} />
					</Dialog.Content>
				</Dialog.Root>
            </div>
        </div>

        <!-- Region (dynamic from Province) -->
        <div class="grid grid-cols-[150px_1fr] items-center w-full">
            <span class="text-sm text-foreground font-semibold">Region</span>
            <div class="flex items-center gap-2">
                <span class="text-sm pl-2">
                    {selectedRegion ? `${selectedRegion.name} (${selectedRegion.official})` : '-- Select a province --'}
                </span>
            </div>
        </div>

        <!-- Select the province -->
        <div class="grid grid-cols-[150px_1fr] items-center w-full">
            <span class="text-sm text-foreground font-semibold">Province</span>
            <div class="flex items-center gap-2">
				<Select.Root type="single" bind:value={formValues.province} onValueChange={onSelectProvince}>
					<Select.Trigger class="text-sm font-normal bg-white border py-1 w-[300px]">
                        {selectedProvince?.name || '--'}
					</Select.Trigger>
                    <Select.Content>
                        {#each provinces as province}
                            <Select.Item class="px-3 py-1 text-sm" value={province.id}>
                                {province.name}
                            </Select.Item>
                        {/each}
                    </Select.Content>
				</Select.Root>
            </div>
        </div>

        <!-- Select the city -->
        <div class="grid grid-cols-[150px_1fr] items-center w-full">
            <span class="text-sm text-foreground font-semibold">City</span>
            <div class="flex items-center gap-2">
				<Select.Root type="single" bind:value={formValues.city} onValueChange={onSelectCity}
                    disabled={!!selectedProvince === false}>
					<Select.Trigger class="text-sm font-normal bg-white border py-1 w-[300px]">
                        {selectedCity?.name || '--'}
					</Select.Trigger>
                    <Select.Content>
                        {#each provinceCities as city}
                            <Select.Item class="px-3 py-1 text-sm" value={city.id}>
                                {city.name}
                            </Select.Item>
                        {/each}
                    </Select.Content>
				</Select.Root>
            </div>
        </div>

        <!-- Buttons -->
        <div class="grid grid-cols-[150px_1fr] items-center w-full">
            <span class="text-sm text-foreground font-semibold"></span>
            <div class="flex items-center gap-3">
                <Button size="sm" disabled={isValidForm === false} onclick={submitForm}>
                    <Save size={16} />
                    Create inquiry
                </Button>
                <Button variant="secondary" size="sm" onclick={resetForm}>
                    <RotateCcw size={16} />
                    Reset form
                </Button>
            </div>
        </div>

    </div>
</div>
