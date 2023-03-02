//Check if there are NA or empty sections in the data row.
//Code goes here....


//iteration variables
var currDataID = "StringID",
pointVar = new google.maps.LatLng(49.071574289007046, -123.83757095735695),
liVar = document.getElementById(`li${currDataID}`),
ariaLabel = `Fredrich's Honey Farm`,
address = `2798 Cedar Road, Nanaimo, BC`,
ingredients = `Honey, Bees`,
description = `Located in the picturesque Cedar, British Columbia, just 20 minutes south of Nanaimo, the Fredrich's
Honey farm has been in
operation since 1966, passed down through the generations. We believe that the key to producing the finest honey lies in
the
care and maintenance of our hives. Every aspect of our operation is
designed to promote the health and well-being of our bees.

We believe that the key to producing the finest honey lies in the
care and maintenance of our hives. Every aspect of our operation is
designed to promote the health and well-being of our bees.`,
imgpath = "../images/fredrichs.jpg",
imgdesc = "beekeepers in field with hives and forklift", //alt ddescription for screen readers
weblink = "https://www.fredrichshoney.com/"; // this is used as a reference for the supplier. maybe addd a button
//plus


//using all the data, we can write the content for the infoWwindow. After we can create the marker object.
//declare under map 
const contentString =
'<div id="content" class="container">' +
    '<div id="siteNotice">' +
        "</div>" +
    '<div class="row mb-3">' +
        '<div class="col-lg-12">' +
            `<h1 id="firstHeading" class="firstHeading mt-1">${ariaLabel}</h1>` + //
            `<h6 id="addrHeading" class="addrHeading">${address}</h6>` + //
            '<div class="row gy-2">' +
                '<div class="col-md-6">' +

                    `<img src="${imgpath}" class="h-auto w-100 rounded mx-auto d-block mt-5" alt="${imgdesc}"></img>` +

                    '</div>' +

                '<div class="col-md-6">' +
                    '<div id="bodyContent" class="h-auto w-100">' +

                        `<p class="gy-3 mt-5"><span class="align-middle">
                                ${description}
                                <br><br><br>
                                <span class="fw-bold">Local Ingredient(s): ${ingredients}.</span>

                            </span></p>`+



                        '</div>' +
                    '</div>' +

                '</div>' +
            '</div>' +

        '</div>' +
    '</div>',

infowindow = new google.maps.InfoWindow({ //this is the info window for the currently selected marker
content: contentString,
ariaLabel: "Fredrich's Honey",
}),


markerVIU = new google.maps.Marker({
position: pointVIU,
title: "point VIU",
label: " ",
map: map,
}),

<script>




    $(document).ready(function () {
        $('#load_data').click(function () {
            $.ajax({

                //This is a SEMICOLON DELIMITED CSV file in the ROOT FOLDER. TODO: Consider nesting this to prevent shallow visibility.
                url: "supplier_markers.csv",

                //type of data to expect
                dataType: "text",

                //success will run a function when the pairs above resolve successfully
                success: function (data) {

                    // split file into entries by linebreak
                    var supplier_list = data.split(/\r?\n|\r/);

                    var namer = 'supplier'; //just a string for naming placeholders

                    //THIS STRUCTURE WILLL CREATE THE MARKER ARRAY VARIABLES

                    for (var i = 1; i < supplier_list.length; i++) {  //start at 1, for each line in the file

                        console.log(`this  is the  marker title we would create: ${i}`);

                        
                            eval(`var ${namer}${i};`);  
                        
                        console.log(`supplier${i}`);


                    }

                    console.log('Supplier list retrieved: ' + supplier_list + '\n\r Which is object type: ' + typeof (supplier_list));

                    //Keep track of the # of  markers. This will be used to match legend tags with map marker numbers. Skip the first (these are table headers). 
                    var markerTracker = 0;

                    //Process the supplier_list array into a unique "supplier" string each time we iterate. This is the index counter.
                    for (var counter = 0; counter < supplier_list.length; counter++) {


                        // Split the supplier_list into entries. This is another Array containinf the information for one supplier.
                        var supplier = supplier_list[counter].split(";");


                        //If this is the first iteration, increment the counter and skip the supplier headers.
                        if (counter === 0 || supplier[0] === "") {
                            markerTracker++;
                            //TODO: WE will create an array containing all headers - this will be our temp variable names!!
                            //Or will we??..

                            //Stop this iteration and do not read information from this data field.
                            continue;


                        } else {

                            // Code that will run on the rest of the iterations that pass the conditions.

                            //split the current index into the separated values for this entry
                            // *****UNCOMMENT FOR DEBUG*****
                            console.log(markerTracker);
                            console.log('Supplier currently indexed: ' + supplier + '\n Which is data type: ' + typeof (supplier));


                            //This is the loop that will iterate through the data fields of each supplier. Here we will work on the data.
                            for (var cell_counter = 0; cell_counter < supplier.length; cell_counter++) {


                                var currName = supplier[0];//first element is name. we will trim it and create the ID.
                                //TODO: We can technically add 0-6 right now. But how will we handle empty cells? with NA?(smart to include blank)

                                var currDataID = currName.replace(/[^a-zA-Z0-9]/g, ''); //Strip name of all spaces and characters
                                currDataID = currDataID.charAt(0) + currDataID.substring(1).toLowerCase();




                                console.log(supplier[cell_counter]);
                                console.log(currDataID);
                                //eval();//we will use eval to create the dynamic variables for each iteration.





                            }
                            //After Creating this marker, increment the counter for the next one.
                            markerTracker++;
                            console.log(markerTracker);
                        }

                    }
                }
            });
        });

    });





</script>



        // Create an info window to share between markers.
const infoWindow = new google.maps.InfoWindow();
        
//Create the  Markers.
supplier_list.forEach()












 supplier[i]

    if (supplier[i] === "") {

        continue;


    } else {



    }



IF ALL DATA IS PRESENT, GENERATE THE CONTENTSTRING FOR THE INFOWINDOW
        const contentArray = [];

    if (i >= 6 && supplier[i] === "NA") { //if the index is 6 or greater (which are acceptable fields for NA), AND data is "NA"

        continue;

    }


    //using all the data, we can write the content for the infoWwindow. After we can create the marker object.
    //declare under map 


        contentArray.push(`<div id="content" class="container">
        <div id="siteNotice">
        </div>
        <div class="row mb-3">
        <div class="col-lg-12">
        <h1 id="firstHeading" class="firstHeading mt-1">${supplier[0]}</h1>
        <h6 id="addrHeading" class="addrHeading">${supplier[1]}</h6>
        <div class="row gy-2">
        <div class="col-md-6">
        <img src="../images${supplier[5]}.jpg" class="h-auto w-100 rounded mx-auto d-block mt-5" alt="${supplier[6]}"></img>

        </div>

        <div class="col-md-6">
        <div id="bodyContent" class="h-auto w-100">

        <p class="gy-3 mt-5"><span class="align-middle">
                                ${supplier[4]}
                                <br><br><br>
                                <span class="fw-bold">Local Ingredient(s): ${supplier[3]}.</span>

                            </span></p>



        </div>
        </div>

        </div>
        </div>

        </div>
        </div>`);

    console.log(contentString + i);








GENERATE MARKERS  FROM AN ARRAY OF DATA

    function initMap() {
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 12,
            center: { lat: 34.84555, lng: -111.8035 },
            mapId: "4504f8b37365c3d0",
        });
        // Set LatLng and title text for the markers. The first marker (Boynton Pass)
        // receives the initial focus when tab is pressed. Use arrow keys to
        // move between markers; press tab again to cycle through the map controls.
        const supplier_list = [
            {
                position: { lat: 34.8791806, lng: -111.8265049 },
                title: "Boynton Pass",
            },
            {
                position: { lat: 34.8559195, lng: -111.7988186 },
                title: "Airport Mesa",
            },
            {
                position: { lat: 34.832149, lng: -111.7695277 },
                title: "Chapel of the Holy Cross",
            },
            {
                position: { lat: 34.823736, lng: -111.8001857 },
                title: "Red Rock Crossing",
            },
            {
                position: { lat: 34.800326, lng: -111.7665047 },
                title: "Bell Rock",
            },
        ];
        // Create an info window to share between markers.
        const infoWindow = new google.maps.InfoWindow();

        // Create the markers.
        tourStops.forEach(({ position, title }, i) => {
            const pinView = new google.maps.marker.PinView({
                glyph: `${i + 1}`,
            });
            const marker = new google.maps.marker.AdvancedMarkerView({
                position,
                map,
                title: `${i + 1}. ${title}`,
                content: pinView.element,
            });

            // Add a click listener for each marker, and set up the info window.
            marker.addListener("click", ({ domEvent, latLng }) => {
                const { target } = domEvent;

                infoWindow.close();
                infoWindow.setContent(marker.title);
                infoWindow.open(marker.map, marker);
            });
        });
    }

    window.initMap = initMap;




CREATING AN ARRAY OF MARKERS
        var markerArray = [


            new google.maps.Marker({
                position: pointVIU,
                title: "point VIU",
                label: " ",
                map: map,
            }),
            markerFredrichs = new google.maps.Marker({ //link
                position: pointFredrichs,
                title: "point Fredrichs",
                label: "1",
                map: map,
            }),
            markerSaltspring = new google.maps.Marker({ //link
                position: pointSaltspring,
                title: "point Saltspring",
                label: "2",
                map: map,
            }),
            markerFreshstart = new google.maps.Marker({ //https://www.freshstartfoods.com/pages/locations/wholesale-produce-distributors-british-columbia
                position: pointFreshstart,
                title: "point FreshStart",
                label: "3",
                map: map,
            }),
            markerIslandcity = new google.maps.Marker({ //link
                position: pointIslandcity,
                title: "point Islandcity",
                label: "4",
                map: map,
            }),
            markerCastlecheese = new google.maps.Marker({ //link
                position: pointCastlecheese,
                title: "point Castlecheese",
                label: "5",
                map: map,
            })];


            LIST ITEMS (LEGEND)

             <li id="liFredrichs"
                class="list-group-item d-flex justify-content-between align-items-center supplier-item">
                <button type="button" class="list-group-item list-group-item-action">Frederich's Honey Farm</button>
                <span class="badge bg-primary rounded-pill">1</span>
            </li>
            <li id="liSaltspring"
                class="list-group-item d-flex justify-content-between align-items-center supplier-item">
                <button type="button" class="list-group-item list-group-item-action">Saltspring Coffee</button>
                <span class="badge bg-primary rounded-pill">2</span>
            </li>













































