window.addEventListener("DOMContentLoaded", () => {
    const base = "https://symmetrical-space-trout-g46jr65gr4jq39g69-3000.app.github.dev";

    // USERS
    fetch(`${base}/users`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#userstable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr>
                <td>${item.user_id}</td>
                <td>${item.username}</td>
                <td>${item.email}</td>
                <td>${item.first_name}</td>
                <td>${item.last_name}</td>
                <td>${item.date_of_birth || ''}</td>
                <td>${item.profile_picture_url || ''}</td>
                <td>${item.account_created_at}</td>
                <td>${item.last_login || ''}</td>
                <td>${item.account_status}</td>
                <td>${item.user_role}</td>
            </tr>`;
        });
    });

    // COURSES
    fetch(`${base}/courses`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#coursestable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr>
                <td>${item.course_id}</td>
                <td>${item.title}</td>
                <td>${item.description || ''}</td>
                <td>${item.instructor_id}</td>
                <td>${item.category_id || ''}</td>
                <td>${item.price}</td>
                <td>${item.duration_hours || ''}</td>
                <td>${item.difficulty_level || ''}</td>
                <td>${item.created_at}</td>
                <td>${item.updated_at || ''}</td>
                <td>${item.is_published ? "Yes" : "No"}</td>
                <td>${item.thumbnail_url || ''}</td>
            </tr>`;
        });
    });

    // ENROLLMENTS
    fetch(`${base}/enrollments`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#enrollmentstable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr>
                <td>${item.enrollment_id}</td>
                <td>${item.user_id}</td>
                <td>${item.course_id}</td>
                <td>${item.enrollment_date}</td>
                <td>${item.completion_status}</td>
                <td>${item.completion_percentage}</td>
                <td>${item.last_accessed || ''}</td>
                <td>${item.rating || ''}</td>
                <td>${item.review || ''}</td>
            </tr>`;
        });
    });

    // MODULES
    fetch(`${base}/modules`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#modulestable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr>
                <td>${item.module_id}</td>
                <td>${item.course_id}</td>
                <td>${item.title}</td>
                <td>${item.description || ''}</td>
                <td>${item.sequence_number}</td>
                <td>${item.created_at}</td>
                <td>${item.updated_at || ''}</td>
            </tr>`;
        });
    });

    // LESSONS
    fetch(`${base}/lessons`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#lessonstable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr>
                <td>${item.lesson_id}</td>
                <td>${item.module_id}</td>
                <td>${item.title}</td>
                <td>${item.description || ''}</td>
                <td>${item.content_type}</td>
                <td>${item.content_url || ''}</td>
                <td>${item.duration_minutes || ''}</td>
                <td>${item.sequence_number}</td>
                <td>${item.is_free_preview ? "Yes" : "No"}</td>
                <td>${item.created_at}</td>
                <td>${item.updated_at || ''}</td>
            </tr>`;
        });
    });

    // USER PROGRESS
    fetch(`${base}/UserProgress`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#progresstable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr>
                <td>${item.progress_id}</td>
                <td>${item.user_id}</td>
                <td>${item.lesson_id}</td>
                <td>${item.enrollment_id}</td>
                <td>${item.completion_status}</td>
                <td>${item.started_at || ''}</td>
                <td>${item.completed_at || ''}</td>
                <td>${item.last_accessed || ''}</td>
                <td>${item.time_spent_minutes}</td>
            </tr>`;
        });
    });

    // DISCUSSIONS
    fetch(`${base}/discussions`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#discussionstable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr>
                <td>${item.discussion_id}</td>
                <td>${item.course_id}</td>
                <td>${item.user_id}</td>
                <td>${item.parent_discussion_id || ''}</td>
                <td>${item.title}</td>
                <td>${item.content}</td>
                <td>${item.created_at}</td>
                <td>${item.updated_at}</td>
                <td>${item.is_pinned ? "Yes" : "No"}</td>
            </tr>`;
        });
    });

    // PAYMENTS
    fetch(`${base}/payments`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#paymentstable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr>
                <td>${item.payment_id}</td>
                <td>${item.user_id}</td>
                <td>${item.course_id}</td>
                <td>${item.amount}</td>
                <td>${item.payment_date}</td>
                <td>${item.payment_method}</td>
                <td>${item.transaction_id || ''}</td>
                <td>${item.status}</td>
                <td>${item.invoice_url || ''}</td>
            </tr>`;
        });
    });

    // CATEGORIES
    fetch(`${base}/categories`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#categoriestable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr>
                <td>${item.category_id}</td>
                <td>${item.name}</td>
                <td>${item.description || ''}</td>
                <td>${item.parent_category_id || ''}</td>
            </tr>`;
        });
    });

    // CERTIFICATES
    fetch(`${base}/certificates`).then(r => r.json()).then(data => {
        const tbody = document.querySelector("#certificatestable tbody");
        data.forEach(item => {
            tbody.innerHTML += `<tr>
                <td>${item.certificate_id}</td>
                <td>${item.user_id}</td>
                <td>${item.course_id}</td>
                <td>${item.enrollment_id}</td>
                <td>${item.issue_date}</td>
                <td>${item.certificate_url}</td>
                <td>${item.verification_code}</td>
            </tr>`;
        });
    });
});
