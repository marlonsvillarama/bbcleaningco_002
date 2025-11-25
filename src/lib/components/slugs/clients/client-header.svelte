<script>
    import Button from "@/components/ui/button/button.svelte";
    import Checkbox from "@/components/ui/checkbox/checkbox.svelte";
    import ClientActions from "./client-actions.svelte";
    import ClientStatus from "./client-status.svelte";

    import {
        ArrowLeft,
        Contact,
        HandCoins,
        PenBox,
        Printer,
		Receipt,
		Save
	} from "@lucide/svelte";

    let { data } = $props();
</script>

<div class="grid gap-2">
    <div class="border-b border-gray-200 flex flex-row items-center justify-between pt-2 pb-2">
        <span class="text-xl font-semibold">{data.last_name}, {data.first_name}</span>
        <ClientActions { data } />
    </div>
    <ClientStatus { data } />
</div>
