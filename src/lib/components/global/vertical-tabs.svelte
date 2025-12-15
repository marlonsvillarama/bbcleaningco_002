<script>
    import { cn } from "@/utils";

    let {
        children,
        class: className,
        items = []
    } = $props();

    let currentTab = $state(0);
</script>

<div class="flex items-start gap-6 px-4 py-3">
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
    </div>

    <div class="flex-1"></div>
</div>
