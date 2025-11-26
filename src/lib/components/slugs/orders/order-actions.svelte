<script>
    import Button from "@/components/ui/button/button.svelte";

    import {
        ArrowLeft,
        Mail,
        Printer,
		Save
	} from "@lucide/svelte";

    let { data } = $props();
</script>

<div class="flex gap-4 items-center">
    <Button variant="default" size="sm" onclick={() => alert('implement save...')}>
        <Save />
        <span class="hidden lg:inline">Save Changes</span>
    </Button>
    <Button variant="secondary" size="sm" onclick={() => alert('implement print...')}>
        <Mail size={20} />
        <span class="hidden lg:inline">Email</span>
    </Button>
    <Button variant="secondary" size="sm" onclick={() => alert('implement print...')}>
        <Printer />
        <span class="hidden lg:inline">Print</span>
    </Button>
    <Button variant="secondary" size="sm" onclick={() => window.location = '/app/orders'}>
        <ArrowLeft />
        <span class="hidden lg:inline">Back to list</span>
    </Button>
</div>
