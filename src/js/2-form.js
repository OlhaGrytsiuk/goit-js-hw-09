const form = document.querySelector('.feedback-form');
const emailForm = document.querySelector('.feedback-form input');
const messageForm = document.querySelector('.feedback-form textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {
  email: '',
  message: '',
};
populateForm();
form.addEventListener('input', onMessageInput);
form.addEventListener('submit', onFormSubmit);

function onMessageInput(event) {
  formData[event.target.name] = event.target.value;
  const stringifyFormData = JSON.stringify(formData);
  localStorage.setItem(LOCALSTORAGE_KEY, stringifyFormData);
}

function onFormSubmit(event) {
  event.preventDefault();
  if (emailForm.value === '' || messageForm.value === '') {
    return alert('Fill please all fields');
  }
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
function populateForm() {
  const savedObject = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (savedObject) {
    emailForm.value = savedObject.email;
    messageForm.value = savedObject.message;
    formData.email = savedObject.email;
    formData.message = savedObject.message;
  }
}
