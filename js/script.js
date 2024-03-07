const header = document.querySelector("header");

// Add this code in your script.js or within a <script> tag in your HTML
document.addEventListener('DOMContentLoaded', function () {
    // Select the welcome section
    const welcomeSection = document.getElementById('welcome');
    const welcomeMessage = document.getElementById('welcomeMessage');

    // Show welcome message
    welcomeMessage.style.opacity = '1';
    welcomeMessage.style.visibility = 'visible';

    // Set a timeout to hide the welcome section after 3000 milliseconds (3 seconds)
    setTimeout(function () {
        // Hide the welcome section
        welcomeSection.style.opacity = '0';
        welcomeSection.style.visibility = 'hidden';
    }, 3000);
});





window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 120)
});

let menu = document.querySelector('#menu-icon');
let navlistt = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlistt.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlistt.classList.remove('active');
}

// Check if the page is being refreshed
if (performance.navigation.type === PerformanceNavigation.TYPE_RELOAD) {
    // Redirect to index.html
    window.location.href = 'index.html';
}