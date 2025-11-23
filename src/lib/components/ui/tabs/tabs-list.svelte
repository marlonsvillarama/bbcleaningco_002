<script>
	import { Tabs as TabsPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	} = $props();
</script>

<div class="w-full border-b-2 border-border">
<TabsPrimitive.List
	bind:ref
	data-slot="tabs-list"
	class={cn(
		"bg-transparent text-muted-foreground inline-flex items-center justify-center rounded-xs p-[3px] p-0",
		className
	)}
	{...restProps}
/>
</div>
		<!-- "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xs p-[3px] px-[4px]", -->
