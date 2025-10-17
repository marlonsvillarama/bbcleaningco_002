<script>
    import { ChevronLeftIcon, ChevronRightIcon, Skull } from '@lucide/svelte';
    import * as AlertDialog from '@/components/ui/alert-dialog/index';
    import * as Card from '@/components/ui/card/index';
    import * as Field from '@/components/ui/field/index';
    import * as Popover from '@/components/ui/popover/index';
    import * as Select from "@/components/ui/select/index";
    import * as Pagination from '@/components/ui/pagination/index';
    import { buttonVariants } from '@/components/ui/button/button.svelte';
    import { toast } from 'svelte-sonner';
    import Badge from '@/components/ui/badge/badge.svelte';
    import Button from "@/components/ui/button/button.svelte";
    import Calendar from '@/components/ui/calendar/calendar.svelte';
    import Checkbox from '@/components/ui/checkbox/checkbox.svelte';
    import Input from "@/components/ui/input/input.svelte";
    import Label from "@/components/ui/label/label.svelte";
    import Switch from '@/components/ui/switch/switch.svelte';

    let selectedValue = $state('');

    const fruits = [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'apple2', label: 'Apple2' },
        { value: 'banana2', label: 'Banana2' },
        { value: 'apple3', label: 'Apple3' },
        { value: 'banana3', label: 'Banana3' },
        { value: 'apple4', label: 'Apple4' },
        { value: 'banana4', label: 'Banana4' },
        { value: 'apple5', label: 'Apple5' },
        { value: 'banana5', label: 'Banana5' },
        { value: 'apple6', label: 'Apple6' },
        { value: 'banana6', label: 'Banana6' },
        { value: 'apple7', label: 'Apple7' },
        { value: 'banana7', label: 'Banana7' },
        { value: 'cherry', label: 'Cherry' }
    ];
    // let triggerContent = $derived(
    //     selectedValues.length ?
    //         fruits.filter(f => selectedValues.includes(f.value))
    //             .map(f => f.label)
    //             .join(', ')
    //         : 'Select fruits...'
    // );
    let triggerContent = $derived(fruits.find(f => f.value === selectedValue)?.label ?? 'Select a fruit...');

    const pageCount = 20;
    const perPage = 3;
    const siblingCount = 1;

    const showToast = () => {
        toast.success("Quotation has been created.")
    };
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<div class="flex flex-row items-center gap-2 mt-4 mb-4">
    <Button onclick={showToast}>Submit</Button>
    <Button variant="ghost_secondary">Cancel again</Button>
    <Button variant="ghost">Cancel</Button>
    <Button variant="secondary">Email Quotation</Button>
    <Button variant="ghost" size="icon"><Skull /></Button>
</div>

<div class="badges flex flex-row gap-1 items-center mb-6">
    <Badge>Approved</Badge>
    <Badge variant="secondary">Draft</Badge>
    <Badge variant="outline">Pending</Badge>
    <Badge variant="destructive">Overdue</Badge>
</div>

<div class="div mb-6">
    <AlertDialog.Root>
        <AlertDialog.Trigger class={buttonVariants({ variant: 'secondary' })}>Open Dialog</AlertDialog.Trigger>
        <AlertDialog.Content>
            <AlertDialog.Header>
                <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
                <AlertDialog.Description>This action cannot be undone.</AlertDialog.Description>
            </AlertDialog.Header>
            <AlertDialog.Footer>
                <AlertDialog.Cancel class={buttonVariants({ variant: 'ghost_secondary' })}>Cancel</AlertDialog.Cancel>
                <AlertDialog.Action>Continue</AlertDialog.Action>
            </AlertDialog.Footer>
        </AlertDialog.Content>
    </AlertDialog.Root>
</div>

<div class="w-2/3 mb-6 flex flex-col gap-8">
    <Card.Root>
        <Card.Header class="flex flex-row justify-between items-center">
            <Card.Title>Card Title</Card.Title>
            <!-- <Card.Description>Card Description</Card.Description> -->
            <div class="flex flex-row items-center gap-2">
                <Button onclick={showToast}>Submit</Button>
                <Button variant="card_secondary">Email Quotation</Button>
            </div>
        </Card.Header>

        <Card.Content class="px-8 pt-8 pb-10 flex flex-row gap-16">
            <Field.Group>
                <Field.Set class="gap-6">
                    <Field.Field>
                        <Field.Label for="first-name">First Name</Field.Label>
                        <Input id="first-name" class="w-full" required />
                        <Field.Description>Enter first name here</Field.Description>
                    </Field.Field>
                    <Field.Field>
                        <Field.Label for="last-name">Last Name</Field.Label>
                        <Input id="last-name" class="w-full" required />
                    </Field.Field>
                    <Field.Separator />
                    <div class="flex flex-row gap-6">
                        <Field.Field class="w-2/5">
                            <Field.Label for="dob-date">Date</Field.Label>
                            <Input id="dob-date" class="w-full" required />
                        </Field.Field>
                        <Field.Field class="w-2/5">
                            <Field.Label for="dob-month">Month</Field.Label>
                            <Input id="dob-month" class="w-full" required />
                        </Field.Field>
                        <Field.Field class="w-1/5">
                            <Field.Label for="dob-year">Year</Field.Label>
                            <Input id="dob-year" class="w-full" required />
                        </Field.Field>
                    </div>
                </Field.Set>
            </Field.Group>
            <Field.Group>
                <Field.Set>
                    <Field.Field>
                        <Field.Label>Select a fruit</Field.Label>
                        <Select.Root type="single" bind:value={selectedValue}>
                            <Select.Trigger class="w-full">{triggerContent}</Select.Trigger>
                            <Select.Content>
                                <Select.Group>
                                    {#each fruits as fruit}
                                    <Select.Item
                                        value={fruit.value}
                                        label={fruit.label}
                                    >{fruit.label}</Select.Item>
                                    {/each}
                                </Select.Group>
                            </Select.Content>
                        </Select.Root>
                    </Field.Field>
                    <Field.Field orientation="horizontal">
                        <Checkbox id="active"/>
                        <Field.Label for="active">Active</Field.Label>
                    </Field.Field>
                </Field.Set>
            </Field.Group>

        </Card.Content>

        <!-- <Card.Footer padded=false class="bg-secondary/60 p-1">
            <Pagination.Root count={fruits.length} {perPage} {siblingCount}>
                {#snippet children({ pages, currentPage })}
                    <Pagination.Content>
                        <Pagination.Item>
                            <Pagination.PrevButton>
                                <ChevronLeftIcon class="size-4" />
                                <span class="hidden sm:block">Previous</span>
                            </Pagination.PrevButton>
                        </Pagination.Item>
                        {#each pages as page (page.key)}
                            {#if page.type === 'ellipsis'}
                                <Pagination.Item>
                                    <Pagination.Ellipsis />
                                </Pagination.Item>
                            {:else}
                                <Pagination.Item>
                                    <Pagination.Link {page} isActive={currentPage === page.value}>
                                        {page.value}
                                    </Pagination.Link>
                                </Pagination.Item>
                            {/if}
                        {/each}
                        <Pagination.Item>
                            <Pagination.NextButton>
                                <span class="hidden sm:block">Next</span>
                                <ChevronRightIcon class="size-4" />
                            </Pagination.NextButton>
                        </Pagination.Item>
                    </Pagination.Content>
                {/snippet}
            </Pagination.Root>
        </Card.Footer> -->
    </Card.Root>

    <Card.Root>
        <Card.Header class="flex flex-row justify-between items-center">
            <Card.Title>Card Title</Card.Title>
            <!-- <Card.Description>Card Description</Card.Description> -->
            <div class="flex flex-row items-center gap-2">
                <Button onclick={showToast}>Submit</Button>
                <Button variant="card_secondary">Email Quotation</Button>
            </div>
        </Card.Header>

        <Card.Content class="px-6 py-6 flex flex-row gap-16">
            <Field.Group>
                <Field.Set class="gap-6">
                    <Field.Field>
                        <Field.Label for="first-name">First Name</Field.Label>
                        <Input id="first-name" class="w-full" required />
                        <Field.Description>Enter first name here</Field.Description>
                    </Field.Field>
                    <Field.Field>
                        <Field.Label for="last-name">Last Name</Field.Label>
                        <Input id="last-name" class="w-full" required />
                    </Field.Field>
                    <Field.Separator />
                    <div class="flex flex-row gap-6">
                        <Field.Field class="w-2/5">
                            <Field.Label for="dob-date">Date</Field.Label>
                            <Input id="dob-date" class="w-full" required />
                        </Field.Field>
                        <Field.Field class="w-2/5">
                            <Field.Label for="dob-month">Month</Field.Label>
                            <Input id="dob-month" class="w-full" required />
                        </Field.Field>
                        <Field.Field class="w-1/5">
                            <Field.Label for="dob-year">Year</Field.Label>
                            <Input id="dob-year" class="w-full" required />
                        </Field.Field>
                    </div>
                </Field.Set>
            </Field.Group>
            <Field.Group>
                <Field.Set>
                    <Field.Field>
                        <Field.Label>Select a fruit</Field.Label>
                        <Select.Root type="single" bind:value={selectedValue}>
                            <Select.Trigger class="w-full">{triggerContent}</Select.Trigger>
                            <Select.Content>
                                <Select.Group>
                                    {#each fruits as fruit}
                                    <Select.Item
                                        value={fruit.value}
                                        label={fruit.label}
                                    >{fruit.label}</Select.Item>
                                    {/each}
                                </Select.Group>
                            </Select.Content>
                        </Select.Root>
                    </Field.Field>
                    <Field.Field orientation="horizontal">
                        <Checkbox id="active"/>
                        <Field.Label for="active">Active</Field.Label>
                    </Field.Field>
                </Field.Set>
            </Field.Group>

        </Card.Content>

        <Card.Footer padded=false class="bg-secondary/60 p-1">
            <Pagination.Root count={fruits.length} {perPage} {siblingCount}>
                {#snippet children({ pages, currentPage })}
                    <Pagination.Content>
                        <Pagination.Item>
                            <Pagination.PrevButton>
                                <ChevronLeftIcon class="size-4" />
                                <span class="hidden sm:block">Previous</span>
                            </Pagination.PrevButton>
                        </Pagination.Item>
                        {#each pages as page (page.key)}
                            {#if page.type === 'ellipsis'}
                                <Pagination.Item>
                                    <Pagination.Ellipsis />
                                </Pagination.Item>
                            {:else}
                                <Pagination.Item>
                                    <Pagination.Link {page} isActive={currentPage === page.value}>
                                        {page.value}
                                    </Pagination.Link>
                                </Pagination.Item>
                            {/if}
                        {/each}
                        <Pagination.Item>
                            <Pagination.NextButton>
                                <span class="hidden sm:block">Next</span>
                                <ChevronRightIcon class="size-4" />
                            </Pagination.NextButton>
                        </Pagination.Item>
                    </Pagination.Content>
                {/snippet}
            </Pagination.Root>
        </Card.Footer>
    </Card.Root>

    <Card.Root>
        <Card.Header class="flex flex-row justify-between items-center">
            <Card.Title>Card Title</Card.Title>
            <!-- <Card.Description>Card Description</Card.Description> -->
            <div class="flex flex-row items-center gap-2">
                <Button onclick={showToast}>Submit</Button>
                <Button variant="card_secondary">Email Quotation</Button>
            </div>
        </Card.Header>

        <Card.Content class="px-6 py-6 flex flex-row gap-16">
            <Field.Group>
                <Field.Set class="gap-6">
                    <Field.Field>
                        <Field.Label for="first-name">First Name</Field.Label>
                        <Input id="first-name" class="w-full" required />
                        <Field.Description>Enter first name here</Field.Description>
                    </Field.Field>
                    <Field.Field>
                        <Field.Label for="last-name">Last Name</Field.Label>
                        <Input id="last-name" class="w-full" required />
                    </Field.Field>
                    <Field.Separator />
                    <div class="flex flex-row gap-6">
                        <Field.Field class="w-2/5">
                            <Field.Label for="dob-date">Date</Field.Label>
                            <Input id="dob-date" class="w-full" required />
                        </Field.Field>
                        <Field.Field class="w-2/5">
                            <Field.Label for="dob-month">Month</Field.Label>
                            <Input id="dob-month" class="w-full" required />
                        </Field.Field>
                        <Field.Field class="w-1/5">
                            <Field.Label for="dob-year">Year</Field.Label>
                            <Input id="dob-year" class="w-full" required />
                        </Field.Field>
                    </div>
                </Field.Set>
            </Field.Group>
            <Field.Group>
                <Field.Set>
                    <Field.Field>
                        <Field.Label>Select a fruit</Field.Label>
                        <Select.Root type="single" bind:value={selectedValue}>
                            <Select.Trigger class="w-full">{triggerContent}</Select.Trigger>
                            <Select.Content>
                                <Select.Group>
                                    {#each fruits as fruit}
                                    <Select.Item
                                        value={fruit.value}
                                        label={fruit.label}
                                    >{fruit.label}</Select.Item>
                                    {/each}
                                </Select.Group>
                            </Select.Content>
                        </Select.Root>
                    </Field.Field>
                    <Field.Field orientation="horizontal">
                        <Checkbox id="active"/>
                        <Field.Label for="active">Active</Field.Label>
                    </Field.Field>
                </Field.Set>
            </Field.Group>

        </Card.Content>

        <Card.Footer padded=false class="bg-secondary/60 p-1">
            <Pagination.Root count={fruits.length} {perPage} {siblingCount}>
                {#snippet children({ pages, currentPage })}
                    <Pagination.Content>
                        <Pagination.Item>
                            <Pagination.PrevButton>
                                <ChevronLeftIcon class="size-4" />
                                <span class="hidden sm:block">Previous</span>
                            </Pagination.PrevButton>
                        </Pagination.Item>
                        {#each pages as page (page.key)}
                            {#if page.type === 'ellipsis'}
                                <Pagination.Item>
                                    <Pagination.Ellipsis />
                                </Pagination.Item>
                            {:else}
                                <Pagination.Item>
                                    <Pagination.Link {page} isActive={currentPage === page.value}>
                                        {page.value}
                                    </Pagination.Link>
                                </Pagination.Item>
                            {/if}
                        {/each}
                        <Pagination.Item>
                            <Pagination.NextButton>
                                <span class="hidden sm:block">Next</span>
                                <ChevronRightIcon class="size-4" />
                            </Pagination.NextButton>
                        </Pagination.Item>
                    </Pagination.Content>
                {/snippet}
            </Pagination.Root>
        </Card.Footer>
    </Card.Root>
</div>
