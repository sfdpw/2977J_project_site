function period_funding_details(bid_item_id, pp_no) {

    var return_array = []; // 0th element to to date QTY, 1st element is to date AMT 
    var NN = 0; // bid item index

    while (base_sov[NN]['Bid Item'] != bid_item_id) {
        NN++;
    }

    if (base_sov[NN]["Unit Price"] != "-")

    {

        return_array[5] = base_sov[NN]['Payment History']["SFPW-ESH"]["PP" + zeroPad(pp_no, 2)];
        return_array[4] = format_unit(return_array[5] / base_sov[NN]['Unit Price'], base_sov[NN]['Unit'], 2);

        return_array[9] = base_sov[NN]['Payment History']['SFPUC-SW']["PP" + zeroPad(pp_no, 2)];
        return_array[8] = format_unit(return_array[9] / base_sov[NN]['Unit Price'], base_sov[NN]['Unit'], 2);
        
        //return_array[13] = base_sov[NN]['Payment History']["SFPUC-AWSS"]["PP" + zeroPad(pp_no, 2)];
        //return_array[12] = format_unit(return_array[13] / base_sov[NN]['Unit Price'], base_sov[NN]['Unit'], 2);

        //return_array[17] = base_sov[NN]['Payment History']["SFPUC-WD"]["PP" + zeroPad(pp_no, 2)];
        //return_array[16] = format_unit(return_array[17] / base_sov[NN]['Unit Price'], base_sov[NN]['Unit'], 2);

        return_array[1] = (return_array[5] + return_array[9]); // + return_array[13] + return_array[17])
        return_array[0] = format_unit(return_array[1] / base_sov[NN]['Unit Price'], base_sov[NN]['Unit']);

        return_array[7] = 0;
        return_array[11] = 0;
        return_array[15] = 0;
        return_array[19] = 0;

        for (var pp = 1; pp < pp_no + 1; pp++)

        {

            return_array[7] += base_sov[NN]['Payment History']['SFPW-ESH']["PP" + zeroPad(pp, 2)];
            return_array[6] = format_unit(return_array[7] / base_sov[NN]['Unit Price'], base_sov[NN]['Unit'], 2);
            return_array[11] += base_sov[NN]['Payment History']['SFPUC-SW']["PP" + zeroPad(pp, 2)];
            return_array[10] = format_unit(return_array[11] / base_sov[NN]['Unit Price'], base_sov[NN]['Unit'], 2);
            //return_array[15] += base_sov[NN]['Payment History']["SFPUC-AWSS"]["PP" + zeroPad(pp, 2)];
            //return_array[14] = format_unit(return_array[15] / base_sov[NN]['Unit Price'], base_sov[NN]['Unit'], 2);
            //return_array[19] += base_sov[NN]['Payment History']["SFPUC-WD"]["PP" + zeroPad(pp, 2)];
            //return_array[18] = format_unit(return_array[19] / base_sov[NN]['Unit Price'], base_sov[NN]['Unit'], 2);

        }

        return_array[3] = return_array[7] + return_array[11] +
            return_array[15] + return_array[19];

        return_array[2] = format_unit(return_array[3] / base_sov[NN]['Unit Price'], base_sov[NN]['Unit']);


    } else {

        for (var ll = 0; ll < 19; ll++) {
            return_array[ll] = "-";
        }

    }

    return return_array


}




function generate_funding_table(pp_no) {


    var period_total_amount = 0;
    var to_date_total_amount = 0;
    var period_total_amount_sfpw_esh = 0;
    var to_date_total_amount_sfpw_esh = 0;
    var period_total_amount_puc_sw = 0;
    var to_date_total_amount_puc_sw = 0;
    //var period_total_amount_puc_awss = 0;
    //var to_date_total_amount_puc_awss = 0;
    //var period_total_amount_puc_wd = 0;
    //var to_date_total_amount_puc_wd = 0;

    var return_block =

        '<table class="funding_table">\
	<thead class="funding_thead">\
	  <tr class="funding_tr">\
	    <th class="funding_th"></th>\
	    <th class="funding_th" colspan="4">Totals</th>\
	    <th class="funding_th" colspan="4">SFPW - ESH</th>\
	    <th class="funding_th" colspan="4">SFPUC - SW</th>\
	  </tr>\
	</thead>\
	<tbody>\
	   <tr class="funding_tr">\
	    <th class="funding_tdh" style="background-color:white"></th>\
	    <th class="funding_tdh funding_pp_amt" colspan="2">Period</th>\
	    <th class="funding_tdh funding_td_amt" colspan="2">To Date</th>\
	    <th class="funding_tdh funding_pp_amt_SFPW-ESH" colspan="2">Period</th>\
	    <th class="funding_tdh funding_td_amt_SFPW-ESH" colspan="2">To Date</th>\
	    <th class="funding_tdh funding_pp_amt_SFPUC-SW" colspan="2">Period</th>\
	    <th class="funding_tdh funding_td_amt_SFPUC-SW" colspan="2">To Date</th>\
	  </tr>\
	  <tr class="funding_tr">\
	     <th class="funding_bid_item"></th>\
	     <th class="funding_tdhh funding_qty">QTY</th>\
	     <th class="funding_tdhh funding_amt funding_pp_amt">AMT</th>\
	     <th class="funding_tdhh funding_qty">QTY</th>\
	     <th class="funding_tdhh funding_amt funding_td_amt">AMT</th>\
	     <th class="funding_tdhh funding_qty">QTY</th>\
	     <th class="funding_tdhh funding_amt funding_pp_amt_SFPW-ESH">AMT</th>\
	     <th class="funding_tdhh funding_qty">QTY</th>\
	     <th class="funding_tdhh funding_amt funding_td_amt_SFPW-ESH">AMT</th>\
	     <th class="funding_tdhh funding_qty">QTY</th>\
	     <th class="funding_tdhh funding_amt funding_pp_amt_SFPUC-SW">AMT</th>\
	     <th class="funding_tdhh funding_qty">QTY</th>\
	     <th class="funding_tdhh funding_amt funding_td_amt_SFPUC-SW">AMT</th>\
	  </tr>';

    for (ii = 0; ii < base_sov.length; ii++)

    {


        if (Math.abs(parseFloat(period_funding_details(base_sov[ii]["Bid Item"], pp_no)[3])) > 0)

        {
         
         period_total_amount += period_funding_details(base_sov[ii]["Bid Item"], pp_no)[1];
         to_date_total_amount += period_funding_details(base_sov[ii]["Bid Item"], pp_no)[3];
         period_total_amount_sfpw_esh += period_funding_details(base_sov[ii]["Bid Item"], pp_no)[5];
         to_date_total_amount_sfpw_esh += period_funding_details(base_sov[ii]["Bid Item"], pp_no)[7];   
         period_total_amount_puc_sw += period_funding_details(base_sov[ii]["Bid Item"], pp_no)[9];  
         to_date_total_amount_puc_sw += period_funding_details(base_sov[ii]["Bid Item"], pp_no)[11];  
         //period_total_amount_puc_awss += period_funding_details(base_sov[ii]["Bid Item"], pp_no)[13];  
         //to_date_total_amount_puc_awss += period_funding_details(base_sov[ii]["Bid Item"], pp_no)[15];  
         //period_total_amount_puc_wd += period_funding_details(base_sov[ii]["Bid Item"], pp_no)[17];  
         //to_date_total_amount_puc_wd += period_funding_details(base_sov[ii]["Bid Item"], pp_no)[19];   
                    
        } 

        // if (Math.abs(parseFloat(to_date_details(base_sov[ii]["Bid Item"], pp_no)[1])) > 0)

        //   {to_date_total_amount += to_date_funding_details(base_sov[ii]["Bid Item"], pp_no)[1];} 


        return_block +=
            '<tr class="funding_tr">\
	     <td class="funding_td"\
	         data-toogle="tooltip"\
	         title="' + base_sov[ii]["Description"] +
            ' (' + base_sov[ii]["Unit"] + ')' +
            '">' + base_sov[ii]["Bid Item"] + '</td>\
	     <td class="funding_td">' +
            period_funding_details(base_sov[ii]["Bid Item"], pp_no)[0] + '</td>\
	     <td class="funding_td funding_pp_amt">' +
            amount_cell(period_funding_details(base_sov[ii]["Bid Item"], pp_no)[1]) + '</td>\
	     <td class="funding_td">' +
            period_funding_details(base_sov[ii]["Bid Item"], pp_no)[2] + '</td>\
	     <td class="funding_td funding_td_amt">' +
            amount_cell(period_funding_details(base_sov[ii]["Bid Item"], pp_no)[3]) + '</td>\
	     <td class="funding_td">' +
            period_funding_details(base_sov[ii]["Bid Item"], pp_no)[4] + '</td>\
	     <td class="funding_td funding_pp_amt_SFPW-ESH">' +
            amount_cell(period_funding_details(base_sov[ii]["Bid Item"], pp_no)[5]) + '</td>\
	     <td class="funding_td">' +
            period_funding_details(base_sov[ii]["Bid Item"], pp_no)[6] + '</td>\
	     <td class="funding_td funding_td_amt_SFPW-ESH">' +
            amount_cell(period_funding_details(base_sov[ii]["Bid Item"], pp_no)[7]) + '</td>\
	     <td class="funding_td">' +
            period_funding_details(base_sov[ii]["Bid Item"], pp_no)[8] + '</td>\
	     <td class="funding_td funding_pp_amt_SFPUC-SW">' +
            amount_cell(period_funding_details(base_sov[ii]["Bid Item"], pp_no)[9]) + '</td>\
	     <td class="funding_td">' +
            period_funding_details(base_sov[ii]["Bid Item"], pp_no)[10] + '</td>\
	     <td class="funding_td funding_td_amt_SFPUC-SW">' +
            amount_cell(period_funding_details(base_sov[ii]["Bid Item"], pp_no)[11]) + '</td>\
	  </tr>';

    }

    return_block +=

            '<tr class="funding_tr">\
               <td class="funding_td"><strong>Total:</strong></td>\
               <td class="funding_td"></td>\
               <td class="funding_td">' + amount_cell(period_total_amount) + '</td>\
               <td class="funding_td"></td>\
               <td class="funding_td">' + amount_cell(to_date_total_amount) + '</td>\
               <td class="funding_td"></td>\
               <td class="funding_td">' + amount_cell(period_total_amount_sfpw_esh) + '</td>\
               <td class="funding_td"></td>\
               <td class="funding_td">' + amount_cell(to_date_total_amount_sfpw_esh) + '</td>\
               <td class="funding_td"></td>\
               <td class="funding_td">' + amount_cell(period_total_amount_puc_sw) + '</td>\
               <td class="funding_td"></td>\
               <td class="funding_td">' + amount_cell(to_date_total_amount_puc_sw) + '</td>\
             </tr>\
           </tbody>\
         </table><br>';


    return return_block

}
