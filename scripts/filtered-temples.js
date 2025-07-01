// Set copyright year and last modified date
const year = new Date().getFullYear();
const copyright = document.querySelector("#copyright");
copyright.innerHTML = `&copy;${year}`;

const lastUpdated = document.querySelector("#lastUpdated");
lastUpdated.innerHTML = document.lastModified;

// Temples data array
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    },
    {
        templeName: "Bangkok Thailand",
        location: "Bangkok, Thailand",
        dedicated: "2023, October, 22",
        area: 48525,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg",
    },
    {
        templeName: "Orem Utah",
        location: "Orem, Utah, United States",
        dedicated: "2024, January, 21",
        area: 71998,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/orem-utah-temple/orem-utah-temple-39549-main.jpg",
    },
    {
        templeName: "Helena Montana",
        location: "Helena, Montana, United States",
        dedicated: "2023, June, 18",
        area: 9794,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/helena-montana-temple/helena-montana-temple-37751-main.jpg",
    },
    {
        templeName: "Saratoga Springs Utah",
        location: "Saratoga Springs, Utah, United States",
        dedicated: "2023, August, 13",
        area: 97836,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/saratoga-springs-utah-temple/saratoga-springs-utah-temple-32872-main.jpg",
    },
];

// Get the album container
const albumContainer = document.querySelector(".album-container");

// Function to create temple cards
function createTempleCard(temple) {
    return `
        <div class="temple-card">
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" 
                 alt="${temple.templeName}" 
                 loading="lazy"
                 width="400" 
                 height="250">
        </div>
    `;
}

// Function to display temples
function displayTemples(templesToShow) {
    albumContainer.innerHTML = templesToShow
        .map((temple) => createTempleCard(temple))
        .join("");
}

// Function to get year from dedicated date string
function getYearFromDate(dedicatedDate) {
    return parseInt(dedicatedDate.split(",")[0]);
}

// Filter functions
function filterOldTemples() {
    return temples.filter((temple) => getYearFromDate(temple.dedicated) < 1900);
}

function filterNewTemples() {
    return temples.filter((temple) => getYearFromDate(temple.dedicated) > 2000);
}

function filterLargeTemples() {
    return temples.filter((temple) => temple.area > 90000);
}

function filterSmallTemples() {
    return temples.filter((temple) => temple.area < 10000);
}

// Add event listeners to navigation links
document.addEventListener("DOMContentLoaded", function () {
    // Display all temples initially
    displayTemples(temples);

    // Get all navigation links
    const navLinks = document.querySelectorAll(".menu a");

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const linkText = this.textContent.toLowerCase();
            let filteredTemples = [];

            switch (linkText) {
                case "home":
                    filteredTemples = temples;
                    break;
                case "old":
                    filteredTemples = filterOldTemples();
                    break;
                case "new":
                    filteredTemples = filterNewTemples();
                    break;
                case "large":
                    filteredTemples = filterLargeTemples();
                    break;
                case "small":
                    filteredTemples = filterSmallTemples();
                    break;
                default:
                    filteredTemples = temples;
            }

            displayTemples(filteredTemples);

            // Close mobile menu after selection
            const checkbox = document.getElementById("check");
            if (checkbox.checked) {
                checkbox.checked = false;
            }
        });
    });
});
