$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
        });

        $('.color-box').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true
        });
         // Get the current page name
        let currentPage = window.location.pathname.split("/").pop();

        // Handle root path (like '/')
        if (currentPage === "" || currentPage === "/") {
            currentPage = "index.html";
        }

        // Get all menu links
        const menuLinks = document.querySelectorAll(".menu a");

        // Loop through links and manage 'active' class
        menuLinks.forEach(link => {
            link.classList.remove("active"); // Remove existing active
            const linkPage = link.getAttribute("href");

            // Match href with current page and add active
            if (linkPage === currentPage) {
            link.classList.add("active");
            }
        });
});
Fancybox.bind();
