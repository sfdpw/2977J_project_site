/*################# SHEET ENTRY CREATOR ########################################################## */
function popup_sheet_entry_creator(popup_args = null)

{

    var output_string = "";

    if (popup_args == null) {
        output_string = 'none';
        
    } else {

        var overlay_checkbox = "";
        var file_name = "";
        var file_name_length = "";
        var file_desc = "";

        for (var ii = 0; ii < popup_args.length; ii += 3)

        {

            overlay_checkbox = popup_args[ii+1];

            if (popup_args[ii] != null) {
                file_name = popup_args[ii];
            }

            file_desc = popup_args[ii + 2];



            if (overlay_checkbox == null)

            {
                output_string = output_string.concat("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");

            } else

            {

                output_string = output_string.concat("<input type=\"checkbox\" id=\"",
                    overlay_checkbox,
                    "_aaaa\" onchange=\"handleChange(this, ",
                    overlay_checkbox, ");\">&nbsp;");

            }



            if (popup_args[ii] != null)

            {


                if (file_name.includes('SFPW_STD_'))

                {

                    var STD_file_name_formatted = file_name.replace(/_/g, ' ');
                    var comma_position = STD_file_name_formatted.length - 3

                    STD_file_name_formatted = [STD_file_name_formatted.slice(0, comma_position), ',',
                        STD_file_name_formatted.slice(comma_position)
                    ].join('');

                    output_string = output_string.concat("<a href=\".\\sheets\\", file_name, ".pdf\" target=\"_blank\">", STD_file_name_formatted, "<\/a>");

                } else

                {

                    output_string = output_string.concat("<a href=\".\\sheets\\2977J_dwg_", file_name, ".pdf\" target=\"_blank\">", (file_name.replace("-0", "-")).replace("_rev0", " Rev. "), "<\/a>");

                }

                if (popup_args[ii + 2] != null) {
                    output_string = output_string.concat(" - ", file_desc);
                }



            } else {
                if (popup_args[ii + 2] != null) {
                    output_string = output_string.concat(file_desc);
                };
            }

            if (ii != popup_args.length) {
                output_string = output_string.concat("<br>");
            }


        }


    }

    return output_string

}


/*################# SPEC ENTRY CREATOR ########################################################## */

function popup_spec_entry_creator(popup_args = null)

{

    var output_string = "";

    if (popup_args == null) {
        output_string = 'none';
    } else {

        var file_name = "";
        var file_name_length = "";
        var file_desc = "";


        for (var ii = 0; ii < popup_args.length; ii += 2)

        {

            file_name = popup_args[ii].replace(/ /g,'_');
            file_desc = popup_args[ii + 1];



            for (var jj = 0; jj < list_of_specs.length; jj++)

            {

             //alert(list_of_specs[jj].substring(6, 6 + file_name.length));

                if (file_name == list_of_specs[jj].substring(6, 6 + file_name.length))

                {
                
                    //alert(file_name);

                    file_name_length = file_name.length;
                    file_name = list_of_specs[jj].substring(6, list_of_specs[jj].length - 4);



                }


            }


            if (file_desc == null)

            {
                output_string = output_string.concat("<a href=\".\\specs\\2977J_", file_name, ".pdf\" target=\"_blank\">", file_name.substring(0, file_name_length), "<\/a> - ", file_name.substring(file_name_length+1, file_name.length).replace(/_/g,' '));
            } else

            {
                output_string = output_string.concat("<a href=\".\\specs\\2977J_", file_name, ".pdf\" target=\"_blank\">", file_name.substring(0, file_name_length).replace(/_/g,' '), "<\/a> - ", file_desc);
            }



            if (ii != popup_args.length) {
                output_string = output_string.concat("<br>");
            }


        }


    }

    return output_string

}

/* ################# AS BUILT ENTRY CREATOR ########################################################## */


function popup_AB_entry_creator(ab_arg)

{

    var arg_length = ab_arg.split("-")[0].length;
  
    var output_string = 'none';
    var jj = 0;

    for (var ii = 0; ii < json_ab_list[ab_arg.substring(0, arg_length)].length; ii += 1)

    {

        if (json_ab_list[ab_arg.substring(0, arg_length)][ii].includes(ab_arg))

        {

            output_string = output_string.replace('none', '');


            if (jj > 0) {
                output_string = output_string.concat("<br>");
            }

            output_string += "<a href=\".\\pp_as_builts\\".concat(json_ab_list[ab_arg.substring(0, arg_length)][ii],
                ".pdf\" target=\"_blank\">", (json_ab_list[ab_arg.substring(0, arg_length)][ii].replace('2977J_', '')).replace(/_/g, ' ').replace('-0', '-'), "<\/a>");

            jj += 1;


        }
    }

    return output_string

}

/* ################# TCP ENTRY CREATOR ########################################################## */


function popup_tcp_entry_creator(tcp_arg = null)

{

    var output_string = '';

    if (tcp_arg == null) {output_string = 'none';} 
    
     else

    {

        for (var ii = 0; ii < tcp_arg.length; ii += 1)

        {

            for (var jj = 0; jj < json_tcp_list.length; jj += 1)

            {

                if (json_tcp_list[jj].includes(tcp_arg[ii]))

                {

                    output_string += "<a href=\".\\tcps\\".concat(json_tcp_list[jj],
                        ".pdf\" target=\"_blank\">", tcp_arg[ii].replace('_', ' '), "<\/a>");

                }

            }

            if (ii != output_string.length) {
                output_string += '<br>'
            }

        }

    }

    return output_string

}
