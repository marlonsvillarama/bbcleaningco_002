<script>
    let {
        children,
        cls
    } = $props();
</script>

<div class="{cls} rounded-b-lg px-5 py-6 gap-5 inset-shadow-sm">
    {@render children()}
</div>