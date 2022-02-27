var clear_layers_button = L.Control.extend({

  options: {
    position: 'topleft'
  },

  onAdd: function(map) {
    var container = L.DomUtil.create('input');
    container.type = "button";
    container.title = "Remove all Layer(s)";

    container.style.backgroundColor = '#f4f4f4';
    container.style.borderRadius = '3px';
    //container.style.border = '3px';//' rgba(255, 255, 255, 0.4)';
    container.style.backgroundClip = 'padding-box';
    container.style.backgroundImage = 'url("css/images/clear_layers.png")';
    container.style.backgroundRepeat = 'no-repeat';
    container.style.backgroundPosition = '50% 50%';
    container.style.backgroundSize = '20px 20px';
    container.style.width = '36px';
    container.style.height = '36px';
    //container.style.zindex = 'auto';
    container.onmouseover = function() {
      container.style.backgroundColor = 'pink';
    }
    container.onmouseout = function() {
      container.style.backgroundColor = '#f4f4f4';
    }
   

    container.onclick = function() {

      sweep_clear_layers();
    }

    return container;

  }
});

function check_clone(checkbox_id)

{

  if (checkbox_id.includes("_aaaa"))

  {

    document.getElementById(checkbox_id.replace('_aaaa', '_bbbb')).checked = document.getElementById(checkbox_id).checked;

  } else if (document.getElementById(checkbox_id.replace('_bbbb', '_aaaa')) != null)

  {

    document.getElementById(checkbox_id.replace('_bbbb', '_aaaa')).checked = document.getElementById(checkbox_id).checked;

  }

}

function sweep_check_clone()

{

  var check_box_list = document.getElementsByTagName("INPUT");

  for (var ii = 0; ii < check_box_list.length; ii++)

  {

    if (check_box_list[ii].id.includes('_bbbb') &&
      document.getElementById(check_box_list[ii].id).checked &&
      document.getElementById(check_box_list[ii].id.replace('_bbbb', '_aaaa')) != null) {

      document.getElementById(check_box_list[ii].id.replace('_bbbb', '_aaaa')).checked = true;

    }

  }

}

function sweep_clear_layers()

{

  //var overlay_layer_id = "";

  var check_box_list = document.getElementsByTagName("INPUT");

  for (var ii = 0; ii < check_box_list.length; ii++)

  {

    if (check_box_list[ii].type == 'checkbox' &&
        check_box_list[ii].id.includes('001_OSM') == false)

    {

      if (document.getElementById(check_box_list[ii].id).checked == true)

      {

        document.getElementById(check_box_list[ii].id).click();

      }

    }

  }

}

function layer_card_entry_generator(layer_index)

{

    var card_entry = '';

    card_entry =

        '<tr><td>\
           <input type="checkbox" id="L_' + layer_index + '" onchange="master_layer_array[' + layer_index + '].toggle()">\
             </td><td><img src="legend/2977J_L_' + layer_index + '.png" width="13" height="13"\
                         alt="Feature Symbol -' + master_layer_array[layer_index].layer_description + '"/>\
                    <label class="layer_label" for="2977J_L_' + layer_index + '">' +
        master_layer_array[layer_index].layer_description + '</label></td></tr>';

    return card_entry

}


function feature_layer_toggle(master_checkbox_id, L_index_start, L_index_end)

{

    var layer_int = 0;

    var check_box_list = document.getElementsByTagName("INPUT");

    for (var ii = 0; ii < check_box_list.length; ii++)

    {

        layer_int = parseInt(check_box_list[ii].id.substring(2, 5));


        if (check_box_list[ii].type == 'checkbox' &&
            (layer_int >= L_index_start && layer_int <= L_index_end ))

        {


            if (document.getElementById(master_checkbox_id).checked)

            {

                if (document.getElementById(check_box_list[ii].id).checked == false)

                {

                    document.getElementById(check_box_list[ii].id).click();

                }

            } 
            
             else

            {

                if (document.getElementById(check_box_list[ii].id).checked)

                {

                    document.getElementById(check_box_list[ii].id).click();

                }

            }

        }

    }

}


function add_feature_layer(feature_group, layer_index, source_json_layer_obj, property_filters, rgba_code)

  {

    master_layer_array[layer_index] = {};

    var local_json_layer_obj = source_json_layer_obj;

    master_layer_array[layer_index].loaded = false;

    master_layer_array[layer_index].type = local_json_layer_obj.type;

    master_layer_array[layer_index].name = local_json_layer_obj.name;
 
    master_layer_array[layer_index].crs = local_json_layer_obj.crs;

    master_layer_array[layer_index].features = [];

    master_layer_array[layer_index].layer = {};

    if (feature_group == 'SW_main')
    
      {
      
        master_layer_array[layer_index].layer_description = property_filters;
        master_layer_array[layer_index].toggle = 
       
        function() {SW_main_layer_toggle(layer_index, master_layer_array, local_json_layer_obj, property_filters, rgba_code);}
                                                            
       }
   
    else if (feature_group == 'SW_MH')
    
      {
      
       master_layer_array[layer_index].layer_description = property_filters;
       master_layer_array[layer_index].toggle = 
       
         function() {SW_MH_layer_toggle(layer_index, master_layer_array, local_json_layer_obj, property_filters, rgba_code);}
                                                                               
       }
       
    else if (feature_group == 'SW_clvt')

      {
      
       master_layer_array[layer_index].layer_description = property_filters;
       master_layer_array[layer_index].toggle = 
       
         function() {SW_clvt_layer_toggle(layer_index, master_layer_array, local_json_layer_obj, property_filters, rgba_code);}
                                                                               
      }

       
    else if (feature_group == 'SW_drain')

      {
      
       master_layer_array[layer_index].layer_description = property_filters;
       master_layer_array[layer_index].toggle = 
       
         function() {SW_drain_layer_toggle(layer_index, master_layer_array, local_json_layer_obj, property_filters, rgba_code);}
                                                                               
      }
 
     else if (feature_group == 'SW_lateral')

      {
      
       master_layer_array[layer_index].layer_description = property_filters;
       master_layer_array[layer_index].toggle = 
       
         function() {SW_lateral_layer_toggle(layer_index, master_layer_array, local_json_layer_obj, property_filters, rgba_code);}
                                                                               
      }
      
     else if (feature_group == 'R_polygon')

      {
      
       master_layer_array[layer_index].layer_description = property_filters;
       master_layer_array[layer_index].toggle = 
       
          function() {flatwork_layer_toggle(layer_index, master_layer_array, local_json_layer_obj,           
                                           property_filters, rgba_code);}
                                                                               
      }  
      
     else if (feature_group == 'R_point')

      {
           
       master_layer_array[layer_index].layer_description = property_filters;
       master_layer_array[layer_index].toggle = 
       
          function() {flatwork_point_layer_toggle(layer_index, master_layer_array, local_json_layer_obj,           
                                           property_filters, rgba_code);}
                                                                               
      }       
      
       
    }                                                                          
                                                                              
 
   
   
   
   
