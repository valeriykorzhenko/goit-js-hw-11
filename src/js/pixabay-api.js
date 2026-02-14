import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54657823-2f0cb049819a58dcbd4ca359d'; 

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(BASE_URL, { params }).then(res => res.data.hits);
}
