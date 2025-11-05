
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.navLinks');

    // Toggle active classes
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
}