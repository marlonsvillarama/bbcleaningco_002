<script>
    import * as Popover from "@/components/ui/popover/index.js";
    import Button from "@/components/ui/button/button.svelte";
	import Separator from "@/components/ui/separator/separator.svelte";

    let { data } = $props();
</script>

<div class="grid grid-cols-[85px_1fr] w-full">
    <span class="text-sm text-foreground font-semibold">Where</span>

    <!-- <Separator /> -->

    <div class="grid gap-2 text-sm font-normal">
        <div class="grid gap-1">
            <span>123 Bansalangin Street</span>
            <span>Brgy. Bungad</span>
            <span>Quezon City, NCR</span>
        </div>

        <Button variant="secondary" class="px-2 py-1 text-xs rounded-xs"
                onclick={() => alert('implement change address...')}
        >
            Change address
        </Button>
    </div>

    <!-- Popover -->
    <!-- <div class="flex gap-3 items-center mt-1"> -->
        <!-- Only used for alignment of button -->
        <!-- <Button variant="secondary" class="px-2 py-1 text-xs rounded-xs"
                onclick={() => alert('implement change address...')}
        >
            Change address
        </Button> -->
    <!-- </div> -->
    <!-- <a href="." target="_self" class="text-xs font-normal underline text-blue-500 hover:text-blue-700">Change Address</a> -->
</div>
