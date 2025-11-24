<script>
    // import Card from "@/components/global/card/card.svelte";
    import * as Card from "@/components/ui/card/index";
    import * as Field from "@/components/ui/field/index";
    import * as InputGroup from "@/components/ui/input-group/index";
    import * as Select from "@/components/ui/select/index";
    import Badge from "@/components/ui/badge/badge.svelte";
    import Checkbox from "@/components/ui/checkbox/checkbox.svelte";
    import FieldSet from "@/components/global/form/fieldset.svelte";
    import FieldsetCheckbox from "@/components/global/form/fieldset-checkbox.svelte";
    import Input from "@/components/ui/input/input.svelte";
    import Label from "@/components/ui/label/label.svelte";
    import Separator from "@/components/ui/separator/separator.svelte";
    import Textarea from "@/components/ui/textarea/textarea.svelte";

    import QuotationAddress from "./quotation-address.svelte";
    import QuotationClientDetails from "./quotation-client-details.svelte";
    import QuotationDate from "./quotation-date.svelte";

	// import BanknoteXIcon from "@lucide/svelte/icons/banknote-x";
	// import BrushCleaningIcon from "@lucide/svelte/icons/brush-cleaning";
	// import CircleCheckFilledIcon from "@tabler/icons-svelte/icons/circle-check-filled";
	// import HandCoinsIcon from "@lucide/svelte/icons/hand-coins";
	// import SquarePenIcon from "@lucide/svelte/icons/square-pen";

    let { data } = $props();
    const clients = [
        { value: "1", text: "Estrada, Jinggoy" },
        { value: "2", text: "Go, Bong" },
        { value: "3", text: "Villanueva, Joel" },
    ];
    let selectedClient = $state('');
    const triggerContent = $derived(
        clients.find((c) => c.value === selectedClient)?.text ?? "Select a client"
    );
</script>

<div class="bg-white rounded-md border-none font-medium grid gap-2 w-full">
<!-- <div class="grid gap-4"> -->
    <span class="text-sm text-foreground font-semibold">Summary</span>

    <Separator />

    <div class="pt-1 grid gap-4 text-sm">
    <QuotationClientDetails { data } />

    <QuotationDate { data } />
    
    <QuotationAddress { data } />
    </div>
</div>

<!-- <Card.Root class="w-full">
    <Card.Header>
        <Card.Title>Quotation Summary</Card.Title>
    </Card.Header>
    <Card.Content> -->
        <!-- <form class="grid grid-cols-2 gap-8 p-6 pt-2"> -->
    <!-- <Field.Group>
        <Field.Set>
            <Field.Legend>Service Summary</Field.Legend>
            <Field.Group class=""> -->
                <!-- <div class="flex flex-row items-center gap-4">
                    <Badge variant="outline" class="px-2">
                        {#if data.id.toString() === '1'}
                            <SquarePenIcon /> Draft
                        {:else if data.id.toString() === '2'}
                            <BrushCleaningIcon class="fill-accent dark:fill-accent" /> Pending Service
                        {:else}
                            <CircleCheckFilledIcon class="fill-green-500 dark:fill-green-400" /> Completed
                        {/if}
                    </Badge>
                    <Badge variant="outline" class="px-2">
                        {#if data.id.toString() === '1'}
                            <BanknoteXIcon /> Pending Downpayment
                        {:else if data.id.toString() === '2'}
                            <HandCoinsIcon class="fill-accent dark:fill-accent" /> Pending Balance
                        {:else}
                            <CircleCheckFilledIcon class="fill-green-500 dark:fill-green-400" /> Fully Paid
                        {/if}
                    </Badge>
                </div> -->
                <!-- <Field.Field>
                    <Field.Label for="client">Client</Field.Label>
                    <Select.Root type="single" bind:value={selectedClient}>
                        <Select.Trigger class="w-full">{triggerContent}</Select.Trigger>
                        <Select.Content>
                            {#each clients as client}
                                <Select.Item value={client.value} label={client.text}>{client.text}</Select.Item>
                            {/each}
                        </Select.Content>
                    </Select.Root>
                </Field.Field> -->
                <!-- <Field.Field>
                    <Field.Label for="serviceDate">Service Date</Field.Label>
                    <Input id="lastName" class="font-light w-4/5" placeholder="" value={data.last_name} />
                </Field.Field> -->
                <!-- <Field.Field>
                    <Field.Label for="firstName">Address</Field.Label>
                    <InputGroup.Root>
                        <InputGroup.Textarea disabled id="address" class="font-light" placeholder="Address" value={data.address_1} />
                        <InputGroup.Addon align="block-end">
                            <-- Replace with popover for address --
                            <InputGroup.Button variant="secondary" class="rounded-2">
                                Edit
                            </InputGroup.Button>
                        </InputGroup.Addon>
                    </InputGroup.Root>
                </Field.Field> -->
            <!-- </Field.Group> -->
            <!-- <div class="flex flex-col gap-6 items-top">
                <Field.Field>
                    <Field.Label for="phone">Phone</Field.Label>
                    <Input id="phone" class="font-light w-32" placeholder="Phone" value={data.phone} />
                </Field.Field>
                <Field.Field>
                    <Field.Label for="email">Email</Field.Label>
                    <Input id="email" class="font-light w-4/5" placeholder="customer@email.com" value={data.email} />
                </Field.Field>
                
                <Field.Group class="flex flex-col gap-3">
                    <Field.Field orientation="horizontal">
                        <Checkbox id="isActive" checked="true" />
                        <Field.Label for="isActive" class="cursor-pointer">Active</Field.Label>
                    </Field.Field>
                    <Field.Field orientation="horizontal">
                        <Checkbox id="isVIP" checked="true" />
                        <Field.Label for="isVIP" class="cursor-pointer">VIP Customer</Field.Label>
                    </Field.Field>
                </Field.Group>
            </div> -->
        <!-- </form> -->
        <!-- </Field.Set>
    </Field.Group> -->
    <!-- </Card.Content>
</Card.Root> -->

<!-- <Card title="Primary Details" cls="grid grid-cols-2">
    <div class="flex flex-col gap-8 items-top">
        <FieldSet label="First Name">
            <Input class="font-light w-4/5" placeholder="First Name" value={data.first_name} />
        </FieldSet>

        <FieldSet label="Last Name">
            <Input class="font-light w-4/5" placeholder="Last Name" value={data.last_name} />
        </FieldSet>

        <FieldSet label="Address">
            <Input class="font-light w-4/5" placeholder="Address" value={data.address_1} />
        </FieldSet>
    </div>
    <div class="flex flex-col gap-8 items-top">
        <FieldSet label="Phone">
            <Input class="font-light w-32" placeholder="Phone" value={data.phone} />
        </FieldSet>

        <FieldSet label="Email">
            <Input class="font-light w-4/5" placeholder="Email" value={data.email} />
        </FieldSet>

        <FieldsetCheckbox id={`active-${data.id}`} label="Active" checked={data.active} />
    </div>
</Card> -->
