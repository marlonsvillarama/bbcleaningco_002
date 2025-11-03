<script>
    import * as Field from "@/components/ui/field/index";
    import Button from "@/components/ui/button/button.svelte";
    import Textarea from "@/components/ui/textarea/textarea.svelte";

    import {
        Check,
        HandCoins,
        PenBox
    } from "@lucide/svelte";

    let { data } = $props();
    let { quotation } = data;
</script>

<div class="grid gap-2">
    <div class="flex items-center justify-between w-full border-b-2 border-gray-200 pb-2">
        <span class="text-sm text-foreground font-semibold">Quotation Notes</span>
        <Button variant="outline" disabled={true} class="text-white px-3 py-[2px] text-xs font-normal"></Button>
    </div>

    <Field.Field class="">
        <!-- <Field.Label for="notes">Customer Notes</Field.Label> -->
        <Textarea id="notes" class="resize-none overflow-auto h-[150px]"></Textarea>
    </Field.Field>
</div>
