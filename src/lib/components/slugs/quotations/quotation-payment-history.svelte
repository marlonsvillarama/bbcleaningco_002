<script>
    import Button from "@/components/ui/button/button.svelte";
    import Separator from "@/components/ui/separator/separator.svelte";
    import * as Card from "@/components/ui/card/index";

    import {
        DollarSign
    } from "@lucide/svelte";
</script>


<Card.Root>
    <Card.Header class="flex items-center justify-between">
        <Card.Title>Payments</Card.Title>
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
<!-- <div class="grid gap-2">
    <div class="flex items-center justify-between w-full border-b-2 border-gray-200 pb-2">
        <span class="text-sm text-foreground font-semibold">Payment History</span>
    </div> -->

        <div class="grid text-sm px-3">
            <div class="flex items-center justify-between border-b-1 border-gray-100 py-3 font-light">
                <div class="flex items-center">
                    <span class="px-2 w-[250px]">September 22, 2025</span>
                    <span class="px-2 font-bold">PMT-1001</span>
                </div>
                <span class="px-2 text-right font-bold">200.00</span>
            </div>
            <div class="flex items-center justify-between border-b-1 border-gray-100 py-3 font-light">
                <div class="flex items-center">
                    <span class="px-2 w-[250px]">September 26, 2025</span>
                    <span class="px-2 font-bold">PMT-1002</span>
                </div>
                <span class="px-2 text-right font-bold">350.00</span>
            </div>
            <div class="flex items-center justify-between border-b-1 border-gray-100 py-3 font-light">
                <div class="flex items-center">
                    <span class="px-2 w-[250px]">September 29, 2025</span>
                    <span class="px-2 font-bold">PMT-1003</span>
                </div>
                <span class="px-2 text-right font-bold">70.00</span>
            </div>
        </div>
<!-- </div> -->

    </Card.Content>
</Card.Root>