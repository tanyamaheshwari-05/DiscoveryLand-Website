window.onscroll = function() {
    var navbar = document.querySelector('.nav');
    if (window.scrollY > 50) {
        navbar.classList.add('white');
    } else {
        navbar.classList.remove('white');
    }
};


