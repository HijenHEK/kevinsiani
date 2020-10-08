$(document).ready(() => {
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

    });
    // $(document).on('mouseenter', '.card:nth-child(4n)', function (event) {
    //     event.preventDefault();
        

    //     if($('#workout').scrollLeft() <= $('#workout').scrollLeft($('#workout').width())) {
    //         setTimeout(
    //             ()=>{
    //                 $('#workout').scrollLeft(-$('#workout').width()) 
    //             },
    //             800
    //         )
    //     }else{
    //     setTimeout(
    //         ()=>{
    //             $('#workout').scrollLeft($('#workout').width()) 
    //         },
    //         800
    //     )
    //     }

    // });

});