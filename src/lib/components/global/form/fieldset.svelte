<script>
    import Label from "$lib/components/ui/label/label.svelte";

    let {
        label = 'Field',
        children
    } = $props();
</script>

<div class="flex flex-col gap-2 text-xs">
    <Label class="font-semibold">{label}</Label>
    {@render children()}
</div>