var overlay_menu_subsection_content_U = "";
var overlay_menu_subsection_content_SW = "";
var overlay_menu_subsection_content_R = "";
var overlay_menu_subsection_content_CR = "";

for (var ii = 0; ii < layer_filter('PLAN_BOUNDARY_U', json_2977J_010_PRJCT_DWGS_18)['features'].length; ii++) {
  overlay_menu_subsection_content_U += layer_filter('PLAN_BOUNDARY_U',
  json_2977J_010_PRJCT_DWGS_18)['features'][ii].properties.SHEET + '<br>';
}

for (var ii = 0; ii < layer_filter('PLAN_BOUNDARY_SW', json_2977J_010_PRJCT_DWGS_18)['features'].length; ii++) {
  overlay_menu_subsection_content_SW += layer_filter('PLAN_BOUNDARY_SW',
  json_2977J_010_PRJCT_DWGS_18)['features'][ii].properties.SHEET + '<br>';
}

for (var ii = 0; ii < layer_filter('PLAN_BOUNDARY_R', json_2977J_010_PRJCT_DWGS_18)['features'].length; ii++) {
  overlay_menu_subsection_content_R += layer_filter('PLAN_BOUNDARY_R',
  json_2977J_010_PRJCT_DWGS_18)['features'][ii].properties.SHEET + '<br>';
}

for (var ii = 0; ii < layer_filter('PLAN_BOUNDARY_CR', json_2977J_010_PRJCT_DWGS_18)['features'].length; ii++) {
  overlay_menu_subsection_content_CR += layer_filter('PLAN_BOUNDARY_CR',
  json_2977J_010_PRJCT_DWGS_18)['features'][ii].properties.SHEET + '<br>';
}

var menu_card_sheet_overlay_content =

  '<div class="accordion" id="heading_sheet_overlays_0">\
     <div class="card">\
       <div class="card-header">\
         <h2 class="mb-0">\
           <button class="btn btn-link btn-layer" type="button" data-toggle="collapse"\
                   data-target="#heading_sheet_overlays_0_collapse" aria-expanded="false"\
                   aria-controls="heading_sheet_overlays_0_collapse">\
             <strong>Sheet Links and Overlay(s)</strong>\
           </button>\
         </h2>\
       </div>\
       <div id="heading_sheet_overlays_0_collapse" class="collapse"\
            aria-labelledby="heading_sheet_overlays_0" data-parent="#map_master_menu">\
         <div class="card-body">\
         <div class="scroll_card">\
\
           <div class="card">\
             <div class="card-header p-0" id="sheet_overlays_U">\
               <h2 class="mb-0">\
                 <button class="btn btn-link collapsed" type="button"\
                         data-toggle="collapse" data-target="#heading_sheet_overlays_0_collapse_U"\
                         aria-expanded="false" aria-controls="heading_sheet_overlays_0_collapse_U">\
                   <strong>U - Utilities</strong>\
                 </button>\
               </h2>\
             </div>\
             <div id="heading_sheet_overlays_0_collapse_U" class="collapse"\
                      aria-labelledby="sheet_overlays_U" data-parent="#heading_sheet_overlays_0">\
               <div class="card-body">\
                 <div class="scroll_card_sub">' +
  overlay_menu_subsection_content_U +
  '</div>\
               </div>\
             </div>\
           </div>\
\
           <div class="card">\
             <div class="card-header p-0" id="sheet_overlays_SW">\
               <h2 class="mb-0">\
                 <button class="btn btn-link collapsed" type="button"\
                         data-toggle="collapse" data-target="#heading_sheet_overlays_0_collapse_SW"\
                         aria-expanded="false" aria-controls="heading_sheet_overlays_0_collapse_SW">\
                   <strong>SW - Sewer</strong>\
                 </button>\
               </h2>\
             </div>\
             <div id="heading_sheet_overlays_0_collapse_SW" class="collapse"\
                      aria-labelledby="sheet_overlays_SW" data-parent="#heading_sheet_overlays_0">\
               <div class="card-body">\
                 <div class="scroll_card_sub">' +
  overlay_menu_subsection_content_SW +
  '</div>\
               </div>\
             </div>\
           </div>\
\
           <div class="card">\
             <div class="card-header p-0" id="sheet_overlays_R">\
               <h2 class="mb-0">\
                 <button class="btn btn-link collapsed" type="button"\
                         data-toggle="collapse" data-target="#heading_sheet_overlays_0_collapse_R"\
                         aria-expanded="false" aria-controls="heading_sheet_overlays_0_collapse_R">\
                   <strong>R - Flatwork</strong>\
                 </button>\
               </h2>\
             </div>\
             <div id="heading_sheet_overlays_0_collapse_R" class="collapse"\
                      aria-labelledby="sheet_overlays_R" data-parent="#heading_sheet_overlays_0">\
               <div class="card-body">\
                 <div class="scroll_card_sub">' +
  overlay_menu_subsection_content_R +
  '</div>\
               </div>\
             </div>\
           </div>\
\
           <div class="card">\
             <div class="card-header p-0" id="sheet_overlays_CR">\
               <h2 class="mb-0">\
                 <button class="btn btn-link collapsed" type="button"\
                         data-toggle="collapse" data-target="#heading_sheet_overlays_0_collapse_CR"\
                         aria-expanded="false" aria-controls="heading_sheet_overlays_0_collapse_CR">\
                   <strong>CR - Curb Ramps</strong>\
                 </button>\
               </h2>\
             </div>\
             <div id="heading_sheet_overlays_0_collapse_CR" class="collapse"\
                      aria-labelledby="sheet_overlays_CR" data-parent="#heading_sheet_overlays_0">\
               <div class="card-body">\
                 <div class="scroll_card_sub">' +
  overlay_menu_subsection_content_CR +
  '</div>\
               </div>\
             </div>\
           </div>\
\
           </div>\
         </div>\
       </div>\
     </div>\
   </div>';

document.getElementById("map_master_menu").innerHTML += menu_card_sheet_overlay_content.replace(/_aaaa/g, "_bbbb");
