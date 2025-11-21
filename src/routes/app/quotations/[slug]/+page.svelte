<script>
	// import data from "./data.js";
	import Badge from "$lib/components/ui/badge/badge.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import Input from "$lib/components/ui/input/input.svelte";
	import * as Card from "@/components/ui/card/index";
	import * as Select from "$lib/components/ui/select/index.js";
	import * as Tabs from "$lib/components/ui/tabs/index.js";
	import Separator from "@/components/ui/separator/separator.svelte";
	import SiteHeader from "$lib/components/layouts/sidebar-07/site-header.svelte";
	import DataTable from "$lib/components/data-table/quotations/data-table.svelte";

	import QuotationHeader from "@/components/slugs/quotations/quotation-header.svelte";
    import QuotationSidebar from "@/components/slugs/quotations/sidebar/quotation-sidebar.svelte";
	import QuotationContent from "@/components/slugs/quotations/content/quotation-content.svelte";

	import QuotationItems from "@/components/slugs/quotations/quotation-items.svelte";
	import ClientServiceHistory from "@/components/slugs/clients/client-service-history.svelte";
    import QuotationWorkflow from "@/components/slugs/quotations/quotation-workflow.svelte";
    import QuotationAuditTrail from "@/components/slugs/quotations/quotation-audit-trail.svelte";
    import QuotationNotes from "@/components/slugs/quotations/quotation-notes.svelte";
    import QuotationTotals from "@/components/slugs/quotations/content/quotation-totals.svelte";

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

	let { quotation, statusList } = data;
	console.log('page quotation', quotation);

	quotation.status_text = statusList.find(d => d.id === quotation.status)?.name || '';
	quotation.payment_status_text = statusList.find(d => d.id === quotation.payment_status)?.name || '';
	console.log('*** page quotation ***', quotation);

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

<!-- <Card.Root class="m-2 mb-4">
	<Card.Content> -->
		<div class="grid gap-5 px-4">
			<QuotationHeader { data } />
			
			<!-- <div class="grid grid-cols-[320px_1fr] border-none border-gray-200 items-start"> -->
			<div class="grid gap-5 border-gray-200 items-start">
				<QuotationSidebar { data } />

				<QuotationContent { data } />
			</div>
		</div>
	<!-- </Card.Content>
</Card.Root> -->
