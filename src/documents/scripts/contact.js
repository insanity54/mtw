// contact form



/*  Contact Form */
$('a#contact-method-email').click(function (e) {
    e.preventDefault();
    console.log('clikd ermail');
    $('.contact-selector-wrapper').slideUp(1000);
    $('.contact-email-wrapper').fadeIn(1000);
    $('.contact-button-wrapper').fadeIn(1000);
});

//div.control-group.contact-phone-wrapper

$("a#contact-method-phone").click(function (e) {
    e.preventDefault();
    console.log('clicked phone');
});

$("a#contact-method-txt").click(function (e) {
    e.preventDefault();
    console.log('clicked txt');
});


//
//$("#subscribe").submit(function (e) {
//    e.preventDefault();
//    var email = $("#subscriber-email").val();
//    var dataString = 'email=' + email;
//
//    function isValidEmail(emailAddress) {
//        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
//        return pattern.test(emailAddress);
//    };
//
//    if (isValidEmail(email)) {
//        $.ajax({
//            type: "POST",
//            url: "http://apps.choosecase.com/subscribe.php",
//            data: dataString,
//            success: function () {
//                $('.subscription-success').fadeIn(1000);
//                $('.subscription-error').fadeOut(500);
//                $('.hide-after').fadeOut(500);
//            }
//        });
//    } else {
//        $('.subscription-error').fadeIn(1000);
//    }
//
//    return false;
//});