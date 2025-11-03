<script>
    import QuotationServiceList from "./quotation-service-list.svelte";
    import QuotationStatus from "./quotation-status.svelte";
    import QuotationThingsToBring from "./quotation-things-to-bring.svelte";
    import QuotationTotals from "./quotation-totals.svelte";

    import Button from "@/components/ui/button/button.svelte";
    import Separator from "@/components/ui/separator/separator.svelte";

    import {
        PenBox,
        Plus
	} from "@lucide/svelte";

    let { data } = $props();
</script>

<div class="grid gap-9 px-5 pt-5 pb-9 border-l border-gray-200 min-h-[500px]">
    <div class="grid grid-rows-2 gap-6 xl:grid-rows-none xl:grid-cols-2 xl:gap-12 items-start">
        <QuotationTotals { data } />
        <QuotationStatus { data } />
    </div>

    <div class="grid grid-rows-2 gap-6 xl:grid-rows-none xl:grid-cols-2 xl:gap-12 items-start">
        <QuotationServiceList { data } />
        <QuotationThingsToBring { data } />
    </div>

    <div class="grid grid-rows-2 gap-6 xl:grid-rows-none xl:grid-cols-2 xl:gap-12 items-start">
        <QuotationServiceList { data } />
        <QuotationThingsToBring { data } />
    </div>

    <div class="grid grid-rows-2 gap-6 xl:grid-rows-none xl:grid-cols-2 xl:gap-12 items-start">
        <QuotationServiceList { data } />
        <QuotationThingsToBring { data } />
    </div>
</div>
