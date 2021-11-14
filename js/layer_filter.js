function layer_filter(LAYER_TYPE, LAYER_OBJ)

  {
   
   const return_obj = Object.assign({}, LAYER_OBJ);
   
   return_obj.features = [];

   for (var ii = 0; ii < LAYER_OBJ.features.length; ii++)
   
     {

      if (LAYER_OBJ.features[ii].properties.LAYER_TYPE == LAYER_TYPE)
      
       {
                     
        return_obj.features.push(LAYER_OBJ.features[ii]);
          
        }
     
     }

   return return_obj

  }
