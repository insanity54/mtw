// sticky nav on right
$('#navigation').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
        console.log('navigationg');
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
});

// arrow navs on each section
$('.nav-arrow').click(function(e) {
    // get next section following this section
    // go to next section
    console.log('nav arrow clicked');
    
    var clickedSection = $(this).parents("section");
    var followingSection = $(clickedSection).next();

    $(window).scrollTo(followingSection, 500);
});




// //--------------------------------------------------------------//
// //-----------------------Scrolling Navigation-------------------//
// //--------------------------------------------------------------//
// function scrollOne(){
//   window.scrollTo(0, 0);
//   $('#n1').removeClass("navOff").addClass("navOn");
//   $('#n2').removeClass("navOn").addClass("navOff");
//   $('#n3').removeClass("navOn").addClass("navOff");
//   $('#n4').removeClass("navOn").addClass("navOff");
//   $('#n5').removeClass("navOn").addClass("navOff");
//   $('#n6').removeClass("navOn").addClass("navOff");
// }

// function scroll1(){
//   $('#n1').removeClass("navOff").addClass("navOn");
//   $('#n2').removeClass("navOn").addClass("navOff");
//   $('#n3').removeClass("navOn").addClass("navOff");
//   $('#n4').removeClass("navOn").addClass("navOff");
//   $('#n5').removeClass("navOn").addClass("navOff");
//   $('#n6').removeClass("navOn").addClass("navOff");
// }

// function scrollTwo(){
//   window.scrollTo(0, 700);
//   $('#n1').removeClass("navOn").addClass("navOff");
//   $('#n2').removeClass("navOff").addClass("navOn");
//   $('#n3').removeClass("navOn").addClass("navOff");
//   $('#n4').removeClass("navOn").addClass("navOff");
//   $('#n5').removeClass("navOn").addClass("navOff");
//   $('#n6').removeClass("navOn").addClass("navOff");
// }

// function scroll2(){
//   $('#n1').removeClass("navOn").addClass("navOff");
//   $('#n2').removeClass("navOff").addClass("navOn");
//   $('#n3').removeClass("navOn").addClass("navOff");
//   $('#n4').removeClass("navOn").addClass("navOff");
//   $('#n5').removeClass("navOn").addClass("navOff");
//   $('#n6').removeClass("navOn").addClass("navOff");
// }

// function scrollThree(){
//   window.scrollTo(0, 1750);
//   $('#n1').removeClass("navOn").addClass("navOff");
//   $('#n2').removeClass("navOn").addClass("navOff");
//   $('#n3').removeClass("navOff").addClass("navOn");
//   $('#n4').removeClass("navOn").addClass("navOff");
//   $('#n5').removeClass("navOn").addClass("navOff");
//   $('#n6').removeClass("navOn").addClass("navOff");
// }

// function scroll3(){
//   $('#n1').removeClass("navOn").addClass("navOff");
//   $('#n2').removeClass("navOn").addClass("navOff");
//   $('#n3').removeClass("navOff").addClass("navOn");
//   $('#n4').removeClass("navOn").addClass("navOff");
//   $('#n5').removeClass("navOn").addClass("navOff");
//   $('#n6').removeClass("navOn").addClass("navOff");
// }

// function scrollFour(){
//   window.scrollTo(0, 4000);
//   $('#n1').removeClass("navOn").addClass("navOff");
//   $('#n2').removeClass("navOn").addClass("navOff");
//   $('#n3').removeClass("navOn").addClass("navOff");
//   $('#n4').removeClass("navOff").addClass("navOn");
//   $('#n5').removeClass("navOn").addClass("navOff");
//   $('#n6').removeClass("navOn").addClass("navOff");
// }

// function scroll4(){
//   $('#n1').removeClass("navOn").addClass("navOff");
//   $('#n2').removeClass("navOn").addClass("navOff");
//   $('#n3').removeClass("navOn").addClass("navOff");
//   $('#n4').removeClass("navOff").addClass("navOn");
//   $('#n5').removeClass("navOn").addClass("navOff");
//   $('#n6').removeClass("navOn").addClass("navOff");
// }

// function scrollFive(){
//   window.scrollTo(0, 5300);
//   $('#n1').removeClass("navOn").addClass("navOff");
//   $('#n2').removeClass("navOn").addClass("navOff");
//   $('#n3').removeClass("navOn").addClass("navOff");
//   $('#n4').removeClass("navOn").addClass("navOff");
//   $('#n5').removeClass("navOff").addClass("navOn");
//   $('#n6').removeClass("navOn").addClass("navOff");
// }

// function scroll5(){
//   $('#n1').removeClass("navOn").addClass("navOff");
//   $('#n2').removeClass("navOn").addClass("navOff");
//   $('#n3').removeClass("navOn").addClass("navOff");
//   $('#n4').removeClass("navOn").addClass("navOff");
//   $('#n5').removeClass("navOff").addClass("navOn");
//   $('#n6').removeClass("navOn").addClass("navOff");
// }

// function scrollSix(){
//   window.scrollTo(0, 6700);
//   $('#n1').removeClass("navOn").addClass("navOff");
//   $('#n2').removeClass("navOn").addClass("navOff");
//   $('#n3').removeClass("navOn").addClass("navOff");
//   $('#n4').removeClass("navOn").addClass("navOff");
//   $('#n5').removeClass("navOn").addClass("navOff");
//   $('#n6').removeClass("navOff").addClass("navOn");
// }

// function scroll6(){
//   $('#n1').removeClass("navOn").addClass("navOff");
//   $('#n2').removeClass("navOn").addClass("navOff");
//   $('#n3').removeClass("navOn").addClass("navOff");
//   $('#n4').removeClass("navOn").addClass("navOff");
//   $('#n5').removeClass("navOn").addClass("navOff");
//   $('#n6').removeClass("navOff").addClass("navOn");
// }