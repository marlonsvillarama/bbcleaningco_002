<script>
    import * as Popover from "@/components/ui/popover/index.js";
    import Button from "@/components/ui/button/button.svelte";
	import Separator from "@/components/ui/separator/separator.svelte";
    import Badge from "@/components/ui/badge/badge.svelte";

    let { data } = $props();
</script>

<div class="grid grid-cols-[120px_1fr] w-full">
    <span class="text-sm text-foreground font-semibold">Where</span>

    <div class="grid gap-2 text-sm">
        <Badge>NCR</Badge>

        <div class="grid gap-1 font-light">
            <span>123 Bansalangin Street</span>
            <span>Brgy. Bungad</span>
            <span>Quezon City</span>
        </div>

        <Button variant="secondary" class="px-2 py-1 text-xs rounded-xs w-[120px]"
                onclick={() => alert('implement change address...')}
        >
            Change address
        </Button>
    </div>
</div>
