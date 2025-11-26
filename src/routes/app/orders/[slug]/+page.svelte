<script>
	import OrderContent from "@/components/slugs/orders/order-content.svelte";
    import OrderHeader from "@/components/slugs/orders/order-header.svelte";
	import OrderSidebar from "@/components/slugs/orders/order-sidebar.svelte";

	let { data } = $props();
</script>

<div class="grid gap-8 px-4">
	<OrderHeader { data } />

	<div class="grid grid-cols-[1fr_320px] pb-8 gap-12 items-start">
		<OrderContent { data } />

		<OrderSidebar { data } />
	</div>
</div>
