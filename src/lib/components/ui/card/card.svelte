<script>
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	} = $props();
</script>

<div
	bind:this={ref}
	data-slot="card"
	class={cn(
		"bg-white text-card-foreground flex flex-col rounded-md border shadow-md border-none",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>