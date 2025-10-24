<script>
	import data from "./data.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import PlusIcon from "@tabler/icons-svelte/icons/plus";
	import SiteHeader from "$lib/components/layouts/sidebar-07/site-header.svelte";
	// import SectionCards from "$lib/components/layouts/dashboard-01/section-cards.svelte";
	// import ChartAreaInteractive from "$lib/components/layouts/dashboard-01/chart-area-interactive.svelte";
	import DataTable from "$lib/components/data-table/quotations/data-table.svelte";

	let crumbs = [
		{
			text: 'Quotations',
			url: '/app/quotations'
		}
	];
</script>

<SiteHeader { crumbs }>
	<div class="flex flex-row text-sm gap-4 lg:flex">
		<Input class="w-[200px]"/>
		<Button variant="default" size="sm">
			<PlusIcon />
			<span class="hidden lg:inline">New Quotation</span>
		</Button>
	</div>
</SiteHeader>
<div class="flex flex-1 flex-col">
	<div class="@container/main flex flex-1 flex-col gap-2">
		<div class="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
			<DataTable {data} />
		</div>
	</div>
</div>
