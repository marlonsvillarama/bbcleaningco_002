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
        *
    `)
    .eq('id', slug);
        // client_status (id, name)
	let statusResponse = await supabase.from("global_list_values").select('id, name');
    // console.log('server obj', obj);
    // obj.edit = url.searchParams.has('edit');
    return {
        record: data.length > 0 ? data[0] : null,
		statusList: statusResponse.data
    };

    // if (params.slug === 'hello-world') {
    // 	return {
    // 		title: 'Hello world!',
    // 		content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    // 	};
    // }
    // error(404, 'Not found');
}