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
		IdCardLanyard,
		List,
		Mail,
		PersonStanding,
		Receipt,
		Settings,
		User,
		UsersRound
	} from "@lucide/svelte";
	import InnerShadowTopIcon from "@tabler/icons-svelte/icons/inner-shadow-top";
	import ListDetailsIcon from "@tabler/icons-svelte/icons/list-details";
	import ReportIcon from "@tabler/icons-svelte/icons/report";
	import SearchIcon from "@tabler/icons-svelte/icons/search";
	import UsersIcon from "@tabler/icons-svelte/icons/users";
	import NavDocuments from "./nav-quicklinks.svelte";
	import NavMain from "./nav-main.svelte";
	import NavSecondary from "./nav-secondary.svelte";
	import NavUser from "./nav-user.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import Separator from "@/components/ui/separator/separator.svelte";
	import Logo from "$lib/images/Last_logo2.svg";
	
	const data = {
		user: {
			name: "shadcn",
			email: "m@example.com",
			avatar: "/avatars/shadcn.jpg",
		},
		navMain: [
			{
				title: "Dashboard",
				url: "/app",
				icon: CircleGauge,
			},
			{
				title: "Quotations",
				url: "/app/quotations",
				icon: Receipt,
			},
			{
				title: "Job Orders",
				url: "/app/orders",
				icon: BrushCleaning,
			},
			{
				title: "Dispatch",
				url: "/app/dispatch",
				icon: CalendarDays,
			},
			{
				title: "Clients",
				url: "/app/clients",
				icon: ContactRound,
			},
			{
				title: "Reports",
				url: "/app/reports",
				icon: ChartNoAxesCombined,
			},
			{
				title: "Employees",
				url: "/app/employees",
				icon: User,
			},
			{
				title: "Teams",
				url: "/app/teams",
				icon: UsersRound,
			},
			{
				title: "Lists",
				url: "/app/lists",
				icon: List,
			},
		],
		navSecondary: [
			{
				title: "Settings",
				url: "/app/admin",
				icon: Settings,
			},
			// {
			// 	title: "Messages",
			// 	url: "/app/messages",
			// 	icon: Mail,
			// },
			{
				title: "Help",
				url: "/app/help",
				target: "_blank",
				icon: HelpCircle,
			},
			// {
			// 	title: "Search",
			// 	url: "#",
			// 	icon: SearchIcon,
			// },
		],
		documents: [
			{
				name: "New Quotation",
				url: "/app/quotations?new",
				icon: Receipt,
			},
			{
				name: "New Client",
				url: "/app/clients?new",
				icon: ContactRound,
			},
			/* {
				name: "New Quotation 2",
				url: "/app/quotations?new2",
				icon: Receipt,
			},
			{
				name: "New Client 2",
				url: "/app/clients?new2",
				icon: ContactRound,
			},
			{
				name: "New Quotation 3",
				url: "/app/quotations?new3",
				icon: Receipt,
			},
			{
				name: "New Client 3",
				url: "/app/clients?new3",
				icon: ContactRound,
			}, */
			// {
			// 	name: "Word Assistant",
			// 	url: "#",
			// 	icon: FileWordIcon,
			// },
		],
	};

	let { ...restProps } = $props();
</script>

<Sidebar.Root collapsible="offcanvas" {...restProps}>
	<Sidebar.Header>
		<div class="w-full flex justify-center bg-accent">
			<img src={Logo} alt="Busy Bee Cleaning Co." class="w-[62%]" />
		</div>
	</Sidebar.Header>
	<Sidebar.Content>
		<NavMain items={data.navMain} />

		<!-- <Separator /> -->

		<NavDocuments items={data.documents} />

		<!-- <Separator /> -->
		 
		<NavSecondary items={data.navSecondary} class="mt-auto" />
	</Sidebar.Content>
	<Sidebar.Footer>
		<NavUser user={data.user} />
	</Sidebar.Footer>
</Sidebar.Root>