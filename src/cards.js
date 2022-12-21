
function renderManager(manager) {
    return `<div class="card card-body" >
        <h5 class="card-title" id="manager-name">${manager.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted" id="manager-title">Manager</h6>
        <p class="card-text" id="manager-ID">ID: ${manager.id}</p>
        <p class="card-text" id="manager-email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p class="card-text" id="manager-office">Office Number: ${manager.officeNum}</p>
    </div>`
}


function renderEngineer(engineer) {
    return `<div class="card card-body" >
        <h5 class="card-title" id="engineer-name">${engineer.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted" id="engineer-title">Engineer</h6>
        <p class="card-text" id='engineer-ID'>ID: ${engineer.id}</p>
        <p class="card-text" id="engineer-email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p class="card-text" id="engineer-github">Github:<a href="https://github.com/${engineer.github}" target="_blank"> ${engineer.github}</a></p>
    </div>`;
}


function renderIntern(intern) {
    return `<div class="card card-body" >
        <h5 class="card-title" id="intern-name">${intern.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted" id="intern-title">Intern</h6>
        <p class="card-text" id="intern-ID">ID: ${intern.id}</p>
        <p class="card-text" id="intern-email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
        <p class="card-text" id="intern-school">School: ${intern.school}</a></p>
    </div>`;
}






module.exports = {renderManager, renderEngineer, renderIntern}; 