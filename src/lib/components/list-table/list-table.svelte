<script module>
	export const columns = [
		{
			id: "select",
			header: ({ table }) =>
				renderComponent(DataTableCheckbox, {
					checked: table.getIsAllPageRowsSelected(),
					indeterminate:
						table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected(),
					onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
					"aria-label": "Select all",
				}),
			cell: ({ row }) =>
				renderComponent(DataTableCheckbox, {
					checked: row.getIsSelected(),
					onCheckedChange: (value) => row.toggleSelected(!!value),
					"aria-label": "Select row",
				}),
			enableSorting: false,
			enableHiding: false,
		},
		{
			accessorKey: "name",
			header: "Name",
			cell: ({ row }) => renderSnippet(DataTableName, { row }),
		},
		/* {
			accessorKey: "active",
            header: "Active",
			cell: ({ row }) => 
				renderComponent(DataTableSwitch, {
					checked: row.getIsSelected(),
					onCheckedChange: (value) => row.toggleSelected(!!value),
					"aria-label": "Select row",
				}),
			enableHiding: false,
		},
		{
			accessorKey: "status",
			header: "Status",
			cell: ({ row }) => renderSnippet(DataTableStatus, { row }),
		},
		{
			accessorKey: "billing",
			header: "Billing",
			cell: ({ row }) => renderSnippet(DataTableBillingStatus, { row }),
		},
		{
			accessorKey: "serviceDate",
			header: "Service Date",
			cell: ({ row }) => renderSnippet(DataTableServiceDate, { date: row.original.svcDate }),
		}, */
		/* {
			accessorKey: "target",
			header: "Amount",
			cell: ({ row }) => renderSnippet(DataTableType, { row }),
		}, */
		/* {
			accessorKey: "target",
			header: () =>
				renderSnippet(
					createRawSnippet(() => ({
						render: () => '<div class="w-full text-right">Target</div>',
					}))
				),
			cell: ({ row }) => renderSnippet(DataTableTarget, { row }),
		}, */
		/* {
			accessorKey: "limit",
			header: () =>
				renderSnippet(
					createRawSnippet(() => ({
						render: () => '<div class="w-full text-right">Limit</div>',
					}))
				),
			cell: ({ row }) => renderSnippet(DataTableLimit, { row }),
		}, */
		/* {
			accessorKey: "team",
			header: "Team",
			cell: ({ row }) => renderSnippet(DataTableTeam, { row }),
		}, */
		{
			id: "actions",
			cell: () => renderSnippet(DataTableActions),
		},
	];
</script>

<script>
    import { cn } from '@/utils';
    import { supabase } from '@/supabaseClient';
    import * as AlertDialog from "@/components/ui/alert-dialog/index";
    import Button from '../ui/button/button.svelte';
    import Input from '../ui/input/input.svelte';
    import { buttonVariants } from '../ui/button/button.svelte';
    import * as Popover from "@/components/ui/popover/index";
    import DataTableCellViewer from './list-table-cell-viewer.svelte';
    import DataTableCheckbox from './list-table-checkbox.svelte';
    import DataTableSwitch from './list-table-switch.svelte';

    import {
        ChevronDown,
        ChevronUp,
        Plus,
        X
    } from '@lucide/svelte';

    let {
        id = '',
        columns = [],
        data = [],
        type
    } = $props();

    let enableActive = true;
    let headers = $state(columns);
    let rows = $state(data);
    let newValue = $state('');

    const addNew = () => {
        console.log(`adding new ${type} = ${newValue}`);
        if (!id) {
        }
        // let { data, error } = await supabase.from('global_values')
        //     .insert('')
    };

    const changeSort = (id) => {
        let col = headers.find(c => c.id === id);
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

<div class="w-full px-0">
    <!-- Columns -->
    <div class="header flex items-center justify-between text-sm pb-1 mb-1 border-b border-gray-200">
        {#each headers as col}
            <div class="flex items-center gap-3">
                <div class="font-semibold">{col.name}</div>
                <div class="font-semibold">
                    <Button variant="link" size="icon" onclick={() => changeSort(col.id)}>
                    {#if col.sort === 'asc'}
                        <ChevronDown />
                    {:else}
                        <ChevronUp />
                    {/if}
                    </Button>
                </div>
            </div>
        {/each}
        <div class="flex items-center gap-2">
            <!-- <Button variant="secondary" size="sm" class="flex items-center gap-1" onclick={addNew}>
            </Button> -->
            <Popover.Root>
                <Popover.Trigger class={buttonVariants({ variant: "secondary", size: "sm" })}>
                    <Plus size={16} /> Add {type}
                </Popover.Trigger>
                <Popover.Content align="end" class="flex flex-col gap-1 text-sm">
                    <span class="font-medium">Name</span>
                    <Input onkeyup={addNew} />
                    <Button class="w-[80px]" onclick={addNew}>Add</Button>
                </Popover.Content>
            </Popover.Root>
        </div>
    </div>

    <!-- Rows -->
    <div class="grid gap-0 text-sm">
        {#each rows as d, i}
        <div class={cn(
            "group row flex items-center justify-between py-1 border-gray-100",
            i < rows.length - 1 ? 'border-b' : 'border-none',
            "hover:bg-accent/10 hover:cursor-pointer"
        )}>
            {#each headers as col}
            <button class="col-action border-1 border-transparent py-1 hover:cursor-pointer" variant="link" size="icon"
                onclick={() => console.log(`clicked id = ${d.id}`)}
            >
                {d[col.id]}
            </button>
            {/each}
            <!-- <button class="col-action border-1 border-transparent px-1 py-1" variant="link" size="icon"
                onclick={() => console.log(`clicked id = ${d.id}`)}
            >
                <X size={16} class=" stroke-transparent group-hover:stroke-gray-500 group-hover:cursor-pointer" />
            </button> -->
        </div>
        {/each}
    </div>
</div>

{#snippet DataTableName({ row })}
    <Button variant="link" class="text-foreground w-fit px-0 text-left"
        onclick={() => window.location = `/app/quotations/${row.original.id}`}>
        {row.original.number}
    </Button>
{/snippet}

<!-- {#snippet DataTableTeam({ row })} -->
{#snippet DataTableValue({ value })}
	{ value }
	<!-- {row.original.team} -->
{/snippet}
