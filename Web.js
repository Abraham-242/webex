window.addEventListener('scroll', function() {
    const element = document.querySelector('.navbar');
    
    if (window.scrollY > 10) {
        element.classList.add('nav');
    } else {
        element.classList.remove('nav');
    }
});

window.addEventListener('scroll', function() {
    const element = document.querySelector('.hero');
    
    if (window.scrollY > 10) {
        element.classList.add('beneath');
    } else {
        element.classList.remove('beneath');
    }
});