<script>
    import {
        HandCoins,
        PenBox
    } from "@lucide/svelte";

    let { data } = $props();
    let { quotation } = data;
</script>

<div class="flex items-center gap-2">
    <div class="px-2 py-1 rounded-sm text-xs flex gap-2 items-center bg-gray-50 border-1 border-gray-300">
        <PenBox size={16} /> Pending Completion
    </div>

    <!-- <div class="px-2 py-1 rounded-sm text-xs flex gap-2 items-center bg-gray-50 border-1 border-gray-300">
        <HandCoins size={16} /> {quotation.payment_status_text}
    </div> -->
</div>
