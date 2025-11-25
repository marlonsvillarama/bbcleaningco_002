<script>
    import { SquareArrowOutUpRight } from "@lucide/svelte";

    let {
        label = 'View',
        link = '/'
    } = $props();
</script>

<a href={link} class="text-blue-500 font-semibold hover:underline flex items-center gap-1">
    {label} <SquareArrowOutUpRight size={16} />
</a>
