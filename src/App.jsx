import { useEffect, useState } from 'react';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { fetchPhotoItems } from './Api/apiPhotos.js';
import Loader from './components/Loader/Loader.jsx';
import { Heading } from './components/Heading/Heading.jsx';
import PhotosGallery from './components/PhotosGallery/PhotosGallery.jsx';
import PhotosModal from './components/PhotosModal/PhotosModal.jsx';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx';

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [empty, setEmpty] = useState(false);

const [visible, setVisible] = useState(false)

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [itemModal, setItemModal] = useState("");
  const [altModal, setaltModal] = useState("");
  
  
  
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
  // console.log('API response total:', total);
  // console.log('API response total_pages:', total_pages);
  // console.log('API response results:', results);
        if(!results.length){
          return setEmpty(true)
        } 
  setPhotos((prevPhotos) => [...prevPhotos, ...results]);
  // console.log('page- ', page);
  // console.log('total- ', total);
        setVisible(page*per_page < total);

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
    setVisible(false);
    setEmpty(false);
  };

  const handleLoadMoreBtn = () => {
    setPage(page + 1);
  };

function openModal(regular, alt) {
    setModalIsOpen(true);
    setItemModal(regular);
    setaltModal(alt);
  }

function closeModal() {
    setModalIsOpen(false);
    setItemModal('');
    setaltModal('');
  }



  return (
    <>
      <SearchBar onSubmit={onHandleSubmit} />
      {loading && <Loader />}
      {error && <Heading title="Something wrong!" />}
      {photos.length > 0 && <PhotosGallery photos={photos} openModal={openModal} />}
      {empty && <Heading title="No images" />}

{visible && (
    <LoadMoreBtn onLoadMoreBtn={handleLoadMoreBtn} />
      )} 
      
      <PhotosModal
    urlModal={itemModal}
    altModal={altModal}
    modalIsOpen={modalIsOpen}
    closeModal={closeModal}
/>
    </>
  );
}

export default App;
