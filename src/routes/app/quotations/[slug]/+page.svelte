<script>
	import QuotationHeader from "@/components/slugs/quotations/quotation-header.svelte";
    import QuotationSidebar from "@/components/slugs/quotations/quotation-sidebar.svelte";
	import QuotationContent from "@/components/slugs/quotations/quotation-content.svelte";

	import QuotationItems from "@/components/slugs/quotations/quotation-items.svelte";
	import ClientServiceHistory from "@/components/slugs/clients/client-service-history.svelte";
    import QuotationWorkflow from "@/components/slugs/quotations/quotation-workflow.svelte";
    import QuotationAuditTrail from "@/components/slugs/quotations/quotation-audit-trail.svelte";
    import QuotationNotes from "@/components/slugs/quotations/quotation-notes.svelte";
    import QuotationTotals from "@/components/slugs/quotations/quotation-totals.svelte";

	import RecordNotFound from "@/components/global/record-not-found.svelte";

	import {
		ArrowLeft,
		BanknoteX,
		Calendar1,
		Clock,
		Facebook,
		HandCoins,
		Instagram,
		Mail,
		MessageSquareText,
		PenBox,
		Phone,
		Plus,
		Printer,
		Receipt,
		Save,
		Tv,
		User
	} from "@lucide/svelte";

	import items from './items';

	const PREFIX = '/app/quotations/';
    let { data } = $props();
	console.log('page data', data);

	const VIEWS = [
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

	let { record, statusList } = data;
	// console.log('page quotation', record);

	if (record) {
		record.status_text = statusList.find(d => d.id === record.status)?.name || '';
		record.payment_status_text = statusList.find(d => d.id === record.payment_status)?.name || '';
		// console.log('*** page quotation ***', record);

		let view = $state("history");
		let viewLabel = $derived(VIEWS.find((v) => view === v.id)?.label ?? "Select a view");
	}
</script>

<div class="grid gap-8 px-4">
	{#if record}
	<QuotationHeader { data } />

	<div class="grid grid-cols-[1fr_320px] pb-8 gap-12 items-start">
		<QuotationContent { data } />

		<QuotationSidebar { data } />
	</div>
	{:else}
		<RecordNotFound backLink="/app/quotations" />
	{/if}
</div>
