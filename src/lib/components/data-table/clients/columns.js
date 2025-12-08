export const columns = [
    /* {
        id: "select",
        header: ({ table }) =>
            renderComponent(DataTableCheckbox, {
                checked: table.getIsAllPageRowsSelected(),
                indeterminate:
                    table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected(),
                onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
                "aria-label": "Select all",
            }),
        cell: ({ row }) =>
            renderComponent(DataTableCheckbox, {
                checked: row.getIsSelected(),
                onCheckedChange: (value) => row.toggleSelected(!!value),
                "aria-label": "Select row",
            }),
        enableSorting: false,
        enableHiding: false,
    }, */
    {
        accessorKey: "id",
        header: "ID",
        // cell: ({ row }) => renderSnippet(DataTableNumber, { row }),
        /* cell: ({ row }) => renderSnippet(DataTableNumber, { row }), */
    },
    {
        accessorKey: "client",
        header: "Client Name",
        // cell: ({ row }) => renderComponent(DataTableCellViewer, { item: row.original }),
        enableHiding: false,
    },
    {
        accessorKey: "phone",
        header: "Phone",
        // cell: ({ row }) => renderSnippet(DataTablePhone, { row }),
    },
    {
        accessorKey: "email",
        header: "Email",
        // cell: ({ row }) => renderSnippet(DataTableEmail, { row }),
    },
    {
        accessorKey: "region",
        header: "Region",
        // cell: ({ row }) => renderSnippet(DataTableRegion, { row }),
    },
    {
        id: "actions",
        // cell: () => renderSnippet(DataTableActions),
    },
];