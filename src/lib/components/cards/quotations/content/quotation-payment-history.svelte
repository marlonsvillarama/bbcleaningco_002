<script>
    import Button from "@/components/ui/button/button.svelte";

    import {
        DollarSign
    } from "@lucide/svelte";
</script>

<div class="grid gap-2">
    <div class="flex items-center justify-between w-full border-b-2 border-gray-200 pb-2">
        <span class="text-sm text-foreground font-semibold">Payment History</span>
        <Button variant="secondary" class="px-3 py-[2px] text-xs font-normal"
            onclick={() => alert('implement pay balance...')}
        >
            <DollarSign /> Pay balance
        </Button>
    </div>

    <div class="grid text-sm">
        <div class="flex items-center justify-between border-b-1 border-gray-100 py-1 font-light">
            <span class="px-2 w-[250px]">September 22, 2025</span>
            <span class="px-2 text-right py-1 font-bold">200.00</span>
        </div>
        <div class="flex items-center justify-between border-b-1 border-gray-100 py-1 font-light">
            <span class="px-2 w-[250px]">September 26, 2025</span>
            <span class="px-2 text-right py-1 font-bold">350.00</span>
        </div>
        <div class="flex items-center justify-between border-b-1 border-gray-100 py-1 font-light">
            <span class="px-2 w-[250px]">September 29, 2025</span>
            <span class="px-2 text-right py-1 font-bold">70.00</span>
        </div>
    </div>
</div>