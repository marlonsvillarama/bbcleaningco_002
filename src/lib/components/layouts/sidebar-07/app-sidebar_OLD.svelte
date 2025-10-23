<script module>
	import AudioWaveformIcon from "@lucide/svelte/icons/audio-waveform";
	import BookOpenIcon from "@lucide/svelte/icons/book-open";
	import BotIcon from "@lucide/svelte/icons/bot";
	import ChartNoAxesIcon from "@lucide/svelte/icons/chart-no-axes-combined";
	import ChartPieIcon from "@lucide/svelte/icons/chart-pie";
	import CommandIcon from "@lucide/svelte/icons/command";
	import FrameIcon from "@lucide/svelte/icons/frame";
	import GalleryVerticalEndIcon from "@lucide/svelte/icons/gallery-vertical-end";
	import MapIcon from "@lucide/svelte/icons/map";
	import ReceiptIcon from "@lucide/svelte/icons/receipt";
	import SettingsIcon from "@lucide/svelte/icons/settings";
	import Settings2Icon from "@lucide/svelte/icons/settings-2";
	import SquareTerminalIcon from "@lucide/svelte/icons/square-terminal";
	import UserIcon from "@lucide/svelte/icons/user";

	// This is sample data.
	const data = {
		user: {
			name: "shadcn",
			email: "m@example.com",
			avatar: "/avatars/shadcn.jpg",
		},
		teams: [
			{
				name: "Acme Inc",
				logo: GalleryVerticalEndIcon,
				plan: "Enterprise",
			},
			{
				name: "Acme Corp.",
				logo: AudioWaveformIcon,
				plan: "Startup",
			},
			{
				name: "Evil Corp.",
				logo: CommandIcon,
				plan: "Free",
			},
		],
		navMain: [
			{
				title: "Transactions",
				url: "#",
				icon: ReceiptIcon,
				isActive: true,
				items: [
					{
						title: "Quotations",
						url: "#",
					},
					{
						title: "Clients",
						url: "#",
					},
					{
						title: "Dispatch",
						url: "#",
					},
				],
			},
			{
				title: "Administration",
				url: "#",
				icon: UserIcon,
				items: [
					{
						title: "Employees",
						url: "#",
					},
					{
						title: "Roles",
						url: "#",
					},
				],
			},
			{
				title: "Reports",
				url: "#",
				icon: ChartNoAxesIcon,
				items: [
					{
						title: "Financials",
						url: "#",
					},
					{
						title: "Organization",
						url: "#",
					},
					{
						title: "Searches",
						url: "#",
					},
				],
			},
			{
				title: "Settings",
				url: "#",
				icon: SettingsIcon,
				items: [
					{
						title: "General",
						url: "#",
					},
					{
						title: "Team",
						url: "#",
					},
					{
						title: "Billing",
						url: "#",
					},
					{
						title: "Limits",
						url: "#",
					},
				],
			},
		],
		/* projects: [
			{
				name: "Design Engineering",
				url: "#",
				icon: FrameIcon,
			},
			{
				name: "Sales & Marketing",
				url: "#",
				icon: ChartPieIcon,
			},
			{
				name: "Travel",
				url: "#",
				icon: MapIcon,
			},
		], */
	};
</script>

<script>
	import NavMain from "./nav-main.svelte";
	import NavProjects from "./nav-projects.svelte";
	import NavUser from "./nav-user.svelte";
	import TeamSwitcher from "./team-switcher.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	let {
		ref = $bindable(null),
		collapsible = "icon",
		...restProps
	} = $props();
</script>

<Sidebar.Root {collapsible} {...restProps}>
	<Sidebar.Header>
		<TeamSwitcher teams={data.teams} />
	</Sidebar.Header>
	<Sidebar.Content>
		<NavMain items={data.navMain} />
		<!-- <NavProjects projects={data.projects} /> -->
	</Sidebar.Content>
	<Sidebar.Footer>
		<NavUser user={data.user} />
	</Sidebar.Footer>
	<Sidebar.Rail />
</Sidebar.Root>