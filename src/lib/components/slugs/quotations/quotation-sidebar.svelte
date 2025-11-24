<script>
    // import QuotationAddress from "./quotation-address.svelte";
    import QuotationChannel from "./quotation-channel.svelte";
    import QuotationSummary from "./quotation-summary.svelte";
    // import QuotationClient from "./quotation-client.svelte";
    // import QuotationDate from "./quotation-date.svelte";
    import QuotationTotals from "./quotation-totals.svelte";

    import Button from "@/components/ui/button/button.svelte";
	import Separator from "@/components/ui/separator/separator.svelte";
	import * as Card from "$lib/components/ui/card/index.js";
	import * as Select from "$lib/components/ui/select/index.js";

	import {
		ArrowLeft,
		BanknoteX,
        Mail,
        Phone
	} from "@lucide/svelte";
    import QuotationContact from "./quotation-contact.svelte";

    let { data } = $props();
</script>

<!-- <div class="grid px-3 pt-3 pb-12 gap-12 min-h-[500px] items-start bg-accent/30"> -->

<!-- <Card.Root class=""> -->
    <!-- <Card.Title class="grid grid-cols-3 gap-12 items-center px-4 py-3">
        <span>Client Details</span>
        <span>Service Date</span>
        <span>Service Address</span>
    </Card.Title> -->
    <!-- <Separator /> -->
    <!-- <Card.Content class="grid grid-cols-3 gap-12 items-start"> -->
<!-- <div class="grid grid-cols-3 gap-12 items-start"> -->
<div class="grid gap-12 items-start">

    <!-- <QuotationClient { data } /> -->
    
    <!-- <div class="grid gap-4">
        <QuotationDate { data } />
        
        <QuotationAddress { data } />
    </div> -->
    <!-- <QuotationSummary { data } /> -->

    <QuotationTotals { data } />

    <QuotationChannel { data } />

    <!-- <QuotationAddress { data } /> -->

    <!-- <QuotationContact { data } /> -->

    <!-- <div class="grid gap-8 border-none">
        <QuotationDate { data } />

        <QuotationAddress { data } />
    </div> -->

    <!-- <QuotationSidebarAddress { data } /> -->
</div>
    <!-- </Card.Content> -->
<!-- </Card.Root> -->
<!-- <div class="grid grid-cols-3 px-6 pt-5 pb-7 gap-12 items-start border-none bg-white rounded-md shadow-md"> -->
    <!-- <div class="flex flex-col flex-1 gap-9"> -->
    <!-- <QuotationSidebarClient { data } /> -->

    <!-- <div class="grid gap-8 border-none"> -->
        <!-- <QuotationSidebarDate { data } /> -->

        <!-- <QuotationSidebarAddress { data } /> -->
    <!-- </div> -->

        <!-- <QuotationSidebarAddress { data } /> -->
    <!-- <QuotationSidebarChannel { data } /> -->
    <!-- </div> -->
<!-- </div> -->
