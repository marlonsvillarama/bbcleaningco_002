<script>
	import Separator from "@/components/ui/separator/separator.svelte";
    import CollapseSection from "@/components/global/collapse-section.svelte";

	import {
		Calendar1,
        CircleDollarSign,
		Clock,
        Facebook,
        HandCoins,
        Instagram,
        Mail,
        Scale,
        User
	} from "@lucide/svelte";

    let { data } = $props();
</script>

<div class="grid gap-12 items-start">
    <CollapseSection title="Financials" collapse={false}>
        {#snippet children()}
            <div class="grid gap-2">
                <div class="flex flex-row items-center justify-between text-sm mt-2">
                    <div class="flex gap-2 items-center">
                        <CircleDollarSign size={16}/>
                        <span class="text-sm font-normal">Revenue</span>
                    </div>
                    <span class="font-bold">32,700.00</span>
                </div>

                <div class="flex flex-row items-center justify-between text-sm mt-1">
                    <div class="flex gap-2 items-center">
                        <Scale size={16}/>
                        <span class="text-sm font-normal">Balance</span>
                    </div>
                    <span class="">5,700.00</span>
                </div>

                <div class="flex flex-row items-center justify-between text-sm mt-1">
                    <div class="flex gap-2 items-center">
                        <HandCoins size={16}/>
                        <span class="text-sm font-normal">Overdue</span>
                    </div>
                    <span class="font-bold text-red-500">2,500.00</span>
                </div>
            </div>
        {/snippet}
    </CollapseSection>
</div>

<!-- <div class="bg-white rounded-md border-transparent font-medium grid gap-2">
    <span class="text-sm text-foreground font-bold">Financials</span>

    <Separator />

    <div class="flex flex-row items-center justify-between text-sm mt-2">
        <div class="flex gap-2 items-center">
            <CircleDollarSign size={16}/>
            <span class="text-sm font-normal">Revenue</span>
        </div>
        <span class="font-bold">32,700.00</span>
    </div>

    <div class="flex flex-row items-center justify-between text-sm mt-1">
        <div class="flex gap-2 items-center">
            <Scale size={16}/>
            <span class="text-sm font-normal">Balance</span>
        </div>
        <span class="">5,700.00</span>
    </div>

    <div class="flex flex-row items-center justify-between text-sm mt-1">
        <div class="flex gap-2 items-center">
            <HandCoins size={16}/>
            <span class="text-sm font-normal">Overdue</span>
        </div>
        <span class="font-bold text-red-500">2,500.00</span>
    </div>
</div> -->
