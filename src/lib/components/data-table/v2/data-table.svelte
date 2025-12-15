<script>
    import Paginator from "./paginator.svelte";

    let {
        headers = [],
        data = [
            { id: 1 },
            { id: 2 }
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
</script>

<div class="w-full flex flex-col justify-start gap-2 text-sm">

    <!-- Header -->
	<div class="flex items-center justify-between border">
        <span>Total Results: <span class="font-semibold">{rows.length}</span></span>
        <Paginator {data} />
    </div>

    <!-- Content -->
</div>