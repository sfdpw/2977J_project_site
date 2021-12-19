function pop_015_U_utility_318(feature, layer) {
  layer.on({
    mouseout: function(e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });

popupContent = return_plan_boundary_popup(feature);

layer.bindPopup(popupContent, {
    maxHeight: 400
  });
}

function style_015_U_utility_318_0() {
  return {
    pane: 'pane_015_U_utility_318',
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1.0,
    fill: true,
    fillopacity: 0.6,
    fillColor: 'rgba(133,182,111,1.0)',
    interactive: true,
  }
}

        map.createPane('pane_2977J_010_PRJCT_DWGS_18_U');
        map.getPane('pane_2977J_010_PRJCT_DWGS_18_U').style.zIndex = 52;
        map.getPane('pane_2977J_010_PRJCT_DWGS_18_U').style['mix-blend-mode'] = 'normal';

        var layer_2977J_010_PRJCT_DWGS_18_U = new L.geoJson(layer_filter('PLAN_BOUNDARY_U', json_2977J_010_PRJCT_DWGS_18), {
            attribution: '',
            interactive: true,
            dataVar: 'json_2977J_010_PRJCT_DWGS_18_U',
            layerName: 'layer_2977J_010_PRJCT_DWGS_18_U',
            pane: 'pane_2977J_010_PRJCT_DWGS_18_U',
            onEachFeature: pop_015_U_utility_318,
            style: style_2977J_010_PRJCT_DWGS_18_0,
        });


function U_015_toggle() {

  if (document.getElementById("015_U_checkbox").checked) {

    layer_015_U_utility_318 = new L.geoJson(layer_filter('PLAN_BOUNDARY_U', json_2977J_010_PRJCT_DWGS_18), {
      attribution: '',
      interactive: true,
      dataVar: 'json_015_U_utility_318',
      layerName: 'layer_015_U_utility_318',
      pane: 'pane_015_U_utility_318',
      onEachFeature: pop_015_U_utility_318,
      style: style_015_U_utility_318_0,
    });
    
        bounds_group.addLayer(layer_2977J_010_PRJCT_DWGS_18_U);
        map.addLayer(layer_2977J_010_PRJCT_DWGS_18_U);

  } else {
  
    map.removeLayer(layer_2977J_010_PRJCT_DWGS_18_U);
    
  }

}
