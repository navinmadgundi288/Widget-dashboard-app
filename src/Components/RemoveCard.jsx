import React, { useEffect, useState } from 'react';
import Categories from './Data';

const RemoveCard = ({ Id, setOpenRemove }) => {
    const [categories, setCategories] = useState(() => {
        const storedCategories = localStorage.getItem('categories');
        return storedCategories ? JSON.parse(storedCategories) : Categories;
    });

    const [selectedData, setSelectedData] = useState({
        categoryName: '',
        cards: []
    });
    const [selectedCards, setSelectedCards] = useState([]);
    useEffect(() => {
        const data = selectData(categories, Id);
        if (data) {
            setSelectedData(data);
        } else {
            setSelectedData({ categoryName: '', cards: [] });
        }
    }, [categories, Id]);

    const selectData = (categories, Id) => {
        const category = categories.find(cat => cat.categoryId === Id);
        if (category) {
            return {
                categoryName: category.categoryName,
                cards: category.cards
            };
        }
        return null; // or you can return an empty object if you prefer
    };
    const handleClose = () => {
        setOpenRemove(false);
    };
    const handleCheckboxChange = (index) => {
        setSelectedCards(prevSelected => {
            if (prevSelected.includes(index)) {
                return prevSelected.filter(i => i !== index);
            } else {
                return [...prevSelected, index];
            }
        });
    };

    const handleConfirm = () => {
        const updatedCategories = categories.map(category => {
            if (category.categoryId === Id) {
                const updatedCards = category.cards.filter((_, index) => !selectedCards.includes(index));
                return {
                    ...category,
                    cards: updatedCards
                };
            }
            return category;
        });

        setCategories(updatedCategories);
        localStorage.setItem('categories', JSON.stringify(updatedCategories));
        setOpenRemove(false);
        window.location.reload();
    };

    return (
        <>
            <div className='remove-form'>
                <button className='cross-btn' onClick={handleClose}>&#10060;</button>
                <div className='remove-table'>
                    <table>
                        {selectedData.categoryName && (
                            <thead>
                                <tr>
                                    <th>Sr.No.</th>
                                    <th>Select</th>
                                    <th>{selectedData.categoryName}</th>
                                </tr>
                            </thead>
                        )}

                        {selectedData.cards.length > 0 ? (
                            <tbody>
                                {selectedData.cards.map((item, index) => (
                                    <tr key={index}>
                                        <td style={{ textAlign: 'center', padding: '5px' }}>{index + 1}</td>
                                        <td>
                                            <input type="checkbox"
                                                checked={selectedCards.includes(index)}
                                                onChange={() => handleCheckboxChange(index)}
                                            />

                                        </td>
                                        <td style={{ textAlign: 'center', padding: '10px' }}>{item.title}</td>
                                    </tr>
                                ))}
                            </tbody>
                        ) : (
                            <tbody>
                                <tr>
                                    <td>No cards available</td>
                                </tr>
                            </tbody>
                        )}
                    </table>
                </div>
                <button className='submit-btn'onClick={handleConfirm}>Conform</button>
            </div>
        </>
    );
};

export default React.memo(RemoveCard);
