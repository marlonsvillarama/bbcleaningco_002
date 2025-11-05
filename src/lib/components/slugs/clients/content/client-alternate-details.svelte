<script>
    import * as Field from "@/components/ui/field/index";
    import * as Select from "@/components/ui/select/index";
    import Button from "@/components/ui/button/button.svelte";
    import Checkbox from "@/components/ui/checkbox/checkbox.svelte";
    import Input from "@/components/ui/input/input.svelte";
    import Label from "@/components/ui/label/label.svelte";
    import Switch from "@/components/ui/switch/switch.svelte";
    import Textarea from "@/components/ui/textarea/textarea.svelte";

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

<div class="grid gap-4">
    <div class="flex items-center justify-between w-full border-b-2 border-gray-200 pb-2">
        <span class="text-sm text-foreground font-semibold">Alternate Contact</span>
        <!-- <Button variant="outline" disabled={true} class="text-white px-3 py-[2px] text-xs font-normal"></Button> -->
    </div>

    <div class="grid grid-rows-2 gap-6 xl:grid-rows-none xl:grid-cols-2 xl:gap-12 items-start">
        <div class="grid gap-6 px-2 text-sm">
            <Field.Field class="w-[250px]">
                <Field.Label for="first_name">First Name</Field.Label>
                <Input id="first_name" />
            </Field.Field>

            <Field.Field class="w-[250px]">
                <Field.Label for="last_name">Last Name</Field.Label>
                <Input id="last_name" />
            </Field.Field>

            <Field.Field class="w-full">
                <Field.Label class="text-gray-500 font-extralight" for="company">Company <span class="italic">(Optional)</span></Field.Label>
                <Input id="company" />
            </Field.Field>

            <Field.Field class="w-full">
                <Field.Label for="phone">Email</Field.Label>
                <Input type="email" id="email" />
            </Field.Field>

            <div class="flex gap-8 items-center">
                <!-- <span class="px-2 text-clip text-top font-extralight">Erwin Alcantara</span> -->
                <Field.Field class="w-[160px]">
                    <Field.Label for="phone_mobile">Mobile Phone</Field.Label>
                    <Input type="phone" id="phone_mobile" />
                </Field.Field>

                <Field.Field class="w-[160px]">
                    <Field.Label class="text-gray-500 font-extralight" for="phone_home">Home Phone <span class="italic">(Optional)</span></Field.Label>
                    <Input type="phone" id="phone_home" />
                </Field.Field>
            </div>
        </div>

        <div class="grid gap-6 px-2 text-sm">
            <Field.Field class="w-[250px]">
                <Field.Label>Client Since</Field.Label>
                <Input disabled={true} value="August 19, 2025" />
            </Field.Field>

            <Field.Field class="" orientation="horizontal">
                <Switch id="is_active" />
                <Field.Label for="is_active">Active</Field.Label>
            </Field.Field>

            <Field.Field class="" orientation="horizontal">
                <Switch id="is_vip" />
                <Field.Label for="is_vip">VIP</Field.Label>
            </Field.Field>

            <Field.Field class="" orientation="horizontal">
                <Switch id="is_celeb" />
                <Field.Label for="is_celeb">Celebrity/Influencer</Field.Label>
            </Field.Field>

            <Field.Field class="" orientation="horizontal">
                <Switch id="on_hold" />
                <Field.Label for="on_hold">Account On Hold</Field.Label>
            </Field.Field>

            <Field.Field class="" orientation="horizontal">
                <Switch id="banned" />
                <Field.Label for="banned">Banned</Field.Label>
            </Field.Field>

            <Field.Field class="">
                <Field.Label class="text-gray-500 font-extralight" for="notes">
                    Client Notes <span class="italic">(Optional)</span>
                </Field.Label>
                <Textarea class="h-[120px] resize-none"></Textarea>
            </Field.Field>
        </div>
    </div>
</div>
