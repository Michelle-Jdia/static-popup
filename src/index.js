import './pages/index.scss';
const popup = document.querySelector('.popup');
const openPopupBtn = document.querySelector('.open-btn');
const closePopupBtn = document.querySelector('.popup__close-btn');
function openPopup(p) {
p.classList.add('popup-opened');
}
function closePopup(p) {
p.classList.remove('popup-opened');
}
openPopupBtn.addEventListener('click', ()=> openPopup(popup))
closePopupBtn.addEventListener('click', ()=> closePopup(popup))
