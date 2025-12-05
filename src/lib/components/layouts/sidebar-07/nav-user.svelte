<script>
	import { getContext, setContext } from "svelte";
	import * as Avatar from "$lib/components/ui/avatar/index.js";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import { useSidebar } from "$lib/components/ui/sidebar/index.js";
	import { UserRound } from "lucide-svelte";
	import BadgeCheckIcon from "@lucide/svelte/icons/badge-check";
	import BellIcon from "@lucide/svelte/icons/bell";
	import ChevronsUpDownIcon from "@lucide/svelte/icons/chevrons-up-down";
	import CreditCardIcon from "@lucide/svelte/icons/credit-card";
	import SlidersHorizontalIcon from "@lucide/svelte/icons/sliders-horizontal";
	import LogOutIcon from "@lucide/svelte/icons/log-out";
	import SparklesIcon from "@lucide/svelte/icons/sparkles";

	let { user } = $props();
	const sidebar = useSidebar();

	const USER_CONTEXT = getContext('USER_CONTEXT');
	// console.log('+NAV_USER USER_CONTEXT', USER_CONTEXT);

	const USER_ROLE = getContext('USER_ROLE') || USER_CONTEXT.defaultRole;
	// console.log('+NAV_USER defaultRole', USER_CONTEXT.defaultRole);
	// if (!defaultRole) {
		// Show role selection dialog
	// }

	const changeRole = (id) => {
		setContext('USER_ROLE', USER_CONTEXT.roles.find(r => r.id === id));
		window.location = '/app';
	};
</script>

<Sidebar.Menu>
	<Sidebar.MenuItem>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				{#snippet child({ props })}
					<Sidebar.MenuButton
						size="lg"
						class="bg-accent/20 data-[state=open]:bg-accent/50 data-[state=open]:text-sidebar-accent-foreground"
						{...props}
					>
						<!-- <Avatar.Root class="size-8 rounded-lg">
							<Avatar.Image src={user.avatar} alt={user.name} />
							<Avatar.Fallback class="rounded-lg">CN</Avatar.Fallback>
						</Avatar.Root> -->
						<div class="grid flex-1 text-left text-sm leading-tight">
							<span class="truncate font-medium">{USER_CONTEXT.first_name} {USER_CONTEXT.last_name}</span>
							<span class="truncate text-muted-foreground text-xs">{USER_ROLE.name}</span>
						</div>
						<ChevronsUpDownIcon class="ml-auto size-4" />
					</Sidebar.MenuButton>
				{/snippet}
			</DropdownMenu.Trigger>
			<DropdownMenu.Content
				class="w-(--bits-dropdown-menu-anchor-width) min-w-56 rounded-lg"
				side={sidebar.isMobile ? "bottom" : "right"}
				align="end"
				sideOffset={4}
			>
				<DropdownMenu.Label class="p-0 font-normal">
					<div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
						<!-- <Avatar.Root class="size-8 rounded-lg">
							<Avatar.Image src={user.avatar} alt={user.name} />
							<Avatar.Fallback class="rounded-lg">CN</Avatar.Fallback>
						</Avatar.Root> -->
						<div class="grid flex-1 text-left text-sm leading-tight">
							<span class="truncate font-medium">{USER_CONTEXT.first_name} {USER_CONTEXT.last_name}</span>
							<span class="truncate text-muted-foreground text-xs">{USER_ROLE.name}</span>
						</div>
					</div>
				</DropdownMenu.Label>
				<DropdownMenu.Separator />

				<!-- Role selection -->
				{#if USER_CONTEXT.roles.length > 0}
					<DropdownMenu.Group>
						<DropdownMenu.GroupHeading>Switch Role</DropdownMenu.GroupHeading>
						{#each USER_CONTEXT.roles.filter(r => r.id !== USER_ROLE.id) as userRole}
							<DropdownMenu.Item class="pl-8 cursor-pointer">
								<a href="/app" data-sveltekit-reload title="Switch to {userRole.name}">
									{userRole.name}
								</a>
							</DropdownMenu.Item>
						{/each}
					</DropdownMenu.Group>
					<DropdownMenu.Separator />
				{/if}
				
				<DropdownMenu.Group>
					<DropdownMenu.Item class="cursor-pointer" onclick={() => window.location = '/app/user-settings'}>
						<SlidersHorizontalIcon />
						User Settings
					</DropdownMenu.Item>
				</DropdownMenu.Group>
				<DropdownMenu.Separator />
				<DropdownMenu.Item class="cursor-pointer">
					<LogOutIcon />
					Log out
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</Sidebar.MenuItem>
</Sidebar.Menu>