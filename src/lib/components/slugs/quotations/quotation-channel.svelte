<script>
    import Button from "@/components/ui/button/button.svelte";
    import * as Card from "@/components/ui/card/index";
	import Separator from "@/components/ui/separator/separator.svelte";

	import {
		Calendar1,
		Clock,
        Facebook,
        Instagram,
        Mail,
        User
	} from "@lucide/svelte";

    let { data } = $props();
</script>

<!-- <div class="w-full grid gap-1 px-6 pt-5 pb-7 bg-white rounded-md shadow-md"> -->
<!-- <div class="bg-white font-medium grid gap-2 rounded-md shadow-md"> -->
    <!-- <span class="text-sm text-foreground font-semibold">Sales Channel</span> -->
<!-- <Card.Root>
	<Card.Header>
		<Card.Title>Sales Channel</Card.Title>
	</Card.Header> -->
    <!-- <div class="flex items-center justify-between w-full border-b-2 border-gray-200 pb-2">
        <span class="text-sm text-foreground font-semibold">Sales Channel</span>
        <Button disabled={true} variant="link" class="px-3 py-[2px] text-xs font-normal text-white">
            Pay balance
        </Button>
    </div> -->

<div class="bg-white rounded-md border-none font-medium grid gap-2">
    <span class="text-sm text-foreground font-semibold">Sales Channel</span>

    <Separator />

	<!-- <Card.Content class="grid gap-2"> -->
    <div class="pt-1 grid gap-3">
    <div class="flex gap-3 items-center">
        <User size={16}/>
        <span class="text-sm font-light">Charles Madrid</span>
    </div>

    <div class="flex gap-3 items-center">
        <Instagram size={16}/>
        <span class="text-sm font-light">Instagram</span>
    </div>

    <div class="flex gap-3 items-center">
        <Calendar1 size={16}/>
        <span class="text-sm font-light">September 4, 2025</span>
    </div>

    <div class="flex gap-3 items-center">
        <Clock size={16}/>
        <span class="text-sm font-light">10:47 AM</span>
    </div>
    </div>
    <!-- </Card.Content> -->

<!-- </Card.Root> -->
</div>
