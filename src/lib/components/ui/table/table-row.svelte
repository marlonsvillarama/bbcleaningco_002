<script>
	import { cn } from "$lib/utils.js";
	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	} = $props();
</script>

<tr
	bind:this={ref}
	data-slot="table-row"
	class={cn(
		"bg-white hover:[&,&>svelte-css-wrapper]:[&>th,td]:bg-accent/8 border-b border-accent/40 transition-colors",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</tr>