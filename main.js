$(document).ready(() => {
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
       
    });
    
    $(document).on('click', '#humburger', function (event) {
        event.preventDefault();

        $('.nav-bar .nav').toggleClass('absolute');

    });

    $(window).scroll(function () {
      
        
        var top = $(window).scrollTop()+400;
        var intro = $('#intro').offset().top;
        var workout = $('#workout').offset().top;
        var contact = $('#contact').offset().top;
        var el = $('a[href="#intro"]');
        if(top>=contact){
            el = $('a[href="#contact"]');
        }else if (top >=workout) {
            el = $('a[href="#workout"]');

        }else if (top >= intro) {
            el = $('a[href="#intro"]');
        }
        el.siblings().removeClass('active');
        el.addClass('active');


    });

});


var targetWorkout = () => {
    $('nav nav-item:nth-child(2)').siblings().removeClass('active');
    $('nav nav-item:nth-child(2)').addClass('active');
}