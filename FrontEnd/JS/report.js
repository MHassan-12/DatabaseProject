const baseURL = "https://symmetrical-space-trout-g46jr65gr4jq39g69-3000.app.github.dev"; // Backend URL

const endpoints = {
    users: "/totalusers",
    students: "/userprogress",
    instructors: "/modules",
    courses: "/totalcourses",
    enrollments: "/totalenrollments",
    lessons: "/totallessons",
    payments: "/totalpayments",
    certificates: "/totalcertificates",
    discussions: "/totaldiscussions",
    categories: "/totalcategories"
};

// Load single count
function loadCount(key) {
    fetch(baseURL + endpoints[key])
        .then(response => {
            if (!response.ok) throw new Error(`Failed to fetch ${key}: ${response.status}`);
            return response.json();
        })
        .then(data => {
            console.log(`Fetched for ${key}:`, data);
            if (data.count !== undefined) {
                document.getElementById(key).innerText = data.count;
            } else {
                document.getElementById(key).innerText = "Invalid format";
                console.error(`Invalid format for ${key}`);
            }
        })
        .catch(err => {
            document.getElementById(key).innerText = "Error";
            console.error(`Failed to fetch ${key}:`, err.message);
        });
}

// Load all counts
function loadAllCounts() {
    Object.keys(endpoints).forEach(loadCount);
}

// Hide single count
function hideCount(key) {
    document.getElementById(key).innerText = "--";
}

// Hide all counts
function hideAllCounts() {
    Object.keys(endpoints).forEach(hideCount);
}
