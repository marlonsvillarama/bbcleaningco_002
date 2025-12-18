<script>
	import Separator from "@/components/ui/separator/separator.svelte";
    import CollapseSection from "@/components/global/collapse-section.svelte";

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

<div class="grid gap-12 items-start">
    <CollapseSection title="Sales Channel" collapse={false}>
        {#snippet children()}
            <div class="grid gap-2">
                <div class="flex gap-3 items-center mt-2">
                    <User size={16}/>
                    <span class="text-sm font-normal">Charles Madrid</span>
                </div>

                <div class="flex gap-3 items-center mt-1">
                    <Instagram size={16}/>
                    <span class="text-sm font-normal">Instagram</span>
                </div>

                <div class="flex gap-3 items-center mt-1">
                    <Calendar1 size={16}/>
                    <span class="text-sm font-normal">September 4, 2025</span>
                </div>

                <div class="flex gap-3 items-center mt-1">
                    <Clock size={16}/>
                    <span class="text-sm font-normal">10:47 AM</span>
                </div>
            </div>
        {/snippet}
    </CollapseSection>
</div>

<!-- <div class="bg-white rounded-md border-transparent font-medium grid gap-2">
    <span class="text-sm text-foreground font-semibold">Sales Channel</span>

    <Separator />

    <div class="flex gap-3 items-center mt-2">
        <User size={16}/>
        <span class="text-sm font-normal">Charles Madrid</span>
    </div>

    <div class="flex gap-3 items-center mt-1">
        <Instagram size={16}/>
        <span class="text-sm font-normal">Instagram</span>
    </div>

    <div class="flex gap-3 items-center mt-1">
        <Calendar1 size={16}/>
        <span class="text-sm font-normal">September 4, 2025</span>
    </div>

    <div class="flex gap-3 items-center mt-1">
        <Clock size={16}/>
        <span class="text-sm font-normal">10:47 AM</span>
    </div>
</div> -->
