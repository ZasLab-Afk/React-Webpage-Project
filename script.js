const hamberger = document.querySelector('.hamburger');
const nav__links = document.querySelector('.nav__links');

hamberger.addEventListener('click', () => {
    hamberger.classList.toggle('active');
    nav__links.classList.toggle('active');
});