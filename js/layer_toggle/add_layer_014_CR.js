function pop_014_CR_curb_ramps_318(feature, layer) {
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

function style_014_CR_curb_ramps_318_0() {
  return {
    pane: 'pane_014_CR_curb_ramps_318',
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

        map.createPane('pane_2977J_010_PRJCT_DWGS_18_CR');
        map.getPane('pane_2977J_010_PRJCT_DWGS_18_CR').style.zIndex = 54;
        map.getPane('pane_2977J_010_PRJCT_DWGS_18_CR').style['mix-blend-mode'] = 'normal';

        var layer_2977J_010_PRJCT_DWGS_18_CR = new L.geoJson(layer_filter('PLAN_BOUNDARY_CR', json_2977J_010_PRJCT_DWGS_18), {
            attribution: '',
            interactive: true,
            dataVar: 'json_2977J_010_PRJCT_DWGS_18_CR',
            layerName: 'layer_2977J_010_PRJCT_DWGS_18_CR',
            pane: 'pane_2977J_010_PRJCT_DWGS_18_CR',
            onEachFeature: pop_014_CR_curb_ramps_318,
            style: style_2977J_010_PRJCT_DWGS_18_0,
        });
        
function CR_014_toggle() {

  if (document.getElementById("014_CR_checkbox").checked) {

    layer_014_CR_curb_ramps_318 = new L.geoJson(layer_filter('PLAN_BOUNDARY_CR', json_2977J_010_PRJCT_DWGS_18), {
      attribution: '',
      interactive: true,
      dataVar: 'json_014_CR_curb_ramps_318',
      layerName: 'layer_014_CR_curb_ramps_318',
      pane: 'pane_014_CR_curb_ramps_318',
      onEachFeature: pop_014_CR_curb_ramps_318,
      style: style_014_CR_curb_ramps_318_0,
    });
    
        bounds_group.addLayer(layer_2977J_010_PRJCT_DWGS_18_CR);
        map.addLayer(layer_2977J_010_PRJCT_DWGS_18_CR);

  } else {
  
    map.removeLayer(layer_2977J_010_PRJCT_DWGS_18_CR);
    
  }

}
