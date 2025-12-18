<script>
    import { cn } from "@/utils";
    import Badge from "@/components/ui/badge/badge.svelte";
    import Button from "@/components/ui/button/button.svelte";
    import Switch from "@/components/ui/switch/switch.svelte";

    import {
        CircleX,
        House,
        Pen,
        Plus,
        Receipt,
        Trash
    } from "@lucide/svelte";

    let {
        data
    } = $props();
</script>

<div class="grid grid-cols-[auto_1fr] items-center gap-3 px-3 py-1 rounded-sm hover:bg-gray-50 group cursor-pointer relative">
    <Receipt class="stroke-foreground" />
    <div class="relative flex items-center">
        <span class="w-[150px]">{data.name}</span>
        <div class="w-[350px] px-2 grid gap-0">
            <span>{data.street_1}</span>
            <span class="text-xs font-normal text-foreground/60">{data.city.name}</span>
        </div>
        <span class="px-2 text-clip text-top">{data.region.name}</span>
    </div>
    <!-- {#if data.default === true}
        <div class="flex items-center gap-2 pr-0 py-0 absolute right-3 bg-transparent pl-4 cursor-default">
            <Badge>Default</Badge>
        </div>
    {:else}
        <div class=" group-hover:flex items-center gap-2 pr-0 py-0 absolute right-3 bg-transparent pl-4">
            <Button size="sm" onclick={() => viewRecord(data.id)}
                class={cn(
                    "focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                    "inline-flex w-fit shrink-0 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-xl px-1 py-1 text-xs font-medium",
                    "transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3 bg-transparent py-1 text-primary-background shadow-none",
                    "hover:underline hover:bg-transparent"
                )}>
                Set as default
            </Button>
        </div>
    {/if} -->
</div>
