'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const openModel = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModel = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', openModel);
}

btnCloseModal.addEventListener('click', closeModel);

overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});
