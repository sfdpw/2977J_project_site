function return_plan_boundary_popup(feature) {

    var popupContent = '<div class="accordion" id="PLAN_popup">\
\
                                <div class="card">\
                                <div class="card-header p-0" id="PLAN_sheet">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" onclick="sweep_check_clone()"\
                                        data-toggle="collapse" data-target="#PLAN_collapse_01"\
                                        aria-expanded="false" aria-controls="PLAN_collapse_01">\
                                  <strong>Sheet(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="PLAN_collapse_01" class="collapse" aria-labelledby="PLAN_sheet" data-parent="#PLAN_popup">\
                                <div class="card-body">' + (feature.properties['SHEET'] !== null ? Autolinker.link(feature.properties['SHEET'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="PLAN_AB">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#PLAN_collapse_02" aria-expanded="false" aria-controls="PLAN_collapse_02"><strong>As Built(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="PLAN_collapse_02" class="collapse" aria-labelledby="PLAN_AB" data-parent="#PLAN_popup">\
                                <div class="card-body">' + (feature.properties['AS_BUILT'] !== null ? Autolinker.link(feature.properties['AS_BUILT'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="PLAN_TCP">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#PLAN_collapse_03" aria-expanded="false" aria-controls="PLAN_collapse_03"><strong>Traffic Control Plan(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="PLAN_collapse_03" class="collapse" aria-labelledby="PLAN_TCP" data-parent="#PLAN_popup">\
                                <div class="card-body">' + (feature.properties['TCP'] !== null ? Autolinker.link(feature.properties['TCP'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="PLAN_relevant">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#PLAN_collapse_04" aria-expanded="false" aria-controls="PLAN_collapse_04"><strong>Relevant Sheet(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="PLAN_collapse_04" class="collapse" aria-labelledby="PLAN_relevant" data-parent="#PLAN_popup">\
                                <div class="card-body">' + (feature.properties['RLVNT'] !== null ? Autolinker.link(feature.properties['RLVNT'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="PLAN_spec">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#PLAN_collapse_05" aria-expanded="false" aria-controls="PLAN_collapse_05"><strong>Relevant Specification(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="PLAN_collapse_05" class="collapse" aria-labelledby="PLAN_spec" data-parent="#PLAN_popup">\
                                <div class="card-body">' + (feature.properties['SPEC'] !== null ? Autolinker.link(feature.properties['SPEC'].toLocaleString()) : '') + '</div>\
                                </div>\
                                </div>\
\
                                </div>';

    return popupContent

}







function pop_up_creator_for_domain(feature, layer)

{

    layer.on({
        mouseout: function(e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,

    });


    if (layer.feature.L_index_stored_in_each_feature >= SW_main_index_limits[0] &&
        layer.feature.L_index_stored_in_each_feature <= SW_main_index_limits[1])

    {

        var popupContent =
            '<strong>Asset ID</strong><br>' +
            (feature.properties['MXASSETNUM'] !== null ? Autolinker.link(feature.properties['MXASSETNUM'].toLocaleString()) : '') +
            '<br><br>\
<strong>Diameter</strong><br>' +
            (feature.properties['PIPE_DIA'] !== null ? Autolinker.link(feature.properties['PIPE_DIA'].toLocaleString()) : '') +
            '<br><br>\
<strong>Material</strong><br>' +
            (feature.properties['PIPE_MATL'] !== null ? Autolinker.link(feature.properties['PIPE_MATL'].toLocaleString()) : '') +
            '<br><br>\
<strong>Scope</strong><br>' +
            (feature.properties['SCOPE'] !== null ? Autolinker.link(feature.properties['SCOPE'].toLocaleString()) : '') +
            '<br><br>\
<strong>Post-Con Submittal - Video - Response</strong><br>' +
            feature.properties.SUBMITTALS.TVI_PST_CON.SUBMITTAL + ' - ' +
            feature.properties.SUBMITTALS.TVI_PST_CON.VIDEO +
            '<br><br>\
<strong>Status</strong><br>' +
            (feature.properties['STATUS'] !== null ? Autolinker.link(feature.properties['STATUS'].toLocaleString()) : '') +
            '<br><br>\
<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);

    } else if (layer.feature.L_index_stored_in_each_feature >= SW_MH_index_limits[0] &&
        layer.feature.L_index_stored_in_each_feature <= SW_MH_index_limits[1])

    {



        var popupContent =
            '<strong>Asset ID</strong><br>' +
            (feature.properties['MAXIMOID'] !== null ? Autolinker.link(feature.properties['MAXIMOID'].toLocaleString()) : '') + '<br><br>\
<strong>Node ID</strong><br>' +
            (feature.properties['NODE_ID'] !== null ? Autolinker.link(feature.properties['NODE_ID'].toLocaleString()) : '') +
            '<br><br>\
<strong>Scope</strong><br>' +
            (feature.properties['SCOPE'] !== null ? Autolinker.link(feature.properties['SCOPE'].toLocaleString()) : '') +
            '<br><br>\
<strong>Submittal(s)</strong><br>' +
            (feature.properties['SUBMITTALS'] !== null ? Autolinker.link(feature.properties['SUBMITTALS'].toLocaleString()) : '') +
            '<br><br>\
<strong>Status</strong><br>' +
            (feature.properties['STATUS'] !== null ? Autolinker.link(feature.properties['STATUS'].toLocaleString()) : '') +
            '<br><br>\
<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);

    } else if (layer.feature.L_index_stored_in_each_feature >= SW_clvt_index_limits[0] &&
        layer.feature.L_index_stored_in_each_feature <= SW_clvt_index_limits[1])

    {

        var popupContent =
            '<strong>Asset ID</strong><br>' +
            (feature.properties['MXASSETNUM'] !== null ? Autolinker.link(feature.properties['MXASSETNUM'].toLocaleString()) : '') +
            '<br><br>\
<strong>Pipe Diameter</strong><br>' +
            (feature.properties['PIPE_DIA'] !== null ? Autolinker.link(feature.properties['PIPE_DIA'].toLocaleString()) : '') +
            '<br><br>\
<strong>Pipe Material</strong><br>' +
            (feature.properties['PIPE_MATL'] !== null ? Autolinker.link(feature.properties['PIPE_MATL'].toLocaleString()) : '') +
            '<br><br>\
<strong>Scope</strong><br>' +
            (feature.properties['SCOPE'] !== null ? Autolinker.link(feature.properties['SCOPE'].toLocaleString()) : '') +
            '<br><br>\
<strong>Pre-Con Submittal - Video - Response</strong><br>' +
            feature.properties.SUBMITTALS.TVI_PRE_CON.SUBMITTAL + ' - ' +
            feature.properties.SUBMITTALS.TVI_PRE_CON.VIDEO + ' - ' +
            feature.properties.SUBMITTALS.TVI_PRE_CON.RESPONSE +
            '<br><br>\
<strong>Post-Con Submittal - Video - Response</strong><br>' +
            feature.properties.SUBMITTALS.TVI_PST_CON.SUBMITTAL + ' - ' +
            feature.properties.SUBMITTALS.TVI_PST_CON.VIDEO + ' - ' +
            feature.properties.SUBMITTALS.TVI_PST_CON.RESPONSE +
            '<br><br>\
<strong>Status</strong><br>' +
            (feature.properties['STATUS'] !== null ? Autolinker.link(feature.properties['STATUS'].toLocaleString()) : '') +
            '<br><br>\
<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);


    } else if (layer.feature.L_index_stored_in_each_feature >= SW_drain_index_limits[0] &&
        layer.feature.L_index_stored_in_each_feature <= SW_drain_index_limits[1])

    {

        var popupContent =
            '<strong>Asset ID</strong><br>' +
            (feature.properties['MAXIMOID'] !== null ? Autolinker.link(feature.properties['MAXIMOID'].toLocaleString()) : '') + '<br><br>\
<strong>Node ID</strong><br>' +
            (feature.properties['NODE_ID'] !== null ? Autolinker.link(feature.properties['NODE_ID'].toLocaleString()) : '') +
            '<br><br>\
<strong>Scope</strong><br>' +
            (feature.properties['SCOPE'] !== null ? Autolinker.link(feature.properties['SCOPE'].toLocaleString()) : '') +
            '<br><br>\
<strong>Submittal(s)</strong><br>' +
            (feature.properties['SUBMITTALS'] !== null ? Autolinker.link(feature.properties['SUBMITTALS'].toLocaleString()) : '') +
            '<br><br>\
<strong>Status</strong><br>' +
            (feature.properties['STATUS'] !== null ? Autolinker.link(feature.properties['STATUS'].toLocaleString()) : '') +
            '<br><br>\
<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);



    } else if (layer.feature.L_index_stored_in_each_feature >= SW_lateral_index_limits[0] &&
        layer.feature.L_index_stored_in_each_feature <= SW_lateral_index_limits[1])

    {

        var popupContent =
            '<strong>Asset ID</strong><br>' +
            (feature.properties['MXASSETNUM'] !== null ? Autolinker.link(feature.properties['MXASSETNUM'].toLocaleString()) : '') +
            '<br><br>\
<strong>Address</strong><br>' +
            (feature.properties['ADDRESS'] !== null ? Autolinker.link(feature.properties['ADDRESS'].toLocaleString()) : '') +
            '<br><br>\
<strong>BLKLOT</strong><br>' +
            (feature.properties['BLKLOT'] !== null ? Autolinker.link(feature.properties['BLKLOT'].toLocaleString()) : '') +
            '<br><br>\
<strong>Scope</strong><br>' +
            (feature.properties['SCOPE'] !== null ? Autolinker.link(feature.properties['SCOPE'].toLocaleString()) : '') +
            '<br><br>\
<strong>Pre-Con Submittal - Video - Response</strong><br>' +
            feature.properties.SUBMITTALS.TVI_PRE_CON.SUBMITTAL + ' - ' +
            feature.properties.SUBMITTALS.TVI_PRE_CON.VIDEO + ' - ' +
            feature.properties.SUBMITTALS.TVI_PRE_CON.RESPONSE + 
            '<br><br>\
<strong>Post-Con Submittal - Video - Response</strong><br>' +
            feature.properties.SUBMITTALS.TVI_PST_CON.SUBMITTAL + ' - ' +
            feature.properties.SUBMITTALS.TVI_PST_CON.VIDEO + ' - ' +
            feature.properties.SUBMITTALS.TVI_PST_CON.RESPONSE +             
            '<br><br>\
<strong>Status</strong><br>' +
            (feature.properties['STATUS'] !== null ? Autolinker.link(feature.properties['STATUS'].toLocaleString()) : '') +
            '<br><br>\
<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);

    } else if (layer.feature.L_index_stored_in_each_feature >= R_fltwrk_index_limits[0] &&
        layer.feature.L_index_stored_in_each_feature <= R_fltwrk_index_limits[1])

    {

        var bid_item_code = (feature.properties.INST_ID.substring(0, 4).replace('R_0', 'R_')).replace('_', '-');

        var areacalcs = '';

        var popupContent =
            '<strong>Instance Id</strong><br>' +
            feature.properties.INST_ID.replace(/_/g, "-") + '<br><br>' +
            '<strong>Description</strong><br>' +
            unpack_flatwork_feature_description(bid_item_code) +
            '<br><br>'; 
            
          if (bid_item_code == 'R-15')
          
            {
            
             popupContent += '<strong>Utility</strong><br>'+
                              feature.properties.UTILITY + '<br><br>';
             
             }
            
            
        popupContent +=
            '<strong>Status</strong><br>' +
            feature.properties.STATUS + '<br><br>' +
            '<strong>Relevant Documents</strong><br>' +
            feature.properties.RLVNT +
            '<br><br>' + areacalcs +
            '<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);

    }  

    layer.bindPopup(popupContent, {
        maxHeight: 400
    });

}





function pp_history_details(ffeature)

{

    var pp_history_details = "";

    if (Object.keys(ffeature.properties['PP_HISTORY']).length > 0)

    {

        pp_history_details += '<table>';

        for (const bid_item in ffeature.properties['PP_HISTORY'])

        {


            if (Object.keys(ffeature.properties['PP_HISTORY'][bid_item]).length != 0)

            {

                for (const payment_no in ffeature.properties['PP_HISTORY'][bid_item])

                {

                    for (const fund in ffeature.properties['PP_HISTORY'][bid_item][payment_no])


                    {

                        pp_history_details +=
                            pp_history_row(bid_item,
                                ffeature.properties['PP_HISTORY'][bid_item][payment_no][fund]['QTY'],
                                ffeature.properties['PP_HISTORY'][bid_item][payment_no][fund]['UNIT'],
                                payment_no,
                                fund);

                    }

                }

            }

        }

        pp_history_details += '</table>';

    } else {

        pp_history_details += 'none';

    }

    return pp_history_details;

}


function pp_history_row(bid_item, QTY, UNIT, payment_no, FUND)

{

    var row_string = '';
    var neg_space = '';

    if (QTY > 0) {
        neg_space = '&nbsp;';
    }


    if (QTY != 0)

    {

        //if (bid_item.includes('CR-'))

        //{

        //    row_string = '<tr><td style=\"text-align: left\">' +
        //        format_unit(QTY, UNIT) + '</td><td>' +
        //        UNIT + ' in</td><td>' +
        //        payment_no.substring(0, 4) + ' from</td><td>' +
        //        FUND + '</td></tr>';


        //} else

        //{

            var NN = 0; // bid item index

            while (base_sov[NN]["Bid Item"].replace('-0', '-') != bid_item.replace('-0', '-')) {

                NN++;
            }

            row_string = '<tr><td data-toogle="tooltip" title="' +
                base_sov[NN]['Bid Item'] + ": " +
                base_sov[NN]['Description'] + " (" + base_sov[NN]['Unit'] + ')">' +
                bid_item + ':</td><td style=\"text-align: left\">' + neg_space +
                format_unit(QTY, UNIT) + '</td><td>' +
                UNIT + ' in</td><td>' +
                payment_no.substring(0, 4) + ' from</td><td>' +
                FUND + '</td></tr>';

        //}

    } else {


      row_string = 'Completion shown for clarity;<br>no additional QTY paid.';


    }

    return row_string

}
