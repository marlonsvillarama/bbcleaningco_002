<script>
	import { getContext } from "svelte";
	import * as Collapsible from "$lib/components/ui/collapsible/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";

	let {
		items,
	} = $props();

	const USER_CONTEXT = getContext('USER_CONTEXT');
	const USER_ROLE = getContext('USER_ROLE') || USER_CONTEXT.defaultRole;

	const navigateTo = (link) => {
		window.location = link;
	};
</script>

<Sidebar.Group>
	<!-- <Sidebar.GroupLabel>Platform</Sidebar.GroupLabel> -->
	<Sidebar.Menu>
		{#each items as item (item.title)}
			<!-- <Collapsible.Root open={item.isActive} class="group/collapsible"> -->
				<!-- {#snippet child({ props })} -->
					<Sidebar.MenuItem>
						<!-- <Collapsible.Trigger> -->
							<!-- {#snippet child({ props })} -->
								<Sidebar.MenuButton class="text-sm" tooltipContent={item.title} onclick={() => navigateTo(item.url)}>
									{#if item.icon}
										<item.icon />
									{/if}
									<span>{item.title}</span>
									<!-- <ChevronRightIcon
										class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
									/> -->
								</Sidebar.MenuButton>
							<!-- {/snippet} -->
						<!-- </Collapsible.Trigger> -->
						<!-- <Collapsible.Content>
							<Sidebar.MenuSub>
								{#each item.items ?? [] as subItem (subItem.title)}
									<Sidebar.MenuSubItem>
										<Sidebar.MenuSubButton>
											{#snippet child({ props })}
												<a href={subItem.url} {...props}>
													<span>{subItem.title}</span>
												</a>
											{/snippet}
										</Sidebar.MenuSubButton>
									</Sidebar.MenuSubItem>
								{/each}
							</Sidebar.MenuSub>
						</Collapsible.Content> -->
					</Sidebar.MenuItem>
				<!-- {/snippet} -->
			<!-- </Collapsible.Root> -->
		{/each}
	</Sidebar.Menu>
</Sidebar.Group>