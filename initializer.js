
function GetPage(title, relativePath, description) {
    return (
        `<div class="project contain">
            <p class="title">
                ${title}
            </p>
            <div class="thumbnail">
                <div class="iframe_container">
                    <iframe src="${relativePath}" frameborder="0" scrolling="no" style="width:100%; height:100%;"></iframe>
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

const projectList = document.getElementsByClassName('project')

for (const project of projectList) {
    project.addEventListener('click', goToProject)
}
function goToProject() {
    this.querySelector('a.link').click()
}