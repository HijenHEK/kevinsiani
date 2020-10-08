$(document).ready(() => {
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

    });
    
    $(document).on('click', '#humburger', function (event) {
        event.preventDefault();

        $('.nav-bar .nav').toggleClass('absolute');

    });
});


var targetWorkout = () => {
    $('nav nav-item:nth-child(2)').siblings().removeClass('active');
    $('nav nav-item:nth-child(2)').addClass('active');
}