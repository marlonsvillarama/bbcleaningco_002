<script>
	import data from "./data.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import AppSidebar from "$lib/components/layouts/dashboard-01/app-sidebar.svelte";
	import SectionCards from "$lib/components/layouts/dashboard-01/section-cards.svelte";
	import ChartAreaInteractive from "$lib/components/layouts/dashboard-01/chart-area-interactive.svelte";
	import DataTable from "$lib/components/layouts/dashboard-01/data-table.svelte";

    let { children } = $props();
</script>

<Sidebar.Provider
	style="--sidebar-width: calc(var(--spacing) * 72); --header-height: calc(var(--spacing) * 12);"
>
	<AppSidebar variant="inset" />
	<Sidebar.Inset>
		{@render children()}
	</Sidebar.Inset>
</Sidebar.Provider>