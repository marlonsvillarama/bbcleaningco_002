<script>
	import { getContext } from "svelte";
	import data from "./data.js";
	import Button from "@/components/ui/button/button.svelte";
	import * as ButtonGroup from "@/components/ui/button-group/index.js"
    import * as Select from "@/components/ui/select/index";
	import SiteHeader from "$lib/components/layouts/dashboard-01/site-header.svelte";
	import SectionCards from "$lib/components/layouts/dashboard-01/section-cards.svelte";
	import ChartAreaInteractive from "$lib/components/layouts/dashboard-01/chart-area-interactive.svelte";
	import DataTable from "$lib/components/layouts/dashboard-01/data-table.svelte";
	import TaskList from "@/components/global/task-list.svelte";

	import {
		ChartNoAxesCombined,
		List
	} from "@lucide/svelte";

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

	const USER_CONTEXT = getContext('USER_CONTEXT');
	const USER_ROLE = getContext('USER_ROLE');
	console.log('+PAGE USER settings', USER_CONTEXT.settings);
	let homeView = $state(USER_CONTEXT.settings.home_view || 'dash');
	console.log('+PAGE USER_ROLE =>', USER_ROLE);
</script>

<!-- <SiteHeader title='Dashboard' /> -->
<div class="flex flex-1 flex-col">
	<!-- <div class="flex flex-col gap-4 px-4 py-4 py-4 md:gap-6"> -->
	<div class="@container/main flex flex-1 flex-col gap-2">
		<!-- <div class="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
			<div
				class="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-white *:data-[slot=card]:shadow-md flex items-center justify-between gap-4 px-4 lg:px-6"
			> -->
		<div class="grid grid-rows-[auto_1fr] gap-4 px-4 border-0 border-red-500">
			<div class="border-b border-gray-200 flex flex-row items-center justify-between pt-2 pb-2">
				<div class="flex items-center gap-4">
					<!-- <h1 class="text-gray-700 text-xl font-semibold">Home</h1> -->
					<ButtonGroup.Root class="shadow-sm rounded-sm">
						<Button variant="outline" size="sm" onclick={() => homeView = 'dash'}
							class="border rounded-sm bg-{homeView === 'dash' ? 'accent' : 'transparent'} hover:bg-accent/30">
							<List />
						</Button>
						<Button variant="outline" size="sm" onclick={() => homeView = 'task'}
							class="border rounded-sm bg-{homeView === 'task' ? 'accent' : 'transparent'} hover:bg-accent/30">
							<ChartNoAxesCombined />
						</Button>
					</ButtonGroup.Root>
				</div>
				<div class="flex gap-2 items-center text-sm">
					{#if homeView === 'dash'}
					<span class="text-sm text-gray-900 font-medium">Region:</span>
					<Select.Root type="single" bind:value={selectedRegion}>
						<Select.Trigger class="w-[160px]">{triggerRegion}</Select.Trigger>
						<Select.Content>
							{#each region as region}
								<Select.Item value={region.value} label={region.text}>{region.text}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
					{/if}
				</div>
			</div>

			<div class="grid gap-4 relative">
				{#if homeView === 'dash'}
					<SectionCards />
					<ChartAreaInteractive />
					<DataTable {data} />
				{:else}
					<!-- Task list goes here... -->
					<TaskList />
				{/if}
			</div>
		</div>
	</div>
</div>
