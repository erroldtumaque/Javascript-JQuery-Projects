// Accordian

var action ="click";
var speed ="500";

$(function(){
    $('li.q').on('click',function(){
        // Get next element
        $(this).next().slideToggle(speed).siblings('li.a').slideUp();
        var img = $(this).children('img');

        // remove the 'rotate' class for all images except the active
        $('img').not(img).removeClass('rotate');
        // Toggle rotate class
        img.toggleClass('rotate');
    });
});