function scrollToTop() {
    const scrollDuration = 300; // Ajuste a duração desejada da animação (em milissegundos)
    const scrollStep = -window.scrollY / (scrollDuration / 15);

    const scrollInterval = setInterval(function(){
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}
