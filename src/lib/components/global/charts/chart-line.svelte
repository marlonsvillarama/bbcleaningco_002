<script>
    import { curveLinear } from 'd3-shape';
    import { scaleBand } from 'd3-scale';
    import { LineChart } from 'layerchart';
    import { TrendingUpIcon, TrendingDownIcon } from '@lucide/svelte';
    import * as Card from '@/components/ui/card/index';
    import * as Chart from '@/components/ui/chart/index';

    let {
        cls = '',
        data = [],
        footer = '',
        series = 'Value',
        title = 'Line Chart',
        x = 'value'
    } = $props();
    console.log('ChartLine data', data);

    const chartConfig = {
        label: 'Desktop',
        color: 'var(--accent)'
    };

    let context = $state();
</script>

<Card.Root class={cls}>
    <Card.Header>
        <Card.Title>{title}</Card.Title>
    </Card.Header>
    <Card.Content class="pt-8 pb-4 px-4">
        <Chart.Container config={chartConfig}>
            <LineChart
                {data}
                xScale={scaleBand().padding(0.375)}
                {x}
                labels={{ offset: 12 }}
                series={[{ key: 'value', label: series, color: chartConfig.color }]}
                axis="x"
                props={{
                    spline: { curve: curveLinear, motion: 'tween', strokeWidth: 3 },
                    highlight: { points: { r: 4 }},
                    xAxis: { format: d => d.slice(0, 3) }
                }}
            >
                {#snippet tooltip()}
                    <Chart.Tooltip hideLabel />
                {/snippet}
            </LineChart>
        </Chart.Container>
    </Card.Content>
    <Card.Footer>
        <div class="flex w-full items-start gap-2 text-sm">
            <div class="grid gap-2">
                <div class="flex items-center gap-2 font-small leading-none">
                    Up 5.2% this month <TrendingUpIcon class="size-4" />
                </div>
                <div class="text-muted-foreground flex items-center gap-2 leading-none">
                    {footer}
                </div>
            </div>
        </div>
    </Card.Footer>
</Card.Root>
