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
        console.log('nav');
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