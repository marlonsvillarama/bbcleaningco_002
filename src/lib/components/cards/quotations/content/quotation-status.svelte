<script>
    import * as Field from "@/components/ui/field/index";
    import Textarea from "@/components/ui/textarea/textarea.svelte";

    import {
        HandCoins,
        PenBox
    } from "@lucide/svelte";

    let { data } = $props();
    let { quotation } = data;
</script>

<div class="w-full grid gap-4">
    <div class="flex gap-4 items-center">
        <div class="px-4 py-1 border rounded-md font-semibold text-sm flex gap-2 items-center">
            <PenBox size={16} /> {quotation.status_text}
        </div>

        <a href="." target="_self" class="text-sm font-normal underline text-blue-500 hover:text-blue-700">Approve</a>
    </div>

    <Field.Field class="w-[80%]">
        <Field.Label for="notes">Customer Notes</Field.Label>
        <Textarea id="notes" class="resize-none overflow-auto h-[100px]"></Textarea>
    </Field.Field>
</div>
