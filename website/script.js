/* =========================================================
SA SKILLS HUB - JAVASCRIPT
========================================================= */

/* =========================================================

1. TEMPORARY OPPORTUNITY DATA
   ========================================================= */

/*
This is temporary data for our local prototype.

Later, this information will come from an AWS database
such as Amazon DynamoDB.
*/

const opportunities = [

```
{
    title: "IT Support Learnership",
    type: "learnership",
    typeDisplay: "Learnership",
    location: "gauteng",
    locationDisplay: "Gauteng",
    description:
        "Develop practical information technology and technical support skills."
},

{
    title: "Junior Cloud Computing Internship",
    type: "internship",
    typeDisplay: "Internship",
    location: "western-cape",
    locationDisplay: "Western Cape",
    description:
        "Gain practical experience with cloud computing and modern IT technologies."
},

{
    title: "AWS Cloud Fundamentals",
    type: "training",
    typeDisplay: "Training",
    location: "online",
    locationDisplay: "Online",
    description:
        "Learn the fundamentals of cloud computing, AWS services and cloud security."
},

{
    title: "Junior IT Technician",
    type: "job",
    typeDisplay: "Job",
    location: "kwazulu-natal",
    locationDisplay: "KwaZulu-Natal",
    description:
        "Entry-level technical support opportunity for aspiring IT professionals."
},

{
    title: "Web Development Learnership",
    type: "learnership",
    typeDisplay: "Learnership",
    location: "eastern-cape",
    locationDisplay: "Eastern Cape",
    description:
        "Learn the fundamentals of web development and modern programming."
},

{
    title: "Introduction to Python",
    type: "training",
    typeDisplay: "Training",
    location: "online",
    locationDisplay: "Online",
    description:
        "Build foundational programming skills using the Python programming language."
}
```

];

/* =========================================================
2. GET HTML ELEMENTS
========================================================= */

/*
These variables allow JavaScript to interact with
elements from index.html.
*/

const searchInput = document.getElementById("searchInput");

const categoryFilter =
document.getElementById("categoryFilter");

const locationFilter =
document.getElementById("locationFilter");

const searchButton =
document.getElementById("searchButton");

const opportunityList =
document.getElementById("opportunityList");

const opportunityModal =
    document.getElementById("opportunityModal");

const modalContent =
    document.getElementById("modalContent");

const closeModal =
    document.getElementById("closeModal");

/* =========================================================
3. DISPLAY OPPORTUNITIES
========================================================= */

/*
This function receives a list of opportunities and
displays them on the webpage.
*/

function displayOpportunities(opportunityArray) {

```
/*
   Clear the existing opportunity cards.
*/

opportunityList.innerHTML = "";


/*
   Check whether there are any matching opportunities.
*/

if (opportunityArray.length === 0) {

    opportunityList.innerHTML = `
        <p class="no-results">
            No opportunities found.
        </p>
    `;

    return;
}


/*
   Create a card for every opportunity.
*/

opportunityArray.forEach(function(opportunity) {

    const card = document.createElement("article");

    card.classList.add("opportunity-card");


    card.innerHTML = `
    <span class="opportunity-type">
        ${opportunity.typeDisplay}
    </span>

    <h3>${opportunity.title}</h3>

    <p>
        ${opportunity.description}
    </p>

    <p class="location">
        📍 ${opportunity.locationDisplay}
    </p>

    <button class="view-button">
        View Opportunity
    </button>
`;

const viewButton =
    card.querySelector(".view-button");

viewButton.addEventListener(
    "click",
    function() {

        showOpportunityDetails(opportunity);

    }
);


    opportunityList.appendChild(card);

});
```

}

function showOpportunityDetails(opportunity) {

    /*
       Create the content that will appear
       inside the modal.
    */

    modalContent.innerHTML = `

        <h2>
            ${opportunity.title}
        </h2>

        <span class="opportunity-type">
            ${opportunity.typeDisplay}
        </span>

        <p>
            ${opportunity.description}
        </p>

        <p class="location">
            📍 ${opportunity.locationDisplay}
        </p>

        <div class="modal-details">

            <h3>Opportunity Information</h3>

            <p>
                <strong>Type:</strong>
                ${opportunity.typeDisplay}
            </p>

            <p>
                <strong>Location:</strong>
                ${opportunity.locationDisplay}
            </p>

        </div>

    `;

    /*
       Make the modal visible.
    */

    opportunityModal.style.display = "flex";

}

closeModal.addEventListener(
    "click",
    function() {

        opportunityModal.style.display = "none";

    }
);

opportunityModal.addEventListener(
    "click",
    function(event) {

        if (event.target === opportunityModal) {

            opportunityModal.style.display = "none";

        }

    }
);

/* =========================================================
4. SEARCH AND FILTER
========================================================= */

/*
This function checks the search text, category and
location selected by the user.
*/

function searchOpportunities() {

```
/*
   Get the user's search text.

   trim() removes unnecessary spaces.

   toLowerCase() makes the search
   case-insensitive.
*/

const searchText =
    searchInput.value.trim().toLowerCase();


/*
   Get the selected category.
*/

const selectedCategory =
    categoryFilter.value;


/*
   Get the selected location.
*/

const selectedLocation =
    locationFilter.value;


/*
   Filter the opportunities.
*/

const filteredOpportunities =
    opportunities.filter(function(opportunity) {


        /*
           Check whether the search text matches
           the title or description.
        */

        const matchesSearch =
            opportunity.title.toLowerCase().includes(searchText) ||
            opportunity.description.toLowerCase().includes(searchText);


        /*
           Check the category.

           "all" means every category is accepted.
        */

        const matchesCategory =
            selectedCategory === "all" ||
            opportunity.type === selectedCategory;


        /*
           Check the location.

           "all" means every location is accepted.
        */

        const matchesLocation =
            selectedLocation === "all" ||
            opportunity.location === selectedLocation;


        /*
           The opportunity must satisfy ALL filters.
        */

        return (
            matchesSearch &&
            matchesCategory &&
            matchesLocation
        );

    });


/*
   Display the filtered results.
*/

displayOpportunities(filteredOpportunities);
```

}

/* =========================================================
5. SEARCH BUTTON EVENT
========================================================= */

/*
When the user clicks the Search button,
searchOpportunities() is executed.
*/

searchButton.addEventListener(
"click",
searchOpportunities
);

/* =========================================================
6. INITIAL DISPLAY
========================================================= */

/*
Display all opportunities when the page first loads.
*/

displayOpportunities(opportunities);
