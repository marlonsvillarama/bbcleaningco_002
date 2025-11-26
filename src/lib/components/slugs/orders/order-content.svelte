<script>
    import AuditTrail from "@/components/global/audit-trail.svelte";
    // import QuotationActions from "./quotation-actions.svelte";
    // import QuotationAuditTrail from "./quotation-audit-trail.svelte";
    // import QuotationClientFlags from "./client-flags.svelte";
    import ClientFlags from "../clients/client-flags.svelte";
    import ClientNotes from "../clients/client-notes.svelte";
    import OrderNotes from "./order-notes.svelte";
    import OrderSummary from "./order-summary.svelte";
    import QuotationContact from "../quotations/quotation-contact.svelte";
    import QuotationDate from "../quotations/quotation-date.svelte";
    import QuotationDispatchDetails from "../quotations/quotation-dispatch-details.svelte";
    import QuotationLinks from "../quotations/quotation-job-order.svelte";
    import QuotationNotes from "../quotations/quotation-notes.svelte";
    import QuotationPaymentHistory from "../quotations/quotation-payment-history.svelte";
    import QuotationServiceList from "../quotations/quotation-service-list.svelte";
    // import QuotationSummary from "../quotations/quotation-summary.svelte";
    // import QuotationStatus from "./quotation-status.svelte";
    import QuotationThingsToBring from "../quotations/quotation-things-to-bring.svelte";
    import QuotationTotals from "../quotations/quotation-totals.svelte";
    import QuotationSidebarChannel from "../quotations/quotation-channel.svelte";

    import Badge from "@/components/ui/badge/badge.svelte";
    import Button from "@/components/ui/button/button.svelte";
    import Separator from "@/components/ui/separator/separator.svelte";
    import * as Card from "@/components/ui/card/index";
    import * as Tabs from "@/components/ui/tabs/index";

    import {
        PenBox,
        Plus
	} from "@lucide/svelte";

    let { data } = $props();

    let audit = [
        {
            id: '1',
            date: '20250922',
            user: 'Charles Madrid',
            note: 'Quotation created.'
        },
        {
            id: '2',
            date: '20250923',
            user: 'Charles Madriddd',
            note: 'Quotation updated.'
        },
        {
            id: '3',
            date: '20250925',
            user: 'Charles Madridz',
            note: 'Quotation updated again.'
        },
    ];

    let views = [
		{
			id: "items",
			label: "Services",
			badge: 0,
		},
		// {
		// 	id: "dispatch",
		// 	label: "Dispatch",
		// 	badge: 3,
		// },
		{
			id: "payments",
			label: "Payments",
			badge: 2,
		},
		{
			id: "audit-trail",
			label: "Audit Trail",
			badge: 2,
		},
    ];

	let view = $state("items");
	let viewLabel = $derived(views.find((v) => view === v.id)?.label ?? "Select a view");
</script>

<div class="grid gap-12 items-start">
    <div class="flex gap-12 items-start">
        <div class="grid gap-12 w-1/2">
            <OrderSummary { data } />
            
            <QuotationContact { data } />
        </div>

        <div class="grid gap-12 w-1/2">
            <ClientFlags { data } disabled={true} />

            <ClientNotes { data } disabled={true} />

            <QuotationNotes { data } disabled={true} />

            <OrderNotes { data } />
        </div>
    </div>
        
    <Tabs.Root value="items" class="w-full flex-col justify-start gap-4">
        <div class="flex items-center justify-between">
            <Tabs.List
                class="**:data-[slot=badge]:bg-muted-foreground/30 **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:px-1 @4xl/main:flex gap-4"
            >
                {#each views as view (view.id)}
                    <Tabs.Trigger value={view.id}>
                        {view.label}
                        <!-- {#if view.badge > 0}
                            <Badge variant="secondary">{view.badge}</Badge>
                        {/if} -->
                    </Tabs.Trigger>
                {/each}
            </Tabs.List>
        </div>

        <Tabs.Content value="items" class="grid items-start gap-6">
            <QuotationServiceList { data } />
            <QuotationThingsToBring { data } />
        </Tabs.Content>

        <Tabs.Content value="dispatch" class="grid gap-6 items-start">
            <QuotationDispatchDetails { data } />
        </Tabs.Content>

        <Tabs.Content value="payments" class="grid items-start">
            <QuotationPaymentHistory { data } />
        </Tabs.Content>

        <Tabs.Content value="audit-trail" class="grid items-start">
            <AuditTrail items={audit} />
        </Tabs.Content>

    </Tabs.Root>
</div>
