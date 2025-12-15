<script>
    import { cn } from "@/utils";
    import Button from "@/components/ui/button/button.svelte";
    import Input from "@/components/ui/input/input.svelte";
    import Paginator from "./paginator.svelte";

    import {
        ChevronDown,
        ChevronUp
    } from '@lucide/svelte';

    let {
        headers = [
            { id: 1, label: 'Last Name', slug: 'last_name' },
            { id: 2, label: 'First Name', slug: 'first_name' },
            { id: 3, label: 'Phone', slug: 'phone_1' },
            { id: 4, label: 'Email', slug: 'email_1' },
        ],
        data = [
            { id: 1, last_name: 'Madrid', first_name: 'Charlz', email: 'charles.madrid@busybeecleaningco.com', phone: '' },
            { id: 2, last_name: 'Villarama', first_name: 'Marlongs', email: 'marlong@busybeecleaningco.com', phone: '09173224544' },
            { id: 2, last_name: 'Estrada', first_name: 'Jinggoy', email: 'jinggoy@floodcontrolbiz.com', phone: '' },
            { id: 2, last_name: 'Revilla', first_name: 'Bong', email: 'bongrevilla@anubayan.com', phone: '' },
        ]
    } = $props();

    let rows = $state(data);

    /*  */
    let columns = $state(headers.map(c => {
        return {
            ...c,
            sort: 'asc'
        };
    }));

    const updateSort = (id) => {
        let col = columns.find(c => c.id === id);
        col.sort = col.sort === 'asc' ? 'desc' : 'asc';
        rows.sort((a, b) => {
            if (a[id] < b[id]) {
                return col.sort === 'asc' ? 1 : -1;
            }
            if (a[id] > b[id]) {
                return col.sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
        rows = rows;
        // console.log(`changeSort id = ${id}`, rows);
    };
</script>

<div class="w-full flex flex-col justify-start gap-2 text-sm border-0 border-red-300">

    <!-- Header -->
	<div class="flex items-center justify-between px-2">
        <span>Total Results: <span class="font-semibold">{rows.length}</span></span>
        <Paginator {data} />
    </div>

    <!-- Content -->
	<div class="relative flex flex-col gap-4 overflow-auto px-2 py-2">
        <table class="w-full">
            <thead class=" border-t border-gray-200">
                <tr>
                    {#each columns as col}
                    <th class="pt-3">
                        <div class="flex items-center gap-3">
                            <span class="font-semibold">{col.label}</span>
                            <Button variant="link" size="icon" onclick={() => updateSort(col.id)}>
                            {#if col.sort === 'asc'}
                                <ChevronDown />
                            {:else}
                                <ChevronUp />
                            {/if}
                            </Button>
                        </div>
                    </th>
                    {/each}

                    <!-- Actions -->
                    <th></th>
                </tr>
                <tr>
                    {#each columns as col}
                    <th class="pb-3">
                        <Input class="text-xs font-normal w-[96%]" />
                    </th>
                    {/each}

                    <!-- Actions -->
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {#each rows as row, i}
                <tr class="group">
                    {#each columns as col}
                    <td class={cn(
                        "py-2 px-1 group-hover:bg-accent/10",
                        i === 0 ? '' : '',
                        i < rows.length - 1 ? 'border-b border-gray-100' : ''
                    )}>
                        {row[col.slug]}
                    </td>
                    {/each}
                </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>