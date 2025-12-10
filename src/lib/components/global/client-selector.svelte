<script>
    import Input from "@/components/ui/input/input.svelte";
    import * as InputGroup from "@/components/ui/input-group/index";
    import Spinner from "@/components/ui/spinner/spinner.svelte";

    let {
        class: className
    } = $props();
</script>

<InputGroup.Root>
    <InputGroup.Input class={className} />
    <InputGroup.Addon align="inline-end">
        <Spinner />
    </InputGroup.Addon>
</InputGroup.Root>