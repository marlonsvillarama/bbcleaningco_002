<script>
    // import QuotationAuditTrail from "./quotation-audit-trail.svelte";
    // import QuotationDispatchDetails from "./quotation-dispatch-details.svelte";
    // import QuotationPaymentHistory from "./quotation-payment-history.svelte";
    // import QuotationServiceList from "./quotation-service-list.svelte";
    // import QuotationStatus from "./quotation-status.svelte";
    // import QuotationThingsToBring from "./quotation-things-to-bring.svelte";
    // import QuotationTotals from "./quotation-totals.svelte";

    import ClientAddressList from "./client-address-list.svelte";
    import ClientAlternateDetails from "./client-alternate-details.svelte";
    import ClientAuditTrail from "./client-audit-trail.svelte";
    import ClientPrimaryDetails from "./client-primary-details.svelte";
    import ClientQuotations from "./client-quotations.svelte";

    import Button from "@/components/ui/button/button.svelte";
    import Separator from "@/components/ui/separator/separator.svelte";

    import {
        PenBox,
        Plus
	} from "@lucide/svelte";

    let { data } = $props();
</script>

<!-- <div class="grid gap-12 px-6 pt-6 pb-12 items-start"> -->
<div class="grid gap-12 px-6 pt-6 pb-12 border-l border-gray-200 min-h-[500px]">
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
    <ClientAddressList { data } />

    <ClientQuotations { data } />

    <ClientAuditTrail { data } />
        <!-- <QuotationAuditTrail { data } /> -->
        <!-- <QuotationThingsToBring { data } /> -->
    <!-- </div> -->

    <!-- <div class="grid grid-rows-2 gap-6 xl:grid-rows-none xl:grid-cols-2 xl:gap-12 items-start">
        <QuotationServiceList { data } />
        <QuotationThingsToBring { data } />
    </div> -->
</div>
