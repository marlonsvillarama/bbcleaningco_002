<script>
    import { cn } from "@/utils";
    import Separator from "@/components/ui/separator/separator.svelte";
    let data = [
        { id: '1', text: 'Quotation #123', link: '/app/quotations/123' },
        { id: '1', text: 'Jinggoy Estrada', link: '/app/clients/123' },
        { id: '1', text: 'Quotation #456', link: '/app/quotations/123' },
        { id: '1', text: 'Job Order #456-AM', link: '/app/orders/123' },
        { id: '1', text: 'Quotation #123', link: '/app/quotations/123' },
    ];
</script>

<div class="flex-1 overflow-scroll mt-8 mb-3">
    <div class="px-3 py-0">
        <h3 class="text-sm mb-2">Recent Records</h3>
        <Separator />
        <div class="w-full mt-3 grid gap-1">
            <!-- List recent records here -->
            {#each data as d, i}
                <a href={d.link} title={d.text}
                    class={cn(
                        "text-xs px-2 py-2 rounded-xs border-l-2 border-transparent hover:border-accent",
                        i % 2 === 0 ? 'bg-gray-50' : ''
                    )}>
                    {d.text}
                </a>
            {/each}
        </div>
    </div>
</div>