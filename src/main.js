import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

import './css/styles.css';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();

  const inputEl = event.target.elements['search-text'];
  const query = inputEl.value.trim();

  if (!query) {
    iziToast.error({
      message: 'Please enter a search query',
      position: 'topRight',
    });
    return;
  }

  
  inputEl.value = '';
  inputEl.blur();

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(images => {
      if (!images.length) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(images);
    })
    .catch(() => {
      iziToast.error({
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
}
