<script>
    import Button from "@/components/ui/button/button.svelte";
    import Checkbox from "@/components/ui/checkbox/checkbox.svelte";

    import {
        ArrowLeft,
        Contact,
        HandCoins,
        PenBox,
        Printer,
		Receipt,
		Save
	} from "@lucide/svelte";

    let { data } = $props();
    // let { client } = data;
</script>

<div class="border-b border-gray-200 flex flex-row items-center justify-between px-4 py-4">
    <div class="flex gap-4">
        <div id="quotation-id" class="flex flex-row items-center">
            <Contact class="mr-2" />
            <span class="text-xl font-semibold">{data.last_name}, {data.first_name}</span>
        </div>
        <div class="flex items-center gap-2">
            <div class="px-3 py-1 rounded-md text-sm flex gap-2 items-center bg-accent/50 font-semibold">
                Hibernating
            </div>
            <div class="px-3 py-1 rounded-md text-sm flex gap-2 items-center bg-accent/50 font-semibold">
                VIP
            </div>
            <div class="px-3 py-1 rounded-md text-sm flex gap-2 items-center bg-red-500 text-white font-semibold">
                Overdue Balance
            </div>
            <div class="px-3 py-1 rounded-md text-sm flex gap-2 items-center bg-red-500 text-white font-semibold">
                Banned 
            </div>
        </div>
    </div>

    <div class="flex gap-4 items-center">
        <Button variant="default" size="sm" onclick={() => alert('implement save...')}>
            <Save />
            <span class="hidden lg:inline">Save Changes</span>
        </Button>

        <!-- <Button variant="secondary" size="sm" onclick={() => alert('implement print...')}>
            <Printer />
            <span class="hidden lg:inline">Print</span>
        </Button> -->
        
        <Button variant="secondary" size="sm" onclick={() => window.location = '/app/clients'}>
            <ArrowLeft />
            <span class="hidden lg:inline">Back to list</span>
        </Button>
    </div>
</div>
