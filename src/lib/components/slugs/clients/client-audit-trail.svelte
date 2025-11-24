<script>
    import Button from "@/components/ui/button/button.svelte";
</script>

<div class="grid gap-1">
    <div class="flex items-center justify-between w-full border-b-2 border-gray-200 pb-2 mb-2">
        <span class="text-sm text-foreground font-semibold">Audit Trail</span>
        <Button variant="outline" disabled={true} class="text-white px-3 py-[2px] text-xs font-normal"></Button>
    </div>

    <div class="grid gap-1 text-sm">
        <div class="flex items-center border-b-1 border-gray-100 py-1 font-light">
            <span class="px-2 w-[250px]">August 22, 2025</span>
            <span class="min-w-[300px]">Charles Madrid</span>
            <span class="">Client created</span>
        </div>
    </div>
</div>