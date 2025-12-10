<script>
    import * as Empty from "@/components/ui/empty/index";
    import Button from "@/components/ui/button/button.svelte";
    import Logo from "@/images/busy-bee.svg";

    import { ArrowLeft } from "@lucide/svelte";

    let {
        backLink = '/app',
        backText = 'Back to List'
    } = $props();

    const gotoBackLink = () => {
        window.location = backLink;
    };
</script>

<Empty.Root class="border mt-4">
    <Empty.Header>
        <Empty.Media>
            <img src={Logo} class="h-[128px] w-auto" alt="Busy Bee" />
        </Empty.Media>
        <Empty.Title class="text-3xl font-semibold tracking-[0.25px]">Record Not Found</Empty.Title>
        <Empty.Description>
            This record does not exist in the system. Please go back and select another record.
        </Empty.Description>
        <!-- <Empty.Content>
        </Empty.Content> -->
    </Empty.Header>
            <Button class="mt-4" onclick={gotoBackLink}>
                <ArrowLeft />
                {backText}
            </Button>
</Empty.Root>