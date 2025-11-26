<script>
    import * as Field from "@/components/ui/field/index";
    import * as Select from "@/components/ui/select/index";
    import Button from "@/components/ui/button/button.svelte";
    import Checkbox from "@/components/ui/checkbox/checkbox.svelte";
    import Input from "@/components/ui/input/input.svelte";
    import Label from "@/components/ui/label/label.svelte";
    import Separator from "@/components/ui/separator/separator.svelte";
    import Switch from "@/components/ui/switch/switch.svelte";
    import Textarea from "@/components/ui/textarea/textarea.svelte";
    import FieldsetInput from "@/components/global/form/fieldset-input.svelte";
    import FieldsetReadonly from "@/components/global/form/fieldset-readonly.svelte";

    import {
        CircleX,
        Plus
    } from "@lucide/svelte";

    let { data } = $props();
    const teams = [
        { value: "1", text: "ALPHA" },
        { value: "2", text: "BRAVO" },
        { value: "3", text: "CHARLIE" },
    ];
    let selectedTeam = $state('3');
    const triggerContent = $derived(
        teams.find((t) => t.value === selectedTeam)?.text ?? "Select team"
    );
</script>

<div class="grid gap-2 w-full">
    <span class="text-sm text-foreground font-semibold">Primary Details</span>

    <Separator />

    <!-- <div class="grid grid-rows-2 gap-6 xl:grid-rows-none xl:grid-cols-2 xl:gap-12 items-start pt-1"> -->
        <div class="grid gap-3 text-sm">
            <FieldsetInput id="first_name" label="First Name" value="" placeholder="Juan" />

            <FieldsetInput id="last_name" label="Last Name" value="" placeholder="Dela Cruz" />

            <FieldsetInput required={false} id="company" label="Company" value="" placeholder="..." />

            <FieldsetInput id="email" label="Email" value="" placeholder="..." />

            <FieldsetInput id="phone_mobile" label="Mobile #" value="" placeholder="09xx-xxx-xxxx..." class="w-[180px]" />

            <FieldsetInput id="phone_home" required={false} label="Home #" value="" placeholder="09xx-xxx-xxxx..." class="w-[180px]" />

            <FieldsetReadonly id="client_since" label="Client Since" value="19 August, 2025" />
        </div>

        <!-- <div class="grid grid-cols-2 gap-2 text-sm">
            <Field.Field class="px-2 py-2 rounded-sm hover:bg-accent/10" orientation="horizontal">
                <Switch id="is_active" />
                <Field.Label class="cursor-pointer" for="is_active">Active</Field.Label>
            </Field.Field>

            <Field.Field class="px-2 py-2 rounded-sm hover:bg-accent/10" orientation="horizontal">
                <Switch id="is_vip" />
                <Field.Label class="cursor-pointer" for="is_vip">VIP</Field.Label>
            </Field.Field>

            <Field.Field class="px-2 py-2 rounded-sm hover:bg-accent/10" orientation="horizontal">
                <Switch id="is_celeb" />
                <Field.Label class="cursor-pointer" for="is_celeb">Celebrity/Influencer</Field.Label>
            </Field.Field>

            <Field.Field class="px-2 py-2 rounded-sm hover:bg-accent/10" orientation="horizontal">
                <Switch id="on_hold" />
                <Field.Label class="cursor-pointer" for="on_hold">Account On Hold</Field.Label>
            </Field.Field>

            <Field.Field class="px-2 py-2 rounded-sm hover:bg-accent/10" orientation="horizontal">
                <Switch id="banned" />
                <Field.Label class="cursor-pointer" for="banned">Banned</Field.Label>
            </Field.Field>
        </div> -->
    <!-- </div> -->
</div>
