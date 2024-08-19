import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <nav>
        <h5><span>Home&nbsp;</span> &gt; Dashboard</h5>
        <div className='search'>
          <SearchIcon className='search-icon'/>
          <input type="text" id='input' placeholder='Search anything...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      </nav>

    </>
  );
}

export default React.memo(Navbar);
