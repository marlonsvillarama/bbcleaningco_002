<script>
    import * as Field from "@/components/ui/field/index";
    import Separator from "@/components/ui/separator/separator.svelte";
    import Switch from "@/components/ui/switch/switch.svelte";

    let {
        disabled = false
    } = $props();
</script>

<div class="grid gap-4 text-sm text-sm text-foreground/80 font-normal pt-3">
    <div class="grid grid-cols-[60px_auto] items-center">
        <Switch id="on_hold" {disabled} checked={true} />
        <label class="cursor-pointer pl-2 py-1 hover:bg-gray-100" for="on_hold">Account On Hold</label>
    </div>

    <div class="grid grid-cols-[60px_auto] items-center">
        <Switch id="banned" {disabled} />
        <label class="cursor-pointer pl-2 py-1 hover:bg-gray-100" for="banned">Banned</label>
    </div>

    <div class="grid grid-cols-[60px_auto] items-center">
        <Switch id="is_diff" {disabled} checked={true} />
        <label class="cursor-pointer pl-2 py-1 hover:bg-gray-100" for="is_diff">Difficult Customer</label>
    </div>

    <div class="grid grid-cols-[60px_auto] items-center">
        <Switch id="is_hwc" {disabled} />
        <label class="cursor-pointer pl-2 py-1 hover:bg-gray-100" for="is_hwc">Handle With Care</label>
    </div>

    <div class="grid grid-cols-[60px_auto] items-center">
        <Switch id="is_iv" {disabled} checked={true} />
        <label class="cursor-pointer pl-2 py-1 hover:bg-gray-100" for="is_iv">Influencer/Barter</label>
    </div>
</div>
