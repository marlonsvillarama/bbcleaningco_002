<script>
    import Button from "@/components/ui/button/button.svelte";
</script>

<div class="grid gap-2">
    <div class="flex items-center justify-between w-full border-b-2 border-gray-200 pb-2 mb-2">
        <span class="text-sm text-foreground font-semibold">Things To Bring</span>
        <Button variant="outline" disabled={true} class="text-white px-3 py-[2px] text-xs font-normal"></Button>
    </div>

    <table class="text-sm">
        <tbody>
            <tr class="border-b-1 border-gray-100">
                <td class="py-1 text-clip text-top font-extralight">Domex (1L bottle)</td>
                <td class="text-right py-1 min-w-[70px] align-top font-bold">2</td>
            </tr>
            <tr class="border-b-1 border-gray-100">
                <td class="py-1 text-clip text-top font-extralight">Mop</td>
                <td class="text-right py-1 min-w-[70px] align-top font-bold">1</td>
            </tr>
            <tr class="border-b-1 border-gray-100">
                <td class="py-1 text-clip text-top font-extralight">Polisher</td>
                <td class="text-right py-1 min-w-[70px] align-top font-bold">1</td>
            </tr>
            <tr class="border-b-1 border-gray-100">
                <td class="py-1 text-clip text-top font-extralight">Sponge</td>
                <td class="text-right py-1 min-w-[70px] align-top font-bold">1 box</td>
            </tr>
        </tbody>
    </table>
</div>