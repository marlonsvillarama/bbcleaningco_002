<script>
	import * as Select from "@/components/ui/select/index.js";

    let {
        label = 'Input',
        required = true,
		ref = $bindable(null),
		value = $bindable(),
		class: className,
		"data-slot": dataSlot = "input",
		...restProps
	} = $props();
    let requiredClasses = required === true ?
        `font-medium` :
        `text-foreground/60 font-light italic`;
</script>

<div class="grid grid-cols-[120px_1fr] items-center">
    <span class={requiredClasses}>{label}</span>
	<input
		bind:this={ref}
		data-slot={dataSlot}
        {required}
		class={cn(
		    "border-foreground/30 bg-background selection:bg-primary dark:bg-input/30 selection:text-primary-foreground ring-offset-background placeholder:text-muted-foreground flex h-8 w-full min-w-0 rounded-xs border px-3 py-1 text-base outline-none transition-[color,box-shadow] disabled:cursor-not-allowed disabled:opacity-50 text-sm",
			"focus-visible:border-accent focus-visible:ring-accent/50 focus-visible:ring-[3px]",
			"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            "text-sm font-light border-transparent px-2 py-1 hover:border-foreground/30",
			className
		)}
		bind:value
		{...restProps}
	/>
</div>
