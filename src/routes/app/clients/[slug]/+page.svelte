<script>
	import ClientContent from "@/components/slugs/clients/client-content.svelte";
	import ClientHeader from "@/components/slugs/clients/client-header.svelte";
	import ClientSidebar from "@/components/slugs/clients/client-sidebar.svelte";
	import RecordNotFound from "@/components/global/record-not-found.svelte";

    let { data } = $props();
	let { record, statusList } = data;
</script>

<div class="grid gap-8 px-4">
	{#if record}
	<ClientHeader { data } />

	<div class="grid grid-cols-[1fr_320px] pb-8 gap-12 items-start">
		<ClientContent { data } />
		
		<ClientSidebar { data } />
	</div>
	{:else}
		<RecordNotFound backLink="/app/clients" />
	{/if}
</div>
