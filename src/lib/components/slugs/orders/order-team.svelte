<script>
    import Button from "@/components/ui/button/button.svelte";
    import Separator from "@/components/ui/separator/separator.svelte";
    import Textarea from "@/components/ui/textarea/textarea.svelte";

    import { X } from "@lucide/svelte";

    let items = [
        { id: 1, name: 'ALPHA' },
        { id: 2, name: 'BRAVO' },
    ];
</script>

<div class="font-medium grid gap-2 w-full">
    <span class="text-sm text-foreground font-semibold">Team</span>

    <Separator />

    <div class="pt-1 grid gap-4 text-sm">
        <div class="flex gap-1 border-1 border-foreground/30 rounded-xs px-1 py-2 font-light" contenteditable="true">
            {#each items as item}
                {@render tag(item)}
            {/each}
        </div>
    </div>
</div>

{#snippet tag(data)}
    <div class="flex gap-2 items-center border-1 border-accent/30 bg-accent/10 rounded-xs px-2 py-1">
        {data.name}
        <Button onclick={() => alert(`clicked ${data.id}`)}><X size={16} /></Button>
    </div>
{/snippet}