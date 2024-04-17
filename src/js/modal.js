const modal = document.querySelector('.modal-backdrop');
const closeModalBtn = document.querySelector('.modal-close-btn');

export const openModal = () => {
  modal.classList.remove('visually-hidden')
  document.body.classList.add('screen-blocked')
}

export const closeModal = () => {
  modal.classList.add('visually-hidden');
  document.body.classList.remove('screen-blocked')

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