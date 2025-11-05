<script>
    import Button from "@/components/ui/button/button.svelte";

    import {
        CircleX,
        Plus
    } from "@lucide/svelte";
</script>

<div class="grid gap-1">
    <div class="flex items-center justify-between w-full border-b-2 border-gray-200 pb-2">
        <span class="text-sm text-foreground font-semibold">Things To Bring</span>
        <Button variant="outline" disabled={true} class="text-white px-3 py-[2px] text-xs font-normal"></Button>
    </div>

    <div class="grid gap-1 text-sm">
        <div class="flex items-center justify-between border-b-1 border-gray-100 py-1">
            <span class="px-2 text-clip text-top font-extralight">Domex (1L bottle)</span>
            <div class="flex items-center gap-3">
                <span class="text-right min-w-[70px] align-top font-bold">2</span>
                <Button variant="icon" size="sm" class="border-transparent border-1 hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm"><CircleX /></Button>
            </div>
        </div>
        <div class="flex items-center justify-between border-b-1 border-gray-100 py-1">
            <span class="px-2 text-clip text-top font-extralight">Mop</span>
            <div class="flex items-center gap-3">
                <span class="text-right min-w-[70px] align-top font-bold">1</span>
                <Button variant="icon" size="sm" class="border-transparent border-1 hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm"><CircleX /></Button>
            </div>
        </div>
        <div class="flex items-center justify-between border-b-1 border-gray-100 py-1">
            <span class="px-2 text-clip text-top font-extralight">Polisher</span>
            <div class="flex items-center gap-3">
                <span class="text-right min-w-[70px] align-top font-bold">1</span>
                <Button variant="icon" size="sm" class="border-transparent border-1 hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm"><CircleX /></Button>
            </div>
        </div>
        <div class="flex items-center justify-between border-b-1 border-gray-100 py-1">
            <span class="px-2 text-clip text-top font-extralight">Sponge</span>
            <div class="flex items-center gap-3">
                <span class="text-right min-w-[70px] align-top font-bold">1 box</span>
                <Button variant="icon" size="sm" class="border-transparent border-1 hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm"><CircleX /></Button>
            </div>
        </div>
    </div>
</div>