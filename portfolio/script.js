document.addEventListener('DOMContentLoaded', function() {

    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });


    const sections = document.querySelectorAll('.section');
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (currentScroll >= sectionTop && currentScroll <= sectionBottom) {
                links.forEach(link => link.classList.remove('active'));
                const correspondingLink = document.querySelector(`nav ul li a[href="#${section.id}"]`);
                correspondingLink.classList.add('active');
            }
        });
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        const message = form.querySelector('#message').value;

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        form.reset();
    });
});
