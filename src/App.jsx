import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'

function App() {

    const [searchItem, setSearchItem] = useState();

  const handleSearchSubmit  = (item) => {
    setSearchItem(item);
    console.log('Search item= ', item); 
  } 

  return (
    <>
      <p>SearchBar</p>
      <SearchBar onSubmit={handleSearchSubmit}></SearchBar>

      <p>Grid</p>
      {/* <Grid></Grid> */}

            <p>LoadMoreBtn</p>
      {/* <LoadMoreBtn></LoadMoreBtn> */}
    </>
  )
}

export default App
