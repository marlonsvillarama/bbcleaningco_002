<script>
    import { getCoreRowModel } from "@tanstack/table-core";
    import { createSvelteTable, FlexRender } from "@/components/ui/data-table/index";
    import * as Table from '@/components/ui/table/index';

    let { data, columns } = $props();

    const table = createSvelteTable({
        get data() { return data },
        columns,
        getCoreRowModel: getCoreRowModel()
    });
</script>

<div class="rounded-md border">
    <Table.Root>
        <Table.Header>
            {#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
                <Table.Row>
                    {#each headerGroup.headers as header (header.id)}
                        <Table.Head colspan={header.colspan}>
                            {#if !header.isPlaceholder}
                                <FlexRender
                                    content={header.column.columnDef.header}
                                    context={header.getContext()}
                                />
                            {/if}
                        </Table.Head>
                    {/each}
                </Table.Row>
            {/each}
        </Table.Header>
        <Table.Body>
            {#each table.getRowModel().rows as row (row.id)}
                <Table.Row data-state={row.getIsSelected() && 'selected'}>
                    {#each row.getVisibleCells() as cell (cell.id)}
                        <Table.Cell>
                            <FlexRender
                                content={cell.column.columnDef.cell}
                                context={cell.getContext()}
                            />
                        </Table.Cell>
                    {/each}
                </Table.Row>
            {:else}
                <Table.Row>
                    <Table.Cell colspan={columns.length} class="h-24 text-center">
                        No results.
                    </Table.Cell>
                </Table.Row>
            {/each}
        </Table.Body>
    </Table.Root>
</div>