function top_nav(nav_element, pp_no = null, bid_item_id = null)

{

    var return_block = '';
    var nav_path = '../';

    if (bid_item_id != null)

    {

        var NN = 0; // bid item index

        while (base_sov[NN]['Bid Item'] != bid_item_id) {
            NN++;
        }

    }

    if (nav_element == 'map')

    {

        nav_path = '';

    }

    return_block =

    '<nav class="navbar navbar-expand-lg bg-nav navbar-dark bg-primary">\
       <button class="navbar-toggler"\
                type="button"\
                data-bs-toggle="collapse"\
                data-bs-target="#main_nav"\
                aria-expanded="false"\
                aria-label="Toggle navigation">\
         <span class="navbar-toggler-icon"></span>\
       </button>\
       <div class="collapse navbar-collapse" id="main_nav" >\
         <ul class="navbar-nav">\
	   <li class="nav-item active">\
             <a class="nav-link" href="' + nav_path + 'index.html">Map</a>\
           </li>\
	   <li class="nav-item dropdown">\
	     <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Payments</a>\
	     <ul class="dropdown-menu">\
	       <li>\
	         <a class="dropdown-item" href="#">SOV &raquo;</a>\
	         <ul class="submenu dropdown-menu">\
	           <li>\
		     <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP01.html">PP01</a>\
	           </li>\
	         </ul>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="#">Funding Breakdown &raquo;</a>\
	         <ul class="submenu dropdown-menu">\
	           <li>\
	             <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP01.html">PP01</a>\
	           </li>\
	         </ul>\
	       </li>\
	     </ul>\
	   </li>\
	   <li class="nav-item active">\
	     <a class="nav-link" href="' + nav_path + 'specs/specs.html">Specs</a>\
           </li>\
         </ul>\
       </div>';

    if (nav_element == 'sov')


    {

        return_block += '<div style="float:right; padding-right:10px; color:white; font-weight:bold">Schedule of Values (SOV) for PP ' + pp_no + '</div>';

    } else if (nav_element == 'funding')

    {

        return_block += '<div style="float:right; padding-right:10px; color:white; font-weight:bold">Funding Breakdown for PP ' + pp_no + '</div>';

    } else if (nav_element == 'qty')

    {

        return_block +=

            '<div style="float:right;\
                    padding-right:10px;\
                    color:white;\
                    font-weight:bold"\
                    data-toogle="tooltip"\
	            title="' + base_sov[NN]['Description'] +
            ' (' + base_sov[NN]['Unit'] + ')"\> Quantity Details for ' + bid_item_id + '</div>';

    }

    return_block += '</nav>';

    return return_block

}
