<script>
    import * as Field from "@/components/ui/field/index";
    import * as Select from "@/components/ui/select/index";
    import Button from "@/components/ui/button/button.svelte";

    import {
        CircleX,
        Plus
    } from "@lucide/svelte";

    let { data } = $props();
    const teams = [
        { value: "1", text: "ALPHA" },
        { value: "2", text: "BRAVO" },
        { value: "3", text: "CHARLIE" },
    ];
    let selectedTeam = $state('3');
    const triggerContent = $derived(
        teams.find((t) => t.value === selectedTeam)?.text ?? "Select team"
    );
</script>

<div class="grid gap-1">
    <div class="flex items-center justify-between w-full border-b-2 border-gray-200 pb-1">
        <span class="text-sm text-foreground font-semibold">Dispatch Details</span>
        <!-- <Button variant="outline" disabled={true} class="text-white px-3 py-[2px] text-xs font-normal"></Button> -->
        <div class="flex gap-2 items-center">
            <Select.Root type="single" bind:value={selectedTeam}>
                <Select.Trigger class="">{triggerContent}</Select.Trigger>
                <Select.Content>
                    {#each teams as team}
                        <Select.Item value={team.value} label={team.text}>{team.text}</Select.Item>
                    {/each}
                </Select.Content>
            </Select.Root>
            <Button variant="secondary" class="px-3 py-[2px] text-xs font-normal"
                onclick={() => window.alert('implement add member...')}
            >
                <Plus size={16} /> Add member
            </Button>
        </div>
    </div>

    <div class="grid gap-1 text-sm">
        <div class="flex items-center justify-between border-b-1 border-gray-100 py-1">
            <span class="px-2 text-clip text-top font-extralight">Curlee Discaya</span>
            <div class="flex items-center gap-3">
                <!-- <span class="text-right min-w-[70px] align-top font-bold">1</span> -->
                <Button variant="icon" size="sm" class="border-transparent border-1 hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm"><CircleX /></Button>
            </div>
        </div>
        <div class="flex items-center justify-between border-b-1 border-gray-100 py-1">
            <span class="px-2 text-clip text-top font-extralight">Erwin Alcantara</span>
            <div class="flex items-center gap-3">
                <!-- <span class="text-right min-w-[70px] align-top font-bold">1</span> -->
                <Button variant="icon" size="sm" class="border-transparent border-1 hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm"><CircleX /></Button>
            </div>
        </div>
        <div class="flex items-center justify-between border-b-1 border-gray-100 py-1">
            <span class="px-2 text-clip text-top font-extralight">Brice Hernandez</span>
            <div class="flex items-center gap-3">
                <!-- <span class="text-right min-w-[70px] align-top font-bold">1 box</span> -->
                <Button variant="icon" size="sm" class="border-transparent border-1 hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm"><CircleX /></Button>
            </div>
        </div>
    </div>
</div>