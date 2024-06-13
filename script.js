document.addEventListener("DOMContentLoaded", function () {
    var navbarToggler = document.getElementById('navbar-toggler');

    navbarToggler.addEventListener('click', function () {
        var navbarIcon = navbarToggler.querySelector('i');

        if (navbarToggler.getAttribute('aria-expanded') === 'true') {
            navbarIcon.classList.remove('fa-times');
            navbarIcon.classList.add('fa-bars');
        } else {
            navbarIcon.classList.remove('fa-bars');
            navbarIcon.classList.add('fa-times');
        }
    });
});
