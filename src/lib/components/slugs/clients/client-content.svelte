<script>
    // import QuotationAuditTrail from "./quotation-audit-trail.svelte";
    // import QuotationDispatchDetails from "./quotation-dispatch-details.svelte";
    // import QuotationPaymentHistory from "./quotation-payment-history.svelte";
    // import QuotationServiceList from "./quotation-service-list.svelte";
    // import QuotationStatus from "./quotation-status.svelte";
    // import QuotationThingsToBring from "./quotation-things-to-bring.svelte";
    // import QuotationTotals from "./quotation-totals.svelte";

    import AuditTrail from "@/components/global/audit-trail.svelte";
    import ClientAddressList from "./client-address-list.svelte";
    import ClientAlternateDetails from "./client-alternate-details.svelte";
    // import ClientAuditTrail from "./client-audit-trail.svelte";
    import ClientPrimaryDetails from "./client-primary-details.svelte";
    import ClientQuotations from "./client-quotations.svelte";

    import Button from "@/components/ui/button/button.svelte";
    import Separator from "@/components/ui/separator/separator.svelte";
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
            note: 'Client created.'
        },
        {
            id: '2',
            date: '20250923',
            user: 'Charles Madriddd',
            note: 'Client updated.'
        },
    ];
    
    let views = [
		{
			id: "address",
			label: "Addresses",
			badge: 0,
		},
		// {
		// 	id: "dispatch",
		// 	label: "Dispatch",
		// 	badge: 3,
		// },
		{
			id: "quotations",
			label: "Quotations",
			badge: 1,
		},
		// {
		// 	id: "job-orders",
		// 	label: "Job Orders",
		// 	badge: 2,
		// },
		{
			id: "audit-trail",
			label: "Audit Trail",
			badge: 3,
		},
    ];

	let view = $state("address");
	let viewLabel = $derived(views.find((v) => view === v.id)?.label ?? "Select a view");
</script>

<!-- <div class="grid gap-12 px-6 pt-6 pb-12 items-start"> -->
<!-- <div class="grid gap-12 px-6 pt-6 pb-12 min-h-[500px]"> -->
<div class="grid gap-12 items-start">
    <!-- <ClientPrimaryDetails { data } /> -->
    <div class="">
        <ClientPrimaryDetails { data } />
        <!-- <QuotationTotals { data } /> -->
        <!-- <QuotationPaymentHistory { data } /> -->
    </div>

    <!-- <ClientAlternateDetails { data } /> -->
    <!-- <div class="grid grid-rows-2 gap-6 xl:grid-rows-none xl:grid-cols-2 xl:gap-12 items-start"> -->
        <!-- <QuotationServiceList { data } /> -->
        <!-- <QuotationThingsToBring { data } /> -->
    <!-- </div> -->

    <!-- <div class="grid grid-rows-2 gap-6 xl:grid-rows-none xl:grid-cols-2 xl:gap-12 items-start"> -->
        <!-- <QuotationStatus { data } /> -->
        <!-- <QuotationDispatchDetails { data } /> -->
    <!-- </div> -->

    <!-- <div class="grid grid-rows-2 gap-6 xl:grid-rows-none xl:grid-cols-2 xl:gap-12 items-start"> -->

        <!-- <QuotationAuditTrail { data } /> -->
        <!-- <QuotationThingsToBring { data } /> -->
    <!-- </div> -->

    <Tabs.Root value="address" class="w-full flex-col justify-start gap-4">
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
        <!-- <Tabs.Content value="items" class="grid px-8 pt-6 pb-8 gap-12 items-start bg-white rounded-md shadow-sm"> -->
        <Tabs.Content value="address" class="grid items-start gap-6">
            <!-- <div class="grid px-8 pt-6 pb-8 gap-12 items-start bg-white rounded-md shadow-sm"> -->
                <!-- <QuotationServiceList { data } />
                <QuotationThingsToBring { data } /> -->
            <!-- </div> -->
            <ClientAddressList { data } />
        </Tabs.Content>
        <Tabs.Content value="quotations" class="grid gap-6 items-start">
            <!-- <div class="grid grid-rows-2 px-8 pt-6 pb-8 gap-12 xl:grid-rows-none xl:grid-cols-2 xl:gap-12 items-start bg-white rounded-md shadow-sm"> -->
                <!-- <QuotationNotes { data } /> -->
                <!-- <QuotationDispatchDetails { data } /> -->
            <!-- </div> -->
            <ClientQuotations { data } />
        </Tabs.Content>
        <!-- <Tabs.Content value="payments" class="grid items-start">
            <QuotationPaymentHistory { data } />
        </Tabs.Content> -->
        <!-- <Tabs.Content value="audit-trail" class="flex flex-col px-4 lg:px-6"> -->
        <Tabs.Content value="audit-trail" class="grid items-start">
            <!-- <QuotationAuditTrail { data } /> -->
            <!-- <ClientAuditTrail { data } /> -->
            <AuditTrail items={audit} />
        </Tabs.Content>
    </Tabs.Root>

    <!-- <div class="grid grid-rows-2 gap-6 xl:grid-rows-none xl:grid-cols-2 xl:gap-12 items-start">
        <QuotationServiceList { data } />
        <QuotationThingsToBring { data } />
    </div> -->
</div>
