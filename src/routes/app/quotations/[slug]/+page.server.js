import { supabase } from "$lib/supabaseClient";
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params, url }) {
    let slug = params.slug;
    // console.log('+load slug', slug);

	if (slug.toLowerCase() === 'new') { return {}; }
	
	let urlParams = url.searchParams.has('json');
	// console.log('+load urlParams', urlParams);

	let quotationResponse = await supabase.from("quotations").select(`
		*,
		clients (
			id,
			first_name,
			last_name,
			phone_1,
			phone_2,
			email_1,
			email_2,
			notes
		)
	`)
	.eq('id', slug);
	console.log('quotationResponse', quotationResponse);
	// let obj = statusResponse.data.length > 0 ? data[0] : {};
	// obj.edit = url.searchParams.has('edit');

	let statusResponse = await supabase.from("global_list_values").select('id, name');
	let obj = {
		record: quotationResponse.data ? quotationResponse.data[0] : null,
		statusList: statusResponse.data
	};
	// console.log('*** quotation server obj', obj);
	return obj;
	// if (params.slug === 'hello-world') {
	// 	return {
	// 		title: 'Hello world!',
	// 		content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
	// 	};
	// }
	// error(404, 'Not found');
}