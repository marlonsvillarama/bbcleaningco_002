<script>
    import { getContext } from "svelte";
    import Button from "@/components/ui/button/button.svelte";
    import * as Field from "@/components/ui/field/index";
    import * as Select from "@/components/ui/select/index";
    import * as Tabs from "@/components/ui/tabs/index";
    import {
        RotateCcw,
        Save
    } from "@lucide/svelte";
    
    const TABS = [
        { id: 'defaults', label: 'Defaults' },
        { id: 'defaults2', label: 'Defaults 2' },
        { id: 'defaults3', label: 'Defaults 3' },
    ];

    const DASHBOARD_VIEWS = [
        { value: 'dash', label: 'Role dashboard' },
        { value: 'task', label: 'Task List' },
    ];

    const USER_CONTEXT = getContext('USER_CONTEXT');
    const USER_ROLE = getContext('USER_ROLE');
    let formValues = $state({});
    formValues.dashView = USER_ROLE.dash_view;
    const selectedDashView = $derived(DASHBOARD_VIEWS.find(v => v.value === formValues.dashView)?.label || '-');

    // const updateDashView = (value) => {
    //     if (value === selectedDashView) { return; }
    //     formValues.dashView = value;
    // };
    const resetDefaults = () => {
        alert('implement resetDefaults')
    };
</script>

<div class="grid gap-4 px-4">
	<div class="border-b border-gray-200 flex flex-row items-center justify-between pt-2 pb-2">
		<h1 class="text-gray-700 text-xl font-semibold">User Settings</h1>
		<Button variant="default" size="sm" onclick={resetDefaults}>
			<RotateCcw />
			<span class="hidden lg:inline">Reset Defaults</span>
		</Button>
	</div>

    <Tabs.Root value="defaults" class="w-full flex-col justify-start gap-4">

        <div class="flex items-center justify-between">
            <Tabs.List
                class="**:data-[slot=badge]:bg-muted-foreground/30 **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:px-1 @4xl/main:flex gap-4"
            >
                {#each TABS as tab (tab.id)}
                    <Tabs.Trigger value={tab.id}>
                        {tab.label}
                    </Tabs.Trigger>
                {/each}
            </Tabs.List>
        </div>

        <Tabs.Content value="defaults" class="grid items-start gap-6">
                <Field.Field class="w-[300px] gap-1">
                    <Field.Label>Home Page View</Field.Label>
                    <Field.Description>This is the default view in your Dashboard page</Field.Description>
                    <Select.Root type="single" bind:value={formValues.dashView}>
                        <Select.Trigger>{selectedDashView}</Select.Trigger>
                        <Select.Content class="">
                            <Select.Item value="dash">Dashboard</Select.Item>
                            <Select.Item value="task">Task List</Select.Item>
                        </Select.Content>
                    </Select.Root>
                </Field.Field>
        </Tabs.Content>

        <Tabs.Content value="defaults2" class="grid items-start gap-6">
        </Tabs.Content>

        <Tabs.Content value="defaults3" class="grid items-start gap-6">
        </Tabs.Content>
    </Tabs.Root>
</div>
