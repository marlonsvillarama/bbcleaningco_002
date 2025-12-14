<script>
    import Switch from "@/components/ui/switch/switch.svelte";
	let {
		checked = false,
		onCheckedChange = (v) => (checked = v),
		...restProps
	} = $props();
</script>

<div class="flex items-center justify-center">
	<Switch bind:checked={() => checked, onCheckedChange} {...restProps} />
</div>