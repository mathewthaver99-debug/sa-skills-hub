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

    {
        title: "IT Support Learnership",

        type: "learnership",
        typeDisplay: "Learnership",

        location: "gauteng",
        locationDisplay: "Gauteng",

        description:
            "Develop practical information technology and technical support skills.",

        provider:
            "Example Training Organisation",

        duration:
            "12 months",

        requirements:
            "Grade 12 and an interest in information technology.",

        applicationInfo:
            "Application information will be provided when this opportunity is published."
    },

    {
        title: "Junior Cloud Computing Internship",

        type: "internship",
        typeDisplay: "Internship",

        location: "western-cape",
        locationDisplay: "Western Cape",

        description:
            "Gain practical experience with cloud computing and modern IT technologies.",

        provider:
            "Example Technology Organisation",

        duration:
            "6 months",

        requirements:
            "Relevant IT qualification or current IT studies.",

        applicationInfo:
            "Application information will be provided when this opportunity is published."
    },

    {
        title: "AWS Cloud Fundamentals",

        type: "training",
        typeDisplay: "Training",

        location: "online",
        locationDisplay: "Online",

        description:
            "Learn the fundamentals of cloud computing, AWS services and cloud security.",

        provider:
            "Example Online Training Provider",

        duration:
            "8 weeks",

        requirements:
            "Basic computer literacy and an interest in cloud computing.",

        applicationInfo:
            "Training registration information will be provided when this course is published."
    },

    {
        title: "Junior IT Technician",

        type: "job",
        typeDisplay: "Job",

        location: "kwazulu-natal",
        locationDisplay: "KwaZulu-Natal",

        description:
            "Entry-level technical support opportunity for aspiring IT professionals.",

        provider:
            "Example IT Services Company",

        duration:
            "Permanent",

        requirements:
            "Basic computer troubleshooting knowledge and good communication skills.",

        applicationInfo:
            "Application information will be provided when this opportunity is published."
    },

    {
        title: "Web Development Learnership",

        type: "learnership",
        typeDisplay: "Learnership",

        location: "eastern-cape",
        locationDisplay: "Eastern Cape",

        description:
            "Learn the fundamentals of web development and modern programming.",

        provider:
            "Example Digital Skills Organisation",

        duration:
            "12 months",

        requirements:
            "Grade 12 and an interest in programming or web development.",

        applicationInfo:
            "Application information will be provided when this opportunity is published."
    },

    {
        title: "Introduction to Python",

        type: "training",
        typeDisplay: "Training",

        location: "online",
        locationDisplay: "Online",

        description:
            "Build foundational programming skills using the Python programming language.",

        provider:
            "Example Online Training Provider",

        duration:
            "6 weeks",

        requirements:
            "Basic computer literacy. No previous programming experience required.",

        applicationInfo:
            "Training registration information will be provided when this course is published."
    }

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

        <p class="location">
            📍 ${opportunity.locationDisplay}
        </p>

        <div class="modal-section">

            <h3>Description</h3>

            <p>
                ${opportunity.description}
            </p>

        </div>

        <div class="modal-section">

            <h3>Opportunity Information</h3>

            <div class="modal-details">

                <p>
                    <strong>Provider:</strong>
                    ${opportunity.provider}
                </p>

                <p>
                    <strong>Duration:</strong>
                    ${opportunity.duration}
                </p>

                <p>
                    <strong>Location:</strong>
                    ${opportunity.locationDisplay}
                </p>

                <p>
                    <strong>Type:</strong>
                    ${opportunity.typeDisplay}
                </p>

            </div>

        </div>

        <div class="modal-section">

            <h3>Requirements</h3>

            <p>
                ${opportunity.requirements}
            </p>

        </div>

        <div class="modal-section">

            <h3>Application Information</h3>

            <p>
                ${opportunity.applicationInfo}
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
