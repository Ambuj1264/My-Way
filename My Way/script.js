$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})


$(".video-play").on('click', function(e) {
    e.preventDefault(); 
    var vidWrap = $(this).parent(),
        iframe = vidWrap.find('.video iframe'),
        iframeSrc = iframe.attr('src'),
        iframePlay = iframeSrc += "?autoplay=1";
    vidWrap.children('.video-thumbnail').fadeOut();
    vidWrap.children('.video-play').fadeOut();
    vidWrap.find('.video iframe').attr('src', iframePlay);


});


// slider

$('#myCarousel').carousel({
    interval: 3000,
 })

 
//  slider
