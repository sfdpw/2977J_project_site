map.createPane('pane_OSMStandard_0');
map.getPane('pane_OSMStandard_0').style.zIndex = 1;

var layer_OSMStandard_0 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    pane: 'pane_OSMStandard_0',
    opacity: 1.0,
    minZoom: 1,
    maxZoom: 23,
    minNativeZoom: 0,
    maxNativeZoom: 19
});

layer_OSMStandard_0;
map.addLayer(layer_OSMStandard_0);


function OSM_001_toggle() {

    if (document.getElementById("001_OSM_checkbox").checked) {

        map.addLayer(layer_OSMStandard_0);

    } else {

        map.removeLayer(layer_OSMStandard_0);

    }

}
