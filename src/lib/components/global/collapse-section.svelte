<script>
    import { cn } from "@/utils";
    import Button from "../ui/button/button.svelte";
    import {
        ChevronDown,
        ChevronRight
    } from "lucide-svelte";
    let {
        children,
        title = 'Section...'
    } = $props();

    let isOpen = $state(true);
</script>

<div class="root grid gap-2">
    <div class="grid grid-cols-[auto_1fr] items-center gap-1">
        <Button variant="icon" size="icon" onclick={() => isOpen = !isOpen}
            class="hover:bg-accent hover:cursor-pointer"
        >
            {#if isOpen}
                <ChevronDown size={16} />
            {:else}
                <ChevronRight size={16} />
            {/if}
        </Button>
        <div class={cn(
            "text-md font-bold"
        )}>{title}</div>
    </div>
    <div class={cn(
        "ml-8 mt-1 pt-1 border-l-1 border-transparent border-2 border-t-gray-200",
        isOpen ? 'block' : 'hidden'
    )}>
        {@render children()}
    </div>
</div>