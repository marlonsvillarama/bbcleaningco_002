<script>
	import data from "./data.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import SiteHeader from "$lib/components/layouts/sidebar-07/site-header.svelte";
	// import SectionCards from "$lib/components/layouts/dashboard-01/section-cards.svelte";
	// import ChartAreaInteractive from "$lib/components/layouts/dashboard-01/chart-area-interactive.svelte";
	import DataTable from "$lib/components/data-table/quotations/data-table.svelte";
</script>

<SiteHeader title='Quotations'>
	<Button
		href="https://github.com/shadcn-ui/ui/tree/main/apps/v4/app/(examples)/dashboard"
		variant="ghost"
		size="sm"
		class="dark:text-foreground hidden sm:flex"
		target="_blank"
		rel="noopener noreferrer"
	>
		GitHub
	</Button>
</SiteHeader>
<div class="flex flex-1 flex-col">
	<div class="@container/main flex flex-1 flex-col gap-2">
		<div class="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
			<DataTable {data} />
		</div>
	</div>
</div>
