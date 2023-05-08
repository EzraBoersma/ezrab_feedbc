<!-- In this example, there are two accordion items. The first accordion item contains a nested accordion within its
accordion body. Notice how the nested accordion has its own ID (nestedAccordionX) and the data-bs-parent attribute is
set to #nestedAccordionX. This ensures that the nested accordion operates independently within the parent accordion
item.

The outer accordion's data-bs-parent attribute is set to #accordion, which is the ID of the outer accordion container.
This establishes the relationship between the outer accordion and its child accordion items.

By following this nested structure and setting the appropriate data-bs-parent attributes, you can create nested
accordions within Bootstrap 5. 
 -->


<!-- CSS CLASSES:
            accordion - for the accordion container
            accordion-item - for each accordion item
            accordion-header - for the header element
            accordion-body - for the body element
            accordion-collapse - to define the collapsing behavior 
        -->

<div class="accordion" id="accordionExample">
    <!-- this is the outermost container. typically has an ID, and serves as the PARENT. -->

    <div class="accordion-item">
        <!-- This will be the parent accordion for a menu catergory. We will make one for each menu section.  -->
        <!-- each accordion item represents a collapsible section WITHIN the accordion. consists of a header + body-->

        <!-- header (typically item title) contains a clickable element such as a button, that triggers expansion/collapse of the corersponding accordion body-->
        <h2 class="accordion-header" id="headingX"> <!-- TODO: interpolate index into ID -->


            <!-- DATA ATTRIBUTES:
            data-bs-toggle - attribute is added to the accordion header element and specifies the type of action that triggers the toggle.
            data-bs-target - attribute is added to the accordion header element and specifies the ID of the associated accordion body that should expand or collapse.-->

            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseX"
                aria-expanded="false" aria-controls="collapseX"> <!-- TODO: interpolate index into ID -->
                Accordion Header Name X (This will be menu category X, and will expand to show another accordion)
            </button>

            <!-- ./ close accordion-header -->
        </h2>

        <div id="collapseX" class="accordion-collapse collapse" aria-labelledby="headingX"
            data-bs-parent="#accordionExample">


            <!-- MENU ITEM LIST FOR CATEGORY 1: This holds the content that gets expanded or collapsed. It contains the actual contents of the accorsion item. -->
            <div class="accordion-body">
                Menu Category X (Breakfast)
                This is the body of an accordion item. We will actually be nesting another accordion layer here.


                <!-- START OF NESTED ELEMENTS: this is the start of the nested elements -->


                <!-- Nested Accordion -->
                <div id="nestedAccordionX"> <!-- TODO: interpolate index into ID -->

                    <!-- Nested Accordion Item -->
                    <div class="accordion-item">

                        <!-- Nested Accordion header -->
                        <h2 class="accordion-header" id="nestedHeadingX"> <!-- TODO: interpolate index into ID -->
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#nestedCollapseX" aria-expanded="false" aria-controls="nestedCollapseX">
                                Nested Accordion Item X
                            </button>
                        </h2>
                        <!-- ./ Nested Accordion header -->
                        <!-- Nested collapse X -->
                        <div id="nestedCollapseX" class="accordion-collapse collapse" aria-labelledby="nestedHeadingX"
                            data-bs-parent="#nestedAccordionX"> <!-- TODO: interpolate index into ID -->

                            <!-- Nested body -->
                            <div class="accordion-body">
                                Content for Nested X Accordion Item X
                                <!-- TODO: interpolate body content for menu item -->

                                <!-- ./ close Nested body -->
                            </div>

                            <!-- ./ close Nested collapse X -->
                        </div>

                        <!-- ./ close Nested Accordion Item. ADD OTHER MENU CATEGORIES HERE -->
                    </div>





                    <!-- ./ close nested accordion -->
                </div>

                <!-- END OF NESTED ACCORDION: this is the end of the nested accordion. -->

                <!-- Nested Y Accordion -->
                <div id="nestedYAccordionX"> <!-- TODO: interpolate index into ID -->





                    <!-- ./ close nested accordion -->
                </div>

                <!-- END OF NESTED ACCORDION: this is the end of the nested accordion. -->

                <!-- ./ close accordion-body -->
            </div>
            <!-- ./ close accordion-collapse -->
        </div>


        <!-- ./ close accordion-item -->
    </div>



    <!-- ./ close accordion -->
</div>


<script>
    // JS HTML DOM document object is the owner of all other objects in page
    // .ready() offers a way to run JS code as soon as page's (DOM) becomes safe to manipulate.
    // Ready Click and Ajax are all functions of jQuery



    function loadMenus() {
        const completeMenu = [];
        const menuCategories = ["Sandwiches", "Poke Bowls", "Salads"];
        const categoryData = {}; // Object to store the category data

        function generateAccordionItems(completeMenu) {
            if (completeMenu.length === menuCategories.length) {
                menuCategories.forEach((category, index) => {
                    categoryData[category] = completeMenu[index];
                });

                console.log(`This is categoryData var: ${categoryData}`);
                console.log(JSON.stringify(categoryData));

                // Generate the nested accordion items using categoryData
                // ...
            }
        }

        $(document).ready(function () {
            // Fetch Sandwich data from the sandwich file
            $.ajax({
                url: "./files/menus/green_mountain/sandwiches_greenmountain.csv",
                dataType: "text",
                success: function (data) {
                    // Process the data and assign it to completeMenu
                    // ...

                    completeMenu.push(sandwichMenu);
                    generateAccordionItems(completeMenu);
                    console.log(`This is the complete menu after Sandwich: ${completeMenu}`);
                },
            });

            // Fetch Poke Bowl data from the pokebowl file
            $.ajax({
                url: "./files/menus/green_mountain/pokebowls_greenmountain.csv",
                dataType: "text",
                success: function (data) {
                    // Process the data and assign it to completeMenu
                    // ...

                    completeMenu.push(pokebowlMenu);
                    generateAccordionItems(completeMenu);
                    console.log(`This is the complete menu after Poke: ${completeMenu}`);
                },
            });

            // Fetch Salads data from the salad file
            $.ajax({
                url: "./files/menus/green_mountain/salads_greenmountain.csv",
                dataType: "text",
                success: function (data) {
                    // Process the data and assign it to completeMenu
                    // ...

                    completeMenu.push(saladMenu);
                    generateAccordionItems(completeMenu);
                    console.log(`This is the complete menu after Salads: ${completeMenu}`);
                },
            });
        });

        menuCategories.forEach((category, index) => {
            const accordionItem = `
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                ${category}
              </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                ${category}
                <div id="nestedAccordion${category}${index}">
                  <!-- Nested accordion items will be dynamically generated here -->
                </div>
              </div>
            </div>
          </div>
        `;

            document.getElementById('accordionExample').innerHTML += accordionItem;
        });

        function generateNestedAccordionItems(categoryData) {
            // Loop through each category in categoryData
            for (const category in categoryData) {
                const categoryItems = categoryData[category];
                let nestedAccordionItems = '';

                // Generate the nested accordion items for each category
                categoryItems.forEach((item, index) => {
                    const itemContent = `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="nestedHeading${index}">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#nestedCollapse${index}" aria-expanded="true" aria-controls="nestedCollapse${index}">
                            ${item.ItemName}
                        </button>
                    </h2>
                    <div id="nestedCollapse${index}" class="accordion-collapse collapse" aria-labelledby="nestedHeading${index}" data-bs-parent="#nestedAccordion${category}${index}">
                        <div class="accordion-body">
                            <p>${item.description}</p>
                            <p>Ingredients: ${item.Ingredients}</p>
                            <p>Allergens: ${item.Allergens}</p>
                            <p>Local Ingredients: ${item.LocalIngredients}</p>
                            <p>Dietary: ${item.Diet}</p>
                            <p>Nutrition Label: ${item.nutritionLabel}</p>
                        </div>
                    </div>
                </div>
            `;

                    nestedAccordionItems += itemContent;
                });

                // Append the nested accordion items to the corresponding nested accordion container
                document.getElementById(`nestedAccordion${category}`).innerHTML = nestedAccordionItems;
            }
        }








</script>