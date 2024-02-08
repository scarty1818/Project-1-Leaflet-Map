var map = L.map('map').setView([29.95758, -90.06315], 12);

// Stamen Terrain base layer
var Stamen_Terrain = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 18,
    ext: 'png'
}).addTo(map);

// Esri feature layers
var featureLayer1 = L.esri.featureLayer({
    url: 'https://maps.nola.gov/server/rest/services/SpecialEvents/Special_Events/MapServer/2',
}).addTo(map);

var featureLayer2 = L.esri.featureLayer({
    url: 'https://gis.nola.gov/arcgis/rest/services/Basemaps/OrleansParish/MapServer/1',
}).addTo(map);

// Define Jackson Square location
var JacksonSquare = [
    {
        name: "Jackson Square",
        location: [29.9575328098764, -90.06322641825119],
        description: "Center of New Orleans History, Don't Get Pickpocketed"
    }
];

// Iterate over the JacksonSquare array to add markers
JacksonSquare.forEach(function(item) {
    var marker = L.marker(item.location).addTo(map);
    marker.bindPopup("<b>" + item.name + "</b><br>" + item.description);
});

document.getElementById('JacksonSquare').onclick = function() {
    map.setView([29.95749121710881, -90.06305839497632], 20); // Reset to the original center and zoom level
};
