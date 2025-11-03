<script>
    import Button from "@/components/ui/button/button.svelte";

    import {
        ArrowLeft,
        Printer,
		Receipt,
		Save
	} from "@lucide/svelte";

    let { data } = $props();
    let { quotation } = data;
</script>

<div class="border-b border-gray-200 flex flex-row items-center justify-between px-4 py-4">
    <div class="flex gap-4">
        <div id="quotation-id" class="flex flex-row items-center">
            <Receipt class="mr-2" />
            <span class="text-xl font-semibold">Quotation #{quotation.number}</span>
        </div>
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
