import { supabase } from "$lib/supabaseClient";
import { error } from '@sveltejs/kit';

const getRoles = async () => {
    let { data } = await supabase.from("roles").select(`
            id,
            client,
            employees,
            quotations,
            orders,
            items,
            teams,
            vehicles,
            regions
    `)
    .order('name');
    // .eq('employee', employeeId);
    // console.log(`server getCities id = "${id}"; count = ${(data || []).length}`, (data || ['error'])[0]);

    return data || [];
};

const getEmployeeWithRoles = async (employeeId) => {

        // roles!inner:roles (
        //     id,
        //     client,
        //     employees,
        //     quotations,
        //     orders,
        //     items,
        //     teams,
        //     vehicles,
        //     regions
        // )

    let { data } = await supabase.from("employee_roles").select(`
        id,
        use_admin_dash,
        is_default_role,
        dash_view,
        week_start,
        employee:employees (id, first_name, last_name, phone_mobile, email_1),
        role:roles (
            id,
            name,
            clients,
            employees,
            quotations,
            orders,
            teams,
            vehicles,
            regions
        )
    `)
    .eq('employee', employeeId);
    console.log('layout server data', data[0]);

    let roles = data.map(d => {
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
        // return {
        //     ...d.role,
        //     use_admin_dash: d.use_admin_dash,
        //     is_default_role: d.is_default_role,
        //     dash_view: d.dash_view,
        //     week_start: d.week_start
        // };
    });
    // console.log('layout server roles', roles[0]);
    let output = {
        ...data[0].employee,
        roles: roles.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        })
    };

    return output;
};

/** @type {import('./$types').PageLoad} */
export async function load({ params, url }) {
    let employeeId = 1;

    // let allRoles = await getRoles();
    // console.log('+LAYOUT allRoles', allRoles);

    let employeeRoles = await getEmployeeWithRoles(employeeId);
    employeeRoles.defaultRole = employeeRoles.roles.find(r => r.is_default_role);
    // console.log('+LAYOUT employeeRoles', employeeRoles);
    // let slug = params.slug;
    // console.log('+load slug', slug);

    // if (slug.toLowerCase() === 'new') { return {}; }
    
    // let urlParams = url.searchParams.has('json');
    // console.log('+load urlParams', urlParams);
    // let { data } = await supabase.from("clients").select(`
    //     *,
    //     client_status (id, name)
    // `)
    // .eq('id', slug);
    // let obj = data.length > 0 ? data[0] : {};
    // console.log('server obj', obj);
    // // obj.edit = url.searchParams.has('edit');
    // return obj;

    // if (params.slug === 'hello-world') {
    // 	return {
    // 		title: 'Hello world!',
    // 		content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    // 	};
    // }
    // error(404, 'Not found');
    return {
        user: employeeRoles
    }
}