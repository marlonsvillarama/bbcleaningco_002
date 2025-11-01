<script>
	import data from "./data.js";
    import * as Select from "@/components/ui/select/index";
	import SiteHeader from "$lib/components/layouts/dashboard-01/site-header.svelte";
	import SectionCards from "$lib/components/layouts/dashboard-01/section-cards.svelte";
	import ChartAreaInteractive from "$lib/components/layouts/dashboard-01/chart-area-interactive.svelte";
	import DataTable from "$lib/components/layouts/dashboard-01/data-table.svelte";

	let regions = [
		{ value: '1', text: 'NCR' },
		{ value: '2', text: 'Cebu' },
		{ value: '3', text: 'Davao' },
		{ value: '4', text: 'North Luzon' },
		{ value: '5', text: 'South Luzon' },
	];

	let selectedRegion = $state('4');
	const triggerRegion = $derived(
		regions.find((v) => selectedRegion === v.value)?.text ?? "--"
	);
</script>

<!-- <SiteHeader title='Dashboard' /> -->
<div class="flex flex-1 flex-col">
	<div class="@container/main flex flex-1 flex-col gap-2">
		<div class="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
			<div
				class="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-white *:data-[slot=card]:shadow-md flex items-center justify-between gap-4 px-4 lg:px-6"
			>
				<h1 class="text-gray-700 text-xl font-semibold">Dashboard</h1>
				<div class="flex gap-2 items-center">
					<h1 class="text-fgray-900 font-medium">Region:</h1>
					<Select.Root type="single" bind:value={selectedRegion}>
						<Select.Trigger class="w-[160px]">{triggerRegion}</Select.Trigger>
						<Select.Content>
							{#each region as region}
								<Select.Item value={region.value} label={region.text}>{region.text}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
			</div>
			<SectionCards />
			<div class="px-4 lg:px-6">
				<ChartAreaInteractive />
			</div>
			<DataTable {data} />
		</div>
	</div>
</div>
