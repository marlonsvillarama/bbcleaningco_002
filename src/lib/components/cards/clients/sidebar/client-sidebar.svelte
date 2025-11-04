<script>
    import ClientFinancials from "./client-financials.svelte";
    import ClientSidebarChannel from "./client-sidebar-channel.svelte";
    // import QuotationSidebarAddress from "./quotation-sidebar-address.svelte";
    // import QuotationSidebarChannel from "./quotation-sidebar-channel.svelte";
    // import QuotationSidebarClient from "./quotation-sidebar-client.svelte";
    // import QuotationSidebarDate from "./quotation-sidebar-date.svelte";

	import * as Select from "$lib/components/ui/select/index.js";
    import Button from "@/components/ui/button/button.svelte";
	import Separator from "@/components/ui/separator/separator.svelte";

	import {
		ArrowLeft,
		BanknoteX,
        Mail,
        Phone
	} from "@lucide/svelte";

    let { data } = $props();
</script>

<div class="grid px-6 pt-6 pb-12 gap-12 items-start">
    <!-- <div class="flex flex-col flex-1 gap-9"> -->
    <!-- <QuotationSidebarClient { data } /> -->

    <!-- <QuotationSidebarDate { data } /> -->

    <!-- <QuotationSidebarAddress { data } /> -->

    <ClientFinancials { data } />

    <ClientSidebarChannel { data } />
    <!-- </div> -->
</div>
