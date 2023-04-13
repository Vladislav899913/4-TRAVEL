document.addEventListener('DOMContentLoaded', function () {
    // BURGER-MENU
    const navBurgerIcon = document.querySelector('#nav_burger_icon');
    const navBurger = document.querySelector('#nav_burger');
    const navLinks = document.querySelector('#nav').cloneNode(1);

    navBurgerIcon.addEventListener('click', hambHandler);
    function hambHandler(e) {
        e.preventDefault();
        navBurger.classList.toggle('open');
        navBurgerIcon.classList.toggle('active');
        navBurger.appendChild(navLinks);
    }
});
