const navToggle = document.getElementById('toggle')
const navMenu = document.getElementById('menu')
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open')
})