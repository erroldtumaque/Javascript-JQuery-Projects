$(document).ready(function() {
    $('nav a').on('click', function() {
        // Current class assignment
        $('nav li.current').removeClass('current');
        $(this).parent().addClass('current');

        // Set Heading Text
        $('h1#heading').text($(this).text());

        // Get & filter Link Text
        var category = $(this).text().toLowerCase().replace(' ', '-');

        // Remove hidden class if 'all-projects' is selected
        if (category == 'all-projects') {
            $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
        } else {
            $('ul#gallery li').each(function() {
                if (!$(this).hasClass(category)) {
                    $(this).hide().addClass('hidden');
                } else {
                    $(this).fadeIn('slow').removeClass('hidden');
                }
            })
        }

        // Stop Link Behavior
        return false;
    });

    $('ul#gallery li').on('mouseenter', function() {
        // get Data attribute values
        var title = $(this).children().data('title');
        var desc = $(this).children().data('desc');

        // validations
        if (desc == null) {
            desc = 'Click to Enlarge';
        }

        if (title == null) {
            title = '';
        }

        // Create overlay div 
        $(this).append('<div class="overlay"></div');

        // Get overlay div 
        var overlay = $(this).children('.overlay');

        // Add html to overlay 
        overlay.html('<h3>' + title + '</h3><p>' + desc + '</p>');

        overlay.fadeIn(800);
    });

    // Mouseleave overlay 
    $('ul#gallery li').on('mouseleave',function() {

    $(this).append('<div class="overlay"></div>');
    var overlay = $(this).children('.overlay');

    // Fade Out
    overlay.fadeOut(500);

    })

});