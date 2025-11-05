<script>
    import Button from "@/components/ui/button/button.svelte";
    import Switch from "@/components/ui/switch/switch.svelte";

    import {
        CircleX,
        Plus
    } from "@lucide/svelte";
</script>

<div class="grid gap-1">
    <div class="flex items-center justify-between w-full border-b-2 border-gray-200 pb-2">
        <span class="text-sm text-foreground font-semibold">Address Book</span>
        <Button variant="secondary" class="px-3 py-[2px] text-xs font-normal"
            onclick={() => window.alert('implement add client address...')}
        >
            <Plus size={16} /> Add client address
        </Button>
    </div>

    <!-- TODO: Add column for address contact details -->
    <div class="grid gap-1 text-sm">
        <div class="flex items-center justify-between border-b-1 border-gray-100 py-1">
            <div class="px-2 flex items-center gap-4">
                <span class="w-[400px] px-2 text-clip text-top font-extralight">123 Mercedes Avenue, Pasig</span>
                <span class="font-bold">NCR</span>
            </div>
            <div class="px-2 flex items-center gap-4">
                <Button variant="link" class="text-muted-foreground w-fit px-0 text-left underline hover:text-foreground">Set as default</Button>
                <Button variant="icon" size="sm" class="border-transparent border-1 hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm"><CircleX /></Button>
            </div>
        </div>
        <div class="flex items-center justify-between border-b-1 border-gray-100 py-1">
            <div class="px-2 flex items-center gap-4">
                <span class="w-[400px] px-2 text-clip text-top font-extralight">30A Kennon Road, Baguio City</span>
                <span class="font-bold">North Luzon</span>
            </div>
            <div class="px-2 flex items-center gap-4">
                <Button variant="link" class="text-muted-foreground w-fit px-0 text-left underline hover:text-foreground">Set as default</Button>
                <Button variant="icon" size="sm" class="border-transparent border-1 hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm"><CircleX /></Button>
            </div>
        </div>
        <div class="flex items-center justify-between border-b-1 border-gray-100 py-1 bg-accent/20">
            <div class="px-2 flex items-center gap-4">
                <span class="w-[400px] px-2 text-clip text-top font-extralight">32B McKinley Road, Taguig City</span>
                <span class="font-bold">NCR</span>
            </div>
            <div class="px-2 flex items-center gap-4">
                <!-- <Button variant="link" class="text-muted-foreground w-fit px-0 text-left underline hover:text-foreground">Set as default</Button> -->
                <span class="font-bold">Default address</span>
                <Button variant="icon" size="sm" class="border-transparent border-1 hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm"><CircleX /></Button>
            </div>
        </div>
    </div>
</div>
