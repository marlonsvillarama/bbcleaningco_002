import { supabase } from "$lib/supabaseClient";
import { error } from '@sveltejs/kit';

const getListValues = async () => {
    let { data } = await supabase.from("global_list_types").select(`
        id,
        name,
        slug,
        values:global_list_values (
            id,
            name
        )
    `);
    console.log('+BOOK global data', data);

    /* let roles = data.map(d => {
        let dataObject = {};
        for (const [k, v] of Object.entries(d)) {
            if (['id', 'employee'].indexOf(k) >= 0) continue;
            if (k === 'role') {
                dataObject = { ...dataObject, ...v };
                continue;
            }

            dataObject[k] = v;
        }

        return dataObject;
    }); */
    // console.log('layout server roles', roles[0]);

    // let userSettingsResponse = await supabase.from("user_settings").select(`
    //     default_role,
    //     home_view,
    //     week_start
    // `)
    // .eq('employee', employeeId);

    /* roles.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });
    let settings = data[0].employee.settings.length > 0 ?
        data[0].employee.settings[0] :
        {
            home_view: 'dash',
            week_start: 0,
            default_role: roles[0].id
        };
    let output = {
        ...data[0].employee,
        settings,
        roles
    }; */

    return data;
};

/** @type {import('./$types').PageLoad} */
export async function load({ params, url }) {
    // let slug = params.slug;
    // console.log('+load slug', slug);

    // if (slug.toLowerCase() === 'new') { return {}; }
    
    // let urlParams = url.searchParams.has('json');
    // console.log('+load urlParams', urlParams);
    let data = await getListValues();
    // obj.edit = url.searchParams.has('edit');

    console.log('+PAGE listValues', data);
    return { data };

    // if (params.slug === 'hello-world') {
    // 	return {
    // 		title: 'Hello world!',
    // 		content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    // 	};
    // }
    // error(404, 'Not found');
}