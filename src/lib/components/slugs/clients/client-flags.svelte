<script>
    import * as Field from "@/components/ui/field/index";
    import Separator from "@/components/ui/separator/separator.svelte";
    import Switch from "@/components/ui/switch/switch.svelte";

    let {
        disabled = false
    } = $props();
</script>

<div class="bg-white rounded-md border-none font-medium grid gap-2 w-full">
    <span class="text-sm text-foreground font-semibold">Client Flags</span>

    <Separator />

        <div class="grid gap-5 text-sm pt-3">
            <div class="grid grid-cols-[70px_auto] items-center">
                <Switch id="on_hold" {disabled} checked={true} />
                <label class="text-sm text-foreground font-semibold" for="on_hold">Account On Hold</label>
            </div>
            <!-- <Field.Field class="px-2 py-2 rounded-sm hover:bg-accent/10" orientation="horizontal">
                <Field.Label class="cursor-pointer" for="on_hold">Account On Hold</Field.Label>
            </Field.Field> -->

            <div class="grid grid-cols-[70px_auto] items-center">
                <Switch id="banned" {disabled} />
                <label class="text-sm text-foreground font-semibold" for="banned">Banned</label>
            </div>
            <!-- <Field.Field class="px-2 py-2 rounded-sm hover:bg-accent/10" orientation="horizontal">
                <Switch id="banned" {disabled} />
                <Field.Label class="cursor-pointer" for="banned">Banned</Field.Label>
            </Field.Field> -->

            <div class="grid grid-cols-[70px_auto] items-center">
                <Switch id="is_diff" {disabled} checked={true} />
                <label class="text-sm text-foreground font-semibold" for="is_diff">Difficult Customer</label>
            </div>
            <!-- <Field.Field class="px-2 py-2 rounded-sm hover:bg-accent/10" orientation="horizontal">
                <Switch id="is_diff" {disabled} />
                <Field.Label class="cursor-pointer" for="is_dg">Difficult Customer</Field.Label>
            </Field.Field> -->

            <div class="grid grid-cols-[70px_auto] items-center">
                <Switch id="is_hwc" {disabled} />
                <label class="text-sm text-foreground font-semibold" for="is_hwc">Handle With Care</label>
            </div>
            <!-- <Field.Field class="px-2 py-2 rounded-sm hover:bg-accent/10" orientation="horizontal">
                <Switch id="is_hwc" {disabled} />
                <Field.Label class="cursor-pointer" for="is_hwc">Handle With Care</Field.Label>
            </Field.Field> -->

            <div class="grid grid-cols-[70px_auto] items-center">
                <Switch id="is_iv" {disabled} checked={true} />
                <label class="text-sm text-foreground font-semibold" for="is_iv">Influencer/Barter</label>
            </div>
            <!-- <Field.Field class="px-2 py-2 rounded-sm hover:bg-accent/10" orientation="horizontal">
                <Switch id="is_iv" {disabled} />
                <Field.Label class="cursor-pointer" for="is_iv">Influencer/Barter</Field.Label>
            </Field.Field> -->
        </div>
</div>