function prj_dwg_tble(dwg_no, layer_name = '', desc = '')

{

    var return_block = '<table><tr><td>';

    if (layer_name != '')
    
    {

     return_block += '<input type=\"checkbox\" id=\"' +
        layer_name +
        '\" onchange=\"handleChange(this, ' +
        layer_name +
        ');\">';

    }

    return_block += '</td><td>';

    return_block += "<a href=\".\\sheets\\2977J_dwg_" + dwg_no + ".pdf\" target=\"_blank\">" + dwg_no.replace('-0', '-') + "<\/a>";

    return_block += '</td><td>';

    return_block += desc;

    return_block += '</td></tr></table>';

    return return_block

}
