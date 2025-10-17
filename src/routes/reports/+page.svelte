<script>
    import { scaleBand } from 'd3-scale';
    import { BarChart } from 'layerchart';
    import { TrendingUpIcon, TrendingDownIcon } from '@lucide/svelte';
    import * as Card from '@/components/ui/card/index';
    import * as Chart from '@/components/ui/chart/index';
    import { cubicInOut } from 'svelte/easing';
    import ChartArea from '@/components/global/charts/chart-area.svelte';
    import ChartBar from '@/components/global/charts/chart-bar.svelte';
    import ChartLine from '@/components/global/charts/chart-line.svelte';

    const chartData = [
        { month: 'January', value: 186 },
        { month: 'February', value: 305 },
        { month: 'March', value: 237 },
        { month: 'April', value: 73 },
        { month: 'May', value: 209 },
        { month: 'June', value: 214 }
    ];

    const chartConfig = {
        label: 'Desktop',
        color: 'var(--accent)'
    };

    let context = $state();
</script>

<div class="flex flex-row items-center justify-between gap-8">
    <ChartBar cls="w-1/4"
        data={chartData}
        footer='Total visitors for the last 6 months'
        series='Visitors'
        title='Monthly Visitors'
        x='month'
    />

    <ChartLine cls="w-1/4"
        data={chartData}
        footer='Total visitors for the last 6 months'
        series='Visitors'
        title='Monthly Visitors'
        x='month'
    />

    <ChartArea cls="w-1/4"
        data={chartData}
        footer='Total visitors for the last 6 months'
        series='Visitors'
        title='Monthly Visitors'
        x='month'
    />
</div>
