import { supabase } from "$lib/supabaseClient";
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params, url }) {
    let slug = params.slug;
    console.log('+load slug', slug);

    if (slug.toLowerCase() === 'new') { return {}; }
    
    let urlParams = url.searchParams.has('json');
    console.log('+load urlParams', urlParams);
    let { data } = await supabase.from("clients").select(`
        *,
        client_status (id, name)
    `)
    .eq('id', slug);
    let obj = data.length > 0 ? data[0] : {};
    // obj.edit = url.searchParams.has('edit');
    return obj;

    // if (params.slug === 'hello-world') {
    // 	return {
    // 		title: 'Hello world!',
    // 		content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    // 	};
    // }
    // error(404, 'Not found');
}