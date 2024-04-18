const modal = document.querySelector('.modal-backdrop');
const closeModalBtn = document.querySelector('.modal-close-btn');
const modalTitle = document.querySelector('.modal__title');
const modalBody  = document.querySelector('.modal__text');
export const openModal = (email,message) => {
  modalTitle.textContent = email;
  modalBody.textContent = message;
  modal.classList.remove('visually-hidden')
  document.body.classList.add('screen-blocked')
}

export const closeModal = () => {
  modal.classList.add('visually-hidden');
  document.body.classList.remove('screen-blocked')
  modalTitle.textContent = '';
  modalBody.textContent = '';
}
modal.addEventListener('click', (e)=>{
  if (e.target === e.currentTarget) {
    closeModal()
    return
  }
})
closeModalBtn.addEventListener('click',(e)=>{
  closeModal()
})

window.addEventListener('keydown',(e)=>{
  if (e.code === 'Escape') {
    modal.classList.add('visually-hidden');
    document.body.classList.remove('screen-blocked')
    modalTitle.textContent = '';
    modalBody.textContent = '';
  }
})