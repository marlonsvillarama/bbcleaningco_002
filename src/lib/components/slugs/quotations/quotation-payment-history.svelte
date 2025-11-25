<script>
    import ViewLink from "@/components/global/view-link.svelte";

    import {
        SquareArrowOutUpRight
    } from "@lucide/svelte";
</script>

<div class="grid text-sm border-1 border rounded-sm">
    <div class="flex items-center justify-between border-b-1 border-gray-100 py-3 px-2 font-light">
        <div class="flex items-center">
            <span class="px-2 w-[250px]">September 22, 2025</span>
            <ViewLink label="PMT-1001" link="/1" />
        </div>
        <span class="px-2 text-right font-bold">200.00</span>
    </div>
    <div class="flex items-center justify-between border-b-1 border-gray-100 py-3 px-2 font-light">
        <div class="flex items-center">
            <span class="px-2 w-[250px]">September 26, 2025</span>
            <ViewLink label="PMT-1002" link="/2" />
        </div>
        <span class="px-2 text-right font-bold">350.00</span>
    </div>
    <div class="flex items-center justify-between py-3 px-2 font-light">
        <div class="flex items-center">
            <span class="px-2 w-[250px]">September 29, 2025</span>
            <ViewLink label="PMT-1003" link="/3" />
        </div>
        <span class="px-2 text-right font-bold">70.00</span>
    </div>
</div>
