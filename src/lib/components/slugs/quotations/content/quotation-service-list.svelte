<script>
    import Button from "@/components/ui/button/button.svelte";

    import {
        CircleX,
        Plus
    } from "@lucide/svelte";
</script>

<div class="grid gap-1">
    <div class="flex items-center justify-between w-full border-b-2 border-gray-200 pb-2">
        <span class="text-sm text-foreground font-semibold">Services</span>
        <Button variant="secondary" class="px-3 py-[2px] text-xs font-normal"
            onclick={() => window.alert('implement add service...')}
        >
            <Plus size={16} /> Add service
        </Button>
    </div>

    <div class="grid gap-1 text-sm">
        <div class="flex items-center justify-between border-b-1 border-gray-100 py-1">
            <span class="px-2 text-clip text-top font-extralight">Deep cleaning with DTI representative</span>
            <div class="px-2 flex items-center gap-3">
                <span class="text-right min-w-[70px] align-top font-bold">500.00</span>
                <Button variant="icon" size="sm" class="border-transparent border-1 hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm"><CircleX /></Button>
            </div>
        </div>
        <div class="flex items-center justify-between border-b-1 border-gray-100 py-1">
            <span class="px-2 text-clip text-top font-extralight">Carpet shampoo</span>
            <div class="px-2 flex items-center gap-3">
                <span class="text-right min-w-[70px] align-top font-bold">300.00</span>
                <Button variant="icon" size="sm" class="border-transparent border-1 hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm"><CircleX /></Button>
            </div>
        </div>
        <div class="flex items-center justify-between border-b-1 border-gray-100 py-1">
            <span class="px-2 text-clip text-top font-extralight">Window cleaning</span>
            <div class="px-2 flex items-center gap-3">
                <span class="text-right min-w-[70px] align-top font-bold">200.00</span>
                <Button variant="icon" size="sm" class="border-transparent border-1 hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm"><CircleX /></Button>
            </div>
        </div>
    </div>
</div>
