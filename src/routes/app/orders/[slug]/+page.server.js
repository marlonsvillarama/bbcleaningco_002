import { supabase } from "$lib/supabaseClient";
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params, url }) {
    let slug = params.slug;
    console.log('+load slug', slug);

	if (slug.toLowerCase() === 'new') { return {}; }
	
	let hasJSON = url.searchParams.has('json');
	console.log('+load hasJSON', hasJSON);

	let orderResponse = await supabase.from("orders").select(`
		*,
		quotations (
			id,
			number
		),
		clients (
			id,
			first_name,
			last_name,
			phone,
			email,
			notes
		)
	`)
	.eq('id', slug);
	console.log('orderResponse', orderResponse);
	
	// let obj = statusResponse.data.length > 0 ? data[0] : {};
	// obj.edit = url.searchParams.has('edit');

	// let statusResponse = await supabase.from("global_list_values").select('id, name');
	let obj = {
		record: orderResponse.data[0],
		// statusList: statusResponse.data
	};
	console.log('*** quotation server obj', obj);
	return obj;
	// if (params.slug === 'hello-world') {
	// 	return {
	// 		title: 'Hello world!',
	// 		content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
	// 	};
	// }
	// error(404, 'Not found');
}