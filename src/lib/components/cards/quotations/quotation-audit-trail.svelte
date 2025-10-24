<script>
    // import Card from "../global/card.svelte";
    // import Sublist from "../global/sublist.svelte";
    import * as Card from "@/components/ui/card/index";
    import Sublist from "@/components/global/sublist.svelte";

    let data = {
        columns: [
            { id: 'date', label: 'Date', width: 40 },
            { id: 'time', label: 'Time', width: 24 },
            { id: 'type', label: 'Type', width: 24 },
            { id: 'field', label: 'Field' },
            { id: 'old_value', label: 'Old', width: 20 },
            { id: 'new_value', label: 'New', width: 20 }
        ],
        rows: [
            {
                dt: new Date(),
                type: 'Create',
                field: 'First Name',
                old_value: '',
                new_value: 'Jinggoy'
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

<Card.Root class="w-full">
    <Card.Header>
        <Card.Title>Audit Trail</Card.Title>
    </Card.Header>
    <Card.Content>
        <Sublist viewable=false {data} />
    </Card.Content>
</Card.Root>

<!-- <Card title="Audit Trail" padded=false>
    <Sublist {data} viewable=false />
</Card> -->