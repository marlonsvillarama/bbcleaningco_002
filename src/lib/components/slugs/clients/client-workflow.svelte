<script>
    import Card from "../global/card.svelte";
    import Sublist from "../global/sublist.svelte";

    let data = {
        columns: [
            { id: 'date', label: 'Date', width: 40 },
            { id: 'time', label: 'Time', width: 24 },
            { id: 'action', label: 'Notes'  },
        ],
        rows: [
            {
                dt: new Date(),
                action: 'Record created.'
            },
        ]
    };
    data.rows = data.rows.map(d => {
        return {
            ...d,
            date: d.dt.toLocaleDateString('en-US', {
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
            time: d.dt.toLocaleTimeString('en-US', {
                hour: "numeric",
                minute: "numeric"
            })
        };
    });
    console.log('sublist columns', data.columns);
    console.log('sublist rows', data.rows);
</script>

<Card title="Record Workflow" padded=false>
    <Sublist {data} viewable=false />
</Card>