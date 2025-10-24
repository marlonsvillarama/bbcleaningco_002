<script>
    import Checkbox from "$lib/components/ui/checkbox/checkbox.svelte";
    import Label from "$lib/components/ui/label/label.svelte";

    let {
        checked,
        disabled,
        id,
        label = ''
    } = $props();
</script>

<div class="flex flex-row gap-4 text-xs">
    <Checkbox {id} {checked} {disabled} />
    <Label for={id} class="font-light">{label}</Label>
</div>