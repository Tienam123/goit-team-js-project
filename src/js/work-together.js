import { postData } from './api';
const buttonEl = document.querySelector('.skills-button');
const inputEmail = document.querySelector('input#user-email');
const inputComments = document.querySelector('input#user-comments');
// const valueInput = inputEl.value;

let emailInput;
let commentsInput;

buttonEl.addEventListener('click', e => {
  e.preventDefault();
  emailInput = inputEmail.value;
  commentsInput = inputComments.value;
  postData(emailInput, commentsInput);
  document.querySelector('form.work-together-form').reset();
});
