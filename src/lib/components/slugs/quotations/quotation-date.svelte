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

<!-- <div class="bg-white rounded-md border-transparent font-medium grid gap-2"> -->
<div class="bg-white rounded-md border-transparent font-medium flex gap-3 items-center">
    <span class="text-lg text-foreground font-semibold">Service Date</span>

    <!-- <Separator class="mb-1" /> -->

    <!-- <div class="pt-4 grid gap-2"> -->
    <Popover.Root>
        <Popover.Trigger
            class={cn(
                buttonVariants({
                    class: "text-left min-w-[240px] bg-white border py-4"
                }),
                !value && "text-foreground"
            )}
        >
            <CalendarIcon />
            {value ? df.format(value.toDate(getLocalTimeZone())) : 'Pick a service date'}
        </Popover.Trigger>
        <Popover.Content bind:ref={contentRef} class="w-auto p-0">
            <Calendar bind:value type="single" />
        </Popover.Content>
    </Popover.Root>

    <!-- Popover -->
    <!-- <div class="flex gap-3 items-center mt-1">
        -- Only used for alignment of button --
        <Button variant="secondary" class="px-2 py-1 text-xs rounded-xs"
                onclick={() => alert('implement change address...')}
        >
            Change address
        </Button>
    </div> -->
    <!-- <a href="." target="_self" class="text-xs font-normal underline text-blue-500 hover:text-blue-700">Change Address</a> -->
</div>
