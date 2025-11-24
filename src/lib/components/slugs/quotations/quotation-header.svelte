<script>
    import Button from "@/components/ui/button/button.svelte";

    import {
        ArrowLeft,
        HandCoins,
        Mail,
        PenBox,
        Printer,
		Receipt,
		Save
	} from "@lucide/svelte";

    let { data } = $props();
    let { quotation } = data;
</script>

<!-- <div class="border-b border-gray-200 flex flex-row items-center justify-between px-4 py-4"> -->
<div class="border-b border-gray-200 flex flex-row items-center justify-between pt-2 pb-2 bg-white rounded-xs">
    <!-- <div class="flex gap-4"> -->
        <div id="quotation-id" class="flex flex-row items-center">
            <!-- <Receipt size={20} class="mr-2" /> -->
            <span class="text-[1.35rem] text-foreground-dark font-semibold">Quotation #{quotation.number}</span>
        </div>
        <!-- <div class="flex items-center gap-4">
            <div class="px-3 py-2 rounded-sm text-xs flex gap-2 items-center bg-gray-100 border-1 border-gray-200">
                <PenBox size={16} /> {quotation.status_text}
            </div>

            <div class="px-3 py-2 rounded-sm text-xs flex gap-2 items-center bg-gray-100 border-1 border-gray-200">
                <HandCoins size={16} /> {quotation.payment_status_text}
            </div>
        </div> -->
    <!-- </div> -->

    <div class="flex gap-4 items-center">
        <Button variant="default" size="sm" onclick={() => alert('implement save...')}>
            <Save />
            <span class="hidden lg:inline">Save Changes</span>
        </Button>

        <Button variant="secondary" size="sm" onclick={() => alert('implement print...')}>
            <Mail size={20} />
            <span class="hidden lg:inline">Email</span>
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
