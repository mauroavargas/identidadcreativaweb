$(function() {

    $('.servicesList li').click(function() {

        var $tab = $(this).closest('.serviceSection');

        $tab.find('.servicesList li.activeTab').removeClass('activeTab');
        $(this).addClass('activeTab')
        // Figure out which panel to show
        var panelToShow = $(this).attr('rel');

        // Hide current tab
        $tab.find('.panelTab.activeTab').fadeOut(300, showNextTab);
        
        // Show next tab
        function showNextTab() {
            $(this).removeClass('activeTab');
            $('#' + panelToShow).fadeIn(300, function() {
                $(this).addClass('activeTab');
            });
        }

    })
})





// x = $('.imgBg')

// simpleParallax(2, x)

// function simpleParallax(intensity, element) {
//     $(window).scroll(function() {
//         var scrollTop = $(window).scrollTop();
//         var imgPos = scrollTop / intensity + 'px';
//         element.css('transform', 'translateY(' + imgPos + ')');
//     });
// }



// $(window).scroll(function() {
//     var scrollTop = $(window).scrollTop();
//     var imgPos = scrollTop / 2 + 'px';
//     $('body').find('.imgBg').css('transform', 'translateY(' + imgPos + ')');
// });