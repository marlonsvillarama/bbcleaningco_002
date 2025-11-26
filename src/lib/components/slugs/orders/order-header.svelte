<script>
    import Button from "@/components/ui/button/button.svelte";
    import OrderActions from "./order-actions.svelte";
    import OrderStatus from "./order-status.svelte";

    import {
        ArrowLeft,
        HandCoins,
        Mail,
        PenBox,
        Printer,
		Receipt,
		Save
	} from "@lucide/svelte";

    let { data } = $props();
    let { order } = data;
</script>

<div class="grid gap-2">
    <div class="border-b border-gray-200 flex flex-row items-center justify-between pt-2 pb-2">
        <span class="text-[1.35rem] text-foreground-dark font-semibold">Job Order #123</span>
        <OrderActions { data } />
    </div>
    <OrderStatus { data } />
</div>
