<script>
    import Button from "@/components/ui/button/button.svelte";
    import Checkbox from "@/components/ui/checkbox/checkbox.svelte";
    import ClientActions from "./client-actions.svelte";
    import ClientStatus from "./client-status.svelte";

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

<!-- <div class="border-b border-gray-200 flex flex-row items-center justify-between px-4 py-4"> -->
<div class="border-b border-gray-200 flex flex-row items-center justify-between pt-2 pb-2">
    <div class="flex gap-4">
        <div id="quotation-id" class="flex flex-row gap-4 items-center">
            <!-- <Contact class="mr-2" /> -->
            <span class="text-xl font-semibold">{data.last_name}, {data.first_name}</span>

            <!-- Status -->
            <ClientStatus { data } />
        </div>
    </div>

    <ClientActions { data } />

    <!-- <div class="flex gap-4 items-center">
        <Button variant="default" size="sm" onclick={() => alert('implement save...')}>
            <Save />
            <span class="hidden lg:inline">Save Changes</span>
        </Button>
        
        <Button variant="secondary" size="sm" onclick={() => window.location = '/app/clients'}>
            <ArrowLeft />
            <span class="hidden lg:inline">Back to list</span>
        </Button>
    </div> -->
</div>
