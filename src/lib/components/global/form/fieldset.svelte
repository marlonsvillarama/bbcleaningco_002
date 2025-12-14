<script>
    import Label from "$lib/components/ui/label/label.svelte";

    let {
        label = 'Field',
        orientation = 'horizontal',
        children
    } = $props();

    let mainClasses = orientation === 'horizontal' ?
        'flex flex-col gap-2' :
        'grid gap-0'
</script>

<div class="text-xs {mainClasses}">
    <Label class="font-semibold">{label}ss</Label>
    {@render children()}
</div>