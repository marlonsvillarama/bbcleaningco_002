import { supabase } from "$lib/supabaseClient";
import { error } from '@sveltejs/kit';

const getLists = async () => {
    let { data } = await supabase.from("global_list_types").select(`
        id,
        name,
        slug,
        values:global_list_values (
            id,
            name
        )
    `);
    // console.log('+BOOK global data', data);

    return data;
};

/** @type {import('./$types').PageLoad} */
export async function load({ params, url }) {
    // let slug = params.slug;
    // console.log('+load slug', slug);

    // if (slug.toLowerCase() === 'new') { return {}; }
    
    // let urlParams = url.searchParams.has('json');
    // console.log('+load urlParams', urlParams);
    let lists = await getLists();

    return {
        lists,
    };
}