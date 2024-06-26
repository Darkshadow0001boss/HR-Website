// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('#navbar a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.getElementById('navbar').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});
