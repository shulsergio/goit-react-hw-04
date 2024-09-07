import axios from "axios";

export const fetchPhotoItems = async (query, page, per_page) => {
  const API_KEY = "U1Wt50lW9bzbJ485fV009LGdn7vFKmeUQOL9HQ_zluE";

  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${query}&page=${page}&per_page=${per_page}&orientation=landscape`
  );

  return data;
};
