<script>
    import QuotationAuditTrail from "./quotation-audit-trail.svelte";
    import QuotationDispatchDetails from "./quotation-dispatch-details.svelte";
    import QuotationPaymentHistory from "./quotation-payment-history.svelte";
    import QuotationServiceList from "./quotation-service-list.svelte";
    import QuotationStatus from "./quotation-status.svelte";
    import QuotationThingsToBring from "./quotation-things-to-bring.svelte";
    import QuotationTotals from "./quotation-totals.svelte";
    import QuotationSidebarChannel from "../sidebar/quotation-sidebar-channel.svelte";

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

    let views = [
		{
			id: "items",
			label: "Services",
			badge: 0,
		},
		{
			id: "dispatch",
			label: "Dispatch",
			badge: 3,
		},
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

<!-- Implement tabs -->

<!-- <div class="grid gap-12 px-6 pt-6 pb-12 border-l border-gray-200 min-h-[500px]"> -->
<div class="grid grid-cols-[320px_1fr] pb-8 gap-5 items-start">
    <!-- <div class="grid grid-rows-2 gap-6 xl:grid-rows-none xl:grid-cols-2 xl:gap-12 items-start bg-white rounded-sm shadow-sm"> -->
    <!-- <div class="grid px-8 pt-6 pb-8 gap-12 items-start bg-white rounded-md shadow-md"> -->
    <div class="grid gap-5 items-start">
        <QuotationTotals { data } />
        <QuotationSidebarChannel { data } />
    </div>
    
    <!-- <Card.Root>
        <Card.Header></Card.Header>
        <Card.Content></Card.Content>
    </Card.Root> -->
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
    	<!-- <Tabs.Content value="items" class="grid px-8 pt-6 pb-8 gap-12 items-start bg-white rounded-md shadow-sm"> -->
        <Tabs.Content value="items" class="grid items-start gap-4">
            <!-- <div class="grid px-8 pt-6 pb-8 gap-12 items-start bg-white rounded-md shadow-sm"> -->
                <QuotationServiceList { data } />
                <QuotationThingsToBring { data } />
            <!-- </div> -->
        </Tabs.Content>
        <Tabs.Content value="dispatch" class="grid px-8 pt-6 pb-8 gap-12 items-start bg-white rounded-md shadow-sm">
            <!-- <div class="grid grid-rows-2 px-8 pt-6 pb-8 gap-12 xl:grid-rows-none xl:grid-cols-2 xl:gap-12 items-start bg-white rounded-md shadow-sm"> -->
                <QuotationStatus { data } />
                <QuotationDispatchDetails { data } />
            <!-- </div> -->
        </Tabs.Content>
        <Tabs.Content value="payments" class="grid items-start">
            <QuotationPaymentHistory { data } />
        </Tabs.Content>
    	<!-- <Tabs.Content value="audit-trail" class="flex flex-col px-4 lg:px-6"> -->
        <Tabs.Content value="audit-trail" class="grid items-start">
            <QuotationAuditTrail { data } />
        </Tabs.Content>
    </Tabs.Root>

    <!-- <div class="grid gap-4"> -->
    <!-- <div class="grid grid-rows-2 gap-6 xl:grid-rows-none xl:grid-cols-2 xl:gap-12 items-start"> -->
    <!-- <div class="grid grid-rows-2 px-8 pt-6 pb-8 gap-12 xl:grid-rows-none xl:grid-cols-2 xl:gap-12 items-start bg-white rounded-md shadow-sm">
        <QuotationServiceList { data } />
        <QuotationThingsToBring { data } />
    </div> -->

    <!-- <div class="grid grid-rows-2 gap-6 xl:grid-rows-none xl:grid-cols-2 xl:gap-12 items-start"> -->
    <!-- <div class="grid grid-rows-2 px-8 pt-6 pb-8 gap-12 xl:grid-rows-none xl:grid-cols-2 xl:gap-12 items-start bg-white rounded-md shadow-sm">
        <QuotationStatus { data } />
        <QuotationDispatchDetails { data } />
    </div> -->

    <!-- <div class="grid grid-rows-2 gap-6 xl:grid-rows-none xl:grid-cols-2 xl:gap-12 items-start"> -->
        <!-- <QuotationAuditTrail { data } /> -->
        <!-- <QuotationThingsToBring { data } /> -->
    <!-- </div> -->

    <!-- <div class="grid grid-rows-2 gap-6 xl:grid-rows-none xl:grid-cols-2 xl:gap-12 items-start">
        <QuotationServiceList { data } />
        <QuotationThingsToBring { data } />
    </div> -->
    <!-- </div> -->
</div>
