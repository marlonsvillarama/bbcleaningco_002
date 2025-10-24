<script>
    import * as Card from "@/components/ui/card/index";

    import Textarea from "$lib/components/ui/textarea/textarea.svelte";

    let { data } = $props();
</script>

<Card.Root class="w-full">
    <Card.Header>
        <Card.Title>Customer Notes</Card.Title>
    </Card.Header>
</Card.Root>

<!-- <Card title="Notes" padded=false>
    <Textarea class="resize-none w-full" placeholder="Enter customer notes here" rows="6">
        {data.notes || ''}
    </Textarea>
</Card> -->