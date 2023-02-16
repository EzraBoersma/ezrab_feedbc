// Declaration
class Supplier {
  constructor(
    name,
    address,
    coordinates,
    description,
    imagepath,
    imagedescription,
    weblink
  ) {
    this.name = name;
    this.address = address;
    this.coordinates = coordinates;
    this.description = description;
    this.imagepath = imagepath;
    this.imagedescription = imagedescription;
    this.weblink = weblink;
  }
}





                        // Split the supplier_list into entries
                        var supplier = supplier_list[counter].split(";");


                        console.log(supplier);
                        console.log(typeof (supplier));


                        //split the current index into the separated values for this entry
                        console.log('Supplier currently indexed: ' + supplier + '\n Which is data type: ' + typeof (supplier));

                        if (counter > 0) { //If this is the first iteration, skip the supplier headers.

                            console.log(`FAILED: This data field is blank: ${supplier}`);
                            //console.log('FAILED: This data field is blank: ' + supplier_data);


                        } else {
                            // If this is the first iteration, skip the supplier headers.
                            continue; //Break this iteration and do not read information from this data field.



                            /*                                 console.log(`SUCCESS: This data field is populated: ${supplier}`);
                                                            console.log('SUCCESS: This data field is populated: ' + supplier_data); */
                        }
