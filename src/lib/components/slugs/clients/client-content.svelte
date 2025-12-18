<script>
    import AuditTrail from "@/components/global/audit-trail.svelte";
    import ClientAddressList from "./client-address-list.svelte";
    import ClientFiles from "./client-files.svelte";
    import ClientFlags from "./client-flags.svelte";
    import ClientNotes from "./client-notes.svelte";
    import ClientPrimaryDetails from "./client-primary-details.svelte";
    import ClientFileList from "./client-file-list.svelte";
    import ClientQuotations from "./client-quotations.svelte";
    import ClientQuotationList from "./client-quotation-list.svelte";
    import CollapseSection from "@/components/global/collapse-section.svelte";
    import FieldsetInput from "@/components/global/form/fieldset-input.svelte";
    import FieldsetReadonly from "@/components/global/form/fieldset-readonly.svelte";
    import FieldsetTextarea from "@/components/global/form/fieldset-textarea.svelte";

    import Badge from "@/components/ui/badge/badge.svelte";
    import Button from "@/components/ui/button/button.svelte";
    import Separator from "@/components/ui/separator/separator.svelte";
    import * as Collapsible from "@/components/ui/collapsible/index";
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
    <CollapseSection title="Primary Details" collapse={false}>
        {#snippet children()}
        <div class="grid 2xl:grid-cols-2 items-start gap-x-16 gap-y-6">
            <FieldsetInput id="first_name" label="First Name" value="" placeholder="Juan" class="md:max-w-[450px]" />

            <FieldsetInput id="last_name" label="Last Name" value="" placeholder="Dela Cruz" class="md:max-w-[450px]" />

            <FieldsetInput required={false} id="company" label="Company" value="" placeholder="" class="md:max-w-[450px]" />

            <FieldsetInput id="email" label="Email" value="" placeholder="" class="md:max-w-[450px]" />

            <FieldsetInput id="phone_mobile" label="Mobile #" value="" placeholder="09xx-xxx-xxxx" class="w-[180px]" />

            <FieldsetInput id="phone_home" required={false} label="Home #" value="" placeholder="09xx-xxx-xxxx" class="w-[180px]" />

            <FieldsetTextarea id="client_notes" required={false} label="Notes" value="" class="md:max-w-[450px]" />

            <ClientFlags { data } />
        </div>
        {/snippet}
    </CollapseSection>

    <!-- <Tabs.Root value="address" class="w-full flex-col justify-start gap-4">

        <div class="flex items-center justify-between">
            <Tabs.List
                class="**:data-[slot=badge]:bg-muted-foreground/30 **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:px-1 @4xl/main:flex gap-4"
            >
                {#each views as view (view.id)}
                    <Tabs.Trigger value={view.id}>
                        {view.label}
                        -- {#if view.badge > 0}
                            <Badge variant="secondary">{view.badge}</Badge>
                        {/if} --
                    </Tabs.Trigger>
                {/each}
            </Tabs.List>
        </div>

        <Tabs.Content value="address" class="grid items-start gap-6">
            <ClientAddressList { data } />
        </Tabs.Content>

        <Tabs.Content value="quotations" class="grid gap-6 items-start">
            <ClientQuotationList { data } />
            -- <ClientQuotations { data } /> --
        </Tabs.Content>

        <Tabs.Content value="files" class="grid gap-6 items-start">
            <ClientFileList {data} />
            -- <ClientFiles { data } /> --
        </Tabs.Content>

        <Tabs.Content value="audit-trail" class="grid items-start">
            <AuditTrail items={audit} />
        </Tabs.Content>

    </Tabs.Root> -->
</div>
