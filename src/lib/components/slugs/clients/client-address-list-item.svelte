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
        Trash
    } from "@lucide/svelte";

    let {
        data
    } = $props();

    const deleteItem = () => {
        alert(`deleteItem id = ${data.id}`);
    };

    const setAsDefault = () => {
        alert(`setAsDefault id = ${data.id}`);
    };

    const viewItem = () => {
        alert(`viewItem id = ${data.id}`);
    };
</script>

<div class="flex items-center justify-between hover:bg-gray-50">
    <div class="grid grid-cols-[auto_1fr] items-center gap-3 px-3 py-1 rounded-sm relative">
        <House class="stroke-foreground" />
        <div class="relative flex items-center">
            <div class="w-[300px] px-2 grid justify-left gap-0">
                <Button variant="link" size="sm" onclick={viewItem}
                    class={cn(
                        "focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                        "inline-flex w-fit shrink-0 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-xl px-0 py-0 text-sm font-medium border-none",
                        "transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3 bg-transparent py-0 text-primary-background shadow-none",
                        "hover:underline hover:bg-transparent"
                    )}>
                    {data.street_1}
                </Button>
            </div>
            <span class="text-clip text-top">
                {data.city.name} ({data.region.name})
            </span>
        </div>
    </div>

    <div class="flex items-center gap-3 mr-1">
        {#if data.default === true}
            <Badge>Default</Badge>
        {:else}
            <Button size="sm" onclick={setAsDefault}
                class={cn(
                    "focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                    "inline-flex w-fit shrink-0 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-xl px-1 py-1 text-xs font-medium",
                    "transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3 bg-transparent py-1 text-muted-foreground shadow-none",
                    "hover:underline hover:bg-transparent"
                )}>
                Set as default
            </Button>
        {/if}
        <Button variant="icon" size="sm" onclick={deleteItem}
            class="border-transparent border-none hover:bg-accent">
            <Trash size={16} />
        </Button>
    </div>
</div>
