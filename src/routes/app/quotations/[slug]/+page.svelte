<script>
	// import data from "./data.js";
	import Badge from "$lib/components/ui/badge/badge.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import Input from "$lib/components/ui/input/input.svelte";
	import * as Tabs from "$lib/components/ui/tabs/index.js";
	import * as Card from "@/components/ui/card/index";
	import Separator from "@/components/ui/separator/separator.svelte";
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

	import ArrowLeftIcon from "@lucide/svelte/icons/arrow-left";
	import BanknoteXIcon from "@lucide/svelte/icons/banknote-x";
	import BrushCleaningIcon from "@lucide/svelte/icons/brush-cleaning";
	import CircleCheckFilledIcon from "@tabler/icons-svelte/icons/circle-check-filled";
	import HandCoinsIcon from "@lucide/svelte/icons/hand-coins";
	import ReceiptIcon from "@lucide/svelte/icons/receipt";
	import SaveIcon from "@lucide/svelte/icons/save";
	import SquarePenIcon from "@lucide/svelte/icons/square-pen";

	import items from './items';

	const PREFIX = '/app/quotations/';
    let { data } = $props();
	console.log('page data', data);
	let { quotation, statusList } = data;
	console.log('page quotation', quotation);
	/* let crumbs = [
		{
			text: 'Quotations',
			url: PREFIX
		},
		{
			text: data.id ? `2025-0001` : 'New Quotation',
			url: `${PREFIX}${data.id || 'new'}`
		}
	]; */

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

<!-- <SiteHeader { crumbs }>
	<div class="flex flex-row text-sm gap-4 lg:flex">
		<Button variant="default" size="sm">
			<SaveIcon />
			<span class="hidden lg:inline">Save Quotation</span>
		</Button>
	</div>
</SiteHeader> -->

<!-- <div class="flex flex-1 flex-col">
	<div class="@container/main flex flex-1 flex-col gap-2">
		<div class="flex flex-col gap-4 px-4 py-4 md:gap-6 md:py-6"> -->
			<!-- <div
				class="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-white *:data-[slot=card]:shadow-md flex items-center justify-between gap-4"
			>
				<h1 class="text-gray-700 text-xl font-semibold">Quotation #{quotation.number}</h1>
			</div> -->

			<Card.Root>
				<Card.Content>
					<div class="grid grid-col-2">
						<div class="border-b flex flex-row items-center justify-between px-4 py-4">
							<div class="flex gap-4">
								<div id="quotation-id" class="flex flex-row items-center">
									<ReceiptIcon class="mr-2" />
									<span class="text-xl font-semibold">Quotation #{quotation.number}</span>
								</div>
								<!-- <div class="flex flex-row items-center gap-2">
									<Badge variant="outline">
										<SquarePenIcon />Draft
									</Badge>
									<Badge variant="outline">
										<BanknoteXIcon />Pending Downpayment
									</Badge>
								</div> -->
							</div>
							<div class="flex gap-2 items-center">
								<Button variant="default" size="sm">
									<SaveIcon />
									<span class="hidden lg:inline">Save Changes</span>
								</Button>
								<Button variant="secondary" size="sm" onclick={() => window.location = '/app/quotations'}>
									<ArrowLeftIcon />
									<span class="hidden lg:inline">Back to list</span>
								</Button>
							</div>
						</div>
						<div class="grid q-content px-6 py-4 items-start">
							<div class="q-header grid gap-8">
								<QuotationSummary class="summary" { data } />
								<Separator />
								<QuotationClientDetails class="client" { data } />
								<QuotationTotals class="totals" { data } />
							</div>
						</div>
					</div>
				</Card.Content>
			</Card.Root>

		<!-- </div>
	</div>
</div> -->

<style>
	.q-content {
		grid-template-areas:
			"summary client totals"
			"items items items"
			"sublists sublists sublists"
		;
	}
</style>