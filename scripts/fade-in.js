document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.FadeIn')

    for (let i = 0; i < fadeElements.length; i++) {
        fadeElements[i].classList.add('Visible');
    }

});