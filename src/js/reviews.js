import { getData } from '@/js/api.js';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

const swiper = new Swiper('.swiper-review', {
  modules: [Navigation, Autoplay],
  autoplay: {
    delay: 2000,
  },
  slidesPerView: 1,
  // Default parameters
  navigation: {
    nextEl: '.swiper-button-next-review',
    prevEl: '.swiper-button-prev-review',
  },
});
console.log(swiper);
//=========================================================================
async function getReviews() {
  const data = await getData();
  console.log(data);
  renderReviews(data);
}
getReviews();

//=========================================================================
const reviewsEl = document.querySelector('.reviews-card-list');

function renderReviews(reviews) {
  const markup = reviews
    .map(review => {
      return `<div class="swiper-slide reviews-card-item ">
        <img
          src="${review.avatar_url}"
          alt="${review.author}"
          width="48"
          height="48"
          class="reviews-item-img"
        />
        <h3 class="text-title reviews-card-text-title">${review.author}</h3>
        <p class="text reviews-card-text">${review.review}</p>
      </div>`;
    })
    .join('');
  reviewsEl.insertAdjacentHTML('beforeend', markup);
}

//=========================================================================
