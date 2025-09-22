<script>
	import { cn } from "$lib/utils.js";
    import { ChevronLeft, ChevronRight } from "lucide-svelte";
    import Button from "../ui/button/button.svelte";
    import { buttonVariants } from "../ui/button/button.svelte";

    let {
        class: className,
        data
    } = $props();
</script>

<div
    class={cn("justify-center items-center w-full", className)}
>
    <div class="flex flex-row justify-center items-center gap-1">
        <Button variant="ghost" size="icon"><ChevronLeft /></Button>
        <Button variant="ghost" size="icon">1</Button>
        <Button variant="secondary" size="icon">2</Button>
        <Button variant="ghost" size="icon">3</Button>
        <Button variant="ghost" size="icon"><ChevronRight /></Button>
    </div>
</div>