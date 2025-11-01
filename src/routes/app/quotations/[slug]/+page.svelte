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

	import {
		ArrowLeft,
		Facebook,
		Instagram,
		Mail,
		MessageSquareText,
		Phone,
		Plus,
		Printer,
		Receipt,
		Save,
		Tv,
		User
	} from "@lucide/svelte";
	// import ArrowLeftIcon from "@lucide/svelte/icons/arrow-left";
	import BanknoteXIcon from "@lucide/svelte/icons/banknote-x";
	// import BrushCleaningIcon from "@lucide/svelte/icons/brush-cleaning";
	// import CircleCheckFilledIcon from "@tabler/icons-svelte/icons/circle-check-filled";
	// import HandCoinsIcon from "@lucide/svelte/icons/hand-coins";
	// import MailIcon from "@lucide/svelte/icons/mail";
	// import PhoneIcon from "@lucide/svelte";
	// import PrinterIcon from "@lucide/svelte/icons/printer";
	// import ReceiptIcon from "@lucide/svelte/icons/receipt";
	// import SaveIcon from "@lucide/svelte/icons/save";
	// import SquarePenIcon from "@lucide/svelte/icons/square-pen";

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

			<Card.Root class="">
				<Card.Content>
					<div class="grid grid-col-2">
						<!-- Quotation Header: START -->
						<div class="border-b border-gray-200 flex flex-row items-center justify-between px-4 py-4">
							<div class="flex gap-4">
								<div id="quotation-id" class="flex flex-row items-center">
									<Receipt class="mr-2" />
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
								<Button variant="default" size="sm" onclick={() => alert('implement save...')}>
									<Save />
									<span class="hidden lg:inline">Save Changes</span>
								</Button>
								<Button variant="secondary" size="sm" onclick={() => alert('implement print...')}>
									<Printer />
									<span class="hidden lg:inline">Print</span>
								</Button>
								<Button variant="secondary" size="sm" onclick={() => window.location = '/app/quotations'}>
									<ArrowLeft />
									<span class="hidden lg:inline">Back to list</span>
								</Button>
							</div>
						</div>
						<!-- Quotation Header: END -->
						
						<div class="grid grid-cols-[320px_1fr] border-b border-gray-200 items-start">
							<!-- Quotation Sidebar: START -->
							<div class="grid px-5 pt-5 pb-9 gap-9">
								<!-- <div class="rounded-md bg-accent/20 px-3 py-2">
									<div class="flex items-center justify-between w-full">
										<span class="text-sm text-foreground font-normal">Total Amount</span>
										<a href="." target="_self" class="text-xs font-normal underline text-blue-500 hover:text-blue-700">Details</a>
									</div>
									<span class="text-2xl text-foreground font-bold">2,480.00</span>
								</div> -->

								<!-- Client Details: START -->
								<div class="bg-white rounded-md border-transparent font-medium grid gap-2">
									<!-- <div class="flex items-center justify-between"> -->
										<span class="text-sm text-foreground font-semibold">Client Details</span>
										<!-- <a href="." target="_self" class="text-sm font-medium underline text-blue-500 hover:text-blue-700">Change</a> -->
									<!-- </div> -->
									<Separator />
									<Select.Root>
										<Select.Trigger class="w-full">{quotation.clients.first_name} {quotation.clients.last_name}</Select.Trigger>
									</Select.Root>
									<div class="flex gap-3 items-center mt-2">
										<!-- <div class="p-2 rounded-full bg-gray-200"> -->
											<Phone size={16}/>
										<!-- </div> -->
										<span class="text-xs font-normal">{quotation.clients.phone}</span>
									</div>
									<div class="flex gap-3 items-center mt-1">
										<!-- <div class="p-2 rounded-full bg-gray-200"> -->
											<Mail size={16}/>
										<!-- </div> -->
										<span class="text-sm font-normal">marlonsvillarama12345@gmail.com</span>
									</div>
									<div class="flex gap-3 items-center mt-1">
										<!-- <div class="p-2 rounded-full bg-gray-200"> -->
											<!-- <Mail size={16}/> -->
											<div class="w-[16px]"></div>
										<!-- </div> -->
										<Button variant="secondary" class="px-2 py-1 text-xs rounded-xs"
											 onclick={() => alert('implement email to client...')}
										>
											Email to client
										</Button>
									</div>
								</div>
								<!-- Client Details: END -->

								<!-- Service Address: START -->
								<div class="bg-white rounded-md border-transparent font-medium grid gap-2">
									<span class="text-sm text-foreground font-semibold">Service Address</span>
									<Separator />
									<p class="text-sm">
										123 Bansalangin Street<br/>
										Brgy. Bungad<br/>
										Quezon City, NCR
									</p>
									<a href="." target="_self" class="text-xs font-normal underline text-blue-500 hover:text-blue-700">Change Address</a>
									<!-- Popover -->
								</div>
								<!-- Service Address: END -->

								<!-- Sales Channel: START -->
								<div class="bg-white rounded-md border-transparent font-medium grid gap-2">
									<span class="text-sm text-foreground font-semibold">Sales Channel</span>
									<Separator />
									<div class="flex gap-3 items-center mt-2">
										<!-- <div class="p-2 rounded-full bg-gray-200"> -->
											<User size={16}/>
										<!-- </div> -->
										<span class="text-sm font-normal">Charles Madrid</span>
									</div>
									<div class="flex gap-3 items-center mt-2">
										<!-- <div class="p-2 rounded-full bg-gray-200"> -->
											<Instagram size={16}/>
										<!-- </div> -->
										<span class="text-sm font-normal">Instagram</span>
									</div>
									<!-- Popover -->
								</div>
								<!-- Sales Channel: END -->
							</div>
							<!-- Quotation Sidebar: END -->

							<!-- Quotation Content: START -->
							<div class="grid gap-9 px-5 pt-5 pb-9 border-l border-gray-200 items-start">
								<!-- Services summary: START -->
								<div class="grid grid-cols-2 gap-8 items-start">
									<!-- Totals: START -->
									<div class="grid rounded-md bg-accent/20 px-3 py-2 gap-3 w-[250px]">
										<!-- <div class="flex flex-col gap-4 w-full"> -->
											<div class="flex flex-row items-center justify-between text-sm">
												<span class="text-sm">Subtotal</span>
												<span class="font-semibold">1,000.00</span>
											</div>
											<div class="flex flex-row items-center justify-between text-sm">
												<span class="text-sm">VAT (12%)</span>
												<span class="font-semibold">120.00</span>
											</div>
											<div class="flex flex-row items-center justify-between text-sm">
												<span class="text-sm">Discounts</span>
												<span class="font-semibold">-300.00</span>
											</div>
											<Separator class="bg-accent" />
											<div class="flex flex-row items-center justify-between text-2xl">
												<span class="text-sm">TOTAL</span>
												<span class="font-semibold">820.00</span>
											</div>
										<!-- </div> -->
										<!-- <div class="flex items-center justify-between">
											<span class="text-sm text-foreground font-normal">Total Amount</span>
											<a href="." target="_self" class="text-xs font-normal underline text-blue-500 hover:text-blue-700">Details</a>
										</div>
										<span class="text-2xl text-foreground font-bold">2,480.00</span> -->
									</div>
									<!-- Totals: END -->

									<div class="border w-full">right content</div>
								</div>
								<!-- Services summary: END -->

								<!-- Services list: START -->
								<div class="grid grid-cols-2 gap-8 items-start">
								<!-- <div class="bg-white rounded-md border-transparent font-medium grid gap-2"> -->
									<div class="flex items-center justify-between w-full pb-2">
										<span class="text-sm text-foreground font-semibold">Services</span>
										<Button variant="secondary" class="px-3 py-[2px] text-xs font-normal"
											onclick={() => window.alert('implement add item...')}
										>
											<Plus size={16} /> Add service
										</Button>
									</div>
									<div class="flex items-center justify-between w-full pb-2">
										<span class="text-sm text-foreground font-semibold">Things To Bring</span>
										<Button variant="outline" disabled={true} class="text-white px-3 py-[2px] text-xs font-normal"
											onclick={() => window.alert('implement add item...')}
										>
											<Plus size={16} /> Add service
										</Button>
									</div>
								</div>
								<!-- Services list: START -->
							</div>
							<!-- Quotation Content: END -->

							<!-- <div class="q-header grid gap-8">
								<QuotationSummary class="summary" { data } />
								<Separator />
								<QuotationClientDetails class="client" { data } />
								<QuotationTotals class="totals" { data } />
							</div> -->
						</div>
						<!-- <div class="grid grid-cols-[1fr_1fr_1fr] border-b-1 border-r-gray-300">
							details
						</div> -->
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