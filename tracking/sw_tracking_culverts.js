function tracking_table_generator_sw_culverts() {

  var sw_culvert_row = [];
  var sw_culvert_table = [];  
  var NN = 0; // bid item index
  var return_block = 
        
    '<thead class="track_thead">\
      <tr>\
        <th class="track_thead" rowspan="2" style="text-align:left">Asset ID</th>\
        <th class="track_thead" rowspan="2" style="text-align:left">Location</th>\
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




  for (const sw_culvert of json_2977J_102_SW_culverts_21["features"])

  {
  
   sw_culvert_row = Array(14);
  
   sw_culvert_row[1] = "<a href=\"..\\index.html#20/" + 
                     sw_culvert.geometry.coordinates[0][0][1] +"/" + 
                     sw_culvert.geometry.coordinates[0][0][0] +                     
                     "\" target=\"_blank\">" +
                     sw_culvert.properties.MXASSETNUM + "</a>";
   
   sw_culvert_row[2] = sw_culvert.properties.LOCATION;
   //sw_culvert_row[3] = sw_culvert.properties.PIPE_MATRL;
   sw_culvert_row[4] = sw_culvert.properties.SCOPE;
   sw_culvert_row[5] = sw_culvert.properties.STATUS;
   sw_culvert_row[6] = [];
   
   // Bid Items
   
   sw_culvert_row[6][0] = ''; 
      
   for (var bi in sw_culvert.properties.PP_HISTORY)
   
     {
      
      if ( bi != 'SW-0' && bi != {}) 
      
        {
      
         sw_culvert_row[6].push(bi);
      
         }
     
       }
       
    sw_culvert_row[6].sort();   
       
    for (bi = 1; bi < sw_culvert_row[6].length; bi++ )
    
      {
      
       NN = 0; // bid item index

       while (base_sov[NN]['Bid Item'] != sw_culvert_row[6][bi].replace('SW-0','SW-')) { NN++; }
      

      
       sw_culvert_row[6][0] += '<a data-toogle="tooltip" title="' + base_sov[NN]["Description"] +
                            ' (' + base_sov[NN]["Unit"] + ')"' + '"\
                             target=\"_blank\" href=\"..\\qty\\qty_' +
                             sw_culvert_row[6][bi] + '.html\">' + sw_culvert_row[6][bi] + '</a>';
      
       if ( bi != sw_culvert_row[6].length - 1  )
       
         {
         
          sw_culvert_row[6][0] += ', ';
         
          }
       
       }    
       

   // Pre Con Submittals
   
   sw_culvert_row[7] = sw_culvert.properties.SUBMITTALS.TVI_PRE_CON.SUBMITTAL;
   sw_culvert_row[8] = sw_culvert.properties.SUBMITTALS.TVI_PRE_CON.VIDEO;
   sw_culvert_row[9] = sw_culvert.properties.SUBMITTALS.TVI_PRE_CON.RESPONSE;
   
   if (sw_culvert_row[7] == 'none' && sw_culvert_row[8] == 'none' && sw_culvert_row[9] == 'none' )
   
    {
    
     sw_culvert_row[7] = '';
     sw_culvert_row[8] = '';
     sw_culvert_row[9] = '';
    
     }
     
   // Post Con Submittals
   
   sw_culvert_row[10] = sw_culvert.properties.SUBMITTALS.TVI_PST_CON.SUBMITTAL;
   sw_culvert_row[11] = sw_culvert.properties.SUBMITTALS.TVI_PST_CON.VIDEO;
   sw_culvert_row[12] = sw_culvert.properties.SUBMITTALS.TVI_PST_CON.RESPONSE;
     
   if (sw_culvert_row[10] == 'none' && sw_culvert_row[11] == 'none' && sw_culvert_row[12] == 'none' )
   
    {
    
     sw_culvert_row[10] = '';
     sw_culvert_row[11] = '';
     sw_culvert_row[12] = '';
    
     }
    
     
   if ( sw_culvert_row[12] == 'MCN' || sw_culvert_row[12] == 'NET' )
   
     {
     
      sw_culvert_row[13] = json_submittals[sw_culvert_row[10]].dates.cm_to_cnt;
      
      }
      
   else
    
     {
     
       sw_culvert_row[13] = '';
     
      }
          
  // status sorting        
          
   if (sw_culvert_row[4].includes('Install (N)'))
   
     {
     
      if (sw_culvert_row[12] == 'MCN' || sw_culvert_row[12] == 'NET' )
      
        {
        
         sw_culvert_row[0] = 'G';
         
        }
        
      else if (sw_culvert_row[12] == 'R&R' )
      
        {
        
         sw_culvert_row[0] = 'D';
         
        }
        
      else
      
        {
        
         sw_culvert_row[0] = 'A';
        
         }
     
      }

   else if (sw_culvert_row[4].includes('Replace (E) if Directed') && sw_culvert_row[9] != 'Do Not Replace')
   
     {
     
   
      if (sw_culvert_row[12] == 'MCN' || sw_culvert_row[12] == 'NET' )
      
        {
        
         sw_culvert_row[0] = 'H';
         
        }
        
      else if (sw_culvert_row[12] == 'R&R' )
      
        {
        
         sw_culvert_row[0] = 'E';
         
        }
        
   
      else 
          
            {
            
             sw_culvert_row[0] = 'B';
        
             }
     
      }      
      
    else if (sw_culvert_row[4] == "(E) to Remain" || sw_culvert_row[9] == 'Do Not Replace')
    
      {
      
       if ( sw_culvert_row[6][0].includes('SW-09') )
       
         {
         
          if (sw_culvert_row[12] == 'MCN' || sw_culvert_row[12] == 'NET' )
         
            {
         
             sw_culvert_row[0] = 'I';
        
            }
            
          else if (sw_culvert_row[12] == 'R&R' )  
            
            {
            
             sw_culvert_row[0] = 'F';
            
             }
            
            
          else 
          
            {
            
             sw_culvert_row[0] = 'C';
            
             }
            
          }
          
       else
       
         {
         
          sw_culvert_row[0] = 'L';
         
          }   
           
       }
       
    else if (sw_culvert_row[4] == "Plug and Fill (E)" || 
             sw_culvert_row[4] == "Plug (E)" || 
             sw_culvert_row[4] == "Remove (E)" )
    
      {
      
       sw_culvert_row[0] = 'K';
      
       }   
       
    else
    
      {
      
       sw_culvert_row[0] = 'Z';
      
       }   
   
    sw_culvert_table.push(sw_culvert_row);
   
   }
   
   sw_culvert_table.sort()
   
   
   
   var row_shade = ''; 
   
  
   for (var rr = 0; rr <  sw_culvert_table.length; rr++ )
   
   {
  
    if      (sw_culvert_table[rr][0] == 'A' || 
             sw_culvert_table[rr][0] == 'B' || 
             sw_culvert_table[rr][0] == 'C' ) {row_shade='pending';}
             
    else if (sw_culvert_table[rr][0] == 'D' || 
             sw_culvert_table[rr][0] == 'E' ||
             sw_culvert_table[rr][0] == 'F' ) {row_shade='rejected';}
             
    else if (sw_culvert_table[rr][0] == 'G' || 
             sw_culvert_table[rr][0] == 'H' ||
             sw_culvert_table[rr][0] == 'I' ) {row_shade='approved';}
             
    else if (sw_culvert_table[rr][0] == 'J' || 
             sw_culvert_table[rr][0] == 'K' ||
             sw_culvert_table[rr][0] == 'L' ) {row_shade='no_action';}
             
    else {row_shade='misc';}
             
  
    return_block += '<tr>';
    return_block += '<td class="track_td ' + row_shade + '" style="text-align:left">' +   sw_culvert_table[rr][1] +    '</td>';
    return_block += '<td class="track_td ' + row_shade + '" style="text-align:left">' + sw_culvert_table[rr][2] +    '</td>';
    //return_block += '<td class="track_td ' + row_shade + '" style="text-align:center">' + sw_culvert_table[rr][3] +    '</td>';
    return_block += '<td class="track_td ' + row_shade + '" style="text-align:left">' +   sw_culvert_table[rr][4] +    '</td>';
    return_block += '<td class="track_td ' + row_shade + '" style="text-align:left">' +   sw_culvert_table[rr][5] +    '</td>';
    return_block += '<td class="track_td ' + row_shade + '" style="text-align:left">' +   sw_culvert_table[rr][6][0] + '</td>';
    return_block += '<td class="track_td ' + row_shade + '" style="text-align:center">' + sw_culvert_table[rr][7] +    '</td>';
    return_block += '<td class="track_td ' + row_shade + '" style="text-align:center">' + sw_culvert_table[rr][8] +    '</td>';
    return_block += '<td class="track_td ' + row_shade + '" style="text-align:left">' +   sw_culvert_table[rr][9] +    '</td>';   
    return_block += '<td class="track_td ' + row_shade + '" style="text-align:center">' + sw_culvert_table[rr][10] +   '</td>';   
    return_block += '<td class="track_td ' + row_shade + '" style="text-align:center">' + sw_culvert_table[rr][11] +   '</td>';   
    return_block += '<td class="track_td ' + row_shade + '" style="text-align:center">' + sw_culvert_table[rr][12] +   '</td>';   
    return_block += '<td class="track_td ' + row_shade + '" style="text-align:center">' + sw_culvert_table[rr][13] +    '</td>';   
    return_block += '</tr>';
   
   
    }
   
   return_block += '<br>';
   return return_block

}
