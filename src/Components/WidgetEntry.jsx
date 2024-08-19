import React, { useState } from 'react';

const WidgetEntry = ({ setOpenForm, Id, categories, setCategories }) => {
    const [data, setData] = useState([]);
    const [label, setLabel] = useState('');
    const [value, setValue] = useState('');
    const [newWidget, setNewWidget] = useState({ title: '', total: '', data: [], categoryId: `${Id}` });
    const handleLabelChange = (e) => setLabel(e.target.value);
    const handleValueChange = (e) => setValue(e.target.value);
    const handleTitleChange = (e) => {
        const { name, value } = e.target;
        setNewWidget(prev => ({
            ...prev,
            title: value
        }));
    }

    const handleAdd = (e) => {
        e.preventDefault();

        // Create a new data array including the latest label and value
        const updatedData = [...data, { label, value }];

        // Calculate the total from the updated data array
        const total = updatedData.reduce((sum, item) => sum + parseInt(item.value || 0), 0);

        // Update the newWidget state with the updated data and total
        setNewWidget(prev => ({
            ...prev,
            total: total,
            data: updatedData
        }));

        // Update the data state with the updated data array
        setData(updatedData);

        // Reset the label and value inputs
        setLabel('');
        setValue('');

    };


    const handleAddWidget = () => {
        const updatedCategories = categories.map((category) => {
            if (category.categoryId === newWidget.categoryId) {
                return {
                    ...category,
                    cards: [
                        ...category.cards,
                        {
                            id: `${category.cards.length + 1}`,
                            title: newWidget.title,
                            total: newWidget.total,
                            data: newWidget.data,
                        },
                    ],
                };
            }
            return category;
        });
        setCategories(updatedCategories);

        setNewWidget({ title: '', total: '', data: [], categoryId: '' });
        setOpenForm(false);
    };
    return (
        <>
            <form onSubmit={handleAddWidget}>
                <div className='form-widget'></div>
                <div className='widget-form'>
                    <button onClick={() => setOpenForm(false)} className='cross-btn'>&#10060;</button>
                    <div className='form-set'>
                        <label>Widget Name : </label>
                        <input type="text" placeholder='enter Name' onChange={handleTitleChange} />

                        <label>label : </label>
                        <input type="text" value={label} placeholder='enter label' onChange={handleLabelChange} />

                        <label>value : </label>
                        <input type="text" value={value} placeholder='enter value' onChange={handleValueChange} />


                        <button onClick={handleAdd} className='add-btn'>Add</button>
                        <table>
                            <thead>
                                <tr>
                                    <th style={{ padding: '10px', textAlign: 'center' }}>Label</th>
                                    <th style={{ padding: '10px', textAlign: 'center' }}>value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td style={{ padding: '10px', textAlign: 'center' }}>{item.label}</td>
                                        <td style={{ padding: '10px', textAlign: 'center' }}>{item.value}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                    <button className='submit-btn'>Submit</button>
                </div>
            </form>
        </>
    );
}

export default React.memo(WidgetEntry);
