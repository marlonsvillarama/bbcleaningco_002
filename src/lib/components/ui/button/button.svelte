<script module>
	import { cn } from "$lib/utils.js";
	import { tv } from "tailwind-variants";

	export const buttonVariants = tv({
		base: "cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xs text-sm font-medium outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
		variants: {
			variant: {
				/* default: "bg-linear-to-b from-accent/10 to-accent/50 text-accent-foreground hover:bg-accent/50 border-accent border-1", */
				default: "bg-accent/50 text-accent-foreground hover:bg-accent/70 border-accent shadow-xs",
				destructive:
					"bg-destructive hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white shadow-xs",
				outline:
					"bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 border-transparent",
				secondary: "bg-secondary/80 text-secondary-foreground hover:bg-secondary shadow-xs",
				/* secondary: "bg-linear-to-b from-secondary to-foreground/10 text-secondary-foreground hover:bg-secondary", */
				card_secondary: "bg-white text-secondary-foreground shadow-(--shadow)",
				ghost: "hover:bg-accent/60 hover:text-accent-foreground dark:hover:bg-accent/60",
				ghost_secondary: "hover:bg-secondary hover:text-accent-foreground dark:hover:bg-secondary/60",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-7 px-4 py-2 has-[>svg]:px-3",
				sm: "h-8 gap-1.5 rounded-xs px-3 has-[>svg]:px-2.5",
				lg: "h-10 rounded-xs px-6 has-[>svg]:px-4",
				icon: "size-7",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	});
				// default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 shadow-(--shadow)",

</script>

<script>
	let {
		class: className,
		variant = "default",
		size = "default",
		ref = $bindable(null),
		href = undefined,
		type = "button",
		disabled,
		children,
		...restProps
	} = $props();
</script>

{#if href}
	<a
		bind:this={ref}
		data-slot="button"
		class={cn(buttonVariants({ variant, size }), className)}
		href={disabled ? undefined : href}
		aria-disabled={disabled}
		role={disabled ? "link" : undefined}
		tabindex={disabled ? -1 : undefined}
		{...restProps}
	>
		{@render children?.()}
	</a>
{:else}
	<button
		bind:this={ref}
		data-slot="button"
		class={cn(buttonVariants({ variant, size }), className)}
		{type}
		{disabled}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}

<style>
	button:active {
		transform: translateY(1px);
		box-shadow: none;
	}
</style>