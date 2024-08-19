import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import AddCard from './AddCard';
import Categories from './Data';
import WidgetEntry from './WidgetEntry';
import RemoveCard from './RemoveCard';


const Dashboard = () => {
  const [categories, setCategories] = useState(() => {
    const storedCategories = localStorage.getItem('categories');
    return storedCategories ? JSON.parse(storedCategories) : Categories;
  });

  const [searchTerm, setSearchTerm] = useState('');

  const [openForm, setOpenForm] = useState(false);
  const [openRemove, setOpenRemove] = useState(false);
  const [catId, setCatId] = useState('');

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  const filteredCategories = categories.map((category) => ({
    ...category,
    cards: category.cards.filter((val) => val.title.toLowerCase().includes(searchTerm.toLowerCase())),
  }));

  const handleOpenClick = (id) => {
    setCatId(id);
    setOpenForm(true);
  }

  const handleRemoveOpen = (id) => {
    setCatId(id);
    setOpenRemove(true);
  }
  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {openForm === true ? <WidgetEntry setOpenForm={setOpenForm} Id={catId} categories={categories} setCategories={setCategories} /> : ''}
      {openRemove === true ? <RemoveCard Id={catId} setOpenRemove={setOpenRemove}/> : ''}
      <h3>CNAPP Dashboard</h3>

      {
        filteredCategories.map((item, index) => (
          <div key={index}>
            <div className='heading'>
              <h4>{item.categoryName}</h4>
              <button className='remove-btn' onClick={() => handleRemoveOpen(item.categoryId)}>Remove</button>
            </div>
            <div className='all-cards'>
              {item.cards.map((val, index) => (
                <Card key={index} title={val.title} data={val.data} total={val.total} />
              ))}
              {searchTerm === '' && <AddCard id={item.categoryId} onClick={handleOpenClick} />}
            </div>
          </div>
        ))
      }
    </>
  );
}

export default Dashboard;
