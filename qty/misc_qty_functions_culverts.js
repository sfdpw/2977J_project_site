function qty_table_generator_sw_culverts(qty_bid_item) {

    var NN = 0; // bid item index

    while (base_sov[NN]['Bid Item'] != qty_bid_item.replace('-0','-')) {
        NN++;
    }

    var unit_price = base_sov[NN]['Unit Price'];

    var latest_pp = latest_pp_no(base_sov);

    var return_block = 
        
                 '<thead class="qty_thead">\
                    <tr class="qty_tr">\
                        <th class="qty_thead" rowspan="2" style="text-align:left; padding:5px;">Location</th>\
                        <th class="qty_thead" rowspan="2" style="text-align:left; padding:5px; width: 13vw;">Scope Details</th>\
                        <th class="qty_thead" rowspan="2" style="text-align:center; padding:5px; width: 13vw;">Asset ID</th>\
                        <th class="qty_thead" colspan="2" style="text-align:center">Total</th>\
                        <th class="qty_thead" colspan="2" style="text-align:center">SFPW - ESH</th>\
                        <th class="qty_thead" colspan="2" style="text-align:center">SFPUC - SW</th>\
                    </tr>\
                    <tr class="qty_tr">\
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
    var sw_culvert_extracted_details = [];
    var sw_culvert_properties = [];
    var sw_culvert_coordinates = [];


    var period_totals = [];
    var to_date_totals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (pp = 1; pp < latest_pp; pp++)

    {

        is_qty_in_pp = false;
        payment_block = '';
        period_totals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


        for (const sw_culvert of json_2977J_102_SW_culverts_21["features"])

        {

            sw_culvert_properties = sw_culvert["properties"];
            sw_culvert_coordinates = sw_culvert["geometry"]["coordinates"];
            sw_culvert_extracted_details = ['', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


            if (sw_culvert_properties["PP_HISTORY"].hasOwnProperty(qty_bid_item))

            {


                if (sw_culvert_properties["PP_HISTORY"][qty_bid_item].hasOwnProperty('PP' + zeroPad(pp, 2)))


                {

                    is_qty_in_pp = true;

                    sw_culvert_extracted_details[0] =
                    "<a href=\"..\\index.html#20/" + 
                    sw_culvert_coordinates[0][0][1] +"/" + 
                    sw_culvert_coordinates[0][0][0] +                     
                    "\" target=\"_blank\">" +
                    sw_culvert_properties['MXASSETNUM'];
                    sw_culvert_extracted_details[1] = sw_culvert_properties['LOCATION'];
                    sw_culvert_extracted_details[2] = sw_culvert_properties['SCOPE'];

                    for (ff = 0; ff < funds.length; ff++)

                    {


                        if (sw_culvert_properties["PP_HISTORY"][qty_bid_item]
                            ['PP' + zeroPad(pp, 2)].hasOwnProperty(funds[ff]))

                        {

                            sw_culvert_extracted_details[2 * ff + 5] = sw_culvert_properties["PP_HISTORY"]
                                [qty_bid_item]['PP' + zeroPad(pp, 2)]
                                [funds[ff]]["QTY"];

                            sw_culvert_extracted_details[2 * ff + 6] =
                                sw_culvert_extracted_details[2 * ff + 5] * unit_price;


                            sw_culvert_extracted_details[3] += sw_culvert_extracted_details[2 * ff + 5];
                            sw_culvert_extracted_details[4] += sw_culvert_extracted_details[2 * ff + 6];


                            period_totals[0] += sw_culvert_extracted_details[2 * ff + 5];
                            period_totals[1] += sw_culvert_extracted_details[2 * ff + 6];
                            period_totals[2 * ff + 2] += sw_culvert_extracted_details[2 * ff + 5];
                            period_totals[2 * ff + 3] += sw_culvert_extracted_details[2 * ff + 6];

                        }

                    }

                    payment_block +=

                        '<tr class="qty_tr">\
                        <td class="qty_td" style="text-align:left; padding:5px">' +
                        sw_culvert_extracted_details[1] + '</td>\
                        <td class="qty_td" style="text-align:left; padding:5px">' +
                        sw_culvert_extracted_details[2] + '</td>\
                        <td class="qty_td" style="text-align:center; padding:5px">' +
                        sw_culvert_extracted_details[0] + '</td>\
                        <td class="qty_td" style="text-align:right; padding:5px">' +
                        qty_or_blank(sw_culvert_extracted_details[3], base_sov[NN]['Unit']) + '</td>\
                        <td class="qty_td funding_td_amt" style="text-padding:5px">' +
                        amount_or_blank(sw_culvert_extracted_details[4]) + '</td>';


                    for (ff = 0; ff < funds.length; ff++)

                    {

                        payment_block +=

                            '<td class="qty_td" style="text-align:right; padding:5px">' +
                            qty_or_blank(sw_culvert_extracted_details[2 * ff + 5], base_sov[NN]['Unit']) + '</td>\
                                     <td class="qty_td funding_td_amt_' + funds[ff] + '" style="padding:5px">' +
                            amount_or_blank(sw_culvert_extracted_details[2 * ff + 6]) + '</td>';


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
                                           <td colspan="2">&nbsp;</td>\
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

            return_block += '</tr><tr><td  colspan="9">&nbsp;</td></tr>';
            
        }

          
          for (dd = 0; dd < period_totals.length; dd++) 
   
           {
   
             to_date_totals[dd] +=  period_totals[dd];
    
            }
 
    }
    
    return_block +=
    
        '<tr class="qty_tr">\
          <td colspan="9">&nbsp;</td>\
         </tr>\
         <tr class="qty_tr">\
          <td colspan="2">&nbsp;</td>\
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
          <td class="qty_td funding_td_amt_SFPW-ESH" style="padding:5px; text-align:right">\
            <strong>' + amount_or_blank(to_date_totals[3]) + '</strong>\
          </td>\
          <td class="qty_td" style="padding:5px; text-align:right">\
            <strong>' + qty_or_blank(to_date_totals[4], base_sov[NN]['Unit']) + '</strong>\
          </td>\
          <td class="qty_td funding_td_amt_SFPUC-SW" style="padding:5px; text-align:right">\
            <strong>' + amount_or_blank(to_date_totals[5]) + '</strong>\
          </td>\
         </tr><br>';    


    return return_block

}
