var markerCount = 0;

for (var counter = 0; counter < supplier_list.length; counter++) {
  // while there are items in the array, do:
  var cell_data = supplier_list[count].split(",");
  //split the current index into the separated values for this entry
  for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
    //While there is still cells of data available for this item, do:

    var cell = cell_data[cell_count];
    
        if (cell_count === 0) {
          //Manipulate the first cell of data differently [the first iteration]
        } else {
          // Manipulate the rest of the data afterwards [subsequent iterations]
        }

    
    //Decision structure
    //[set to detect first item, and behave differently for this iteration]

    if (cell_count === 0) {
      //Manipulate the first cell of data differently [the first iteration]
    } else {
      // Manipulate the rest of the data afterwards [subsequent iterations]
    }
  } //This is where we close tags for the  CELL_DATA iterations.

  markerCount++;
} //This is where we close tags for the  SUPPLIER_LIST iterations.






                        var icounter = 0;
                        var writeString = false; //allow quotation-enclosed strings to be written
                        var currSupplier;

                        for (supplier_data in supplier) { // SPLIT THE SUPPLIER INTO ITS DATA PIECES FOR PROCESSING
                            icounter++; // index tracker
                            console.log(icounter); //);
                            //console.log('This is entry ' + icounter + ', which contains data: ' + supplier_data);


                            /* currSupplier = supplier_data[icounter].split(",");
                            console.log(currSupplier.values()); */
                            /*
                            Check processed code for identifier?
                            if (supplier_data.values().includes('"')) {
                                writeString = !writeString; //
                            }
                             */

                          
                          
                          
                                                      if (supplier_data == "NA" || "") {

                                console.log(`FAILED: This data field is blank: ${supplier}`);
                                console.log('FAILED: This data field is blank: ' + supplier_data);

                                //Manipulate the first cell of data differently [the first iteration]
                            } else {
                                // Manipulate the rest of the data afterwards [subsequent iterations]

                                /*                                 console.log(`SUCCESS: This data field is populated: ${supplier}`);
                                                                console.log('SUCCESS: This data field is populated: ' + supplier_data); */
                            }




































