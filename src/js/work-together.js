import iziToast from 'izitoast';
import { openModal } from '@/js/modal.js';
import throttle from 'lodash.throttle';
import { postData } from '@/js/api.js';

const BASE__KEY = 'data';
const data = {};
const refs = {
  form: document.querySelector('.work-form'),
  mail: document.querySelector('.work-form__mail'),
  message: document.querySelector('.work-form__message'),
  sendButton: document.querySelector('.work-form__button'),
  mailValidate: document.querySelector('.work-form__mail-text'),
  messageValidate: document.querySelector('.work-form__message-text'),
};
refs.mail.value = localStorage.getItem('mail') ?? '';
refs.message.value = localStorage.getItem('message') ?? '';
refs.form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (Validator.validateEmail(e.target.elements.usermail.value) &&
    !Validator.validateMessage(e.target.elements.message.value).length) {
    const data = JSON.stringify({
      email: e.target.elements.usermail.value,
      comment: e.target.elements.message.value,
    });
    postData(data)
      .then(res => {
        openModal(res.data.title, res.data.message);
        e.target.reset();
        localStorage.setItem('mail', '');
        localStorage.setItem('message', '');
      })
      .catch(err => {
        iziToast.error({
          message: err.message,
          position: 'topRight',
        });
      });

    e.target.reset();

    // openModal();
  } else {
    iziToast.error({
      message: 'Error. Please enter your data again',
      position: 'topRight',
    });
  }
});

refs.mail.addEventListener('blur', (e) => {
  if (Validator.validateEmail(e.target.value)) {
    refs.mailValidate.style.color = 'green';
    refs.mailValidate.style.fontSize = '';
    refs.mailValidate.textContent = 'Success!';
  } else {
    refs.mailValidate.style.color = '#ED3B44';
    refs.mailValidate.style.fontSize = '';
    refs.mailValidate.textContent = 'Invalid email, try again!';
  }
});

refs.message.addEventListener('input', (e) => {
  if (!Validator.validateMessage(e.target.value)) {
    refs.messageValidate.textContent = Validator.validateMessage(e.target.value);
  } else {
    refs.messageValidate.textContent = Validator.validateMessage(e.target.value);
  }
  localStorage.setItem('message', e.target.value);
});

refs.mail.addEventListener('input', throttle((e) => {
  localStorage.setItem('mail', e.target.value);
}, 500));

class Validator {
  static validateEmail = (email) => {
    const pattern = '^[\\w\\.-]+@[a-zA-Z\\d\\.-]+\\.[a-zA-Z]{2,}$';
    if (String(email)
      .match(pattern) && email.trim().length > 0) {
      return true;
    } else {
      return false;
    }
  };

  static validateMessage = (message) => {
    const trimmedMessage = message.trim();
    if (trimmedMessage.length <= 0) {
      return `Сan't be empty`;
    } else if (trimmedMessage.length > 200) {
      return 'You have exceeded the limit';
    } else {
      return '';
    }
  };
}