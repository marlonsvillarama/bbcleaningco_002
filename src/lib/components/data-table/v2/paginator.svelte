<script>
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
        data,
        onpagechange
    } = $props();

    let pageIndex = $state(0);
    let pageSize = $state(20);
    let pageCount = $derived(Math.ceil(data.length / pageSize));

    const moveFirst = () => {};
    const moveLast = () => {};
    const moveNext = () => {};
    const movePrev = () => {};
</script>

<div class="flex w-full items-center gap-8 lg:w-fit">
    <div class="hidden items-center gap-2 lg:flex">
        <Label for="rows-per-page" class="text-sm font-medium">Rows per page</Label>
        <Select.Root
            type="single"
            bind:value={pageSize}
        >
            <Select.Trigger size="sm" class="w-20" id="rows-per-page">
                {pageSize}
            </Select.Trigger>
            <Select.Content side="top">
                {#each [1, 20, 50] as pageSize (pageSize)}
                    <Select.Item value={pageSize.toString()}>
                        {pageSize}
                    </Select.Item>
                {/each}
            </Select.Content>
        </Select.Root>
    </div>
    <div class="flex w-fit items-center justify-center text-sm font-medium">
        Page {pageIndex + 1} of {data.length}
    </div>
    <div class="ml-auto flex items-center gap-2 lg:ml-0">
        <Button
            variant="outline"
            class="hidden h-8 w-8 p-0 lg:flex"
            onclick={() => pageIndex = 0}
            disabled={() => pageIndex <= 0}
        >
            <span class="sr-only">Go to first page</span>
            <ChevronsLeft size={16} />
        </Button>
        <Button
            variant="outline"
            class="size-8"
            size="icon"
            onclick={() => pageIndex = pageIndex - 1}
            disabled={() => pageIndex <= 0}
        >
            <span class="sr-only">Go to previous page</span>
            <ChevronLeft size={16} />
        </Button>
        <Button
            variant="outline"
            class="size-8"
            size="icon"
            onclick={() => pageIndex = pageIndex + 1}
            disabled={() => page >= pageCount - 1}
        >
            <span class="sr-only">Go to next page</span>
            <ChevronRight size={16} />
        </Button>
        <Button
            variant="outline"
            class="hidden size-8 lg:flex"
            size="icon"
            onclick={() => pageIndex = pageCount - 1}
            disabled={() => page >= pageCount - 1}
        >
            <span class="sr-only">Go to last page</span>
            <ChevronsRight size={16} />
        </Button>
    </div>
</div>
