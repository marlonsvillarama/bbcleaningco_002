<script>
    // import Card from "../global/card.svelte";
    // import Sublist from "/global/sublist.svelte";
    import * as Card from "@/components/ui/card/index";
    import Sublist from "@/components/global/sublist.svelte";

    let data = {
        columns: [
            { id: 'date', label: 'Date', width: 40 },
            { id: 'time', label: 'Time', width: 24 },
            { id: 'quotation', label: 'Quotation', width: 24 },
            { id: 'details', label: 'Details' },
            { id: 'team', label: 'Team', width: 20 },
            { id: 'actions', label: '', width: 20  },
        ],
        rows: [
            {
                dt: new Date(),
                quotation: 1,
                details: 'One-time cleaning',
                team: 'ALPHA'
            },
        ]
    };
    data.rows = data.rows.map(d => {
        return {
            ...d,
            view: `/app/quotations/${d.quotation}`,
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

<Card.Root class="w-full">
    <Card.Header>
        <Card.Title>Service History</Card.Title>
    </Card.Header>
    <Card.Content>
        <Sublist {data} />
    </Card.Content>
</Card.Root>

<!-- <Card title="Service History" padded=false>
    <Sublist {data} />
</Card> -->