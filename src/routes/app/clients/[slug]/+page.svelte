<script>
	import ClientContent from "@/components/slugs/clients/client-content.svelte";
	import ClientHeader from "@/components/slugs/clients/client-header.svelte";
	import ClientSidebar from "@/components/slugs/clients/client-sidebar.svelte";
	import ClientTabs from "@/components/slugs/clients/client-tabs.svelte";
	import RecordNotFound from "@/components/global/record-not-found.svelte";

    let { data } = $props();
	let { record, statusList } = data;
</script>

<div class="grid gap-8 px-4 pb-8">
	{#if record}
	<ClientHeader { data } />

	<div class="grid xl:grid-cols-[3fr_1fr] gap-x-12 items-start">
		<ClientContent { data } />
		
		<ClientSidebar { data } />
	</div>
	{:else}
		<RecordNotFound backLink="/app/clients" />
	{/if}

	<ClientTabs {data} />
</div>
