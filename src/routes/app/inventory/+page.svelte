<script>
	import Button from "@/components/ui/button/button.svelte";
    import * as Tabs from "@/components/ui/tabs/index";

	import {
		Plus
	} from "@lucide/svelte";
    
    const TABS = [
        { id: 'services', label: 'Services' },
        { id: 'items', label: 'Items' },
        { id: 'vehicles', label: 'Vehicles' },
    ];

	// import data from "./data.js";
	// import SiteHeader from "$lib/components/layouts/sidebar-07/site-header.svelte";
	// import SectionCards from "$lib/components/layouts/dashboard-01/section-cards.svelte";
	// import ChartAreaInteractive from "$lib/components/layouts/dashboard-01/chart-area-interactive.svelte";
	// import DataTable from "$lib/components/layouts/dashboard-01/data-table.svelte";
</script>

<div class="grid gap-4 px-4">
	<div class="border-b border-gray-200 flex flex-row items-center justify-between pt-2 pb-2">
		<h1 class="text-gray-700 text-xl font-semibold">Inventory</h1>
		<div class="flex items-center gap-3">
			<Button variant="default" size="sm" onclick={() => window.location = `/app/inventory?type=service&new=T`}>
				<Plus />
				<span class="hidden lg:inline">New Service</span>
			</Button>
			<Button variant="default" size="sm" onclick={() => window.location = `/app/inventory?type=item&new=T`}>
				<Plus />
				<span class="hidden lg:inline">New Item</span>
			</Button>
			<Button variant="default" size="sm" onclick={() => window.location = `/app/inventory?type=item&new=T`}>
				<Plus />
				<span class="hidden lg:inline">New Vehicle</span>
			</Button>
		</div>
	</div>

    <Tabs.Root value="services" class="w-full flex-col justify-start gap-4">
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

        <Tabs.Content value="services" class="grid items-start gap-6">
			Services
        </Tabs.Content>

        <Tabs.Content value="items" class="grid items-start gap-6">
			Items
        </Tabs.Content>

        <Tabs.Content value="vehicles" class="grid items-start gap-6">
			Vehicles
        </Tabs.Content>
    </Tabs.Root>
</div>
