const index = require('../index'); 

const renderEmployee(...employees) {
    const cardEl = document.createElement('div'); 
    const name = document.createElement('h5'); 
    const position = document.createElement('h6'); 
    const email = document.createElement('p'); 
    const addtl = document.createElement('p'); 

    cardEl.classList.add('card', 'card-body'); 
    name.classList.add('card-title'); 
    position.classList.add('card-subtitle mb-2 test-muted'); 
    email.classList.add('card-text'); 
    addtl.classList.add('addtl-info-text'); 

    // name.innerHTML = employee.name; 
    // position.innerHTML = employee.position; 
    // email.innerHTML = employee.email; 
    // addtl.innerHTML = employee.text; 

    cardEl.appendChild(name); 
    cardEl.appendChild(position); 
    cardEl.appendChild(email); 
    cardEl.appendChild(addtl); 

}

module.exports = renderEmployee(); 