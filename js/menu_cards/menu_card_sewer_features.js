var sw_sewer_feature_menu =
        '<div class="card">\
           <div class="card-header" id="heading_sewer_features">\
            <h2 class="mb-0">\
              <button class="btn btn-link btn-layer" type="button"\
                      data-toggle="collapse" data-target="#collapse_sewer"\
                      aria-expanded="true" aria-controls="collapse_sewer">\
                <strong>\
                  Sewer Feature(s)\
                </strong>\
              </button>\
            </h2>\
          </div>\
          <div id="collapse_sewer" class="collapse"\
                aria-labelledby="heading_sewer_features" data-parent="#map_master_menu">\
            <div class="card-body">\
              <div class="scroll_card">\
              <table>\
                <tr>\
                  <td><input type="checkbox" id="7xx_SWMN_checkbox"\
                             onchange="feature_layer_toggle(\'7xx_SWMN_checkbox\',' 
                             + SW_main_index_limits[0] + ',' + SW_main_index_limits[1] + ')"></td>\
                  <td><label class="layer_label" for="7xx_SWMN_checkbox"><strong>Mains</strong></label></td>\
                </tr>'
 
 for (var ll = SW_main_index_limits[0]; ll <= SW_main_index_limits[1]; ll++) // SEWER MAINS               
 
   {sw_sewer_feature_menu += layer_card_entry_generator(ll);}
  
                
    sw_sewer_feature_menu +=
 
               '<tr>\
                  <td colspan="2">&nbsp;</td>\
                </tr>\
                <tr>\
                  <td><input type="checkbox" id="7xx_SW_MH_checkbox"\
                             onchange="feature_layer_toggle(\'7xx_SW_MH_checkbox\','
                             + SW_MH_index_limits[0] + ',' + SW_MH_index_limits[1] + ')"></td>\
                  <td><label class="layer_label" for="7xx_SW_MH_checkbox"><strong>Manholes</strong></label></td>\
                </tr>'          
 
 
for (ll = SW_MH_index_limits[0]; ll <= SW_MH_index_limits[1]; ll++) // SEWER MHs
 
   {sw_sewer_feature_menu += layer_card_entry_generator(ll);} 


sw_sewer_feature_menu +=


                '<tr>\
                  <td colspan="2">&nbsp;</td>\
                </tr>\
                <tr>\
                  <td><input type="checkbox" id="7xx_SW_clvt_checkbox"\
                             onchange="feature_layer_toggle(\'7xx_SW_clvt_checkbox\','
                             + SW_clvt_index_limits[0] + ',' + SW_clvt_index_limits[1] + ')"></td>\
                  <td><label class="layer_label" for="7xx_SW_clvt_checkbox"><strong>Culverts</strong></label></td>\
                </tr>'
                
              
for (ll = SW_clvt_index_limits[0]; ll <= SW_clvt_index_limits[1]; ll++) // SEWER clvt 
 
   {sw_sewer_feature_menu += layer_card_entry_generator(ll);} 


sw_sewer_feature_menu +=                
                
                '<tr>\
                  <td colspan="2">&nbsp;</td>\
                </tr>\
                <tr>\
                  <td><input type="checkbox" id="7xx_SW_drain_checkbox"\
                             onchange="feature_layer_toggle(\'7xx_SW_drain_checkbox\','
                             + SW_drain_index_limits[0] + ',' + SW_drain_index_limits[1] + ')"></td>\
                  <td><label class="layer_label" for="7xx_SW_drain_checkbox"><strong>Drains</strong></label></td>\
                </tr>'
                
for (ll = SW_drain_index_limits[0]; ll <= SW_drain_index_limits[1]; ll++) // SEWER drain
 
   {sw_sewer_feature_menu += layer_card_entry_generator(ll);}                 
                

sw_sewer_feature_menu +=                                
      
                '<tr>\
                  <td colspan="2">&nbsp;</td>\
                </tr>\
                <tr>\
                  <td><input type="checkbox" id="7xx_SW_lateral_checkbox"\
                             onchange="feature_layer_toggle(\'7xx_SW_lateral_checkbox\','
                             + SW_lateral_index_limits[0] + ',' + SW_lateral_index_limits[1] + ')"></td>\
                  <td><label class="layer_label" for="7xx_SW_lateral_checkbox"><strong>Laterals</strong></label></td>\
                </tr>'
                
for (ll = SW_lateral_index_limits[0]; ll <= SW_lateral_index_limits[1]; ll++) // SEWER lateral
 
   {sw_sewer_feature_menu += layer_card_entry_generator(ll);}                   
                
sw_sewer_feature_menu +=                                                

              '</table>\
              </div>\
            </div>\
          </div>\
         </div>';

document.getElementById("map_master_menu").innerHTML += sw_sewer_feature_menu;
