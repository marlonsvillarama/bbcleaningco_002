<script>
    import { cn } from "@/utils";
    import Button from "../ui/button/button.svelte";
    import {
        ChevronDown,
        ChevronRight
    } from "lucide-svelte";
    let {
        children,
        collapse = true,
        title = 'Section...'
    } = $props();

    let isOpen = $state(true);
</script>

<div class="root grid gap-2">
    <div class="grid grid-cols-[auto_1fr] items-center gap-1">
        {#if collapse === true}
            <Button variant="icon" size="icon" onclick={() => isOpen = !isOpen}
                class="hover:bg-accent hover:cursor-pointer"
            >
                {#if isOpen}
                    <ChevronDown size={16} />
                {:else}
                    <ChevronRight size={16} />
                {/if}
            </Button>
        {/if}
        <div class={cn(
            "text-sm font-semibold tracking-[0.2px]"
        )}>{title}</div>
        {#if collapse === false}
            <Button variant="icon" size="icon" disabled></Button>
        {/if}
    </div>
    <div class={cn(
        collapse === true ? 'ml-8' : '',
        "mt-1 pt-4 border-l-1 border-transparent border-1 border-t-gray-200 text-sm",
        isOpen ? 'block' : 'hidden'
    )}>
        {@render children()}
    </div>
</div>