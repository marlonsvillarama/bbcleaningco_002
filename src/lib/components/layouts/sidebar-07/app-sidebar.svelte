<script>
	import { getContext } from "svelte";
	import {
		BadgeDollarSign,
		BrushCleaning,
		CalendarDays,
		ChartNoAxesCombined,
		CircleGauge,
		ContactRound,
		HelpCircle,
		Home,
		IdCardLanyard,
		List,
		Mail,
		PersonStanding,
		Phone,
		Receipt,
		Settings,
		ShoppingCart,
		User,
		UsersRound
	} from "@lucide/svelte";
	import InnerShadowTopIcon from "@tabler/icons-svelte/icons/inner-shadow-top";
	import ListDetailsIcon from "@tabler/icons-svelte/icons/list-details";
	import ReportIcon from "@tabler/icons-svelte/icons/report";
	import SearchIcon from "@tabler/icons-svelte/icons/search";
	import UsersIcon from "@tabler/icons-svelte/icons/users";
	import NavQuickLinks from "./nav-quicklinks.svelte";
	import NavMain from "./nav-main.svelte";
	import NavSecondary from "./nav-secondary.svelte";
	import NavRecents from "./nav-recents.svelte";
	import NavUser from "./nav-user.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import Separator from "@/components/ui/separator/separator.svelte";
	import Logo from "$lib/images/busy-bee.svg";
	
	const data = {
		navMain: [
			{
				title: "Home",
				url: "/app",
				icon: Home,
			},
			{
				title: "Clients",
				url: "/app/clients",
				icon: ContactRound,
				allow: { clients: 3 }
			},
			{
				title: "Quotations",
				url: "/app/quotations",
				icon: Receipt,
				allow: { quotations: 3 }
			},
			{
				title: "Job Orders",
				url: "/app/orders",
				icon: BrushCleaning,
				allow:{ orders: 3 }
			},
			{
				title: "Dispatch",
				url: "/app/dispatch",
				icon: CalendarDays,
				allow: { orders: 3 }
			},
			{
				title: "Employees",
				url: "/app/employees",
				icon: User,
				allow: {
					employees: 3,
					teams: 3
				}
			},
			// {
			// 	title: "Teams",
			// 	url: "/app/teams",
			// 	icon: UsersRound,
			// 	allow: { teams: 3 }
			// },
			{
				title: "Inventory",
				url: "/app/inventory",
				icon: ShoppingCart,
				allow: {
					services: 3,
					items: 3,
					vehicles: 3
				}
			},
			{
				title: "Reports",
				url: "/app/reports",
				icon: ChartNoAxesCombined,
			},
			{
				title: "Global Lists",
				url: "/app/lists",
				icon: List,
			},
		],
		navSecondary: [
			{
				title: "Settings",
				url: "/app/admin",
				icon: Settings,
				allow: { global_settings: 7 }
			},
			{
				title: "Help",
				url: "/app/help",
				target: "_blank",
				icon: HelpCircle,
			},
		],
		quickLinks: [
			{
				name: "New Inquiry",
				url: "/app/inquiries?new",
				icon: Phone,
				allow: { quotations: 4 }
			},
			{
				name: "New Client",
				url: "/app/clients?new",
				icon: ContactRound,
				allow: { clients: 4 }
			},
		],
	};

	let { ...restProps } = $props();
	const USER_ROLES = getContext('USER_ROLES');
	const CURRENT_ROLE = getContext('USER_ROLE');
	// console.log('*** SIDEBAR CURRENT_ROLE', CURRENT_ROLE);

	const getMenuItemsForRole = (items) => {
		return items.filter(item => {
			if (!item.allow) return true;

			let isValid = false;
			for (const [k, v] of Object.entries(item.allow)) {
				let roleValue = parseInt(CURRENT_ROLE[k]);
				if (isNaN(roleValue)) continue;
				if (roleValue >= v) isValid = true;
			}

			return isValid;
		});
	};
</script>

<Sidebar.Root collapsible="offcanvas" {...restProps}>
	<Sidebar.Header>
		<div class="w-full flex justify-center bg-accent">
			<img src={Logo} alt="Busy Bee Cleaning Co." class="w-[62%]" />
		</div>
	</Sidebar.Header>
	<Sidebar.Content>
		<NavMain items={getMenuItemsForRole(data.navMain)} />
		<!-- <Separator /> -->
		<!-- <NavQuickLinks items={getMenuItemsForRole(data.quickLinks)} />
		<Separator /> -->
		<NavRecents />
		<NavSecondary items={getMenuItemsForRole(data.navSecondary)} class="mt-auto" />
	</Sidebar.Content>
	<Sidebar.Footer>
		<NavUser user={data.user} />
	</Sidebar.Footer>
</Sidebar.Root>