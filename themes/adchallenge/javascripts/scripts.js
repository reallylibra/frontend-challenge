/* Navbar scroll */
$(window).scroll(function(){
    var scrolled = $(this).scrollTop();
    if( scrolled >= 80 ) {
        $('.navbar').addClass('scroll');
    } else {     
        $('.navbar').removeClass('scroll');
    }
});
