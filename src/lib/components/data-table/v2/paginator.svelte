<script>
    import { onMount } from "svelte";
    import Button from "@/components/ui/button/button.svelte";
    import Label from "@/components/ui/label/label.svelte";
    import * as Select from "@/components/ui/select/index";

    import {
        ChevronDown,
        ChevronLeft,
        ChevronsLeft,
        ChevronRight,
        ChevronsRight,
        ChevronUp
    } from "@lucide/svelte";

    let {
        page = $bindable(),
        data,
        size = 10,
        onpagechange
    } = $props();

    // let pageIndex = $state(0);
    // let pageSize = $state(size);
    let pageCount = $state(Math.ceil(data.length / size));
    console.log(`pageCount = ${pageCount}; page = ${page}`);
    let pageLabels = $state([]);
    let currentPageLabel = $derived.by(() => data.length > 0 ? pageLabels[page] : '');

    const moveFirst = () => {};
    const moveLast = () => {};
    const moveNext = () => {};
    const movePrev = () => {};
    /* const updatePage = () => {
        console.log(`updatePage pageSize = ${size}`);
        pageIndex = 0;
        page = pageIndex;
        // onpagechange();
    }; */

    onMount(() => {
        for (let i = 0; i < pageCount; i++) {
            let start = (i * size) + 1;
            let end = Math.min((i * size) + size, data.length);
            pageLabels.push(`${start} to ${end} of ${data.length}`);
        }
        pageLabels = pageLabels;
        console.log('pageLabels', pageLabels);
        // currentPageLabel = 
    });
</script>

<div class="flex w-full items-center gap-8 lg:w-fit">
    <div class="hidden items-center gap-2 lg:flex">
        <!-- <Label for="rows-per-page" class="text-sm font-medium">Rows per page</Label> -->
        <Select.Root type="single" bind:value={page}>
            <Select.Trigger size="sm" id="rows-per-page"
                 class="border-transparent hover:border-gray-200 rounded-sm shadow-none hover:shadow-xs"
            >
                {currentPageLabel}
            </Select.Trigger>
            <Select.Content side="top">
                {#each pageLabels as pageLabel, i}
                    <Select.Item value={i}>
                        {pageLabel}
                    </Select.Item>
                {/each}
            </Select.Content>
        </Select.Root>
    </div>
    <!-- <div class="flex w-fit items-center justify-center text-sm font-medium">
        Page {pageIndex + 1} of {data.length}
    </div> -->
    <div class="ml-auto flex items-center gap-2 lg:ml-0">
        <!-- <Button
            variant="outline"
            class="hidden h-8 w-8 p-0 lg:flex"
            onclick={() => pageIndex = 0}
            disabled={() => pageIndex <= 0}
        >
            <span class="sr-only">Go to first page</span>
            <ChevronsLeft size={16} />
        </Button> -->
        <Button
            variant="outline"
            class="size-8"
            size="icon"
            onclick={() => page = page - 1}
            disabled={page <= 0}
        >
            <span class="sr-only">Go to previous page</span>
            <ChevronLeft size={16} />
        </Button>
        <Button
            variant="outline"
            class="size-8"
            size="icon"
            onclick={() => page = page + 1}
            disabled={page >= (pageCount - 1)}
        >
            <!-- {page}/{pageCount} -->
            <span class="sr-only">Go to next page</span>
            <ChevronRight size={16} />
        </Button>
        <!-- <Button
            variant="outline"
            class="hidden size-8 lg:flex"
            size="icon"
            onclick={() => pageIndex = pageCount - 1}
            disabled={() => page >= pageCount - 1}
        >
            <span class="sr-only">Go to last page</span>
            <ChevronsRight size={16} />
        </Button> -->
    </div>
</div>
