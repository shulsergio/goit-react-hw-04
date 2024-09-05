import css from "./SearchBar.module.css";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';

export default function SearchBar({onSubmit}){
    const [searchQuery, setSearchQuery] = useState('');
    
    const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      return toast.error('Field is ampty');
    }
    onSubmit(searchQuery);
    setSearchQuery('');
    };
    
return (
    <div className={css.searchBox}>
 <Toaster />
        <form className={css.searchForm} onSubmit={handleSubmit}>
<input type="text" autoComplete="off" autoFocus value={searchQuery}
        onChange={handleChange}
      placeholder="Search images and photos"
        className={css.searchInput}
      />
<button type="submit" className={css.searchBtn}>Search</button>
        </form>
    </div>
    
)}