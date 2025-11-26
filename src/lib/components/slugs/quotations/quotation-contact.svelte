<script>
    import Button from "@/components/ui/button/button.svelte";
    import Input from "@/components/ui/input/input.svelte";
	import Separator from "@/components/ui/separator/separator.svelte";
	import * as Select from "@/components/ui/select/index.js";
    import FieldsetInput from "@/components/global/form/fieldset-input.svelte";

	import {
        Pen,
        Plus,
        SquareArrowUpRight
	} from "@lucide/svelte";

    let { data } = $props();
    let { record } = data;
</script>

<div class="bg-white rounded-md border-none font-medium grid gap-2 w-full">
    <span class="text-sm text-foreground font-semibold">Contact Details</span>

    <Separator />

    <div class="pt-1 grid gap-3 text-sm">
        <div class="grid grid-cols-[120px_1fr] items-center">
            <span>Name</span>
            <div class="flex items-center gap-2">
                <Select.Root>
                    <Select.Trigger class="w-full">{record.clients.first_name} {record.clients.last_name}</Select.Trigger>
                </Select.Root>
                <Button variant="secondary" size="icon" class="border">
                    <SquareArrowUpRight size={24} />
                </Button>
                <Button variant="secondary" size="icon" class="border">
                    <Plus size={16} />
                </Button>
            </div>
        </div>

        <FieldsetInput id="phone" label="Phone" placeholder="..." class="w-[180px]" value={record.clients.phone} />
        <!-- <div class="grid grid-cols-[100px_1fr] items-center">
            <span>Phone</span>
            <Input class="w-[180px] text-sm font-light border-transparent px-2 py-1 hover:border-foreground/30" value={quotation.clients.phone} /> -->
            <!-- <span class="text-sm font-light px-2 py-1 hover:bg-accent/20">{quotation.clients.phone}</span> -->
        <!-- </div> -->

        <FieldsetInput id="phone" label="Email" placeholder="..." value={record.clients.email} />
        <!-- <div class="grid grid-cols-[100px_1fr] items-center">
            <span>Email</span>
            <Input class="text-sm font-light border-transparent px-2 py-1 hover:border-foreground/30" value={quotation.clients.email} /> -->
            <!-- <span class="text-sm font-light">marlonsvillarama12345@gmail.com</span> -->
        <!-- </div> -->
    </div>
</div>
