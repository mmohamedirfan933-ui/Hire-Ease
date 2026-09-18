// SAMPLE JOB DATA

let jobs = [

    {
        title: "Frontend Developer",
        company: "Nova Digital",
        location: "Coimbatore",
        type: "Short-term",
        skills: ["HTML", "CSS", "JavaScript"],
        pay: "₹1,500/day",
        description:
            "Build and improve a responsive website."
    },

    {
        title: "Electronics Technician",
        company: "Delta Works",
        location: "Coimbatore",
        type: "Part-time",
        skills: ["Electronics", "Testing", "PCB"],
        pay: "₹1,200/day",
        description:
            "Assist in testing and troubleshooting electronic equipment."
    },

    {
        title: "UI Designer",
        company: "PixelCraft",
        location: "Remote",
        type: "Short-term",
        skills: ["Figma", "UI/UX"],
        pay: "₹4,000/project",
        description:
            "Design a clean user interface for a web application."
    },

    {
        title: "Embedded Systems Intern",
        company: "TechSpark",
        location: "Dindigul",
        type: "Full-time",
        skills: ["C", "Embedded", "Arduino"],
        pay: "₹12,000/month",
        description:
            "Work on microcontroller based embedded projects."
    }

];


let applications = 0;


// DISPLAY JOBS

function displayJobs() {

    let search =
        document.getElementById("search").value.toLowerCase();

    let location =
        document.getElementById("location").value;

    let type =
        document.getElementById("type").value;


    let filteredJobs = jobs.filter(function(job) {

        let text =
            (
                job.title +
                " " +
                job.company +
                " " +
                job.skills.join(" ")
            ).toLowerCase();


        return (

            text.includes(search)

            &&

            (location === "" ||
                job.location === location)

            &&

            (type === "" ||
                job.type === type)

        );

    });


    let container =
        document.getElementById("jobContainer");


    if (filteredJobs.length === 0) {

        container.innerHTML =
            "<div class='job-card'>" +
            "<h3>No jobs found</h3>" +
            "<p>Try another search.</p>" +
            "</div>";

        return;
    }


    container.innerHTML =
        filteredJobs.map(function(job, index) {

            return `

                <div class="job-card">

                    <div>

                        <div class="job-header">

                            <div class="company-icon">
                                ${job.company.charAt(0)}
                            </div>

                            <div>

                                <h3>
                                    ${job.title}
                                </h3>

                                <small>
                                    ${job.company}
                                </small>

                            </div>

                        </div>


                        <div class="tags">

                            <span class="tag">
                                📍 ${job.location}
                            </span>

                            <span class="tag">
                                ${job.type}
                            </span>

                            ${job.skills.map(function(skill) {

                                return `
                                    <span class="tag">
                                        ${skill}
                                    </span>
                                `;

                            }).join("")}

                        </div>


                        <p>
                            ${job.description}
                        </p>

                    </div>


                    <div class="job-right">

                        <div class="pay">
                            ${job.pay}
                        </div>

                        <button
                            class="primary-btn"
                            onclick="applyJob(${index})">

                            Apply Now

                        </button>

                    </div>

                </div>

            `;

        }).join("");

}


// APPLY JOB

function applyJob(index) {

    applications++;

    document.getElementById(
        "applicationCount"
    ).innerText = 3 + applications;


    showMessage(
        "Application submitted successfully ✓"
    );

}


// POST JOB

function postJob(event) {

    event.preventDefault();


    let newJob = {

        title:
            document.getElementById("jobTitle").value,

        company:
            document.getElementById("company").value,

        location:
            document.getElementById("jobLocation").value,

        type:
            document.getElementById("jobType").value,

        skills:
            document.getElementById("skills").value
                .split(","),

        pay:
            document.getElementById("pay").value,

        description:
            document.getElementById("description").value

    };


    jobs.unshift(newJob);


    event.target.reset();


    showMessage(
        "Job published successfully ✓"
    );


    goToJobs();

    displayJobs();

}


// LOGIN

function openLogin() {

    document.getElementById(
        "loginModal"
    ).style.display = "flex";

}


function closeLogin() {

    document.getElementById(
        "loginModal"
    ).style.display = "none";

}


function login() {

    closeLogin();

    showMessage(
        "Demo login successful ✓"
    );

}


// REGISTER

function openRegister() {

    document.getElementById(
        "registerModal"
    ).style.display = "flex";

}


function closeRegister() {

    document.getElementById(
        "registerModal"
    ).style.display = "none";

}


function selectRole(button) {

    document.querySelectorAll(
        ".roles button"
    ).forEach(function(btn) {

        btn.style.borderColor =
            "#dce3ec";

    });


    button.style.borderColor =
        "#2563eb";

}


function register() {

    let name =
        document.getElementById(
            "username"
        ).value;


    if (name === "") {

        showMessage(
            "Please enter your name."
        );

        return;
    }


    closeRegister();


    showMessage(
        "Profile created successfully ✓"
    );

}


// NAVIGATION

function goToJobs() {

    document.getElementById(
        "jobs"
    ).scrollIntoView();

}


function goToPost() {

    document.getElementById(
        "post"
    ).scrollIntoView();

}


// TOAST MESSAGE

function showMessage(message) {

    let toast =
        document.getElementById("toast");


    toast.innerText = message;

    toast.style.display = "block";


    setTimeout(function() {

        toast.style.display = "none";

    }, 2500);

}


// RECOMMENDED JOBS

function recommendedJobs() {

    let container =
        document.getElementById(
            "recommended"
        );


    container.innerHTML = jobs
        .slice(0, 4)
        .map(function(job) {

            return `

                <div class="recommend">

                    <div>

                        <b>
                            ${job.title}
                        </b>

                        <small>
                            ${job.company}
                            •
                            ${job.location}
                        </small>

                    </div>

                    <strong>
                        90% Match
                    </strong>

                </div>

            `;

        }).join("");

}


// INITIAL LOAD

displayJobs();

recommendedJobs();