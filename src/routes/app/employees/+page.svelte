<script>
	import Button from "@/components/ui/button/button.svelte";
    import * as Tabs from "@/components/ui/tabs/index";

	import {
		Plus
	} from "@lucide/svelte";
    
    const TABS = [
        { id: 'staff', label: 'Staff' },
        { id: 'teams', label: 'Teams' },
    ];

	// import data from "./data.js";
	// import SiteHeader from "$lib/components/layouts/sidebar-07/site-header.svelte";
	// import SectionCards from "$lib/components/layouts/dashboard-01/section-cards.svelte";
	// import ChartAreaInteractive from "$lib/components/layouts/dashboard-01/chart-area-interactive.svelte";
	// import DataTable from "$lib/components/layouts/dashboard-01/data-table.svelte";
</script>

<div class="grid gap-4 px-4">
	<div class="border-b border-gray-200 flex flex-row items-center justify-between pt-2 pb-2">
		<h1 class="text-gray-700 text-xl font-semibold">Employees</h1>
		<div class="flex items-center gap-3">
			<Button variant="default" size="sm" onclick={() => window.location = `/app/employees/new`}>
				<Plus />
				<span class="hidden lg:inline">New Employee</span>
			</Button>
			<Button variant="default" size="sm" onclick={() => window.location = `/app/employees/new`}>
				<Plus />
				<span class="hidden lg:inline">New Team</span>
			</Button>
		</div>
	</div>

    <Tabs.Root value="staff" class="w-full flex-col justify-start gap-4">
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

        <Tabs.Content value="staff" class="grid items-start gap-6">
			Staff
        </Tabs.Content>

        <Tabs.Content value="teams" class="grid items-start gap-6">
			Teams
        </Tabs.Content>
    </Tabs.Root>
</div>
