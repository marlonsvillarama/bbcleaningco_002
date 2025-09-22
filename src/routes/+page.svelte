<script>
    import { Skull } from '@lucide/svelte';
    import * as AlertDialog from '@/components/ui/alert-dialog/index';
    import * as Card from '@/components/ui/card/index';
    import * as Popover from '@/components/ui/popover/index';
    import * as Select from "@/components/ui/select/index";
    import { buttonVariants } from '@/components/ui/button/button.svelte';
    import Badge from '@/components/ui/badge/badge.svelte';
    import Button from "@/components/ui/button/button.svelte";
    import Calendar from '@/components/ui/calendar/calendar.svelte';
    import Checkbox from '@/components/ui/checkbox/checkbox.svelte';
    import Input from "@/components/ui/input/input.svelte";
    import Label from "@/components/ui/label/label.svelte";
    import Paginator from '@/components/global/paginator.svelte';
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
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<div class="flex flex-row items-center gap-2 mt-4 mb-4">
<Button>Submit</Button>
<Button variant="ghost_secondary">Cancel again</Button>
<Button variant="ghost">Cancel</Button>
<Button variant="secondary">Email Quotation</Button>
<Button variant="ghost" size="icon"><Skull /></Button>
</div>

<div class="flex flex-col gap-1 mb-4">
    <Label class="px-1">First Name</Label>   
    <Input placeholder="Enter text here..." class="w-1/5" />
</div>
<div class="flex flex-col gap-1 mb-4">
    <Label class="px-1">Select a fruit</Label>   
    <Select.Root type="single" bind:value={selectedValue}>
        <Select.Trigger class="w-1/5">{triggerContent}</Select.Trigger>
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

<div class="w-2/3 mb-6">
    <Card.Root>
        <Card.Header>
            <Card.Title>Card Title</Card.Title>
            <Card.Description>Card Description</Card.Description>
        </Card.Header>

        <Card.Content class="px-6 py-6 flex flex-row gap-16">

            <div class="flex flex-col flex-1 gap-6">
                <div class="flex flex-col gap-1">
                    <Label class="px-1">First Name</Label>
                    <Input placeholder="Enter text here..." class="w-full" />
                </div>
                <div class="flex flex-col gap-1">
                    <Label class="px-1">Select a fruit</Label>   
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
                </div>
                <div class="flex flex-col gap-1">
                    <Checkbox />
                </div>
                <div class="flex flex-col gap-1">
                    <Switch />
                </div>

                <Popover.Root class="justify-left border">
                    <Popover.Trigger>
                        <Button variant="secondary" class="w-1/3">Select dates</Button>
                    </Popover.Trigger>
                    <Popover.Content class="p-0 border-none">
                        <Calendar
                            type="single"
                            class="rounded-md shadow-sm w-full"
                            captionLayout="dropdown"
                        />
                    </Popover.Content>
                </Popover.Root>
            </div>

            <div class="flex flex-col flex-1 gap-6">
                <div class="flex flex-col gap-1">
                    <Label class="px-1">First Name</Label>
                    <Input placeholder="Enter text here..." class="w-full" />
                </div>
                <div class="flex flex-col gap-1">
                    <Label class="px-1">Select a fruit</Label>   
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
                </div>
                <div class="flex flex-col gap-1">
                    <Checkbox />
                </div>
            </div>

        </Card.Content>

        <Card.Footer padded=false class="bg-accent/50 p-1">
            <Paginator />
        </Card.Footer>
    </Card.Root>
</div>
