<script>
    // import ListTablePaginator from "./list-table-paginator.svelte";

    let { data, viewable = true } = $props();
    const SIZE = 3;
    let page = $state(0);
    let start = $derived(page * SIZE);
    let end = $derived(start + SIZE);
</script>

<table class="w-full" cellpadding="0" cellspacing="0" border="0">
    <thead class="px-5 headers bg-accent/30">
        <tr>
        {#each data.columns as col, index}
            <th class="px-4 py-2 text-xs font-semibold {col.width ? `w-${col.width}` : ''} text-left" data-col-id="col-{col.id}">{col.label}</th>
        {/each}
        </tr>
    </thead>

    <tbody>
        {#each data.rows as row, index}
        <tr class="row {index % 2 > 0 ? 'bg-accent/10' : ''} transition-all duration-100 ease-in-out">
            {#each data.columns as col, ci}
                {#if ci === data.columns.length - 1 && viewable === true}
                    <td class="cell px-4 py-2 text-xs font-semibold text-right align-top flex flex-row gap-2">
                        <a href={row.view} class="hover:underline" target="_blank">View</a>
                    </td>
                {:else}
                    <td
                        class="cell px-4 py-2 text-xs font-light {col.width ? `w-${col.width}` : ''} text-left align-top"
                        data-col-id="col-{col.id}">
                        {row[col.id]}
                    </td>
                {/if}
            {/each}
        </tr>
        {/each}
    </tbody>

    <tfoot>
        <tr>
            <th colspan={data.columns.length}>
                <!-- <ListTablePaginator count={data.rows.length} page={start} size={SIZE} /> -->
            </th>
        </tr>
    </tfoot>
</table>