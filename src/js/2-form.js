const formData = {
    email: "",
    message: ""
}

const form = document.querySelector('.feedback-form');
const inputValue = form.querySelector('input');
const textareaValue = form.querySelector('textarea');

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
    const parsedData = JSON.parse(savedData)
    formData.email = parsedData.email;
    formData.message = parsedData.message;
    inputValue.value = formData.email;
    textareaValue.value = formData.message;
}

form.addEventListener('input', event => {
    const { name, value } = event.target;

    formData[name] = value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = "";
    formData.message = "";
    inputValue.value = "";
    textareaValue.value = "";
});