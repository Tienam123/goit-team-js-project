import { postData } from './api';
const buttonEl = document.querySelector('.skills-button');
const inputEmail = document.querySelector('input#user-email');
const inputComments = document.querySelector('input#user-comments');

let emailInput;
let commentsInput;

buttonEl.addEventListener('click', async e => {
  e.preventDefault();
  emailInput = inputEmail.value;
  commentsInput = inputComments.value;
  postData(emailInput, commentsInput);
  document.querySelector('form.work-together-form').reset();
});

const modalOverlay = document.querySelector('.modal-overlay');
const modalWindow = document.querySelector('.modal-window');
const closeModal = document.querySelector(
  '.work-together-button-modale-window'
);
// open modal
buttonEl.addEventListener('click', openModal);
function openModal() {
  modalWindow.classList.remove('visually-hidden');
  modalOverlay.classList.remove('visually-hidden');
}
// close modal
closeModal.addEventListener('click', () => {
  modalWindow.classList.add('visually-hidden');
  modalOverlay.classList.add('visually-hidden');
});
// show mistakes if write incorrect information in inputs
// document.getElementById('user-email').addEventListener('input', function () {
//   var email = this.value;
//   var pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//   if (!pattern.test(email)) {
//     iziToast.error({
//       title: 'Error',
//       message: 'Please enter a valid email address.',
//       position: 'topRight',
//     });
//   }
// });
