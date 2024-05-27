
let bodyRef = document.querySelector('body');
let mainContainer = document.querySelector('.mainContainer');


input = document.querySelector('input');
submit = document.querySelector('.submit');
let inputStore = '';


list = document.querySelector('ul');

deleteColumn = document.querySelector('.deleteColumn')
lista = document.querySelector('ul');


submit.addEventListener('click', () => {
    inputStore = input.value;
    listPoints = document.createElement('li');
    listPoints.textContent = inputStore;
    list.append(listPoints);

    deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete');
    deleteBtn.textContent = 'X';
    listPoints.append(deleteBtn);

    deleteBtn.addEventListener('click', (e) => {
        e.target.parentElement.remove();
   });
    input.value = '';
    input.focus();
    
});




input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        submit.click();
    }
});





