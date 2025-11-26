<script>
    let { children } = $props();
</script>

<div class="flex flex-col gap-4 md:gap-6">
    {@render children?.()}
</div>
