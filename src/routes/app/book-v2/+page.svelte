<script>
    import { cn } from "@/utils";
    import { getContext, onMount } from "svelte";
    import Button from "@/components/ui/button/button.svelte";
    import Input from "@/components/ui/input/input.svelte";
    import Separator from "@/components/ui/separator/separator.svelte";
    import * as Dialog from "@/components/ui/dialog/index";
    import * as Select from "@/components/ui/select/index";
    // import DateNavigator from "@/components/global/date-navigator.svelte";
    import ClientSelector from "@/components/global/client-selector.svelte";
    import DispatchCalendar from "@/components/dispatch/dispatch-calendar.svelte";
    import Stepper from "@/components/global/stepper.svelte";

    import {
        Check,
        ChevronLeft,
        ChevronRight,
        Circle,
        CircleCheck,
        RotateCcw,
        Save
    } from "@lucide/svelte";

    let { data } = $props();
    let {
        lists,
        cities,
        provinces,
        regions,
        services
    } = data;

    const FORM_KEYS = [ 'city', 'date', 'province', 'region', 'slot, street', 'bookingType' ];
    const STEP_ITEMS = [
        'Check Calendar',
        'Get Service Address',
        'Get Client Info',
        'Choose Service Item'
    ];
    const BOOKING_TYPES = [
        { id: 1, name: 'Regular' },
        { id: 2, name: 'Influencer' },
        { id: 3, name: 'Subscription' }
    ];
    let currentStep = $state(0);
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
    let selectedBookingType = $state('');
    let selectedService = $state('');
    let isValidForm = $state(true);

    const moveStep = (value) => {
        currentStep += +value;
    };

    const onSelectBookingType = () => {
        selectedBookingType = BOOKING_TYPES.find(t => t.id === formValues.bookingType);
        // validateForm();
    };

    const onSelectCity = () => {
        selectedCity = cities.find(c => c.id === formValues.city);
        console.log('+onSelectCity formValues', formValues);
        // validateForm();
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
        // validateForm();
    };

    const onSelectService = () => {
        selectedService = services.find(s => s.id === formValues.service) || '';
        console.log(`onSelectService selectedService`, selectedService);
    };

    const onSelectSlot = () => {
        formValues.date = selectedDate;
        formValues.slot = selectedSlot;
        hasSelectedDateSlot = true;
        openCalendar = false;
        // validateForm();
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
        currentStep = 0;
        // validateForm();
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

    onMount(() => {
        formValues.bookingType = 1;
        onSelectBookingType();
    });
</script>

<div class="grid gap-4 px-4">
	<div class="border-b border-gray-200 flex flex-row items-center justify-between pt-2 pb-2">
		<h1 class="text-gray-700 text-xl font-semibold">New Inquiry</h1>
		<Button variant="default" size="sm" class="disabled bg-transparent shadow-none hover:bg-transparent cursor-arrow">
			<span class="hidden lg:inline">&nbsp;</span>
		</Button>
	</div>

    <div class="flex items-start gap-6 px-4 py-3">
        <Stepper step={currentStep} items={STEP_ITEMS} />

        <!-- Forms -->
        <div class="flex-1">
            <div data-step={1}
                class={cn(
                    currentStep === 0 ? 'grid' : 'hidden',
                    "gap-6 items-start step-form"
                )}
            >

                <!-- Select the date -->
                <!-- <div class="grid grid-cols-[150px_1fr] items-center w-full"> -->
                <div class="grid gap-1 items-center w-full">
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
            </div>

            <!-- Step 2 -->
            <div data-step={2}
                class={cn(
                    currentStep === 1 ? 'grid' : 'hidden',
                    "gap-6 items-start step-form"
                )}
            >

                <!-- Region (dynamic from Province) -->
                <!-- <div class="grid grid-cols-[150px_1fr] items-center w-full"> -->
                <div class="grid gap-1 items-center w-full">
                    <span class="text-sm text-foreground font-semibold">Region</span>
                    <div class="flex items-center gap-2">
                        <span class="text-sm pl-2">
                            {selectedRegion ? `${selectedRegion.name} (${selectedRegion.official})` : '-- Select a province below --'}
                        </span>
                    </div>
                </div>

                <!-- Select the province -->
                <!-- <div class="grid grid-cols-[150px_1fr] items-center w-full"> -->
                <div class="grid gap-1 items-center w-full">
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
                <!-- <div class="grid grid-cols-[150px_1fr] items-center w-full"> -->
                <div class="grid gap-1 items-center w-full">
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

                <!-- Select the city -->
                <!-- <div class="grid grid-cols-[150px_1fr] items-center w-full"> -->
                <div class="grid gap-1 items-center w-full">
                    <span class="text-sm text-foreground font-semibold">Street Address</span>
                    <div class="flex items-center gap-2">
                        <Input bind:value={formValues.street_1} class="text-sm font-normal bg-white border py-1 w-[300px]" />
                    </div>
                </div>
            </div>

            <!-- Step 3 -->
            <div data-step={3}
                class={cn(
                    currentStep === 2 ? 'grid' : 'hidden',
                    "gap-6 items-start step-form"
                )}
            >
                <div class="grid gap-1 items-center w-full">
                    <span class="text-sm text-foreground font-semibold">First Name</span>
                    <div class="flex items-center gap-2">
                        <Input bind:value={formValues.first_name} class="text-sm font-normal bg-white border py-1 w-[300px]" placeholder="convert to combobox" />
                    </div>
                </div>

                <div class="grid gap-1 items-center w-full">
                    <span class="text-sm text-foreground font-semibold">Last Name</span>
                    <div class="flex items-center gap-2">
                        <!-- <Input bind:value={formValues.last_name} class="text-sm font-normal bg-white border py-1 w-[300px]" placeholder="convert to combobox" /> -->
                        <ClientSelector />
                    </div>
                </div>

                <div class="grid gap-1 items-center w-full">
                    <span class="text-sm text-foreground font-semibold">Phone</span>
                    <div class="flex items-center gap-2">
                        <Input bind:value={formValues.phone_1} class="text-sm font-normal bg-white border py-1 w-[150px]" />
                    </div>
                </div>
            </div>

            <!-- Step 4 -->
            <div data-step={4}
                class={cn(
                    currentStep === 3 ? 'grid' : 'hidden',
                    "gap-6 items-start step-form"
                )}
            >
                <div class="grid gap-1 items-center w-full">
                    <span class="text-sm text-foreground font-semibold">Booking Type</span>
                    <div class="flex items-center gap-2">
                        <Select.Root type="single" bind:value={formValues.bookingType} onValueChange={onSelectBookingType}>
                            <Select.Trigger class="text-sm font-normal bg-white border py-1 w-[300px]">
                                {selectedBookingType?.name || '--'}
                            </Select.Trigger>
                            <Select.Content>
                                {#each BOOKING_TYPES as bookingType}
                                    <Select.Item class="px-3 py-1 text-sm" value={bookingType.id}>
                                        {bookingType.name}
                                    </Select.Item>
                                {/each}
                            </Select.Content>
                        </Select.Root>
                    </div>
                </div>

                <div class="grid gap-1 items-center w-full">
                    <span class="text-sm text-foreground font-semibold">Main Service</span>
                    <div class="flex items-center gap-2">
                        <Select.Root type="single" bind:value={formValues.service} onValueChange={onSelectService}>
                            <Select.Trigger class="text-sm font-normal bg-white border py-1 w-[300px]">
                                {selectedService?.name || '--'}
                            </Select.Trigger>
                            <Select.Content>
                                {#each services as service}
                                    <Select.Item class="px-3 py-1 text-sm" value={service.id}>
                                        {service.name}
                                    </Select.Item>
                                {/each}
                            </Select.Content>
                        </Select.Root>
                    </div>
                </div>

                <div class="grid gap-1 items-center w-full">
                    <span class="text-sm text-foreground font-semibold">Area (sqm)</span>
                    <div class="flex items-center gap-2">
                        <Input bind:value={formValues.area}
                            class="text-sm text-right font-normal bg-white border py-1 w-[80px] pr-2" />
                    </div>
                </div>
            </div>

            <!-- Buttons -->
            <div class="flex items-center justify-between gap-3 mt-12 w-[400px]">
                <div class="flex items-center gap-2">
                    {#if currentStep > 0}
                    <Button variant="secondary" size="sm" onclick={() => moveStep(-1)}>
                        <ChevronLeft size={16} />
                        Back
                    </Button>
                    {/if}

                    {#if currentStep < STEP_ITEMS.length - 1}
                        <Button size="sm" onclick={() => moveStep(1)}>
                            Next
                            <ChevronRight size={16} />
                        </Button>
                    {:else}
                        <Button size="sm" onclick={submitForm}>
                            Finish
                            <Check size={16} />
                        </Button>
                    {/if}
                </div>

                <div class="flex items-center gap-2">
                {#if currentStep > 0}
                    <Button variant="secondary" size="sm" onclick={submitForm}>
                        <Save size={16} />
                        Save
                    </Button>
                {/if}

                <Button variant="ghost_secondary" size="sm" onclick={resetForm}>
                    <RotateCcw size={16} />
                    Reset
                </Button>
            </div>
            </div>
        </div>
    </div>

</div>
