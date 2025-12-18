<script>
    import Badge from "@/components/ui/badge/badge.svelte";
    import Button from "@/components/ui/button/button.svelte";
    import Switch from "@/components/ui/switch/switch.svelte";
    import ClientFileListItem from "./client-file-list-item.svelte";

    import {
        CircleX,
        Plus,
        Trash
    } from "@lucide/svelte";

    let list = [
        {
            id: 1,
            name: 'Scanned_proof_of_payment.jpg'
        },
        {
            id: 2,
            name: 'Contract.pdf'
        },
        {
            id: 3,
            name: 'Contract (2).pdf'
        },
    ];
</script>

<div class="grid gap-3">
    <div class="flex">
        <Button variant="default" class="px-3 py-[2px] text-xs font-normal"
            onclick={() => window.alert('implement add client address...')}
        >
            <Plus size={16} />Upload file
        </Button>
    </div>

    <div class="grid gap-2 text-sm text-foreground font-normal border-0 border rounded-sm">
        {#each list as data}
            <ClientFileListItem {data} />
        {/each}
        <!-- item -->
        <!-- <div class="grid grid-cols-[auto_1fr] items-center gap-3 px-3 py-1 rounded-sm hover:bg-gray-50 group cursor-pointer relative">
            <House />
            <div class="relative flex items-center">
                <div class="w-[350px] px-2 grid gap-0">
                    <span>30A Kennon Road</span>
                    <span class="font-light text-foreground/60">Baguio</span>
                </div>
                -- <span class="w-[200px] px-2 text-clip text-top">Pasig</span> --
                -- <span>NCR</span> --
                <Badge>North Luzon</Badge>
            </div>
            <div class="hidden group-hover:flex items-center gap-2 pr-0 py-0 absolute right-3 bg-transparent pl-4">
                <Button variant="icon" size="sm" onclick={() => viewRecord(row.id)}
                    class="hover:bg-accent hover:cursor-pointer">
                    <Pen size={16} />
                </Button>
                <Button variant="icon" size="sm" onclick={() => deleteRecord(row.id)}
                    class="hover:bg-accent hover:cursor-pointer">
                    <Trash size={16} />
                </Button>
            </div>
        </div> -->
        <!-- <div class="flex items-center justify-between border-b-1 border-gray-100 py-1">
            <div class="px-2 flex items-center gap-4">
                <span class="w-[400px] px-2 text-clip text-top">123 Mercedes Avenue</span>
                <span class="w-[200px] px-2 text-clip text-top">Pasig</span>
                <span>NCR</span>
            </div>
            <div class="px-2 flex items-center justify-end gap-4">
                <Button variant="ghost" class="font-light text-xs rounded-sm">Set as default</Button>
                <Button variant="icon" size="sm" class="border-transparent border-1 hover:border-gray-200 hover:bg-gray-50"><CircleX /></Button>
            </div>
        </div> -->
        <!-- <div class="flex items-center justify-between border-b-1 border-gray-100 py-1">
            <div class="px-2 flex items-center gap-4">
                <span class="w-[400px] px-2 text-clip text-top">30A Kennon Road</span>
                <span class="w-[200px] px-2 text-clip text-top">Baguio City</span>
                <span>North Luzon</span>
            </div>
            <div class="px-2 flex items-center justify-center gap-4">
                <Button variant="ghost" class="font-light text-xs rounded-sm">Set as default</Button>
                <Button variant="icon" size="sm" class="border-transparent border-1 hover:border-gray-200 hover:bg-gray-50"><CircleX /></Button>
                -- <Button variant="ghost" class="font-light text-xs rounded-sm">Set as default</Button>
                <Button variant="icon" size="sm" class="border-transparent border-1 hover:border-gray-200 hover:bg-gray-50"><CircleX /></Button> --
            </div>
        </div> -->
        <!-- <div class="flex items-center justify-between py-1">
            <div class="px-2 flex items-center gap-4">
                <span class="w-[400px] px-2 text-clip text-top">32B McKinley Road</span>
                <span class="w-[200px] px-2 text-clip text-top">Taguig</span>
                <span>NCR</span>
                -- <span class="w-[400px] px-2 text-clip text-top font-extralight">32B McKinley Road, Taguig City</span>
                <span>NCR</span> --
                -- <Badge>NCR</Badge> --
            </div>
            <div class="px-2 flex items-center gap-4">
                <span class="font-normal text-xs px-3 py-1 border-none bg-accent rounded-sm">Default address</span>
                <Button variant="icon" size="sm" class="border-transparent border-1 hover:border-gray-200 hover:bg-gray-50"><CircleX /></Button>
            </div>
        </div> -->
    </div>
</div>
