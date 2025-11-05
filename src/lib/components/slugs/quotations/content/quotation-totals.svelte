<script>
    import Textarea from "$lib/components/ui/textarea/textarea.svelte";
    import Separator from "@/components/ui/separator/separator.svelte";

    import {
        HandCoins
    } from "@lucide/svelte";

    let { data } = $props();
    let { quotation } = data;
</script>

<div class="w-full grid gap-1border">
    <div class="grid px-3 py-2 gap-3 w-[320px]">
        <div class="flex flex-row items-center justify-between text-sm">
            <span class="text-sm">Subtotal</span>
            <span class="">1,000.00</span>
        </div>

        <div class="flex flex-row items-center justify-between text-sm">
            <span class="text-sm">VAT (12%)</span>
            <span class="">120.00</span>
        </div>

        <div class="flex flex-row items-center justify-between text-sm">
            <span class="text-sm">Discounts</span>
            <span class="">-300.00</span>
        </div>

        <Separator class="bg-accent" />

        <div class="flex flex-row items-center justify-between text-sm">
            <span class="text-sm">TOTAL</span>
            <span class="font-semibold">820.00</span>
        </div>

        <div class="flex flex-row items-center justify-between text-sm">
            <span class="text-sm">Downpayment</span>
            <span class="font-semibold">620.00</span>
        </div>
    </div>

    <div class="px-3 py-2 rounded-md bg-accent/20 w-[320px]">
        <div class="flex flex-row items-center justify-between">
            <span class="text-sm">Balance</span>
            <span class="text-lg font-semibold">200.00</span>
        </div>
    </div>
</div>