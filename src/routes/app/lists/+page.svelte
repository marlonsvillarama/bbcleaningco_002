<script>
    import * as Tabs from "@/components/ui/tabs/index";

    let { data } = $props();

    let views = [
		{
			id: "regions",
			label: "Regions",
		},
		// {
		// 	id: "dispatch",
		// 	label: "Dispatch",
		// 	badge: 3,
		// },
		{
			id: "vehicles",
			label: "Vehicles"
		},
		{
			id: "audit-trail",
			label: "Audit Trail",
			badge: 2,
		},
    ];

	let view = $state("audit-trail");
	let viewLabel = $derived(views.find((v) => view === v.id)?.label ?? "Select a view");
</script>

<div class="flex flex-col gap-12 px-4 py-4 py-4 md:gap-6">
    <div class="grid gap-1 px-4">
        <div class="border-b border-gray-200 flex flex-row items-center justify-between pt-2 pb-2 bg-white rounded-xs">
            <span class="text-[1.35rem] text-foreground-dark font-semibold">Lists</span>
        </div>
        <div class="text-xs text-muted-foreground">Manage all global lists here.</div>
    </div>
        
    <Tabs.Root value="items" class="w-full flex-col justify-start gap-4 px-4">
        <div class="flex items-center justify-between">
            <Tabs.List
                class="**:data-[slot=badge]:bg-muted-foreground/30 **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:px-1 @4xl/main:flex gap-4"
            >
                {#each views as view (view.id)}
                    <Tabs.Trigger value={view.id}>
                        {view.label}
                    </Tabs.Trigger>
                {/each}
            </Tabs.List>
        </div>
        <Tabs.Content value="audit-trail" class="grid items-start">
            Audit Trail
        </Tabs.Content>
    </Tabs.Root>
</div>
