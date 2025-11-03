<script>
	import * as Select from "@/components/ui/select/index.js";
    import Button from "@/components/ui/button/button.svelte";
	import Separator from "@/components/ui/separator/separator.svelte";

	import {
		ArrowLeft,
		BanknoteX,
        Mail,
        Phone
	} from "@lucide/svelte";

    let { data } = $props();
    let { quotation } = data;
</script>

<div class="bg-white rounded-md border-transparent font-medium grid gap-2">
    <span class="text-sm text-foreground font-semibold">Client Details</span>

    <Separator />

    <Select.Root>
        <Select.Trigger class="w-full">{quotation.clients.first_name} {quotation.clients.last_name}</Select.Trigger>
    </Select.Root>

    <div class="flex gap-3 items-center mt-2">
        <Phone size={16}/>
        <span class="text-xs font-normal">{quotation.clients.phone}</span>
    </div>

    <div class="flex gap-3 items-center mt-1">
        <Mail size={16}/>
        <span class="text-sm font-normal">marlonsvillarama12345@gmail.com</span>
    </div>

    <div class="flex gap-3 items-center mt-1">
        <!-- Only used for alignment of button -->
        <div class="w-[16px]"></div>
        <Button variant="secondary" class="px-2 py-1 text-xs rounded-xs"
                onclick={() => alert('implement email to client...')}
        >
            Email to client
        </Button>
    </div>
</div>
