<script>
    import { cn } from "@/utils";
    import { getContext, onMount } from "svelte";
    import Button from "@/components/ui/button/button.svelte";
    import Input from "@/components/ui/input/input.svelte";
    import Separator from "@/components/ui/separator/separator.svelte";
    import * as Dialog from "@/components/ui/dialog/index";
    import * as Select from "@/components/ui/select/index";
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

    const FORM_KEYS = [
        [ 'date' ],
        [ 'province', 'city', 'street_1' ],
        [ 'last_name', 'first_name', 'phone' ],
        [ 'bookingType', 'service', 'area' ]
    ];
    const STEP_ITEMS = [
        'Check Calendar',
        'Get Service Address',
        'Get Client Info',
        'Choose Service Item',
        'Summary'
    ];
    const BOOKING_TYPES = [
        { id: 1, name: 'Regular' },
        { id: 2, name: 'Influencer' },
        { id: 3, name: 'Subscription' }
    ];
    let currentStep = $state(0);
    let selectedClient = $state('');
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
    let validateValues = $state({});
    let selectedRegion = $state('');
    let selectedProvince = $state('');
    let selectedCity = $state('');
    let provinceCities = $state([]);
    let selectedBookingType = $state('');
    let selectedService = $state('');
    let isValidForm = $state(true);

    const moveStep = (value) => {
        if (value > 0 && validateForm() === false) return;

        currentStep += +value;
    };

    const onSelectBookingType = () => {
        selectedBookingType = BOOKING_TYPES.find(t => t.id === formValues.bookingType);
        validateForm();
    };

    const onSelectCity = () => {
        selectedCity = cities.find(c => c.id === formValues.city);
        // formValues.city = selectedCity.id;
        console.log('+onSelectCity formValues', formValues);
        validateForm();
    };

    const onSelectClient = () => {};

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

    const onSelectService = () => {
        selectedService = services.find(s => s.id === formValues.service) || '';
        console.log(`onSelectService selectedService`, selectedService);
        validateForm();
    };

    const onSelectSlot = () => {
        formValues.date = selectedDate;
        formValues.slot = selectedSlot;
        validateValues.date = formValues.date || formValues.date === undefined;
        hasSelectedDateSlot = true;
        openCalendar = false;
        console.log('onSelectSlot validateForm');
        validateForm();
    };

    const parsePhone = (input) => {
        if (!!input === false) return '';
        if (input.length <= 0) return '';
        if (input.length === 10 && input[0] !== '9') return input;
        if (input.length === 11 && input[0] !== '0') return input;

        return `(${input.slice(0, -7)}) ${input.slice(-7, -4)}-${input.slice(-4)}`;
    };

    const populateClientDetails = () => {
        console.log(`populateClientDetails formValues.client`, formValues.client);
        if (!formValues.client) return;

        formValues.last_name = formValues.client.last_name;
        formValues.first_name = formValues.client.first_name;
        formValues.phone = formValues.client.phone_1;
        console.log(`populateClientDetails last_name = ${formValues.last_name}; first_name = ${formValues.first_name}; phone = ${formValues.phone}`);
        validateForm();
    };

    const resetClient = () => {
        if (formValues.last_name !== formValues.client.last_name) {
            formValues.client = '';
            return;
        }

        if (formValues.first_name !== formValues.client.first_name) {
            formValues.client = '';
            return;
        }

        if (formValues.phone !== formValues.client.phone_1) {
            formValues.client = '';
            return;
        }
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
        // FORM_KEYS.forEach(key => {
        FORM_KEYS[currentStep].forEach(key => {
            validateValues[key] = !!formValues[key] === true;
            console.log(`validateForm currentStep = ${currentStep}; validateValues[${key}] ==> ${validateValues[key]}`);
            if (validateValues[key] === true) count++;
        });

        isValidForm = FORM_KEYS[currentStep].length.toString() === count.toString();
        console.log(`count = ${count}; fields = ${FORM_KEYS[currentStep].length}; isValidForm = ${isValidForm}; formValues ==>`, formValues);
        return isValidForm;
    };

    onMount(() => {
        FORM_KEYS.forEach(form => {
            form.forEach(key => {
                // formValues[key] = '';
                validateValues[key] = true;
            });
        });

        formValues.bookingType = 1;
        selectedBookingType = BOOKING_TYPES.find(t => t.id === formValues.bookingType);
        // onSelectBookingType();
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
        <div class="flex-1" >

            <!-- Step 1 -->
            <div data-step={0}
                class={cn(
                    currentStep === 0 ? 'grid' : 'hidden',
                    "gap-4 items-start step-form"
                )}
            >
                <div class="font-semibold">Check Calendar</div>
                <Separator class="w-full mb-2" />

                <!-- Select the date -->
                <div class="grid gap-1 items-center w-full">
                    <span class="text-sm text-foreground font-semibold">Choose a Service Date</span>
                    <div class="flex items-center gap-2">

                        <!-- Dispatch calendar dialog -->
                        <Dialog.Root bind:open={openCalendar}>
                            <div class="grid gap-0">
                                <Dialog.Trigger class="text-sm font-normal bg-white border py-1 w-[300px]" data-field="date">
                                    {#if hasSelectedDateSlot}
                                        {selectedDateSlotText}
                                    {:else}
                                        Open calendar
                                    {/if}
                                </Dialog.Trigger>
                                <div data-error-field="date" class={cn(
                                    "text-sm text-red-600",
                                    validateValues.date === false ? "block" : "hidden"
                                )}>
                                    Please select a date.
                                </div>
                            </div>
                            <Dialog.Content class="w-[90%] min-w-[1024px] max-w-[1280px] max-h-[90%] overflow-scroll">
                                <DispatchCalendar bind:value={selectedDate} bind:slot={selectedSlot} onselect={onSelectSlot} />
                            </Dialog.Content>
                        </Dialog.Root>
                    </div>
                </div>
            </div>

            <!-- Step 2 -->
            <div data-step={1}
                class={cn(
                    currentStep === 1 ? 'grid' : 'hidden',
                    "gap-4 items-start step-form"
                )}
            >
                <div class="font-semibold">Get Service Address</div>
                <Separator class="w-full mb-2" />

                <div class="grid gap-6">
                    <!-- Region (dynamic from Province) -->
                    <div class="grid gap-1 items-center w-full">
                        <span class="text-sm text-foreground font-semibold">Region</span>
                        <div class="flex items-center gap-2">
                            <span class="text-sm pl-2">
                                {selectedRegion ? `${selectedRegion.name} (${selectedRegion.official})` : '-- Select a province below --'}
                            </span>
                        </div>
                    </div>

                    <!-- Select the province -->
                    <div class="grid gap-1 items-center w-full">
                        <span class="text-sm text-foreground font-semibold">Province</span>
                        <span class="text-xs text-foreground/60 font-normal">Probinsya / lalawigan</span>
                        <div class="flex items-center gap-2">
                            <Select.Root type="single" bind:value={formValues.province} onValueChange={onSelectProvince}>
                                <div class="grid gap-0">
                                    <Select.Trigger class="text-sm font-normal bg-white border py-1 w-[300px]">
                                        {selectedProvince?.name || '--'}
                                    </Select.Trigger>
                                    <div data-error-field="province" class={cn(
                                        "text-sm text-red-600",
                                        validateValues.province === false ? "block" : "hidden"
                                    )}>
                                        Please select a province.
                                    </div>
                                </div>
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
                    <div class="grid gap-1 items-center w-full">
                        <span class="text-sm text-foreground font-semibold">City</span>
                        <span class="text-xs text-foreground/60 font-normal">Lungsod</span>
                        <div class="flex items-center gap-2">
                            <Select.Root type="single" bind:value={formValues.city} onValueChange={onSelectCity}
                                disabled={!!selectedProvince === false}>
                                <div class="grid gap-0">
                                    <Select.Trigger class="text-sm font-normal bg-white border py-1 w-[300px]">
                                        {selectedCity?.name || '--'}
                                    </Select.Trigger>
                                    <div data-error-field="city" class={cn(
                                        "text-sm text-red-600",
                                        validateValues.city === false ? "block" : "hidden"
                                    )}>
                                        Please select a city.
                                    </div>
                                </div>
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
                    <div class="grid gap-1 items-center w-full">
                        <span class="text-sm text-foreground font-semibold">Street Address</span>
                        <span class="text-xs text-foreground/60 font-normal">Kumpletong address ng lugar</span>
                        <div class="flex items-center gap-2">
                            <div class="grid gap-0">
                                <Input bind:value={formValues.street_1} class="text-sm font-normal bg-white border py-1 w-[300px]" onchange={validateForm} />
                                <div data-error-field="street_1" class={cn(
                                    "text-sm text-red-600",
                                    validateValues.street_1 === false ? "block" : "hidden"
                                )}>
                                    Please enter the street address.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Step 3 -->
            <div data-step={2}
                class={cn(
                    currentStep === 2 ? 'grid' : 'hidden',
                    "gap-4 items-start step-form"
                )}
            >
                <div class="font-semibold">Get Client Info</div>
                <Separator class="w-full mb-2" />

                <div class="grid gap-6">
                    <div class="grid gap-1 items-center w-full">
                        <span class="text-sm text-foreground font-semibold">Last Name</span>
                        <span class="text-xs text-foreground/60 font-normal">Apelyido</span>
                        <div class="flex items-center gap-2">
                            <div class="grid gap-0">
                                <ClientSelector bind:value={formValues.client} display="last_name" onvaluechange={populateClientDetails} />
                                <div data-error-field="last_name" class={cn(
                                    "text-sm text-red-600",
                                    validateValues.last_name === false ? "block" : "hidden"
                                )}>
                                    Please enter the client's last name.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="grid gap-1 items-center w-full">
                        <span class="text-sm text-foreground font-semibold">First Name</span>
                        <span class="text-xs text-foreground/60 font-normal">Pangalan</span>
                        <div class="flex items-center gap-2">
                            <div class="grid gap-0">
                                <Input bind:value={formValues.first_name}
                                    class="text-sm font-normal bg-white border py-1 w-[300px]" />
                                <div data-error-field="first_name" class={cn(
                                    "text-sm text-red-600",
                                    validateValues.first_name === false ? "block" : "hidden"
                                )}>
                                    Please enter the client's first name.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="grid gap-1 items-center w-full">
                        <span class="text-sm text-foreground font-semibold">Mobile Phone</span>
                        <span class="text-xs text-foreground/60 font-normal">Telepono</span>
                        <div class="flex items-center gap-2">
                            <div class="grid gap-0">
                                <Input bind:value={formValues.phone} class="text-sm font-normal bg-white border py-1 w-[150px]" />
                                <div data-error-field="phone" class={cn(
                                    "text-sm text-red-600",
                                    validateValues.phone === false ? "block" : "hidden"
                                )}>
                                    Please enter the client's mobile phone.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Step 4 -->
            <div data-step={3}
                class={cn(
                    currentStep === 3 ? 'grid' : 'hidden',
                    "gap-4 items-start step-form"
                )}
            >
                <div class="font-semibold">Choose Service Item</div>
                <Separator class="w-full mb-2" />

                <div class="grid gap-6">
                    <div class="grid gap-1 items-center w-full">
                        <span class="text-sm text-foreground font-semibold">Booking Type</span>
                        <span class="text-xs text-foreground/60 font-normal">Anong uri ng booking?</span>
                        <div class="flex items-center gap-2">
                            <Select.Root type="single" bind:value={formValues.bookingType} onValueChange={onSelectBookingType}>
                                <div class="grid gap-0">
                                    <Select.Trigger class="text-sm font-normal bg-white border py-1 w-[300px]">
                                        {selectedBookingType?.name || '--'}
                                    </Select.Trigger>
                                    <div data-error-field="phone" class={cn(
                                        "text-sm text-red-600",
                                        validateValues.phone === false ? "block" : "hidden"
                                    )}>
                                        Please enter the client's mobile phone.
                                    </div>
                                </div>
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
                        <span class="text-xs text-foreground/60 font-normal">Ano ang gagawing pangunahin na serbisyo?</span>
                        <div class="flex items-center gap-2">
                            <Select.Root type="single" bind:value={formValues.service} onValueChange={onSelectService}>
                                <div class="grid gap-0">
                                    <Select.Trigger class="text-sm font-normal bg-white border py-1 w-[300px]">
                                        {selectedService?.name || '--'}
                                    </Select.Trigger>
                                    <div data-error-field="service" class={cn(
                                        "text-sm text-red-600",
                                        validateValues.service === false ? "block" : "hidden"
                                    )}>
                                        Please choose a main service.
                                    </div>
                                </div>
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
                        <span class="text-xs text-foreground/60 font-normal">Gaano kalaki ang lugar?</span>
                        <div class="flex items-center gap-2">
                            <div class="grid gap-0">
                                <Input bind:value={formValues.area} maxlength="8"
                                    class="text-sm text-right font-normal bg-white border py-1 w-[80px] pr-2" />
                                <div data-error-field="area" class={cn(
                                    "text-sm text-red-600",
                                    validateValues.area === false ? "block" : "hidden"
                                )}>
                                    Please specify the total floor area.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Step 5: Summary -->
            <div data-step={4}
                class={cn(
                    currentStep === 4 ? 'grid' : 'hidden',
                    "gap-6 items-start step-form"
                )}
            >
                <!-- <div class="grid gap-6"> -->
                    <div class="grid gap-4">
                        <div class="font-semibold">Service Details</div>
                        <Separator class="w-[450px]" />
                        <div class="grid grid-cols-[180px_auto] items-center w-full">
                            <span class="text-sm text-foreground font-semibold">Service Date</span>
                            <span class="text-sm pl-2">{selectedDateSlotText}</span>
                        </div>

                        <div class="grid grid-cols-[180px_auto] items-center w-full">
                            <span class="text-sm text-foreground font-semibold">Main Service</span>
                            <span class="text-sm pl-2">{selectedService.name}</span>
                        </div>

                        <div class="grid grid-cols-[180px_auto] items-center w-full">
                            <span class="text-sm text-foreground font-semibold">Total Area (sqm)</span>
                            <span class="text-sm pl-2">{formValues.area}</span>
                        </div>
                    </div>

                    <div class="grid gap-4">
                        <div class="font-semibold">Client Details</div>
                        <Separator class="w-[450px]" />
                        <div class="grid grid-cols-[180px_auto] items-center w-full">
                            <span class="text-sm text-foreground font-semibold">Address</span>
                            <span class="text-sm pl-2">{formValues.street_1}</span>
                        </div>

                        <div class="grid grid-cols-[180px_auto] items-center w-full">
                            <span class="text-sm text-foreground font-semibold">City/Province</span>
                            <span class="text-sm pl-2">{selectedCity.name}, {selectedProvince.name}</span>
                        </div>

                        <div class="grid grid-cols-[180px_auto] items-center w-full">
                            <span class="text-sm text-foreground font-semibold">Region</span>
                            <span class="text-sm pl-2">{selectedRegion.name} ({selectedRegion.official})</span>
                        </div>

                        <div class="grid grid-cols-[180px_auto] items-center w-full">
                            <span class="text-sm text-foreground font-semibold">Client</span>
                            <span class="text-sm pl-2">{formValues.last_name}, {formValues.first_name}</span>
                        </div>

                        <div class="grid grid-cols-[180px_auto] items-center w-full">
                            <span class="text-sm text-foreground font-semibold">Mobile Phone</span>
                            <span class="text-sm pl-2">{parsePhone(formValues.phone)}</span>
                        </div>
                    </div>
                <!-- </div> -->
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
