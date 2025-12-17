<script>
    import { cn } from "@/utils";
    import Button, { buttonVariants } from "@/components/ui/button/button.svelte";
    import Checkbox from "@/components/ui/checkbox/checkbox.svelte";
    import Input from "@/components/ui/input/input.svelte";
    import { AlertDialog } from "bits-ui";
    import Paginator from "./paginator.svelte";

    import {
        ChevronDown,
        ChevronUp,
        Pen,
        Trash,
        X
    } from '@lucide/svelte';

    let {
        headers = [],
        data = []
    } = $props();

    data = data.map(d => {
        return {
            ...d,
            checked: false
        };
    });

    const PAGE_SIZE = 20;
    let rows = $state(data);

    let alertIsOpen = $state(false);
    let checkedAll = $state(false);
    let currentPage = $state(0);
    let sortOrder = $state('asc');
    let filterTexts = {};
    let pageRows = $derived(rows.slice(
        currentPage * PAGE_SIZE,
        (currentPage * PAGE_SIZE) + PAGE_SIZE
    ));

    /*  */
    let columns = $state(headers.map(c => {
        return {
            ...c,
            sort: 'asc'
        };
    }));

    const deleteRecord = (id) => {
        // alertIsOpen = true;
        let item = rows.find(r => r.id === id);
        console.log(`deleteRow id = ${id}`, item);

        if (!item) return;
        rows = rows.filter(r => r.id !== id);
        alertIsOpen = false;
    };

    const editRow = (id) => {
        let item = rows.find(r => r.id === id);
        console.log(`editRow id = ${id}`, item);
    };

    const filterChange = () => {
        let temp = data;
        headers.map(h => h.slug).forEach(slug => {
            if (filterTexts[slug]) {
                temp = temp.filter(t => t[slug].indexOf(filterTexts[slug]) === 0);
            }
        });
        
        console.log(`filterChange; filterTexts ==>>`, filterTexts);
        rows = temp;
    };

    const getCheckedAll = () => {
        return checkedAll;
    };

    const parseToDate = (str) => {
        let year = str.slice(0, 4);
        let month = str.slice(4, 6);
        let day = str.slice(6);

        let dt = new Date(year, parseInt(month) - 1, day);
        return `${dt.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })} - ${dt.toLocaleDateString('en-US', { weekday: 'short' })}`;
    };

    const setCheckedAll = () => {
        checkedAll = !checkedAll;
        console.log(`checkAll; checkedAll = ${checkedAll}`);
        rows.forEach(r => r.checked = checkedAll);
        rows = rows;
    };

    const updatePageSize = () => {};

    const updateSort = (id) => {
        sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        rows.sort((a, b) => {
            if (a[id] < b[id]) {
                return sortOrder === 'asc' ? 1 : -1;
            }
            if (a[id] > b[id]) {
                return sortOrder === 'asc' ? -1 : 1;
            }
            return 0;
        });
        rows = rows;
        console.log(`changeSort sortOrder = ${sortOrder}`, rows);
    };

    const viewRecord = (id) => {
        // alert(`viewRecord id = ${id}`);
        window.location = `/app/quotations/${id}`;
    };
</script>

<div class="w-full flex flex-col justify-start gap-2 text-sm border-0 border-red-300">

    <!-- Header -->
	<div class="flex items-center justify-between px-0">
        <span>Total Results: <span class="font-semibold">{rows.length}</span></span>
        <Paginator {data} bind:page={currentPage} size={PAGE_SIZE} />
    </div>

    <!-- Content -->
	<div class="relative bg-gray-100 rounded-2xl">
        <div class="px-4 py-2 grid grid-cols-[auto_150px_1fr] gap-6 items-center border-l-4 border-transparent">
            <!-- <div class="grid grid-cols-[auto_1fr] gap-4 items-center"> -->
            <Checkbox bind:checked={getCheckedAll, setCheckedAll} />
            <div>ID</div>
            <div class="flex items-center gap-4 group relative py-0">
                <div class="font-bold flex items-center gap-3 w-[160px]">
                    <span class="font-semibold">Date</span>
                    <Button variant="link" size="icon" onclick={() => updateSort('serviceDate')}
                        class="hover:bg-accent"
                    >
                    {#if sortOrder === 'asc'}
                        <ChevronUp />
                    {:else}
                        <ChevronDown />
                    {/if}
                    </Button>
                </div>
                <!-- </div> -->
                <div class="">Details</div>
            </div>
        </div>

        <div class="border-t-2 border-gray-200">
            {#each pageRows as row, i}
            <div class={cn(
                "grid grid-cols-[auto_150px_1fr] gap-6 items-center bg-white border-1 border-l-4 border-transparent",
                i < rows.length - 1 ? 'border-b-gray-100' : '',
                "hover:border-gray-300 hover:border-l-accent hover:z-10"
            )}>
                <Checkbox class="ml-4 my-2" bind:checked={row.checked} />
                <div>{row.number}</div>
                <div onclick={() => viewRecord(row.id)}
                    class="flex items-center gap-4 group relative py-2.5 cursor-pointer"
                >
                    <div class="border-r-0 w-[160px]">{parseToDate(row.serviceDate)}</div>
                    <div class="font-bold border-r-0 w-[270px]">{row.client}</div>
                    <div class="border-r-0 w-[280px]">{row.service}</div>
                    <div class="border-r-0 flex-1">{row.area ? `${row.area} sqm.` : ''}</div>
                    <div class="hidden group-hover:flex items-center gap-2 pr-2 py-0 absolute right-0 bg-white pl-4">
                        <Button variant="icon" size="sm" onclick={() => viewRecord(row.id)}
                            class="hover:bg-accent hover:cursor-pointer">
                            <Pen size={16} />
                        </Button>
                        <Button variant="icon" size="sm" onclick={() => deleteRecord(row.id)}
                            class="hover:bg-accent hover:cursor-pointer">
                            <Trash size={16} />
                        </Button>
                    </div>
                </div>
            </div>
            {/each}
        </div>
    </div>
</div>
