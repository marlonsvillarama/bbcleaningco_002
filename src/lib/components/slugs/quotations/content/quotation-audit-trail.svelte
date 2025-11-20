<script>
    import Button from "@/components/ui/button/button.svelte";
    import Separator from "@/components/ui/separator/separator.svelte";
    import * as Card from "@/components/ui/card/index";
</script>

<Card.Root>
    <Card.Header class="flex items-center justify-between">
        <Card.Title>Audit Trail</Card.Title>
        <Card.Action>
            <Button variant="secondary" class="px-3 py-[2px] text-xs font-normal"
                onclick={() => alert('implement pay balance...')}
            >
            <span>Pay balance</span>
                <!-- <DollarSign size={16} /> Pay balance -->
            </Button>
        </Card.Action>
    </Card.Header>
    <Separator />
    <Card.Content>
<!-- <div class="grid gap-1">
    <div class="flex items-center justify-between w-full border-b-2 border-gray-200 pb-2 mb-2">
        <span class="text-sm text-foreground font-semibold">Audit Trail</span>
        <Button variant="outline" disabled={true} class="text-white px-3 py-[2px] text-xs font-normal"></Button>
    </div> -->

    <div class="grid text-sm px-3">
        <div class="flex items-center border-b-1 border-gray-100 py-3 font-light">
            <span class="px-2 w-[250px]">September 22, 2025</span>
            <span class="min-w-[300px]">Charles Madrid</span>
            <span class="">Quotation created</span>
        </div>
        <div class="flex items-center border-b-1 border-gray-100 py-3 font-light">
            <span class="px-2 w-[250px]">September 22, 2025</span>
            <span class="min-w-[300px]">Charles Madrid</span>
            <span class="">Quotation created</span>
        </div>
        <div class="flex items-center border-b-1 border-gray-100 py-3 font-light">
            <span class="px-2 w-[250px]">September 22, 2025</span>
            <span class="min-w-[300px]">Charles Madrid</span>
            <span class="">Quotation created</span>
        </div>
    </div>
<!-- </div> -->

    </Card.Content>
</Card.Root>