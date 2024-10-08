document.addEventListener('DOMContentLoaded', () => {
    // Typed.js for the dynamic text effect
    var typed = new Typed('#element', {
        strings: ['Web Developer', 'Web Designer', 'Content Writer.'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
    });

    // Animate skill bars
    document.querySelector('.html').style.setProperty('--level', '90%');
    document.querySelector('.css').style.setProperty('--level', '70%');
    document.querySelector('.js').style.setProperty('--level', '60%');
    document.querySelector('.react').style.setProperty('--level', '30%');
});
