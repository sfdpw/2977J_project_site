var flatwork_feature_menu =
        '<div class="card">\
           <div class="card-header" id="heading_flatwork_features">\
            <h2 class="mb-0">\
              <button class="btn btn-link btn-layer" type="button"\
                      data-toggle="collapse" data-target="#collapse_flatwork"\
                      aria-expanded="true" aria-controls="collapse_flatwork">\
                <strong>\
                  Flatwork Feature(s)\
                </strong>\
              </button>\
            </h2>\
          </div>\
          <div id="collapse_flatwork" class="collapse"\
                aria-labelledby="heading_flatwork_features" data-parent="#map_master_menu">\
            <div class="card-body">\
              <div class="scroll_card">\
              <table>\
                <tr>\
                  <td><input type="checkbox" id="8xx_FWRK_checkbox"\
                             onchange="feature_layer_toggle(\'8xx_FWRK_checkbox\',' 
                             + R_fltwrk_index_limits[0] + ',' + R_fltwrk_index_limits[1] + ')"></td>\
                  <td><label class="layer_label" for="8xx_FWRK_checkbox"><strong>Flatwork</strong></label></td>\
                </tr>'
 
for (var ll = R_fltwrk_index_limits[0]; ll <= R_fltwrk_index_limits[1]; ll++) // Flatwork              
 
   {flatwork_feature_menu += layer_card_entry_generator(ll);}
              
flatwork_feature_menu +=                                                

              '</table>\
              </div>\
            </div>\
          </div>\
         </div>';

document.getElementById("map_master_menu").innerHTML += flatwork_feature_menu;
