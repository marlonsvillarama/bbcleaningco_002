<script>
	import AppSidebar from "@/components/layouts/sidebar-07/app-sidebar.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";

    let { children } = $props();
</script>

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<div class="flex flex-col gap-4 px-4 py-4 py-4 md:gap-6">
			{@render children()}
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>