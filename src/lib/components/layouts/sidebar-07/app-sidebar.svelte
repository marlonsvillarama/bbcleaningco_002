<script>
	import {
		BadgeDollarSign,
		CalendarDays,
		ChartNoAxesCombined,
		CircleGauge,
		ContactRound,
		HelpCircle,
		IdCardLanyard,
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
	import NavDocuments from "./nav-documents.svelte";
	import NavMain from "./nav-main.svelte";
	import NavSecondary from "./nav-secondary.svelte";
	import NavUser from "./nav-user.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
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
				title: "Calendar",
				url: "/app/calendar",
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
		],
		navSecondary: [
			{
				title: "Settings",
				url: "#",
				icon: Settings,
			},
			{
				title: "Help",
				url: "#",
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
			// {
			// 	name: "Word Assistant",
			// 	url: "#",
			// 	icon: FileWordIcon,
			// },
		],
	};

	let { ...restProps } = $props();
</script>

<Sidebar.Root collapsible="icon" {...restProps}>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton class="data-[slot=sidebar-menu-button]:!p-1.5">
					{#snippet child({ props })}
						<a href="##" {...props}>
							<InnerShadowTopIcon class="!size-5" />
							<span class="text-base font-semibold">Acme Inc.</span>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		<NavMain items={data.navMain} />
		<NavDocuments items={data.documents} />
		<NavSecondary items={data.navSecondary} class="mt-auto" />
	</Sidebar.Content>
	<Sidebar.Footer>
		<NavUser user={data.user} />
	</Sidebar.Footer>
</Sidebar.Root>