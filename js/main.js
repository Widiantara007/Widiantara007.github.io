(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

document.addEventListener("DOMContentLoaded", function() {
    displayDateTime();
    // Perbarui informasi waktu setiap detik (1000 milidetik)
    setInterval(displayDateTime, 1000);
});

function displayDateTime() {
    const dateTimeInfoElement = document.getElementById("date-time-info");

    // Dapatkan objek waktu saat ini
    const now = new Date();

    // Dapatkan informasi tanggal dan waktu
    const dayOfWeek = getDayOfWeek(now.getDay());
    const date = now.getDate();
    const month = getMonthName(now.getMonth());
    const year = now.getFullYear();

    const hours = formatTimeComponent(now.getHours());
    const minutes = formatTimeComponent(now.getMinutes());
    const seconds = formatTimeComponent(now.getSeconds());

    // Tampilkan informasi waktu di HTML
    const dateTimeInfo = `${dayOfWeek}, ${date} ${month} ${year} ${hours}:${minutes}:${seconds}`;
    dateTimeInfoElement.textContent = dateTimeInfo;
}

function getDayOfWeek(dayIndex) {
    const daysOfWeek = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    return daysOfWeek[dayIndex];
}

function getMonthName(monthIndex) {
    const months = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    return months[monthIndex];
}

