// handle the contact info box

$(function() {

    var collapsed = false;

    function collapse() {
        $('#contact-close').toggleClass('transition', true, 50, "easeOutSine");
        $('#contact-drawer').toggleClass('collapsed', true, 200, "easeOutSine", function() {
            $('#contact-drawer').toggleClass('slid', true, 200, "easeOutSine");
            $('#contact-slider').toggleClass('collapsed', true, 200, "easeOutSine", function() {
                $('#contact-close').html('<span aria-hidden="true"><i class="ion-android-call"></i></span><span class="sr-only">Close</span>');
                $('#contact-close').toggleClass('closed', true, 200, "easeOutSine");
                collapsed = true;
            });
        });
    }

    function expand() {
        $('#contact-close').toggleClass('transition', false, 50, "easeOutSine");
        $('#contact-close').html('<span aria-hidden="true">×</span><span class="sr-only">Close</span>');
        $('#contact-close').toggleClass('closed', false, 100, "easeOutSine");
        $('#contact-drawer').toggleClass('slid', false, 200, "easeOutSine");
        $('#contact-slider').toggleClass('collapsed', false, 200, "easeOutSine", function() {
            $('#contact-drawer').toggleClass('collapsed', false, 200, "easeOutSine", function() {
                collapsed = false;
            });
        });
    }

    $('#contact-close').click(function() {
        if (collapsed === false) return collapse();
        return expand();
    });
});