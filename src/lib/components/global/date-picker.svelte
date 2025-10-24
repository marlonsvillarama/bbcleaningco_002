<script lang="ts">
    import CalendarIcon from "@lucide/svelte/icons/calendar";
    import {
        DateFormatter,
        getLocalTimeZone
    } from "@internationalized/date";
    import { cn } from "$lib/utils.js";
    import { buttonVariants } from "@/components/ui/button/index.js";
    // import { Calendar } from "@/components/ui/calendar/index.js";
    import Calendar from "@/components/ui/calendar/calendar.svelte";
    import * as Popover from "@/components/ui/popover/index.js";
 
    const df = new DateFormatter("en-US", {
        dateStyle: "long"
    });

    let value = $state(null);
    let contentRef = $state('');
</script>
 
<Popover.Root>
    <Popover.Trigger
        class={cn(
            buttonVariants({
                variant: "outline",
                class: "w-[280px] justify-start text-left font-normal"
            }),
            !value && "text-muted-foreground"
        )}
    >
        <CalendarIcon />
        {value ? df.format(value?.toDate(getLocalTimeZone())) : "Pick a date"}
    </Popover.Trigger>
    <Popover.Content bind:ref={contentRef} class="w-auto p-0">
        <!-- <Calendar type="single" bind:value={value} /> -->
    </Popover.Content>
</Popover.Root>