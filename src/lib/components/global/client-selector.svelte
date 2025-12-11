<script>
    import { onMount } from "svelte";
    import { supabase } from "$lib/supabaseClient";
    import { cn } from "@/utils";
    import Input from "@/components/ui/input/input.svelte";
    import * as InputGroup from "@/components/ui/input-group/index";
    import Spinner from "@/components/ui/spinner/spinner.svelte";

    let {
        class: className,
        display,
        value = $bindable(),
        onvaluechange
    } = $props();

    const CLIENTS = [
        {
            id: 1,
            first_name: 'charles',
            last_name: 'madrid',
            phone_1: '09172341234',
            email: 'email@busybeecleaning.com'
        },
        {
            id: 2,
            first_name: 'charles',
            last_name: 'madrid',
            phone_1: '09172341234',
            email: 'email@busybeecleaning.com'
        },
        {
            id: 3,
            first_name: 'charles',
            last_name: 'madrid',
            phone_1: '09172341234',
            email: 'email@busybeecleaning.com'
        },
        {
            id: 4,
            first_name: 'charles',
            last_name: 'madrid',
            phone_1: '09172341234',
            email: 'email@busybeecleaning.com'
        },
        {
            id: 1,
            first_name: 'charles',
            last_name: 'madrid',
            phone_1: '09172341234',
            email: 'email@busybeecleaning.com'
        },
        {
            id: 2,
            first_name: 'charles',
            last_name: 'madrid',
            phone_1: '09172341234',
            email: 'email@busybeecleaning.com'
        },
        {
            id: 3,
            first_name: 'charles',
            last_name: 'madrid',
            phone_1: '09172341234',
            email: 'email@busybeecleaning.com'
        },
        {
            id: 4,
            first_name: 'charles',
            last_name: 'madrid',
            phone_1: '09172341234',
            email: 'email@busybeecleaning.com'
        },
        {
            id: 1,
            first_name: 'charles',
            last_name: 'madrid',
            phone_1: '09172341234',
            email: 'email@busybeecleaning.com'
        },
        {
            id: 2,
            first_name: 'charles',
            last_name: 'madrid',
            phone_1: '09172341234',
            email: 'email@busybeecleaning.com'
        },
        {
            id: 3,
            first_name: 'charles',
            last_name: 'madrid',
            phone_1: '09172341234',
            email: 'email@busybeecleaning.com'
        },
        {
            id: 4,
            first_name: 'charles',
            last_name: 'madrid',
            phone_1: '09172341234',
            email: 'email@busybeecleaning.com'
        }
    ];
    let inputValue = $state('');
    let selectedItem = $state('');
    let isSearching = $state(false);
    let searchDone = $state(true);
    let results = $state([]);

    const generateRandomString = (length = 20) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';

        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
            counter++;
        }

        return result;
    };

    const searchClients = async (event) => {
        if (inputValue.length < 3) return;
        if (isSearching) return;
        // console.log('event', event);
        if (event.key === 'Escape') {
            results = [];
            return;
        };

        isSearching = true;
        searchDone = false;
        
        let response = await supabase.from("clients").select(`
            id,
            first_name,
            last_name,
            phone_1,
            email_1
        `)
        .ilike('last_name', `%${inputValue}%`);
        results = response.data;
        // results = [ ...response.data, ...CLIENTS ];

        // console.log('+SELECTOR clients', results);

        // setTimeout(() => {
        //     isSearching = false;
        //     searchDone = true;
        // }, 3000);

        isSearching = false;
        searchDone = true;
    };

    const selectItem = (id) => {
        selectedItem = results.find(r => r.id === id);
        // console.log('+SELECTOR selectIem ==>', selectedItem);
        value = selectedItem;
        results = [];

        if (!selectedItem) return;
        
        inputValue = display ? selectedItem[display] : `${selectedItem.last_name}, ${selectedItem.first_name}`;
        onvaluechange();
    };

    const RANDOM = generateRandomString(10);
    let ANCHOR_ID = `client-selector-anchor-${RANDOM}`;
    let MENU_ID = `client-selector-menu-${RANDOM}`;
    let anchorElement = $state('');
    let menuElement = $state('');

    onMount(() => {
        document.addEventListener('click', event => {
            anchorElement = document.getElementById(ANCHOR_ID);
            menuElement = document.getElementById(MENU_ID);

            if (!menuElement || !anchorElement) return;
            if (!menuElement.contains(event.target) && !anchorElement.contains(event.target)) {
                results = [];
            }
        });
        
        document.addEventListener('keyup', event => {
            // const SPECIAL = [
            //     'Escape',
            //     ''
            // ];
            // if (event.key !== 'Escape') return;
            // let regex = /^[A-Za-z]+$/;
            // if (event.key.match(regex)) return;

            if (inputValue.length < 3) {
                results = [];
                return;
            }

            anchorElement = document.getElementById(ANCHOR_ID);
            menuElement = document.getElementById(MENU_ID);

            if (!menuElement || !anchorElement) return;
            if (!menuElement.contains(event.target) && !anchorElement.contains(event.target)) {
                results = [];
            }
        });
    });
</script>

<div class="relative w-[300px]">
    <InputGroup.Root class="client-selector-anchor">
        <InputGroup.Input id={ANCHOR_ID} class={className} bind:value={inputValue} onkeyup={(event) => searchClients(event)} placeholder="Type the first few letters..." pattern="[A-Za-z]+" />
        <InputGroup.Addon align="inline-end">
            {#if isSearching && !searchDone}
                <Spinner />
            {/if}
        </InputGroup.Addon>
    </InputGroup.Root>

    <div id={MENU_ID} class={cn(
        "client-selector-results text-sm rounded-xs w-[500px] bg-white border-1 border-gray-200 max-h-[300px] overflow-scroll mt-1 pr-3",
        results.length > 0 ? "block" : "hidden"
    )}
    >
        {#each results as result, i}
            <div class={cn(
                    "px-3 py-2 cursor-pointer hover:bg-gray-100",
                    i < results.length - 1 ? "border-b-1 border-gray-200" : "border-none"
                )}
                onclick={() => selectItem(result.id)}
                onkeyup={() => selectItem(result.id)}
            >
                <div class="font-medium mb-1">{result.last_name.toUpperCase()}, {result.first_name}</div>
                <div class="text-gray-400 text-xs">{result.phone_1}</div>
            </div>
        {/each}
    </div>
</div>

<style>
    .client-selector-anchor {
        anchor-name: --client-anchor;
        /* border: 2px solid #ff0; */
        /* background-color: #ff0; */
    }
    .client-selector-results {
        position-anchor: --client-anchor;
        position: absolute;
        bottom: anchor(bottom);
    }
</style>