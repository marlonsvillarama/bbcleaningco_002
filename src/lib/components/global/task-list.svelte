<script>
    import { getContext } from "svelte";
    import * as Card from "@/components/ui/card/index";
    import {
        Phone,
        Receipt,
        User
    } from "@lucide/svelte";

    let taskList = [
        {
            title: 'New inquiry',
            help: 'Record an ad-hoc customer inquiry',
            link: '/book/new',
            icon: Phone
        },
        {
            title: 'New client',
            help: 'Create a new client record',
            link: '/clients/new',
            icon: User
        },
    ];

	const USER_CONTEXT = getContext('USER_CONTEXT');
	let dashView = $state(USER_CONTEXT.dash_view || 'dash');
</script>

<!-- <div class="absolute top-[40%] left-[50%] transform-[translateX(-50%)_translateY(-50%)] gap-4 text-center grid w-[60%] max-w-[500px] border"> -->
<div class="grid gap-4 grid w-[60%] max-w-[500px] pt-4">
    <h2 class="text-2xl font-semibold">What would you like to do?</h2>
    {#each taskList as task}
        <a href="/app/{task.link}" title={task.title}>
            <Card.Root class="border-1 duration-[150ms] border-gray-300/20 hover:border-gray-300 hover:shadow-none hover:bg-gray-300/10 hover:shadow-md rounded-lg">
                <Card.Content class="px-8 py-4 flex gap-6 items-center">
                    <task.icon size={24} class="" />
                    <div class="grid gap-0 items-start justify-left">
                        <div class="text-left text-lg font-semibold">{task.title}</div>
                        <div class="text-sm text-gray-400">{task.help}</div>
                    </div>
                </Card.Content>
            </Card.Root>
        </a>
        <!-- <a href="/app/{task.link}" title={task.title}>
            <Card.Root class="border-2 border-gray-400/30 hover:border-gray-400 rounded-lg">
                <Card.Content></Card.Content>
            </Card.Root>
        </a>
        <a href="/app/{task.link}" title={task.title}>
            <Card.Root class="border-2 border-gray-400/30 hover:border-gray-400 rounded-lg">
                <Card.Content></Card.Content>
            </Card.Root>
        </a>
        <a href="/app/{task.link}" title={task.title}>
            <Card.Root class="border-2 border-gray-400/30 hover:border-gray-400 rounded-lg">
                <Card.Content>

                </Card.Content>
            </Card.Root>
        </a> -->
    {/each}
</div>