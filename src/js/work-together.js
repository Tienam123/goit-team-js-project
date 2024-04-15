import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { postData } from './api';
const buttonEl = document.querySelector('button#sendBtn');
const inputEmail = document.querySelector('input#user-email');
const inputComments = document.querySelector('input#user-comments');

const validSpan = document.querySelector('span#valid-email');
const invalidSpan = document.querySelector('span#invalid-email');
let emailInput;
let commentsInput;

buttonEl.addEventListener('click', async e => {
  e.preventDefault();
  emailInput = inputEmail.value;
  commentsInput = inputComments.value;
  const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!pattern.test(emailInput)) {
    iziToast.error({
      title: 'Error',
      message: 'Invalid email, try again',
      position: 'bottomCenter',
    });
    invalidSpan.style.display = 'block';
    validSpan.style.display = 'none';
    inputEmail.style.cssText += 'border-bottom: 1px solid var(--red-color)';
  } else {
    postData(emailInput, commentsInput);
    openModal();
    document.querySelector('form.work-together-form').reset();
    iziToast.success({
      title: 'OK',
      color: 'green',
      message: 'Success!',
    });
    invalidSpan.style.display = 'none';
    validSpan.style.display = 'block';
    inputEmail.style.cssText += 'border-bottom: 1px solid green';
  }
});

const modalOverlay = document.querySelector('.modal-overlay');
const modalWindow = document.querySelector('.modal-window');
const closeModal = document.querySelector(
  '.work-together-button-modale-window'
);
// open modal
// buttonEl.addEventListener('click', openModal);
function openModal() {
  modalWindow.classList.remove('visually-hidden');
  modalOverlay.classList.remove('visually-hidden');
}
// close modal
closeModal.addEventListener('click', () => {
  modalWindow.classList.add('visually-hidden');
  modalOverlay.classList.add('visually-hidden');
});
