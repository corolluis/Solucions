// See post: http://asmaloney.com/2015/06/code/clustering-markers-on-leaflet-maps

var map = L.map( 'map', {
  center: [41.6030, 0.7141],
  minZoom: 8,
  zoom: 1
});

L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
  subdomains: ['otile1','otile2','otile3','otile4']
}).addTo( map );

var myURL = jQuery( 'script[src$="leaf-demo.js"]' ).attr( 'src' ).replace( 'leaf-demo.js', '' );

var myIcon = L.icon({
  iconUrl: myURL + 'images/pin24.png',
  iconRetinaUrl: myURL + 'images/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
});

var markerClusters = L.markerClusterGroup();

for ( var i = 0; i < markers.length; ++i )
{
  var popup = '<a href="' + markers[i].icao + '" target="">'+ '<strong>'+ markers[i].name +'</strong>'+ '</a>'+
              '<br/> ' + markers[i].iata_faa +
	      '<br/>' + markers[i].city +		
              '<br/> ' +  markers[i].alt;

  var m = L.marker( [markers[i].lat, markers[i].lng], {icon: myIcon} )
                  .bindPopup( popup );


  markerClusters.addLayer( m );
}

map.addLayer( markerClusters );
