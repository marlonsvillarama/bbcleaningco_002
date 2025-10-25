<script>
	// import data from "./data.js";
	import { Badge } from "$lib/components/ui/badge/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import * as Tabs from "$lib/components/ui/tabs/index.js";
	import PlusIcon from "@tabler/icons-svelte/icons/plus";
	import { SaveIcon } from "@lucide/svelte";
	import SiteHeader from "$lib/components/layouts/sidebar-07/site-header.svelte";
	// import SectionCards from "$lib/components/layouts/dashboard-01/section-cards.svelte";
	// import ChartAreaInteractive from "$lib/components/layouts/dashboard-01/chart-area-interactive.svelte";
	import DataTable from "$lib/components/data-table/quotations/data-table.svelte";
    import RecordForm from "@/components/forms/quotations/record-form.svelte";
    // import QuotationClientDetails from "@/components/cards/clients/quotation-client-details.svelte";
    import QuotationSummary from "@/components/cards/quotations/quotation-summary.svelte";
	import QuotationClientDetails from "@/components/cards/quotations/quotation-client-details.svelte";
	import QuotationItems from "@/components/cards/quotations/quotation-items.svelte";
	import ClientServiceHistory from "@/components/cards/clients/client-service-history.svelte";
    import QuotationWorkflow from "@/components/cards/quotations/quotation-workflow.svelte";
    import QuotationAuditTrail from "@/components/cards/quotations/quotation-audit-trail.svelte";
    import QuotationNotes from "@/components/cards/quotations/quotation-notes.svelte";
    import QuotationTotals from "@/components/cards/quotations/quotation-totals.svelte";

	import items from './items';

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

	let views = [
		{
			id: "history",
			label: "Service History",
		},
		{
			id: "workflow",
			label: "Workflow",
		},
		{
			id: "audit-trail",
			label: "Audit Trail",
		},
	];

	let view = $state("history");
	let viewLabel = $derived(views.find((v) => view === v.id)?.label ?? "Select a view");
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

			<div class="w-full flex flex-row items-start gap-6 px-4 lg:px-6">
				<QuotationSummary class="w-2/5" { data } />

				<QuotationClientDetails { data } />

				<QuotationTotals { data } />
				<!-- <div class="flex flex-col justify-start gap-6 w-1/3">


					<QuotationClientDetails { data } />
				</div> -->
				<!-- <div class="flex flex-col justify-start gap-6 w-1/3">
				</div> -->
				<!-- <div class="flex flex-col justify-start gap-6 w-1/3">

					<QuotationNotes { data } />
				</div> -->
			</div>

			<div class="w-full flex flex-col gap-6 px-4 lg:px-6">
				<QuotationItems { items } />

				<div class="w-full flex flex-col gap-2">
					<Tabs.Root value="outline" class="w-full flex-col justify-start gap-2">
						<Tabs.List
							class="**:data-[slot=badge]:bg-muted-foreground/30 **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:px-1 @4xl/main:flex hidden"
						>
							{#each views as view (view.id)}
								<Tabs.Trigger value={view.id} class="px-8">
									{view.label}
								</Tabs.Trigger>
							{/each}
						</Tabs.List>
						<Tabs.Content value="history" class="relative flex flex-col gap-4 overflow-auto">
							<ClientServiceHistory { data } />
						</Tabs.Content>
						<Tabs.Content value="workflow" class="relative flex flex-col gap-4 overflow-auto">
							<QuotationWorkflow { data } />
						</Tabs.Content>
						<Tabs.Content value="audit-trail" class="relative flex flex-col gap-4 overflow-auto">
							<QuotationAuditTrail { data } />
						</Tabs.Content>
					</Tabs.Root>
				</div>
			</div>

		</div>
	</div>
</div>
