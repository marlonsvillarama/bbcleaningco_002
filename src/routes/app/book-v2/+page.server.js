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
    // console.log('+BOOK global data', data);

    return data;
};

const getRegions = async () => {
    let { data } = await supabase.from("regions").select(`
        id,
        name,
        slug,
        official,
        provinces (
            id,
            name,
            slug,
            cities (
                id,
                name,
                slug
            )
        )
    `)
    .eq('is_active', true);
    // console.log('+BOOK regions', data);

    return data;
};

/** @type {import('./$types').PageLoad} */
export async function load({ params, url }) {
    // let slug = params.slug;
    // console.log('+load slug', slug);

    // if (slug.toLowerCase() === 'new') { return {}; }
    
    // let urlParams = url.searchParams.has('json');
    // console.log('+load urlParams', urlParams);
    let lists = await getListValues();
    let regions = await getRegions();
    let cities = [];
    let provinces = regions.reduce((sum, next) => {
        next.provinces = next.provinces.map(p => {
            p.cities = p.cities.map(c => {
                return { ...c, province: p.id};
            });
            cities = cities.concat(p.cities);
            return { ...p, region: next.id }
        });
        console.log('+PAGE next.provinces', next.provinces);

        return sum.concat(next.provinces);
    }, []);
    // obj.edit = url.searchParams.has('edit');

    provinces.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        else return 0;
    });

    return {
        lists,
        cities,
        provinces,
        regions
    };

    // if (params.slug === 'hello-world') {
    // 	return {
    // 		title: 'Hello world!',
    // 		content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    // 	};
    // }
    // error(404, 'Not found');
}