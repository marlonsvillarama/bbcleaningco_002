<script>
	import Button from "@/components/ui/button/button.svelte";
    import * as Tabs from "@/components/ui/tabs/index";
	import DataTable from "@/components/list-table/list-table.svelte";

	import {
		Plus
	} from "@lucide/svelte";
    
    const TABS = [
        // { id: '1', slug: 'regions', label: 'Regions' },
        { id: '4', slug: 'booking-types', label: 'Booking Types' },
        { id: '1', slug: 'client-status', label: 'Client Status' },
        { id: '3', slug: 'payment-status', label: 'Payment Status' },
        { id: '2', slug: 'quotation-status', label: 'Payment Status' },
        // { id: '5', slug: 'sales-channels', label: 'Sales Channels' },
    ];

	let columns = {
		bookingTypes: [
			{ id: 'name', name: 'Name' },
		],
		paymentStatus: [
			{ id: 'name', name: 'Name' },
		],
		regions: [
			{ id: 'name', name: 'Name' },
		],
		salesChannels: [
			{ id: 'name', name: 'Name' },
		],
	};
	let data = {
		bookingTypes: [],
		paymentStatus: [],
		regions: [
			{ id: 1, name: 'Region 1 (sss)' },
			{ id: 2, name: 'Region 2 (sss)' },
			{ id: 3, name: 'Region 3 (sss)' },
			{ id: 4, name: 'Region 4 (sss)' }
		],
		salesChannels: []
	};

	// import data from "./data.js";
	// import SiteHeader from "$lib/components/layouts/sidebar-07/site-header.svelte";
	// import SectionCards from "$lib/components/layouts/dashboard-01/section-cards.svelte";
	// import ChartAreaInteractive from "$lib/components/layouts/dashboard-01/chart-area-interactive.svelte";
	// import DataTable from "$lib/components/layouts/dashboard-01/data-table.svelte";
</script>

<div class="grid gap-4 px-4">
	<div class="border-b border-gray-200 flex flex-row items-center justify-between pt-2 pb-2">
		<h1 class="text-gray-700 text-xl font-semibold">Global Lists</h1>
		<div class="flex items-center gap-3">
			<Button variant="ghost" size="sm" disabled onclick={() => window.location = `/app/inventory?type=service&new=T`}>&nbsp;</Button>
		</div>
	</div>

    <Tabs.Root value="regions" class="w-full flex-col justify-start gap-4">
        <div class="flex items-center justify-between">
            <Tabs.List
                class="**:data-[slot=badge]:bg-muted-foreground/30 **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:px-1 @4xl/main:flex gap-4"
            >
                {#each TABS as tab (tab.id)}
                    <Tabs.Trigger value={tab.slug}>
                        {tab.label}
                    </Tabs.Trigger>
                {/each}
            </Tabs.List>
        </div>

		<!-- Regions -->
        <Tabs.Content value="regions" class="grid items-start gap-6">
			<DataTable id="1" type="region" columns={columns.regions} data={data.regions} />
        </Tabs.Content>

        <Tabs.Content value="booking-types" class="grid items-start gap-6">
			<DataTable type="booking type" columns={columns.bookingTypes} data={data.bookingTypes} />
        </Tabs.Content>

        <Tabs.Content value="sales-channels" class="grid items-start gap-6">
			<DataTable type="sales channel" columns={columns.salesChannels} data={data.salesChannels} />
        </Tabs.Content>

        <Tabs.Content value="payment-status" class="grid items-start gap-6">
			<DataTable type="payment status" columns={columns.paymentStatus} data={data.paymentStatus} />
        </Tabs.Content>
    </Tabs.Root>
</div>
