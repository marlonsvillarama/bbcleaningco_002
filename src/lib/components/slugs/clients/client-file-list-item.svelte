<script>
    import { cn } from "@/utils";
    import Badge from "@/components/ui/badge/badge.svelte";
    import Button from "@/components/ui/button/button.svelte";
    import Switch from "@/components/ui/switch/switch.svelte";

    import {
        CircleX,
        File,
        Trash
    } from "@lucide/svelte";

    let {
        data
    } = $props();

    const deleteItem = () => {
        alert(`deleteItem id = ${data.id}`);
    };

    const viewItem = () => {
        alert(`viewItem id = ${data.id}`);
    };
</script>

<div class="grid grid-cols-[auto_1fr] items-center gap-3 pl-3 pr-1 py-1 rounded-sm hover:bg-gray-50 group relative">
    <File class="stroke-foreground" />
    <div class="relative flex items-center justify-between">
        <Button variant="link" size="sm" onclick={viewItem} class="font-normal">
            {data.name}
        </Button>
        <Button variant="icon" size="sm" onclick={deleteItem}
            class="border-transparent border-none hover:bg-accent">
            <Trash />
        </Button>
    </div>
</div>
