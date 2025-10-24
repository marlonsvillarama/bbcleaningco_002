<script>
    let {
        cls,
        children
    } = $props();
</script>

<div class="page-header w-full items-center px-5 py-3 {cls}">
    {@render children()}
</div>

<style></style>