const sitesList = [
    { title: 'Multi Step Form', relativePath: './sites/plain/multi-step-form-main/index.html', description: 'This is a frontend development challenge    from frontend mentor and this is a multi step form with responsive layout.' },
    { title: 'NEWS HOMEPAGE CHALLENGE', relativePath: './sites/plain/news-homepage-main/index.html', description: '   This is My third challenge on frontend mentor. This is a homepage for a news website.' },
    { title: 'Frontend Mentor | Notifications page', relativePath: './sites/plain/notifications-page-main/index.html', description: 'Frontend Mentor challenge for newbies   a single page for notifications' },
    { title: 'Frontend Mentor | Product preview card component', relativePath: './sites/plain/product-preview-card-component-main/index.html', description: 'This is a FrontendMentor challenge Which I build using React.' },
    { title: 'Frontend Mentor | QR code component', relativePath: './sites/plain/qr-code-component-main/index.html', description: 'This is my very first challenge    from frontendMentor which is a QRCode scanner card.' },
    { title: 'Frontend Mentor | Results summary component', relativePath: './sites/plain/results-summary-component-main/index.html', description: '' },
    { title: 'Document', relativePath: './sites/plain/index.html', description: '' },
    { title: 'APP | Frontend Mentor intro section with dropdown', relativePath: './sites/react/intro-section-with-dropdown/static/index.html', description: 'This is a frontend mentor challenge      it is built using React.js' },
    { title: 'First Deployed React App', relativePath: './sites/react/index.html', description: 'This Is An App Which will be deployed soon.' },
    { title: 'Document', relativePath: './sites/index.html', description: '' },
    { title: 'RAFAEL WOLDIE', relativePath: './index.html', description: 'This Is MY Github Pages Home page' },
]

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
