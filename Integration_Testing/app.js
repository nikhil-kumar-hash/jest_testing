const { CheckAndGenerate, createElement} = require('./util');

const initApp = () => {
  // Initializes the app, registers the button click listener
  const newUserButton = document.querySelector('#btnAddUser');
  newUserButton.addEventListener('click', addUser);
};


const outputText = CheckAndGenerate(
    newUserNameInput.value,
    newUserAgeInput.value
  );

  if(!outputText){
      return;
  }

const addUser = () => {
  // Fetches the user input, creates a new HTML element based on it
  // and appends the element to the DOM

  const userList = document.querySelector('.user-list');
  
  const element = createElement('li', outputText, 'user-item');
  userList.appendChild(element);
};

initApp();