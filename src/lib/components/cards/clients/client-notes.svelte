<script>
    import Card from "$lib/components/global/card.svelte";

    import Textarea from "$lib/components/ui/textarea/textarea.svelte";

    let { data } = $props();
</script>

<Card title="Notes" padded=false>
    <Textarea class="resize-none w-full" placeholder="Enter customer notes here" rows="6">
        {data.notes || ''}
    </Textarea>
</Card>