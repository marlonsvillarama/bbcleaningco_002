<script>
    import * as Card from "@/components/ui/card/index";

    import Textarea from "$lib/components/ui/textarea/textarea.svelte";
    import Separator from "@/components/ui/separator/separator.svelte";

    let { data } = $props();
</script>

<Card.Root class="w-full border-accent bg-linear-to-b from-accent/10 to-accent/50">
    <Card.Header>
        <Card.Title>Totals</Card.Title>
    </Card.Header>
    <Card.Content class="p-6 pt-2">
        <div class="flex flex-col gap-4 w-ful">
            <div class="flex flex-row items-center justify-between text-sm">
                <span class="text-sm">Subtotal</span>
                <span class="font-semibold">1,000.00</span>
            </div>
            <div class="flex flex-row items-center justify-between text-sm">
                <span class="text-sm">VAT (12%)</span>
                <span class="font-semibold">120.00</span>
            </div>
            <div class="flex flex-row items-center justify-between text-sm">
                <span class="text-sm">Discounts</span>
                <span class="font-semibold">-300.00</span>
            </div>
            <Separator class="bg-accent" />
            <div class="flex flex-row items-center justify-between text-2xl">
                <span class="text-sm">TOTAL</span>
                <span class="font-semibold">820.00</span>
            </div>
        </div>
    </Card.Content>
</Card.Root>
