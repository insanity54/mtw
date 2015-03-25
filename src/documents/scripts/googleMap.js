function addInfoWindow() {
    //var contentStringToday = data.info.coverage.today;
    var contentStringToday = data.info.coverage.today;
    var contentStringFuture = data.info.coverage.future;
    
    var infoWindowToday = new google.maps.InfoWindow({
        content: contentStringToday
    });
    
    var infoWindowFuture = new google.maps.InfoWindow({
        content: contentStringFuture
    });

    google.maps.event.addListener(coverage, 'click', function() {
        infoWindowToday.open(map);
    });

    //google.maps.event.addListener()
}

function initialize() {
    console.log('map init');
    $.getJSON('/data/siteInfo.json', function(data) {

        console.log('got json');
        addInfoWindow();
        
        
    })
    
     .done(function() {
        console.log( "second success" );
    })
        .fail(function(jqxhr, textStatus, err) {
        console.log( "error " + err );
        console.dir(err);
    })
        .always(function() {
        console.log( "complete" );
        addInfoWindow();
    });
    

    //console.log('google map init ahs run');
    var mapOptions = {
        zoom: 9,
        center: new google.maps.LatLng(47.70861, -117.47926),
        scrollwheel: false
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
        
    var coverage = map.data.loadGeoJson('/data/mobiletalkCoverage.json');

    //var featureStyle = {
    //    fillColor: 'green',
    //    strokeWeight: 0
    //}
    
    //var color = map.data.FeatureOptions.properties
    //map.data.setStyle(featureStyle);
    // google.maps.Data.FeatureOptions
    //map.data.overrideStyle(fillColor:);
    
    
    map.data.setStyle(function(feature) {
        //var color = 'gray';
        //if (feature.getProperty('isColorful')) {
        
        //}
        var color = feature.getProperty('color');
        return /** @type {google.maps.Data.StyleOptions} */({
            fillColor: color,
            strokeWeight: 0
        });
    });

        // with the site data, construct content strings for each site info window
        // https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple
        
       

    
}

function loadScript() {
    //console.log('google map loadScript has run');
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
        '&signed_in=true&callback=initialize';
    document.body.appendChild(script);
}

window.onload = loadScript;

//console.log('google map js loade');