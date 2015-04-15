/**
 * Legend adds a control to the map that displays deets about coverage and future coverage
 * @constructor
 */
function Legend(legendDiv, map) {
  // Set CSS for the control border
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.marginBottom = '22px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Legend';
  legendDiv.appendChild(controlUI);

  // Set CSS for the control interior
  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '16px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = 'Legend';
  controlUI.appendChild(controlText);
  
  //   // Set CSS for the labels
//   var legendLabel = document.createElement('div');
//   legendLabel.style.color = '';
//   legendLabel.style.fontFamily = ''
}


// var controlDiv = document.createElement('div');
// var control = new CenterControl(controlDiv, map);

// centerControlDiv.index = 1;
// map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(controlDiv);


// google.maps.event.addDomListener(window, 'load', initialize);




function initialize() {

    console.log('map init');

    // $.getJSON('/data/siteInfo.json', function(data) {

    //     console.log('got json');
    // })
    //     .done(function() {
    //     console.log( "second success" );
    // })
    //     .fail(function(jqxhr, textStatus, err) {
    //     console.log( "error " + err );
    //     console.dir(err);
    // })
    //     .always(function() {
    //     console.log( "complete" );
    // });
    

    //console.log('google map init ahs run');
    var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(47.70861, -117.47926),
        scrollwheel: false,
        panControl: false,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.RIGHT_BOTTOM
        },
        scaleControl: true,
        streetViewControl: false
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
        
    // var controlDiv = document.createElement('div');
    // var control = new Legend(controlDiv, map);
    
    var legend = document.getElementById('map-legend');
    
    //legend.index = 1;
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(legend);
    
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
        '&signed_in=false&callback=initialize';
    document.body.appendChild(script);
}

window.onload = loadScript;

//console.log('google map js loade');