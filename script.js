window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if(window.scrollY > 40) {
        nav.style.background = '#234423ee';
    } else {
        nav.style.background = '#183c24ee';
    }
});
