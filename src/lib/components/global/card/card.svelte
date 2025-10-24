<script>
    let {
        children,
        cls = '',
        padded = true,
        title
    } = $props();
</script>

<div class="w-full rounded-lg shadow-xs bg-white">
    <div class="px-4 py-2 bg-accent/50 rounded-t-lg">
        <span class="font-semibold text-sm">{title}</span>
    </div>
    <div class="gap-6 items-top {cls} {padded === true ? 'px-8 py-6' : ''}">
        {@render children()}
    </div>
</div>