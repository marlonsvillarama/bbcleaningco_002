<script>
    import Button from "@/components/ui/button/button.svelte";

    import {
        ArrowLeft,
		Save
	} from "@lucide/svelte";

    let { data } = $props();
</script>

<div class="flex gap-4 items-center">
    <Button variant="default" size="sm" onclick={() => alert('implement save...')}>
        <Save />
        <span class="hidden lg:inline">Save Changes</span>
    </Button>

    <Button variant="secondary" size="sm" onclick={() => window.location = '/app/clients'}>
        <ArrowLeft />
        <span class="hidden lg:inline">Back to list</span>
    </Button>
</div>
