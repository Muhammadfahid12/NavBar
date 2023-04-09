const bar = document.getElementById('bar');
const navBar = document.getElementById('nav-bar');

bar.addEventListener('click', () => {
    navBar.classList.toggle('show');
});