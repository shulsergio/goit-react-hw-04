import css from "./SearchBar.module.css";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import ToasterText from "../ToastText/ToastText";

export default function SearchBar({onSubmit}){
    const [searchQuery, setSearchQuery] = useState('');
    
    const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
      e.preventDefault();
      console.log('searchQuery- ', searchQuery);
    if (!searchQuery.trim()) {
        <ToasterText text="input text" />
        return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
    };
    
return (
    <div className={css.searchBox}>

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