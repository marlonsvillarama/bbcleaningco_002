<script>
    import * as Card from "@/components/ui/card/index";
    import Separator from "@/components/ui/separator/separator.svelte";
    import Textarea from "$lib/components/ui/textarea/textarea.svelte";

    let { data } = $props();
</script>

<div class="bg-white rounded-md border-none font-medium grid gap-2 w-full">
    <span class="text-sm text-foreground font-semibold">Order Notes</span>

    <!-- <Separator /> -->
    
<!-- <div class="grid gap-2"> -->
    <!-- <div class="flex items-center justify-between w-full border-b-2 border-gray-200 pb-2">
        <span class="text-sm text-foreground font-semibold">Quotation Notes</span>
        <Button variant="outline" disabled={true} class="text-white px-3 py-[2px] text-xs font-normal"></Button>
    </div> -->

    <!-- <Field.Field class=""> -->
        <!-- <Field.Label for="notes">Customer Notes</Field.Label> -->
        <Textarea id="notes" class="resize-none overflow-auto h-[150px]"></Textarea>
    <!-- </Field.Field> -->
</div>

<!-- <Card.Root class="w-full">
    <Card.Header>
        <Card.Title>Customer Notes</Card.Title>
    </Card.Header>
    <Card.Content class="p-6 pt-2">
        <Textarea id="notes" class="resize-none overflow-y-auto h-[120px]" />
    </Card.Content>
</Card.Root> -->

<!-- <Card title="Notes" padded=false>
    <Textarea class="resize-none w-full" placeholder="Enter customer notes here" rows="6">
        {data.notes || ''}
    </Textarea>
</Card> -->