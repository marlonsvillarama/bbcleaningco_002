<script>
    import * as Field from "@/components/ui/field/index";
    import Separator from "@/components/ui/separator/separator.svelte";
    import Switch from "@/components/ui/switch/switch.svelte";
</script>

<div class="bg-white rounded-md border-none font-medium grid gap-2 w-full">
    <span class="text-sm text-foreground font-semibold">Client Flags</span>

    <Separator />

        <div class="grid grid-cols-2 gap-2 text-sm">
            <!-- <div class="grid gap-6"> -->
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
            <!-- </div> -->

            <!-- <div class="grid gap-6"> -->
                <Field.Field class="px-2 py-2 rounded-sm hover:bg-accent/10" orientation="horizontal">
                    <Switch id="on_hold" />
                    <Field.Label class="cursor-pointer" for="on_hold">Account On Hold</Field.Label>
                </Field.Field>

                <Field.Field class="px-2 py-2 rounded-sm hover:bg-accent/10" orientation="horizontal">
                    <Switch id="banned" />
                    <Field.Label class="cursor-pointer" for="banned">Banned</Field.Label>
                </Field.Field>
            <!-- </div> -->
        </div>
</div>