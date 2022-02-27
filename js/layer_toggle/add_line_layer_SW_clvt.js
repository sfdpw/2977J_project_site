

function SW_clvt_layer_toggle(layer_index, master_layer_array, local_json_layer_obj, property_filters, rgba_code)

  {

    if (document.getElementById('L_'.concat(layer_index)).checked) {

        if (master_layer_array[layer_index].loaded == false) {

            map.createPane('P_'.concat(layer_index));
            map.getPane('P_'.concat(layer_index)).style.zIndex = layer_index;
            map.getPane('P_'.concat(layer_index)).style['mix-blend-mode'] = 'normal';

            for (var ii = 0; ii < local_json_layer_obj.features.length; ii++)

            {
                
                  if (local_json_layer_obj['features'][ii].properties.SCOPE == property_filters)
                  
                    {

                     local_json_layer_obj['features'][ii].L_index_stored_in_each_feature = layer_index;
                     local_json_layer_obj['features'][ii].rgba_code_stored_in_each_feature = rgba_code;
                     master_layer_array[layer_index].features.push(local_json_layer_obj['features'][ii]);

                     }

            }

            master_layer_array[layer_index].layer = new L.geoJson(master_layer_array[layer_index], {
                attribution: '',
                interactive: true,
                dataVar: 'L_'.concat(layer_index),
                layerName: 'L_'.concat(layer_index),
                pane: 'P_'.concat(layer_index),
                onEachFeature: pop_up_creator_for_domain,
                style: SW_clvt_layer_styler,
            });
            bounds_group.addLayer(master_layer_array[layer_index].layer);

        }

        master_layer_array[layer_index].loaded = true;
        map.addLayer(master_layer_array[layer_index].layer);

    } else {

        map.removeLayer(master_layer_array[layer_index].layer);

    }

}


function SW_clvt_layer_styler(feature) {

    switch (String(feature.properties['STATUS'])) {
        case 'No Construction':
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    opacity: 1,
                    color: 'rgba(150, 150, 150, 1.0)',
                    dashArray: '',
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 4.0,
                    fillOpacity: 0,
                    interactive: true,
            }
            break;

        case 'Scoped, Pre-Construction':
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    opacity: 1,
                    color: feature.rgba_code_stored_in_each_feature,
                    dashArray: '',
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 4.0,
                    fillOpacity: 0,
                    interactive: true,
            }
            break;


        case 'Direction Pending Response to Pre-Construction Video':
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    opacity: 1,
                    color: feature.rgba_code_stored_in_each_feature,
                    dashArray: '',
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 4.0,
                    fillOpacity: 0,
                    interactive: true,
            }
            break;

        case 'Televised, Replacement Directed':
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    opacity: 1,
                    color: feature.rgba_code_stored_in_each_feature,
                    dashArray: '',
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 4.0,
                    fillOpacity: 0,
                    interactive: true,
            }
            break;

        case 'Televised, No Replacement Directed':
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    opacity: 1,
                    color: 'rgba(180, 150, 50, 1.0)',
                    dashArray: '',
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 4.0,
                    fillOpacity: 0,
                    interactive: true,
            }
            break;
            
         case 'Post-Construction':
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    opacity: 1,
                    color: feature.rgba_code_stored_in_each_feature,
                    dashArray: '',
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 10.0,
                    fillOpacity: 0,
                    interactive: true,
            }
            break;           

    }
}



