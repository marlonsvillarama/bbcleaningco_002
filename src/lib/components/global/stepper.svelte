<script>
    import { cn } from "@/utils";
    import {
        Circle,
        CircleCheck
    } from "@lucide/svelte";

    let {
        class: className,
        items = [],
        step = 0
    } = $props();
    let currentStep = $state(step);
</script>

<div class={cn(
    "grid gap-6 text-sm w-[240px]",
    className
)}>
    {#each items as item, index}
        <div class="flex items-center gap-2 step" data-step={index}>
            {#if step > index}
                <CircleCheck class="stroke-blue-500" />
            {:else}
                <Circle class={cn(
                    step === index ? "stroke-gray-400" : "stroke-gray-200",
                    step === index ? "fill-gray-400" : "fill-gray-200"
                 )} />
            {/if}
            <span class={cn(
                step > index ? "text-blue-500" : "",
                step === index ? "font-bold" : "",
                step < index ? "text-gray-400" : ""
            )}>{item}</span>
        </div>
    {/each}

    <!-- <Separator class="max-w-[300px]"/> -->
    <!-- <Separator class="max-w-[240px]"/> -->

    <!-- <div class="flex items-center gap-2 step" data-step={2}>
        <Circle class="stroke-gray-200 fill-gray-200" />
        <span>Service Items</span>
    </div> -->

    <!-- <Separator class="max-w-[240px]"/> -->
    
    <!-- <div class="flex items-center gap-2 step" data-step={3}>
        <Circle class="stroke-gray-200 fill-gray-200" />
        <span>Service Items</span>
    </div> -->
</div>
