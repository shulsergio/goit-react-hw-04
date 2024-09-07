import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
// import Grid from './components/Grid/Grid';
import { fetchPhotoItems } from './Api/apiPhotos.js';
import Loader from './components/Loader/Loader.jsx';

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [empty, setEmpty] = useState(false);

const [isWisebele, setisWiseble] = useState(false)

  useEffect(() => {
            const per_page = 12;
    if (!query) {
      return;
    }
    const fetchData = async () => {

      setLoading(true);
      setError(null);
try {
      const {results, total, total_pages} = await fetchPhotoItems(query, page, per_page);
  console.log('API response total:', total);
  console.log('API response total_pages:', total_pages);
  console.log('API response results:', results);
        if(!results.length){
          return setEmpty(true)
        } 
        setPhotos((prevPhotos) => [...prevPhotos, ...results]);
        setisWiseble(page < Math.ceil(total / total_pages));

} catch (error) {
  setError(error);
}
     finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, query]);

  const onHandleSubmit = searchQuery => {
    setQuery(searchQuery);
    setPhotos([]);
    setPage(1);
    setError(null);
    setisWiseble(false);
    setEmpty(false);
  };

  return (
    <>
      <SearchBar onSubmit={onHandleSubmit} />
      {loading && <Loader />}
      {}
      {error && <p>Something went wrong!</p>}
      {/* <Grid items={photos} /> */}
      {/* {isEmpty && <Text textAlign="center">Sorry. There are no images ... 😭</Text>} */}
    </>
  );
}

export default App;
