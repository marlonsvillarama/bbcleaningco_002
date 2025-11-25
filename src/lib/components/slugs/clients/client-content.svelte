<script>
    import AuditTrail from "@/components/global/audit-trail.svelte";
    import ClientAddressList from "./client-address-list.svelte";
    import ClientFiles from "./client-files.svelte";
    import ClientPrimaryDetails from "./client-primary-details.svelte";
    import ClientQuotations from "./client-quotations.svelte";

    import Badge from "@/components/ui/badge/badge.svelte";
    import Button from "@/components/ui/button/button.svelte";
    import Separator from "@/components/ui/separator/separator.svelte";
    import * as Tabs from "@/components/ui/tabs/index";

    import {
        PenBox,
        Plus
	} from "@lucide/svelte";

    let { data } = $props();

    let audit = [
        {
            id: '1',
            date: '20250922',
            user: 'Charles Madrid',
            note: 'Client created.'
        },
        {
            id: '2',
            date: '20250923',
            user: 'Charles Madriddd',
            note: 'Client updated.'
        },
    ];
    
    let views = [
		{
			id: "address",
			label: "Addresses",
			badge: 3,
		},
		// {
		// 	id: "dispatch",
		// 	label: "Dispatch",
		// 	badge: 3,
		// },
		{
			id: "quotations",
			label: "Quotations",
			badge: 3,
		},
		{
			id: "files",
			label: "Files",
			badge: 3,
		},
		{
			id: "audit-trail",
			label: "Audit Trail"
		},
    ];

	let view = $state("address");
	let viewLabel = $derived(views.find((v) => view === v.id)?.label ?? "Select a view");
</script>

<div class="grid gap-12 items-start">
    <ClientPrimaryDetails { data } />

    <Tabs.Root value="address" class="w-full flex-col justify-start gap-4">

        <div class="flex items-center justify-between">
            <Tabs.List
                class="**:data-[slot=badge]:bg-muted-foreground/30 **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:px-1 @4xl/main:flex gap-4"
            >
                {#each views as view (view.id)}
                    <Tabs.Trigger value={view.id}>
                        {view.label}
                        <!-- {#if view.badge > 0}
                            <Badge variant="secondary">{view.badge}</Badge>
                        {/if} -->
                    </Tabs.Trigger>
                {/each}
            </Tabs.List>
        </div>

        <Tabs.Content value="address" class="grid items-start gap-6">
            <ClientAddressList { data } />
        </Tabs.Content>

        <Tabs.Content value="quotations" class="grid gap-6 items-start">
            <ClientQuotations { data } />
        </Tabs.Content>

        <Tabs.Content value="files" class="grid gap-6 items-start">
            <ClientFiles { data } />
        </Tabs.Content>

        <Tabs.Content value="audit-trail" class="grid items-start">
            <AuditTrail items={audit} />
        </Tabs.Content>

    </Tabs.Root>
</div>
