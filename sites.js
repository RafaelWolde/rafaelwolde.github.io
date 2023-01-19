const sitesList = [
    { title: 'First Deployed React App', relativePath: './sites/react/index.html', description: '"This Is An App Which will be deployed soon."' },
    { title: 'RAFAEL WOLDIE', relativePath: './index.html', description: '"This Is MY Github Pages Home page"' },
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
    projectsSection.insertAdjacentHTML('beforeend', GetPage(site.title, site.relativePath, site.description))
}
