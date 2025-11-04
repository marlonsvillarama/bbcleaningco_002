<script>
    import * as Field from "@/components/ui/field/index";
    import * as Select from "@/components/ui/select/index";
    import Button from "@/components/ui/button/button.svelte";
    import Input from "@/components/ui/input/input.svelte";

    import {
        CircleX,
        Plus
    } from "@lucide/svelte";

    let { data } = $props();
    const teams = [
        { value: "1", text: "ALPHA" },
        { value: "2", text: "BRAVO" },
        { value: "3", text: "CHARLIE" },
    ];
    let selectedTeam = $state('3');
    const triggerContent = $derived(
        teams.find((t) => t.value === selectedTeam)?.text ?? "Select team"
    );
</script>

<div class="grid gap-4">
    <div class="flex items-center justify-between w-full border-b-2 border-gray-200 pb-1">
        <span class="text-sm text-foreground font-semibold">Primary Details</span>
        <Button variant="outline" disabled={true} class="text-white px-3 py-[2px] text-xs font-normal"></Button>
    </div>

    <div class="grid gap-6 px-2 text-sm">
        <div class="flex gap-8 items-center">
            <!-- <span class="px-2 text-clip text-top font-extralight">Erwin Alcantara</span> -->
            <Field.Field class="w-[200px]">
                <Field.Label for="first_name">First Name</Field.Label>
                <Input id="first_name" />
            </Field.Field>
            <Field.Field class="w-[200px]">
                <Field.Label for="last_name">Last Name</Field.Label>
                <Input id="last_name" />
            </Field.Field>
        </div>

        <Field.Field class="w-[200px]">
            <Field.Label for="phone">Phone No.</Field.Label>
            <Input type="phone" id="phone" />
        </Field.Field>
        <Field.Field class="w-[400px]">
            <Field.Label for="phone">Email</Field.Label>
            <Input type="email" id="email" />
        </Field.Field>
    </div>
</div>
			
			<!-- <div class="grid gap-6">
				<div class="grid grid-cols-[320px_1fr] border-none border-gray-200 items-start">
					<ClientSidebar { data } />

					<div class="grid gap-12 px-6 pt-6 pb-12 border-l border-gray-200 min-h-[400px]">
						<div class="flex gap-8 items-center">
							<Field.Field class="w-[200px]">
								<Field.Label for="first_name">First Name</Field.Label>
								<Input id="first_name" />
							</Field.Field>
							<Field.Field class="w-[200px]">
								<Field.Label for="last_name">Last Name</Field.Label>
								<Input id="last_name" />
							</Field.Field>
						</div>
						<Field.Field class="w-[200px]">
							<Field.Label for="phone">Phone No.</Field.Label>
							<Input type="phone" id="phone" />
						</Field.Field>
						<Field.Field class="w-[400px]">
							<Field.Label for="phone">Email</Field.Label>
							<Input type="email" id="email" />
						</Field.Field>
					</div>
				</div>
			</div> -->

<!-- <Card.Root class="w-full">
    <Card.Header>
        <Card.Title>Client Details</Card.Title>
    </Card.Header>
    <Card.Content>
        <form class="grid grid-cols-2 gap-8 p-6 pt-2">
            <div class="flex flex-col gap-6 items-top">
                    <Field.Field>
                        <Field.Label for="firstName">First Name</Field.Label>
                        <Input id="firstName" class="font-light w-4/5" placeholder="First Name" value={data.first_name} />
                    </Field.Field>
                    <Field.Field>
                        <Field.Label for="lastName">Last Name</Field.Label>
                        <Input id="lastName" class="font-light w-4/5" placeholder="Last Name" value={data.last_name} />
                    </Field.Field>
                <Field.Field>
                    <Field.Label for="address">Address</Field.Label>
                    <InputGroup.Root>
                        <InputGroup.Textarea disabled id="address" class="font-light" placeholder="Address" value={data.address_1} />
                        <InputGroup.Addon align="block-end">
                            <InputGroup.Button variant="secondary" class="rounded-2">
                                Edit
                            </InputGroup.Button>
                        </InputGroup.Addon>
                    </InputGroup.Root>
                </Field.Field>
                <Field.Field>
                    <Field.Label for="firstName">First Name</Field.Label>
                    <Textarea id="address" class="font-light w-4/5" placeholder="Address" value={data.address_1} />
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
