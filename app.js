function toggleMenu(){
    const menu = document.querySelector(".menu-link");
    const icon = document.querySelector(".hamburger-icon");
    // const menu = document.querySelector(".menu-link");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleFunc() {
    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // You can use 'auto' or 'smooth' for smooth scrolling
    });
}

