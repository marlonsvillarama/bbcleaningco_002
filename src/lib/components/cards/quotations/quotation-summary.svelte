<script>
    // import Card from "@/components/global/card/card.svelte";
    import * as Card from "@/components/ui/card/index";
    import * as Field from "@/components/ui/field/index";
    import * as InputGroup from "@/components/ui/input-group/index";
    import * as Select from "@/components/ui/select/index";
    import FieldSet from "@/components/global/form/fieldset.svelte";
    import FieldsetCheckbox from "@/components/global/form/fieldset-checkbox.svelte";

    import Checkbox from "@/components/ui/checkbox/checkbox.svelte";
    import Input from "@/components/ui/input/input.svelte";
    import Label from "@/components/ui/label/label.svelte";
    import Textarea from "@/components/ui/textarea/textarea.svelte";

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

<Card.Root class="w-full">
    <Card.Header>
        <Card.Title>Quotation Summary</Card.Title>
    </Card.Header>
    <Card.Content>
        <form class="grid grid-cols-2 gap-8 p-6 pt-2">
            <div class="flex flex-col gap-6 items-top">
                <Field.Field>
                    <Field.Label for="client">Client</Field.Label>
                    <Select.Root type="single" bind:value={selectedClient}>
                        <Select.Trigger class="w-full">{triggerContent}</Select.Trigger>
                        <Select.Content>
                            {#each clients as client}
                                <Select.Item value={client.value} label={client.text}>{client.text}</Select.Item>
                            {/each}
                        </Select.Content>
                    </Select.Root>
                </Field.Field>
                <Field.Field>
                    <Field.Label for="serviceDate">Service Date</Field.Label>
                    <Input id="lastName" class="font-light w-4/5" placeholder="Last Name" value={data.last_name} />
                </Field.Field>
                <Field.Field>
                    <Field.Label for="firstName">Address</Field.Label>
                    <InputGroup.Root>
                        <InputGroup.Textarea disabled id="address" class="font-light" placeholder="Address" value={data.address_1} />
                        <InputGroup.Addon align="block-end">
                            <!-- Replace with popover for address -->
                            <InputGroup.Button variant="secondary" class="rounded-2">
                                Edit
                            </InputGroup.Button>
                        </InputGroup.Addon>
                    </InputGroup.Root>
                </Field.Field>
            </div>
            <div class="flex flex-col gap-6 items-top">
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
            </div>
        </form>
    </Card.Content>
</Card.Root>

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
