<script>
    import Region from "@/components/global/region.svelte";
    import ViewLink from "@/components/global/view-link.svelte";

    import {
        CircleX,
        Plus
    } from "@lucide/svelte";
</script>

<div class="grid text-sm border-1 border rounded-sm">
    <div class="flex items-center gap-4 border-b-1 border-gray-100 py-2 px-4 font-light">
        <ViewLink label="Q2025-0003" link="https://google.com?3" />
        <span class="w-[200px] ml-6 text-clip text-top font-extralight">September 21, 2025</span>
        <Region label="NCR" />
        <span class="w-[400px] ml-4 text-clip text-top font-extralight">32B McKinley Road, Taguig City</span>
    </div>

    <div class="flex items-center gap-4 border-b-1 border-gray-100 py-2 px-4 font-light">
        <ViewLink label="Q2025-0002" link="https://google.com?2" />
        <span class="w-[200px] ml-6 text-clip text-top font-extralight">August 22, 2025</span>
        <Region label="NCR" />
        <span class="w-[400px] ml-4 text-clip text-top font-extralight">32B McKinley Road, Taguig City</span>
    </div>

    <div class="flex items-center gap-4 border-b-1 border-gray-100 py-2 px-4 font-light">
        <ViewLink label="Q2025-0001" link="https://google.com?1" />
        <span class="w-[200px] ml-6 text-clip text-top font-extralight">August 22, 2025</span>
        <Region label="NCR" />
        <span class="w-[400px] ml-4 text-clip text-top font-extralight">123 Mercedes Avenue, Pasig</span>
    </div>
</div>
