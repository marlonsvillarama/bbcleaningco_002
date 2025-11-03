<script>
    import Textarea from "$lib/components/ui/textarea/textarea.svelte";
    import Separator from "@/components/ui/separator/separator.svelte";

    import {
        HandCoins
    } from "@lucide/svelte";

    let { data } = $props();
    let { quotation } = data;
</script>

<div class="w-full grid gap-1">
    <div class="grid px-3 py-2 gap-3 w-[250px]">
        <div class="flex flex-row items-center justify-between text-sm">
            <span class="text-sm">Subtotal</span>
            <span class="font-semibold">1,000.00</span>
        </div>

        <div class="flex flex-row items-center justify-between text-sm">
            <span class="text-sm">VAT (12%)</span>
            <span class="font-semibold">120.00</span>
        </div>

        <div class="flex flex-row items-center justify-between text-sm">
            <span class="text-sm">Discounts</span>
            <span class="font-semibold">-300.00</span>
        </div>

        <Separator class="bg-accent" />

        <div class="flex flex-row items-center justify-between">
            <span class="text-sm">TOTAL</span>
            <span class="font-semibold">820.00</span>
        </div>

        <div class="flex flex-row items-center justify-between">
            <span class="text-sm">Downpayment</span>
            <span class="font-semibold">400.00</span>
        </div>
    </div>

    <!-- <div class="flex gap-4 items-center">
        <div class="px-4 py-1 border rounded-md font-semibold text-sm flex gap-2 items-center">
            <HandCoins size={16} /> {quotation.payment_status_text}
        </div>

        <a href="." target="_self" class="text-sm font-normal underline text-blue-500 hover:text-blue-700">Post payment</a>
    </div> -->

    <div class="px-3 py-2 rounded-md bg-accent/20 w-[250px]">
        <div class="flex flex-row items-center justify-between">
            <span class="text-sm">Balance</span>
            <span class="font-semibold">820.00</span>
        </div>
    </div>
</div>