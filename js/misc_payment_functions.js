var funds = ['SFPW-ESH', 'SFPUC-SW'];


function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}


function amount_cell(input_num) {

    var return_block = '';


    if (input_num == '-' || isNaN(input_num)) {

        return_block = '-';

    } else {

        return_block =

            '<div style="text-align:left;  display:table-cell; padding:5px; width:5%;  flush:left">$</div>\
             <div style="text-align:right; display:table-cell; padding:5px; width:90%; flush:right">' +
            (input_num).toLocaleString('en', {
                style: 'currency',
                currency: 'USD'
            }).replace('$', '') + '</div>';

    }

    return return_block

}


function format_unit(input_num, unit, prec = 0) {


    var return_string = '';

    if (input_num != 0) {


        if (['LS', 'AL'].includes(unit)) {

            return_string = (input_num * 100).toFixed(2) + '%';

        } else if (unit == "EA") {
          
          
            if (Math.abs(input_num) % 1 < 0.001)
            
              {

            return_string = input_num.toFixed(prec);

               }
               
               else
               
               {
               
            return_string = input_num.toFixed(2);              

                   }

        } else if (['LF', 'SF', 'CY', 'TON', 'US SHORT TON', 'LBS'].includes(unit)) {

            return_string = input_num.toFixed(2);

        }

    }


    return return_string

}


function amount_or_blank(input_num) {

    var return_block = '';

    if (Math.abs(input_num) > 0)

    {

        return_block = amount_cell(input_num);

    }

    return return_block

}

function qty_or_blank(input_num, unit) {

    var return_block = '';

    if (Math.abs(input_num) > 0)

    {

        if (unit == 'LF' || unit == 'SF' || unit == 'CY' || unit == 'TON')

        {

            return_block = input_num.toFixed(2);

        } else if (unit == 'EA')

        {

          if (Math.abs(input_num) % 1 == 0)

          { return_block = input_num; }
          
          else
          
          { return_block = input_num.toFixed(2); }


        } else if (unit == 'LS' || unit == 'AL')

        {


            return_block = (100*input_num).toFixed(2) + '%';


        }


    }

    return return_block

}

function fixed_qty_or_blank(input_num, unit) {

    var return_block = '';

    if (Math.abs(input_num) > 0)

    {

     return_block = input_num.toFixed(unit)

    }

    return return_block

}

function latest_pp_no(sov_base)


{

    var pp_no = 0;

    for (const bid_item of sov_base)

    {


        for (const fund in bid_item['Payment History'])

        {


            for (const pp_instance in bid_item['Payment History'][fund])

            {

                if (Math.abs(bid_item['Payment History'][fund][pp_instance]) > 0 &&
                    parseInt(pp_instance.replace("PP", "")) > pp_no)

                {

                    pp_no = parseInt(pp_instance.replace("PP", ""));


                }


            }

        }


    }

    return pp_no + 1

}



function return_pp_history_from_spatial_file(work_type, bid_item_id, unit_price)

{


    var return_object = {};
    var pp_no_ceiling=  15;
    
    
    
    for (fund of funds)
    
    {
    
     return_object[fund] = {}; 
    
     for (var pp = 1; pp < pp_no_ceiling; pp ++)
     
     {
    
      return_object[fund]['PP' + zeroPad(pp, 2)] = 0;
    
      }
    
    }
    

    for (structure_section of work_type)

    {

    for (work_instance of window[structure_section].features)

    {

        if (work_instance.properties.PP_HISTORY.hasOwnProperty(bid_item_id))


        {


            for (payment_no in work_instance.properties.PP_HISTORY[bid_item_id])

            {

                for (fund in work_instance.properties.PP_HISTORY[bid_item_id][payment_no])


                {

                 return_object[fund][payment_no] += 

                   work_instance.properties.PP_HISTORY[bid_item_id][payment_no][fund].QTY*unit_price;
                   
                }


            }


        }

      }

    }

    //return_block = window[work_type];

    return return_object

}
