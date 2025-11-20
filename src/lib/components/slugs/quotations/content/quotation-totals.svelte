<script>
    import Button from "@/components/ui/button/button.svelte";
    import Textarea from "$lib/components/ui/textarea/textarea.svelte";
    import Separator from "@/components/ui/separator/separator.svelte";
    import * as Card from "@/components/ui/card/index";

    import {
        // DollarSign,
        HandCoins
    } from "@lucide/svelte";

    let { data } = $props();
    let { quotation } = data;
</script>

<!-- <div class="w-full grid gap-1 px-6 pt-5 pb-7 bg-white rounded-md shadow-md"> -->
    <!-- <div class="flex items-center justify-between w-full border-b-2 border-gray-200 pb-2">
        <span class="text-sm text-foreground font-semibold">Totals</span>
        <Button disabled={true} variant="link" class="px-3 py-[2px] text-xs font-normal text-white"
            onclick={() => alert('implement pay balance...')}
        >
            <DollarSign /> Pay balance
        </Button>
    </div> -->
    
<Card.Root>
	<Card.Header>
		<Card.Title>Summary</Card.Title>
	</Card.Header>

    <Separator />

	<Card.Content class="grid gap-2 ">
	<!-- <Card.Content class="grid gap-2 px-6 pt-3 pb-7 border"> -->
    <!-- <div class="grid px-3 py-2 gap-3 w-[320px]"> -->
    <div class="grid gap-3">
        <div class="flex flex-row items-center justify-between text-sm">
            <span class="text-sm">Subtotal</span>
            <span class="">1,000.00</span>
        </div>

        <div class="flex flex-row items-center justify-between text-sm">
            <span class="text-sm">VAT (12%)</span>
            <span class="">120.00</span>
        </div>

        <div class="flex flex-row items-center justify-between text-sm">
            <span class="text-sm">Discounts</span>
            <span class="">-300.00</span>
        </div>

        <Separator class="bg-accent" />

        <div class="flex flex-row items-center justify-between text-sm">
            <span class="text-sm">TOTAL</span>
            <span class="font-semibold">820.00</span>
        </div>

        <div class="flex flex-row items-center justify-between text-sm">
            <span class="text-sm">Downpayment</span>
            <span class="font-semibold">620.00</span>
        </div>
    </div>

    <div class="px-3 py-2 rounded-md bg-accent/20">
        <div class="flex flex-row items-center justify-between">
            <span class="text-sm">Balance</span>
            <span class="text-lg font-semibold">200.00</span>
        </div>
    </div>
    </Card.Content>

</Card.Root>
<!-- </div> -->