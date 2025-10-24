<script>
    let { cls, children } = $props();
</script>

<div class="page-card rounded-lg bg-white w-full shadow border border-foreground/10 {cls}">
    {@render children()}
</div>

<style>
    .page-card {
        padding: 0;
    }
</style>