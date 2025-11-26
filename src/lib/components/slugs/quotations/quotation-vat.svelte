<script>
    import Switch from "@/components/ui/switch/switch.svelte";

    let {
        checked = false,
        disabled = false
    } = $props();
</script>

<div class="grid grid-cols-[120px_auto] items-center">
    <span class="text-sm text-foreground font-semibold">VAT Exempt</span>

    <Switch id="vat_exempt" {checked} {disabled} />
</div>
