function tracking_table_generator_sw_laterals() {

  var sw_lateral_row = [];
  var sw_lateral_table = [];  
  var NN = 0; // bid item index
  var return_block = 
        
    '<thead class="track_thead">\
      <tr>\
        <th class="track_thead" rowspan="2" style="text-align:left">Asset ID</th>\
        <th class="track_thead" rowspan="2" style="text-align:left">Block Lot</th>\
        <th class="track_thead" rowspan="2" style="text-align:left">Location / Address</th>\
        <th class="track_thead" rowspan="2" style="text-align:left">Scope</th>\
        <th class="track_thead" rowspan="2" style="text-align:left">Status</th>\
        <th class="track_thead" rowspan="2" style="text-align:left">Bid Items</th>\
        <th class="track_thead" colspan="3">Pre-Con</th>\
        <th class="track_thead" colspan="4">Post-Con</th>\
      </tr>\
      <tr>\
        <th class="track_thead">Submittal</td>\
        <th class="track_thead">Video</td>\
        <th class="track_thead" style="text-align:left">Response</td>\
        <th class="track_thead">Submittal</td>\
        <th class="track_thead">Video</td>\
        <th class="track_thead" style="text-align:left">Response</td>\
        <th class="track_thead">NET Date</td>\
      </tr>\
    </thead>';




  for (const sw_lateral of json_2977J_105_SW_laterals_22["features"])

  {
  
   sw_lateral_row = Array(14);
  
   sw_lateral_row[1] = "<a href=\"..\\index.html#20/" + 
                     sw_lateral.geometry.coordinates[0][0][1] +"/" + 
                     sw_lateral.geometry.coordinates[0][0][0] +                     
                     "\" target=\"_blank\">" +
                     sw_lateral.properties.MXASSETNUM + "</a>";
   
   sw_lateral_row[2] = sw_lateral.properties.BLKLOT;
   sw_lateral_row[3] = sw_lateral.properties.ADDRESS;
   sw_lateral_row[4] = sw_lateral.properties.SCOPE;
   sw_lateral_row[5] = sw_lateral.properties.STATUS;
   sw_lateral_row[6] = [];
   
   // Bid Items
   
   sw_lateral_row[6][0] = ''; 
      
   for (var bi in sw_lateral.properties.PP_HISTORY)
   
     {
      
      if ( bi != 'SW-0' && bi != {}) 
      
        {
      
         sw_lateral_row[6].push(bi);
      
         }
     
       }
       
    sw_lateral_row[6].sort();   
       
    for (bi = 1; bi < sw_lateral_row[6].length; bi++ )
    
      {
      
       NN = 0; // bid item index

       while (base_sov[NN]['Bid Item'] != sw_lateral_row[6][bi].replace('SW-0','SW-')) { base_sov[NN]['Bid Item']; NN++; }
      

      
       sw_lateral_row[6][0] += '<a data-toogle="tooltip" title="' + base_sov[NN].Description +
                            ' (' + base_sov[NN].Unit + ')"' + '"\
                             target=\"_blank\" href=\"..\\qty\\qty_' +
                             sw_lateral_row[6][bi] + '.html\">' + sw_lateral_row[6][bi] + '</a>';
      
       if ( bi != sw_lateral_row[6].length - 1  )
       
         {
         
          sw_lateral_row[6][0] += ', ';
         
          }
       
       }    
       

   // Pre Con Submittals
   
   sw_lateral_row[7] = sw_lateral.properties.SUBMITTALS.TVI_PRE_CON.SUBMITTAL;
   sw_lateral_row[8] = sw_lateral.properties.SUBMITTALS.TVI_PRE_CON.VIDEO;
   sw_lateral_row[9] = sw_lateral.properties.SUBMITTALS.TVI_PRE_CON.RESPONSE;
   
   if (sw_lateral_row[7] == 'none' && sw_lateral_row[8] == 'none' && sw_lateral_row[9] == 'none' )
   
    {
    
     sw_lateral_row[7] = '';
     sw_lateral_row[8] = '';
     sw_lateral_row[9] = '';
    
     }
     
   // Post Con Submittals
   
   sw_lateral_row[10] = sw_lateral.properties.SUBMITTALS.TVI_PST_CON.SUBMITTAL;
   sw_lateral_row[11] = sw_lateral.properties.SUBMITTALS.TVI_PST_CON.VIDEO;
   sw_lateral_row[12] = sw_lateral.properties.SUBMITTALS.TVI_PST_CON.RESPONSE;
     
   if (sw_lateral_row[10] == 'none' && sw_lateral_row[11] == 'none' && sw_lateral_row[12] == 'none' )
   
    {
    
     sw_lateral_row[10] = '';
     sw_lateral_row[11] = '';
     sw_lateral_row[12] = '';
    
     }
    
     
   if ( sw_lateral_row[12] == 'MCN' || sw_lateral_row[12] == 'NET' )
   
     {
     
      sw_lateral_row[13] = json_submittals[sw_lateral_row[10]].dates.cm_to_cnt;
      
      }
      
   else
    
     {
     
       sw_lateral_row[13] = '';
     
      }
          
  // status sorting        
 
   if (sw_lateral_row[5] == '(E) Not Found' || sw_lateral_row[5] == '(E) Capped' )
      
        {
        
         sw_lateral_row[0] = 'M';
         
        }  
        
   else if (sw_lateral_row[4].includes('Install (N)'))
   
     {
     
      if (sw_lateral_row[12] == 'MCN' || sw_lateral_row[12] == 'NET' )
      
        {
        
         sw_lateral_row[0] = 'G';
         
        }
        
      else if (sw_lateral_row[12] == 'R&R' )
      
        {
        
         sw_lateral_row[0] = 'D';
         
        }
        
      else
      
        {
        
         sw_lateral_row[0] = 'A';
        
         }
     
      }

   else if (sw_lateral_row[4].includes('Replace (E) if Directed') && sw_lateral_row[9] != 'Do Not Replace')
   
     {
     
   
      if (sw_lateral_row[12] == 'MCN' || sw_lateral_row[12] == 'NET' )
      
        {
        
         sw_lateral_row[0] = 'H';
         
        }
        
      else if (sw_lateral_row[12] == 'R&R' )
      
        {
        
         sw_lateral_row[0] = 'E';
         
        }
        
   
      else 
          
            {
            
             sw_lateral_row[0] = 'B';
        
             }
     
      }      
      
    else if (sw_lateral_row[4] == "(E) to Remain" || sw_lateral_row[9] == 'Do Not Replace')
    
      {
      
       if ( sw_lateral_row[6][0].includes('SW-09') )
       
         {
         
          if (sw_lateral_row[12] == 'MCN' || sw_lateral_row[12] == 'NET' )
         
            {
         
             sw_lateral_row[0] = 'I';
        
            }
            
          else if (sw_lateral_row[12] == 'R&R' )  
            
            {
            
             sw_lateral_row[0] = 'F';
            
             }
            
            
          else 
          
            {
            
             sw_lateral_row[0] = 'C';
            
             }
            
          }
          
       else
       
         {
         
          sw_lateral_row[0] = 'L';
         
          }   
           
       }
       
    else if (sw_lateral_row[4] == "Plug and Fill (E)" || 
             sw_lateral_row[4] == "Plug (E)" || 
             sw_lateral_row[4] == "Remove (E)" )
    
      {
      
       sw_lateral_row[0] = 'K';
      
       }   
       
    else
    
      {
      
       sw_lateral_row[0] = 'Z';
      
       }   
   
    sw_lateral_table.push(sw_lateral_row);
   
   }
   
   sw_lateral_table.sort()
   
   
   
   var row_shade = ''; 
   
  
   for (var rr = 0; rr <  sw_lateral_table.length; rr++ )
   
   {
  
    if      (sw_lateral_table[rr][0] == 'A' || 
             sw_lateral_table[rr][0] == 'B' || 
             sw_lateral_table[rr][0] == 'C' ) {row_shade='pending';}
             
    else if (sw_lateral_table[rr][0] == 'D' || 
             sw_lateral_table[rr][0] == 'E' ||
             sw_lateral_table[rr][0] == 'F' ) {row_shade='rejected';}
             
    else if (sw_lateral_table[rr][0] == 'G' || 
             sw_lateral_table[rr][0] == 'H' ||
             sw_lateral_table[rr][0] == 'I' ) {row_shade='approved';}
             
    else if (sw_lateral_table[rr][0] == 'J' || 
             sw_lateral_table[rr][0] == 'K' ||
             sw_lateral_table[rr][0] == 'L' || 
             sw_lateral_table[rr][0] == 'M' ) {row_shade='no_action';}
             
    else {row_shade='misc';}
             
  
    return_block += '<tr>';
    return_block += '<td class="track_td ' + row_shade + '" style="text-align:left">' +   sw_lateral_table[rr][1] +    '</td>';
    return_block += '<td class="track_td ' + row_shade + '" style="text-align:left">' + sw_lateral_table[rr][2] +    '</td>';
    return_block += '<td class="track_td ' + row_shade + '" style="text-align:left">' + sw_lateral_table[rr][3] +    '</td>';
    return_block += '<td class="track_td ' + row_shade + '" style="text-align:left">' +   sw_lateral_table[rr][4] +    '</td>';
    return_block += '<td class="track_td ' + row_shade + '" style="text-align:left">' +   sw_lateral_table[rr][5] +    '</td>';
    return_block += '<td class="track_td ' + row_shade + '" style="text-align:left">' +   sw_lateral_table[rr][6][0] + '</td>';
    return_block += '<td class="track_td ' + row_shade + '" style="text-align:center">' + sw_lateral_table[rr][7] +    '</td>';
    return_block += '<td class="track_td ' + row_shade + '" style="text-align:center">' + sw_lateral_table[rr][8] +    '</td>';
    return_block += '<td class="track_td ' + row_shade + '" style="text-align:left">' +   sw_lateral_table[rr][9] +    '</td>';   
    return_block += '<td class="track_td ' + row_shade + '" style="text-align:center">' + sw_lateral_table[rr][10] +   '</td>';   
    return_block += '<td class="track_td ' + row_shade + '" style="text-align:center">' + sw_lateral_table[rr][11] +   '</td>';   
    return_block += '<td class="track_td ' + row_shade + '" style="text-align:center">' + sw_lateral_table[rr][12] +   '</td>';   
    return_block += '<td class="track_td ' + row_shade + '" style="text-align:center">' + sw_lateral_table[rr][13] +    '</td>';   
    return_block += '</tr>';
   
   
    }
   
   return_block += '<br>';
   return return_block

}
