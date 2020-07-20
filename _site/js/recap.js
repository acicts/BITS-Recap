$(document).ready(function () {
            $(window).scroll(function () {
                if (($(window).scrollTop() > 150) && ($(window).scrollTop() + $(window).height() < $(document).height() - 200)) {
                    $(".sidebar").addClass('stickySidebar');
                } else {
                    $(".sidebar").removeClass('stickySidebar');
                }
            })
})