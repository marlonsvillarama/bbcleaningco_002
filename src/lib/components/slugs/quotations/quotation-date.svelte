<script>
    import { buttonVariants } from "@/components/ui/button/button.svelte";
    import { Calendar } from "@/components/ui/calendar/index";
    import * as Popover from "@/components/ui/popover/index.js";
    import Button from "@/components/ui/button/button.svelte";
	import Separator from "@/components/ui/separator/separator.svelte";

    import {
        DateFormatter,
        getLocalTimeZone,
    } from "@internationalized/date";
    import { cn } from "@/utils";

    import { CalendarIcon } from "@lucide/svelte";

    let { data } = $props();

    const df = new DateFormatter('en-US', { dateStyle: 'long'});
    let value = $state();
    let contentRef = $state(null);
</script>

<div class="grid grid-cols-[120px_auto] items-center">
    <span class="text-sm text-foreground font-semibold">When</span>

    <Popover.Root class="">
        <Popover.Trigger
            class={cn(
                buttonVariants({
                    class: "text-sm font-normal bg-white border py-3 w-[200px]"
                }),
                !value && "text-foreground"
            )}
        >
            {value ? df.format(value.toDate(getLocalTimeZone())) : 'Pick a service date'}
        </Popover.Trigger>
        <Popover.Content bind:ref={contentRef} class="w-auto p-0">
            <Calendar bind:value type="single" />
        </Popover.Content>
    </Popover.Root>
</div>
