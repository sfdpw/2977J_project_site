function qty_table_generator_laterals_lat_culv_TVI(qty_bid_item) {

    var NN = 0; // bid item index

    while (base_sov[NN]['Bid Item'] != qty_bid_item) {
        NN++;
    }

    var unit_price = base_sov[NN]['Unit Price'];

    var latest_pp = latest_pp_no(base_sov);

    var return_block = 
        
                 '<thead class="qty_thead">\
                    <tr class="qty_tr">\
                        <th class="qty_thead" rowspan="2" style="text-align:left; padding:5px">Address / Location</th>\
                        <th class="qty_thead" rowspan="2" style="text-align:left; padding:5px">Asset ID</th>\
                        <th class="qty_thead" rowspan="2" style="text-align:center; padding:5px">Submittal</th>\
                        <th class="qty_thead" rowspan="2" style="text-align:center; padding:5px">Video</th>\
                        <th class="qty_thead" colspan="2" style="text-align:center">Total</th>\
                        <th class="qty_thead" colspan="2" style="text-align:center">SFMTA</th>\
                        <th class="qty_thead" colspan="2" style="text-align:center">SFPUC - SW</th>\
                        <th class="qty_thead" colspan="2" style="text-align:center">SFPUC - AWSS</th>\
                        <th class="qty_thead" colspan="2" style="text-align:center">SFPUC - WD</th>\
                    </tr>\
                    <tr class="qty_tr">\
                        <td class="qty_tdh">QTY</td>\
                        <td class="qty_tdh">AMT</td>\
                        <td class="qty_tdh">QTY</td>\
                        <td class="qty_tdh">AMT</td>\
                        <td class="qty_tdh">QTY</td>\
                        <td class="qty_tdh">AMT</td>\
                        <td class="qty_tdh">QTY</td>\
                        <td class="qty_tdh">AMT</td>\
                        <td class="qty_tdh">QTY</td>\
                        <td class="qty_tdh">AMT</td>\
                    </tr>\
                  </thead>';


    var dd = 0;
    var pp = 0;
    var ff = 0;

    var is_qty_in_pp = false;
    var payment_block = '';

    var lateral_extracted_details = [];
    var lateral_coordinates = [];
    var lateral_properties = [];

    var culvert_extracted_details = [];
    var culvert_coordinates = [];
    var culvert_properties = [];


    var period_totals = [];
    var to_date_totals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (pp = 1; pp < latest_pp; pp++)

    {

        is_qty_in_pp = false;
        payment_block = '';
        period_totals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


        for (const lateral of json_200_laterals_2["features"])

        {

            lateral_properties = lateral["properties"]   
            lateral_coordinates = lateral["geometry"]["coordinates"];
            lateral_extracted_details = ['', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


            if (lateral_properties["PP_HISTORY"].hasOwnProperty(qty_bid_item))

            {


                if (lateral_properties["PP_HISTORY"][qty_bid_item].hasOwnProperty('PP' + zeroPad(pp, 2)))


                {

                    is_qty_in_pp = true;

                    lateral_extracted_details[0] = lateral_properties["ADDRESS"];

                        
                    lateral_extracted_details[1] =
                    "<a href=\"..\\index.html#20/" + 
                    lateral_coordinates[0][0][1] +"/" + 
                    lateral_coordinates[0][0][0] +                     
                    "\" target=\"_blank\">" +
                    lateral_properties["MAXIMO_ID"];
                    
                    
                    if (qty_bid_item == 'SW-32')
                    
                    {
                    
                    lateral_extracted_details[2] = [lateral_properties.SUBMITTALS.TVI_PRE_CON.Submittal, 
                                                    lateral_properties.SUBMITTALS.TVI_PRE_CON.Video];

                     } 
                     
                     else if (qty_bid_item == 'SW-41')
                     
                     {
                     
                                         
                      lateral_extracted_details[2] = [lateral_properties.SUBMITTALS.TVI_PST_CON.Submittal, 
                                                      lateral_properties.SUBMITTALS.TVI_PST_CON.Video];
                     
                     } 



                    for (ff = 0; ff < funds.length; ff++)

                    {


                        if (lateral_properties["PP_HISTORY"][qty_bid_item]
                            ['PP' + zeroPad(pp, 2)].hasOwnProperty(funds[ff]))

                        {

                            lateral_extracted_details[2 * ff + 5] = lateral_properties["PP_HISTORY"]
                                [qty_bid_item]['PP' + zeroPad(pp, 2)]
                                [funds[ff]]["QTY"];

                            lateral_extracted_details[2 * ff + 6] =
                                lateral_extracted_details[2 * ff + 5] * unit_price;


                            lateral_extracted_details[3] += lateral_extracted_details[2 * ff + 5];
                            lateral_extracted_details[4] += lateral_extracted_details[2 * ff + 6];


                            period_totals[0] += lateral_extracted_details[2 * ff + 5];
                            period_totals[1] += lateral_extracted_details[2 * ff + 6];
                            period_totals[2 * ff + 2] += lateral_extracted_details[2 * ff + 5];
                            period_totals[2 * ff + 3] += lateral_extracted_details[2 * ff + 6];

                        }

                    }

                    payment_block +=

                        '<tr class="qty_tr">\
                        <td class="qty_td" style="text-align:left; padding:5px">' +
                        lateral_extracted_details[0] + '</td>\
                        <td class="qty_td" style="text-align:left; padding:5px">' +
                        lateral_extracted_details[1] + '</td>\
                        <td class="qty_td" style="text-align:center; padding:5px">' +
                        lateral_extracted_details[2][0] + '</td>\
                        <td class="qty_td" style="text-align:center; padding:5px">' +
                        lateral_extracted_details[2][1] + '</td>\
                        <td class="qty_td" style="text-align:right; padding:5px">' +
                        qty_or_blank(lateral_extracted_details[3], base_sov[NN]['Unit']) + '</td>\
                        <td class="qty_td funding_td_amt" style="text-padding:5px">' +
                        amount_or_blank(lateral_extracted_details[4]) + '</td>';


                    for (ff = 0; ff < funds.length; ff++)

                    {

                        payment_block +=

                            '<td class="qty_td" style="text-align:right; padding:5px">' +
                            qty_or_blank(lateral_extracted_details[2 * ff + 5], base_sov[NN]['Unit']) + '</td>\
                                     <td class="qty_td funding_td_amt_' + funds[ff] + '" style="padding:5px">' +
                            amount_or_blank(lateral_extracted_details[2 * ff + 6]) + '</td>';


                    }


                }


                payment_block += '</tr>';

            }


        }


        for (const culvert of json_204_culverts_3["features"])

        {

            culvert_properties = culvert["properties"]   
            culvert_coordinates = culvert["geometry"]["coordinates"];
            culvert_extracted_details = ['', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


            if (culvert_properties["PP_HISTORY"].hasOwnProperty(qty_bid_item))

            {


                if (culvert_properties["PP_HISTORY"][qty_bid_item].hasOwnProperty('PP' + zeroPad(pp, 2)))


                {

                    is_qty_in_pp = true;

                    culvert_extracted_details[0] = culvert_properties.LOCATION;

                        
                    culvert_extracted_details[1] =
                    "<a href=\"..\\index.html#20/" + 
                    culvert_coordinates[0][0][1] +"/" + 
                    culvert_coordinates[0][0][0] +                     
                    "\" target=\"_blank\">" +
                    culvert_properties["PSR"];
                    
                    if (qty_bid_item == 'SW-34')
                    
                    {
                    
                     culvert_extracted_details[2] = [culvert_properties.SUBMITTALS.TVI_PRE_CON.Submittal, 
                                                    culvert_properties.SUBMITTALS.TVI_PRE_CON.Video];

                     }
                     
                    if (qty_bid_item == 'SW-41')
                     
                    {
                      
                     culvert_extracted_details[2] = [culvert_properties.SUBMITTALS.TVI_PST_CON.Submittal, 
                                                    culvert_properties.SUBMITTALS.TVI_PST_CON.Video];
                    
                      }



                    for (ff = 0; ff < funds.length; ff++)

                    {


                        if (culvert_properties["PP_HISTORY"][qty_bid_item]
                            ['PP' + zeroPad(pp, 2)].hasOwnProperty(funds[ff]))

                        {

                            culvert_extracted_details[2 * ff + 5] = culvert_properties["PP_HISTORY"]
                                [qty_bid_item]['PP' + zeroPad(pp, 2)]
                                [funds[ff]]["QTY"];

                            culvert_extracted_details[2 * ff + 6] =
                                culvert_extracted_details[2 * ff + 5] * unit_price;


                            culvert_extracted_details[3] += culvert_extracted_details[2 * ff + 5];
                            culvert_extracted_details[4] += culvert_extracted_details[2 * ff + 6];


                            period_totals[0] += culvert_extracted_details[2 * ff + 5];
                            period_totals[1] += culvert_extracted_details[2 * ff + 6];
                            period_totals[2 * ff + 2] += culvert_extracted_details[2 * ff + 5];
                            period_totals[2 * ff + 3] += culvert_extracted_details[2 * ff + 6];

                        }

                    }

                    payment_block +=

                        '<tr class="qty_tr">\
                        <td class="qty_td" style="text-align:left; padding:5px;">' +
                        culvert_extracted_details[0] + '</td>\
                        <td class="qty_td" style="text-align:left; padding:5px; width:7%">' +
                        culvert_extracted_details[1] + '</td>\
                        <td class="qty_td" style="text-align:center; padding:5px">' +
                        culvert_extracted_details[2][0] + '</td>\
                        <td class="qty_td" style="text-align:center; padding:5px">' +
                        culvert_extracted_details[2][1] + '</td>\
                        <td class="qty_td" style="text-align:right; padding:5px">' +
                        qty_or_blank(culvert_extracted_details[3], base_sov[NN]['Unit']) + '</td>\
                        <td class="qty_td funding_td_amt" style="text-padding:5px">' +
                        amount_or_blank(culvert_extracted_details[4]) + '</td>';


                    for (ff = 0; ff < funds.length; ff++)

                    {

                        payment_block +=

                            '<td class="qty_td" style="text-align:right; padding:5px">' +
                            qty_or_blank(culvert_extracted_details[2 * ff + 5], base_sov[NN]['Unit']) + '</td>\
                                     <td class="qty_td funding_td_amt_' + funds[ff] + '" style="padding:5px">' +
                            amount_or_blank(culvert_extracted_details[2 * ff + 6]) + '</td>';


                    }


                }


                payment_block += '</tr>';

            }


        }



        if (is_qty_in_pp)

        {




            return_block += '<tr class="qty_tr">\
                                          <td style="padding:5px"><strong>Payment Period ' + pp + '</strong></td>\
                                        </tr>' + payment_block +
                '<tr>\
                                           <td>\
                                           </td>\
                                           <td>\
                                           </td>\
                                           <td>\
                                           </td>\
                                           <td style="padding:5px; text-align:right">\
                                             <strong>PP ' + pp + ' Totals:</strong>\
                                           </td>\
                                           <td class="qty_td"\
                                               style="padding:5px; text-align:right; width:5vw">\
                                             <strong>' +
                qty_or_blank(period_totals[0], base_sov[NN]['Unit']) +
                '</strong>\
                                           </td>\
                                           <td class="qty_td funding_td_amt"\
                                                style="padding:5px; width:8vw;">\
                                             <strong>' +
                amount_or_blank(period_totals[1]) +
                '</strong>\
                                           </td>';


            for (ff = 0; ff < funds.length; ff++)

            {

                return_block +=

                    '<td class="qty_td" style="text-align:right; width:5vw; padding:5px"><strong>' +
                    qty_or_blank(period_totals[2 * ff + 2], base_sov[NN]['Unit']) + '</strong></td>\
                              <td class="qty_td funding_td_amt_' + funds[ff] +
                    '" style="padding:5px; width:8vw;"><strong>' +
                    amount_or_blank(period_totals[2 * ff + 3]) + '</strong></td>';

            }

            return_block += '</tr><tr><td  colspan="14">&nbsp;</td></tr>';



        }

          
          for (dd = 0; dd < period_totals.length; dd++) 
   
           {
   
             to_date_totals[dd] +=  period_totals[dd];
    
            }
 
 
    }
    
    return_block +=
    
        '<tr class="qty_tr">\
          <td colspan="1r">&nbsp;</td>\
         </tr>\
         <tr class="qty_tr">\
          <td></td>\
          <td></td>\
          <td></td>\
          <td style="padding:5px; text-align:right"><strong>To Date Totals:</strong></td>\
          <td class="qty_td" style="padding:5px; text-align:right">\
            <strong>' + qty_or_blank(to_date_totals[0], base_sov[NN]['Unit']) + '</strong>\
          </td>\
          <td class="qty_td funding_td_amt" style="padding:5px; text-align:right">\
            <strong>' + amount_or_blank(to_date_totals[1]) + '</strong>\
          </td>\
          <td class="qty_td" style="padding:5px; text-align:right">\
            <strong>' + qty_or_blank(to_date_totals[2], base_sov[NN]['Unit']) + '</strong>\
          </td>\
          <td class="qty_td funding_td_amt_SFMTA" style="padding:5px; text-align:right">\
            <strong>' + amount_or_blank(to_date_totals[3]) + '</strong>\
          </td>\
          <td class="qty_td" style="padding:5px; text-align:right">\
            <strong>' + qty_or_blank(to_date_totals[4], base_sov[NN]['Unit']) + '</strong>\
          </td>\
          <td class="qty_td funding_td_amt_SFPUC-SW" style="padding:5px; text-align:right">\
            <strong>' + amount_or_blank(to_date_totals[5]) + '</strong>\
          </td>\
          <td class="qty_td" style="padding:5px; text-align:right">\
            <strong>' + qty_or_blank(to_date_totals[6], base_sov[NN]['Unit']) + '</strong>\
          </td>\
          <td class="qty_td funding_td_amt_SFPUC-AWSS" style="padding:5px; text-align:right">\
            <strong>' + amount_or_blank(to_date_totals[7]) + '</strong>\
          </td>\
          <td class="qty_td" style="padding:5px; text-align:right">\
            <strong>' + qty_or_blank(to_date_totals[8], base_sov[NN]['Unit']) + '</strong>\
          </td>\
          <td class="qty_td funding_td_amt_SFPUC-WD" style="padding:5px; text-align:right">\
            <strong>' + amount_or_blank(to_date_totals[9]) + '</strong>\
          </td>\
         </tr><br>';    


    return return_block

}
