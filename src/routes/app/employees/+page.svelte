<script>
	// import data from "./data.js";
	import SiteHeader from "$lib/components/layouts/sidebar-07/site-header.svelte";
	// import SectionCards from "$lib/components/layouts/dashboard-01/section-cards.svelte";
	// import ChartAreaInteractive from "$lib/components/layouts/dashboard-01/chart-area-interactive.svelte";
	// import DataTable from "$lib/components/layouts/dashboard-01/data-table.svelte";
</script>

<SiteHeader title='Employees' />
<div class="flex flex-1 flex-col">
	<div class="@container/main flex flex-1 flex-col gap-2">
		<div class="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
			<!-- <SectionCards /> -->
			<!-- <div class="px-4 lg:px-6">
				<ChartAreaInteractive />
			</div> -->
			<!-- <DataTable {data} /> -->
		</div>
	</div>
</div>
