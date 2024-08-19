const Categories = [
    {
        categoryId: '1',
        categoryName: 'CSPM Executive Dashboard',
        cards: [
            {
                id: '1',
                title: 'Cloud Accounts',
                total: 2,
                data: [{ value: 2, label: 'Connected(2)' },
                { value: 2, label: 'Not Connected(2)' },],
            },
            {
                id: '2',
                title: 'Cloud Account Risk Assessment',
                total: 9659,
                data: [{ value: 1689, label: 'Failed(1689)' },
                { value: 681, label: 'Warning(681)' },
                { value: 36, label: 'Not Available(36)' },
                { value: 7253, label: 'Passed(7253)' }],
            }
        ]

    },
    {
        categoryId: '2',
        categoryName: 'CWPP Dashboard',
        cards: [
            {
                id: '1',
                title: 'Top 5 Namespace Specific Alerts',
                total: '',
                data: [],
            },
            {
                id:'2',
                title: 'Work Load Alerts',
                total: '',
                data: [],
            }
        ]
    },

];

export default Categories;