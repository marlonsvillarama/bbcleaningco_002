<script>
	import data from "./data.js";
	import Button from "@/components/ui/button/button.svelte";
	// import PlusIcon from "@tabler/icons-svelte/icons/plus";
	import DataTable from "$lib/components/data-table/orders/data-table.svelte";

	// let crumbs = [
	// 	{
	// 		text: 'Quotations',
	// 		url: '/app/quotations'
	// 	}
	// ];
	// let data = [];
</script>

<div class="grid gap-4 px-4">
	<div class="border-b border-gray-200 flex flex-row items-center justify-between pt-2 pb-2">
		<h1 class="text-[1.35rem] text-foreground-dark font-semibold">Job Orders</h1>
		<Button variant="default" size="sm" onclick={() => window.location = '/app/dispatch'}>
			<!-- <PlusIcon /> -->
			<span class="hidden lg:inline">Go to Dispatch</span>
		</Button>
	</div>

	<DataTable {data} />
</div>
