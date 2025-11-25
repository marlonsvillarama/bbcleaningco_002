<script>
    import Badge from "@/components/ui/badge/badge.svelte";
    import Button from "@/components/ui/button/button.svelte";
    import Switch from "@/components/ui/switch/switch.svelte";

    import {
        CircleX,
        Plus
    } from "@lucide/svelte";
</script>

<div class="grid gap-1">
    <div class="flex">
        <Button variant="secondary" class="px-3 py-[2px] text-xs font-normal"
            onclick={() => window.alert('implement add client address...')}
        >
            <Plus size={16} /> Upload file
        </Button>
    </div>

    <div class="grid text-sm border-1 border rounded-sm">
        <div class="flex items-center justify-between border-b-1 border-gray-100 px-2 py-1">
            <span class="w-[400px] px-2 text-clip text-top font-extralight">Scanned_proof_of_payment.jpg</span>
            <Button variant="icon" size="sm" class="border-transparent border-1 hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm"><CircleX /></Button>
        </div>
        <div class="flex items-center justify-between border-b-1 border-gray-100 px-2 py-1">
            <span class="w-[400px] px-2 text-clip text-top font-extralight">Contract.pdf</span>
            <Button variant="icon" size="sm" class="border-transparent border-1 hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm"><CircleX /></Button>
        </div>
        <div class="flex items-center justify-between border-b-1 border-gray-100 px-2 py-1">
            <span class="w-[400px] px-2 text-clip text-top font-extralight">Contract (2).pdf</span>
            <Button variant="icon" size="sm" class="border-transparent border-1 hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm"><CircleX /></Button>
        </div>
    </div>
</div>
