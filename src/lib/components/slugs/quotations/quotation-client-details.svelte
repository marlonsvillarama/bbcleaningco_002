<script>
    // import Card from "@/components/global/card/card.svelte";
    import * as Card from "@/components/ui/card/index";
    import * as Field from "@/components/ui/field/index";
    import * as InputGroup from "@/components/ui/input-group/index";
    import * as Select from "@/components/ui/select/index";
    import FieldSet from "@/components/global/form/fieldset.svelte";
    import FieldsetCheckbox from "@/components/global/form/fieldset-checkbox.svelte";

    import Button from "@/components/ui/button/button.svelte";
    import Checkbox from "@/components/ui/checkbox/checkbox.svelte";
    import Input from "@/components/ui/input/input.svelte";
    import Label from "@/components/ui/label/label.svelte";
    import Textarea from "@/components/ui/textarea/textarea.svelte";

    import {
        Pen,
        Plus,
        SquareArrowUpRight
    } from "@lucide/svelte";
    
    let { data } = $props();
    const clients = [
        { value: "1", text: "Estrada, Jinggoy" },
        { value: "2", text: "Go, Bong" },
        { value: "3", text: "Villanueva, Joel" },
    ];
    let selectedClient = $state('');
    const triggerContent = $derived(
        clients.find((c) => c.value === selectedClient)?.text ?? "Select a client"
    );
</script>

<div class="grid grid-cols-[120px_1fr] items-center w-full">
    <span class="text-sm text-foreground font-semibold">Client</span>
    <div class="flex items-center gap-2">
        <Select.Root type="single" bind:value={selectedClient}>
            <Select.Trigger class="w-full">{triggerContent}</Select.Trigger>
            <Select.Content>
                {#each clients as client}
                    <Select.Item value={client.value} label={client.text}>{client.text}</Select.Item>
                {/each}
            </Select.Content>
        </Select.Root>
        <Button variant="secondary" size="icon" class="border">
            <SquareArrowUpRight size={16} />
        </Button>
        <Button variant="secondary" size="icon" class="border">
            <Plus size={16} />
        </Button>
    </div>
</div>
