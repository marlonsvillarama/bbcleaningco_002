<script>
    let {
        children,
        cls = '',
        width = 'full'
    } = $props();
</script>

<div class="w-{width} flex flex-col gap-8 {cls}">
    {@render children()}
</div>