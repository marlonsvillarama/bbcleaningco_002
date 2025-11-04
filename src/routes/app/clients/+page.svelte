<script>
	import data from "./data.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import PlusIcon from "@tabler/icons-svelte/icons/plus";
	import SiteHeader from "$lib/components/layouts/sidebar-07/site-header.svelte";
	import DataTable from "$lib/components/data-table/clients/data-table.svelte";
	// import SectionCards from "$lib/components/layouts/dashboard-01/section-cards.svelte";
	// import ChartAreaInteractive from "$lib/components/layouts/dashboard-01/chart-area-interactive.svelte";
	// import DataTable from "$lib/components/layouts/dashboard-01/data-table.svelte";

	let crumbs = [
		{
			text: 'Clients',
			url: '/app/clients'
		}
	];
</script>

<!-- <SiteHeader { crumbs }>
	<div class="flex flex-row text-sm gap-4 lg:flex">
		<Input class="w-[200px]"/>
		<Button variant="default" size="sm">
			<PlusIcon />
			<span class="hidden lg:inline">New Client</span>
		</Button>
	</div>
</SiteHeader> -->

<div
	class="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-white *:data-[slot=card]:shadow-md flex items-center justify-between gap-4"
>
	<h1 class="text-gray-700 text-xl font-semibold">Clients</h1>
	<Button variant="default" size="sm" onclick={() => window.location = `/app/clients/new`}>
		<PlusIcon />
		<span class="hidden lg:inline">New Client</span>
	</Button>
</div>

<DataTable {data} />

<!-- <div class="flex flex-1 flex-col pb-8"> -->
	<!-- <div class="@container/main flex flex-1 flex-col gap-4 md:gap-6 py-4 md:py-6 px-4 lg:px-6"> -->
		<!-- <div class="flex flex-col gap-4 py-4 md:gap-6 md:py-6"> -->
			<!-- <DataTable {data} /> -->
		<!-- </div> -->
	<!-- </div> -->
<!-- </div> -->
