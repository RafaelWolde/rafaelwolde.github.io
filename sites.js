const sitesList = [
{ title: 'Multi Step Form', relativePath: './sites/challenges/multi-step-form-main/index.html', description: 'This is a frontend development challenge    from frontend mentor and this is a multi step form with responsive layout." </head>   <link rel="stylesheet" href="/css/style.css'}, 
{ title: 'Frontend Mentor | QR code component', relativePath: './sites/challenges/qr-code-component-main/index.html', description: ''}, 
{ title: 'First Deployed React App', relativePath: './sites/react/index.html', description: 'This Is An App Which will be deployed soon.'}, 
{ title: 'RAFAEL WOLDIE', relativePath: './index.html', description: 'This Is MY Github Pages Home page'}, 
]

function GetPage(title, relativePath, description) {
    return (
        `<div class="project contain">
            <p class="title">
                ${title}
            </p>
            <div class="thumbnail">
                <div class="iframe_container">
                    <iframe src="${relativePath}" frameborder="0"></iframe>
                </div>
                <div class="site_description description mid-center">
                    <p>
                        ${description}
                    </p>
                </div>
            </div>
            <a href="${relativePath}" class="link">Go</a>
        </div>`
    )
}

const projectsSection = document.getElementById('projects')

for (const site of sitesList) {
    if (site.relativePath == './index.html') {
        console.warn("Recursive I Frame.")
        continue;
    }
    projectsSection.insertAdjacentHTML('beforeend', GetPage(site.title, site.relativePath, site.description))
}
