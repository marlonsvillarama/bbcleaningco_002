<script>
    import Button from "@/components/ui/button/button.svelte";
    import Switch from "@/components/ui/switch/switch.svelte";

    import {
        CircleX,
        Plus
    } from "@lucide/svelte";
</script>

<div class="grid text-sm border-1 border rounded-sm">
    <div class="flex items-center justify-between border-b-1 border-gray-100 py-2 px-2 font-light">
        <div class="px-2 flex items-center gap-4">
            <Button variant="link" class="text-foreground w-fit px-0 text-left mr-8"
                onclick={() => window.location = `/app/quotations/3`}>
                Q2025-0003
            </Button>
            <span class="w-[200px] px-2 text-clip text-top font-extralight">September 21, 2025</span>
            <span class="w-[400px] px-2 text-clip text-top font-extralight">32B McKinley Road, Taguig City</span>
            <span class="font-bold">NCR</span>
        </div>
        <Button variant="outline" size="sm" class="border-transparent border-1 hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm">View</Button>
    </div>

    <div class="flex items-center justify-between border-b-1 border-gray-100 py-2 px-2 font-light">
        <div class="px-2 flex items-center gap-4">
            <Button variant="link" class="text-foreground w-fit px-0 text-left mr-8"
                onclick={() => window.location = `/app/quotations/2`}>
                Q2025-0002
            </Button>
            <span class="w-[200px] px-2 text-clip text-top font-extralight">August 22, 2025</span>
            <span class="w-[400px] px-2 text-clip text-top font-extralight">32B McKinley Road, Taguig City</span>
            <span class="font-bold">NCR</span>
        </div>
        <Button variant="outline" size="sm" class="border-transparent border-1 hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm">View</Button>
    </div>

    <div class="flex items-center justify-between border-b-1 border-gray-100 py-2 px-2 font-light">
        <div class="px-2 flex items-center gap-4">
            <Button variant="link" class="text-foreground w-fit px-0 text-left mr-8"
                onclick={() => window.location = `/app/quotations/1`}>
                Q2025-0001
            </Button>
            <span class="w-[200px] px-2 text-clip text-top font-extralight">August 22, 2025</span>
            <span class="w-[400px] px-2 text-clip text-top font-extralight">123 Mercedes Avenue, Pasig</span>
            <span class="font-bold">NCR</span>
        </div>
        <Button variant="outline" size="sm" class="border-transparent border-1 hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm">View</Button>
    </div>
</div>

<!-- <div class="grid gap-1">
    <div class="flex items-center justify-between w-full border-b-2 border-gray-200 pb-2">
        <span class="text-sm text-foreground font-semibold">Quotations</span>
        <Button variant="secondary" class="px-3 py-[2px] text-xs font-normal"
            onclick={() => window.alert('implement add quotation...')}
        >
            <Plus size={16} /> Add quotation
        </Button>
    </div>
</div> -->
