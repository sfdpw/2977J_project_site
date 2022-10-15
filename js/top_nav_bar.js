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
		     <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP01.html">PP01 - Jan 2022</a>\
		     <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP02.html">PP02 - Feb 2022</a>\
		     <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP03.html">PP03 - Mar 2022</a>\
		     <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP04.html">PP04 - Apr 2022</a>\
		     <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP05.html">PP05 - May 2022</a>\
		     <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP06.html">PP06 - Jun 2022</a>\
		     <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP07.html">PP07 - Jul-Aug 2022</a>\
		     <a class="dropdown-item" href="' + nav_path + 'sov/sov_PP08.html">PP08 - Oct 2022</a>\
	           </li>\
	         </ul>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="#">Funding Breakdown &raquo;</a>\
	         <ul class="submenu dropdown-menu">\
	           <li>\
	             <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP01.html">PP01 - Jan 2022</a>\
	             <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP02.html">PP02 - Feb 2022</a>\
	             <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP03.html">PP03 - Mar 2022</a>\
	             <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP04.html">PP04 - Apr 2022</a>\
	             <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP05.html">PP05 - May 2022</a>\
	             <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP06.html">PP06 - Jun 2022</a>\
	             <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP07.html">PP07 - Jul-Aug 2022</a>\
	             <a class="dropdown-item" href="' + nav_path + 'funding/funding_PP08.html">PP08 - Oct 2022</a>\
	           </li>\
	         </ul>\
	       </li>\
	     </ul>\
	   </li>\
	   <li class="nav-item dropdown">\
	     <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">QTYs</a>\
	     <ul class="dropdown-menu">\
	       <li>\
	         <a class="dropdown-item" href="#">Flatwork &raquo;</a>\
	         <ul class="submenu dropdown-menu">\
	           <li>\
	             <a class="dropdown-item" href="#">Street Rennovation &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-02.html">R-02: Reflective Markings</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-03.html">R-03: Planing</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-04.html">R-04: HMA</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-05.html">R-05: 8in Conc. Base</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-06.html">R-06: 10in Conc. Base</a>\
	               </li>\
	             </ul>\
	           </li>\
	           <li>\
	             <a class="dropdown-item" href="#">Sidewalk, Curb and Gutter &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-07.html">R-07: Conc. Pavement, Parking Strip and Gutter</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-08.html">R-08: 3.5in Sidewalk</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-09.html">R-09: 4in Curb</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-10.html">R-10: 6in Curb</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-11.html">R-11: Combined Curb and Gutter</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-12.html">R-12: Curb Ramps</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-14.html">R-14: Type I Pullboxes</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_R-15.html">R-15: Type III Pullboxes</a>\
	               </li>\
	             </ul>\
	           </li>\
	         </ul>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="#">Sewer &raquo;</a>\
	         <ul class="submenu dropdown-menu">\
	           <li>\
	             <a class="dropdown-item" href="#">Side Sewers, Culverts &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_SW-09.html">SW-9 - (N) 10" VCP Culvert</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_SW-11.html">SW-11 - Pre-Con TVI of (E) Side Sewers and Culverts</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_SW-13.html">SW-13 - Side Sewer Connection to Sewer Main</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_SW-14.html">SW-14 - Side Sewer Replacement</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_SW-17.html">SW-17 - Post-Con TVI of (N) Side Sewers and Culverts</a>\
	               </li>\
	             </ul>\
	           </li>\
	           <li>\
	             <a class="dropdown-item" href="#">Mains &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_SW-05.html">SW-05 - (N) 12" VCP SW Main</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_SW-06.html">SW-06 - (N) 18" VCP SW Main</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_SW-07.html">SW-07 - (N) 21" VCP SW Main</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_SW-08.html">SW-08 - (N) 24" VCP SW Main</a>\
	               </li>\
	             </ul>\
	           </li>\
	           <li>\
	             <a class="dropdown-item" href="#">Catch Basins &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_SW-10.html">SW-10 - (N) CB - STD 87,188</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_SW-18.html">SW-18 - (N) CI Trap in (E) CB</a>\
	               </li>\
	             </ul>\
	           </li>\
	           <li>\
	             <a class="dropdown-item" href="#">Manholes &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_SW-03.html">SW-03 - (N) MH - STD 87,181</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_SW-04.html">SW-04 - (N) MH - STD 87,182</a>\
	               </li>\
	             </ul>\
	           </li>\
	         </ul>\
	       </li>\
	     </ul>\
	   </li>\
	   <li class="nav-item dropdown">\
	     <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">SW Tracking</a>\
	     <ul class="dropdown-menu">\
	       <li>\
	         <a class="dropdown-item" href="' + nav_path + 'tracking/sw_tracking_mains.html">Mains</a>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="' + nav_path + 'tracking/sw_tracking_culverts.html">Culverts</a>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="' + nav_path + 'tracking/sw_tracking_laterals.html">Laterals</a>\
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

    } else if (nav_element.includes('Asset_Tracking'))

    {

        return_block +=

            '<div style="float:right;\
                    padding-right:10px;\
                    color:white;\
                    font-weight:bold"\
                    >' + nav_element.replace(/_/g, " ") + '</div>';

    }

    return_block += '</nav>';

    return return_block

}
