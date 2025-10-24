<script>
	// import data from "./data.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import PlusIcon from "@tabler/icons-svelte/icons/plus";
	import { SaveIcon } from "@lucide/svelte";
	import SiteHeader from "$lib/components/layouts/sidebar-07/site-header.svelte";
	// import SectionCards from "$lib/components/layouts/dashboard-01/section-cards.svelte";
	// import ChartAreaInteractive from "$lib/components/layouts/dashboard-01/chart-area-interactive.svelte";
	import DataTable from "$lib/components/data-table/quotations/data-table.svelte";
    import RecordForm from "@/components/forms/quotations/record-form.svelte";
    // import QuotationClientDetails from "@/components/cards/clients/quotation-client-details.svelte";
    import QuotationSummary from "@/components/cards/quotations/quotation-summary.svelte";
	import ClientServiceHistory from "@/components/cards/clients/client-service-history.svelte";
    import QuotationWorkflow from "@/components/cards/quotations/quotation-workflow.svelte";
    import QuotationAuditTrail from "@/components/cards/quotations/quotation-audit-trail.svelte";

	const PREFIX = '/app/quotations/';
    let { data } = $props();
	let crumbs = [
		{
			text: 'Quotations',
			url: PREFIX
		},
		{
			text: data.id ? `2025-0001` : 'New Quotation',
			url: `${PREFIX}${data.id || 'new'}`
		}
	];
</script>

<SiteHeader { crumbs }>
	<div class="flex flex-row text-sm gap-4 lg:flex">
		<Button variant="default" size="sm">
			<SaveIcon />
			<span class="hidden lg:inline">Save Quotation</span>
		</Button>
	</div>
</SiteHeader>
<div class="flex flex-1 flex-col">
	<div class="@container/main flex flex-1 flex-col gap-2">
		<div class="flex flex-col gap-4 py-4 md:gap-6 md:py-6">

			<div class="w-full flex flex-row justify-start gap-2 px-4 lg:px-6">
				<div class="flex flex-col justify-start gap-6 w-3/4">
					<QuotationSummary {data} />

					<ClientServiceHistory {data} />

					<QuotationWorkflow {data} />

					<QuotationAuditTrail {data} />
					<!-- <QuotationClientDetails { data } /> -->
				</div>
				<div class="flex flex-col justify-start gap-2 w-1/4">
				</div>
			</div>

		</div>
	</div>
</div>
