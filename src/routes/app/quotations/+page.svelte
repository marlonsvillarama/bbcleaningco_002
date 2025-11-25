<script>
	import data from "./data.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import PlusIcon from "@tabler/icons-svelte/icons/plus";
	import SiteHeader from "$lib/components/layouts/sidebar-07/site-header.svelte";
	import DataTable from "$lib/components/data-table/quotations/data-table.svelte";
	// import SectionCards from "$lib/components/layouts/dashboard-01/section-cards.svelte";
	// import ChartAreaInteractive from "$lib/components/layouts/dashboard-01/chart-area-interactive.svelte";

	let crumbs = [
		{
			text: 'Quotations',
			url: '/app/quotations'
		}
	];
</script>

<div class="grid gap-4 px-4">
	<div class="border-b border-gray-200 flex flex-row items-center justify-between pt-2 pb-2">
		<h1 class="text-[1.35rem] text-foreground-dark font-semibold">Quotations</h1>
		<Button variant="default" size="sm">
			<PlusIcon />
			<span class="hidden lg:inline">New Quotation</span>
		</Button>
	</div>

	<DataTable {data} />
</div>
