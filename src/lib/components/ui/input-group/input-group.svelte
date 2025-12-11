<script>
	import { cn } from "$lib/utils.js";
	let {
		ref = $bindable(null),
		class: className,
		children,
		...props
	} = $props();
</script>

<div
	bind:this={ref}
	data-slot="input-group"
	role="group"
	class={cn(
		"group/input-group border-foreground/30 dark:bg-input/30 shadow-xs relative flex w-full items-center rounded-xs border outline-none transition-[color,box-shadow]",
		"h-9 has-[>textarea]:h-auto",

		// Variants based on alignment.
		"has-[>[data-align=inline-start]]:[&>input]:pl-2",
		"has-[>[data-align=inline-end]]:[&>input]:pr-2",
		"has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
		"has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",

		// Focus state.
		"has-[[data-slot=input-group-control]:focus-visible]:border-accent has-[[data-slot=input-group-control]:focus-visible]:ring-accent/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]",
		/* "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]", */

		// Error state.
		"has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",

		/* "border-foreground/30 bg-background selection:bg-primary dark:bg-input/30 selection:text-primary-foreground ring-offset-background placeholder:text-muted-foreground flex h-8 w-full min-w-0 rounded-xs border text-base outline-none transition-[color,box-shadow] disabled:cursor-not-allowed disabled:opacity-50 text-sm",
		"focus-visible:border-accent focus-visible:ring-accent/50 focus-visible:ring-[3px]",
		"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", */
		className
	)}
	{...props}
>
	{@render children?.()}
</div>