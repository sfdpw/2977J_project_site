document.getElementById("map_master_menu").innerHTML += 
       
       '<div class="card">\
          <div class="card-header" id="heading_sheet_layers">\
            <h2 class="mb-0">\
              <button class="btn btn-link btn-layer" type="button"\
                      data-toggle="collapse" data-target="#collapse_sheet"\
                      aria-expanded="true" aria-controls="collapse_sheet">\
                <strong>\
                  Sheet Layer(s)\
                </strong>\
              </button>\
            </h2>\
          </div>\
          <div id="collapse_sheet" class="collapse"\
               aria-labelledby="heading_sheet_layers" data-parent="#map_master_menu">\
            <div class="card-body">\
              <table>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="011_U_checkbox" onchange="U_011_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/2977J_011_U_utility_occupancy.png" width="13" height="13"\
                         alt="Layer Symbol - U - Utility Occupancy"/>\
                    <label class="layer_label" for="011_U_checkbox">U - Utility Occupancy</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="012_SW_checkbox" onchange="SW_012_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/2977J_010_PRJCT_DWGS_18_SW2.png" width="13" height="13"\
                         alt="Layer Symbol - SW - Sewer"/>\
                    <label class="layer_label" for="012_SW_checkbox">SW - Sewer</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="013_R_checkbox" onchange="R_013_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/2977J_010_PRJCT_DWGS_18_R1.png" width="13" height="13"\
                         alt="Layer Symbol - R - Flatwork"/>\
                    <label class="layer_label" for="013_R_checkbox">R - Flatwork</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="014_CR_checkbox" onchange="CR_014_toggle()">\
                  </td>\
                  <td>\
                    <img src="legend/2977J_010_PRJCT_DWGS_18_CR0.png" width="13" height="13"\
                         alt="Layer Symbol - CR - Curb Ramps"/>\
                    <label class="layer_label" for="014_CR_checkbox">CR - Curb Ramps</label>\
                  </td>\
                </tr>\
                <tr>\
                  <td>\
                    <input type="checkbox" id="001_OSM_checkbox" onchange="OSM_001_toggle()" checked>\
                  </td>\
                  <td>\
                    <img src="legend/OSM_logo.png" width="13" height="13"\
                         alt="Layer Symbol - Street Map"/>\
                    <label class="layer_label" for="001_OSM_checkbox">Street Map</label>\
                  </td>\
                </tr>\
              </table>\
            </div>\
          </div>\
        </div>';
