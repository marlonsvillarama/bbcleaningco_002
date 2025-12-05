<script>
	import AppSidebar from "@/components/layouts/sidebar-07/app-sidebar.svelte";
	import AppSidebarAdmin from "@/components/layouts/sidebar-07/app-sidebar-admin.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import { setContext } from "svelte";

    let { children, data } = $props();
	let { user } = data;
	setContext('USER_CONTEXT', user);
	setContext('USER_ROLE', user.defaultRole);
	// console.log(`+LAYOUT USER_ROLES, type = ${Object.prototype.toString.call(user)} ==>`, user);

	// let useAdminDashboard = (user.defaultRole || {}).use_admin_dash === true;
</script>

<Sidebar.Provider>
	<!-- {#if useAdminDashboard}
		<AppSidebarAdmin />
	{:else} -->
	<AppSidebar />
	<!-- {/if} -->
	<Sidebar.Inset>
		<div class="flex flex-col gap-4 px-4 py-4 py-4 md:gap-6">
			{@render children()}
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>