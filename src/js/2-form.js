const formData = {
    email: '',
    message: '',
}

const form = document.querySelector('.feedback-form');
const emailValue = form.querySelector('input');
const messagevalue = form.querySelector('textarea');

const loadData = localStorage.getItem('feedback-form-state');
if (loadData) {
    const parsedData = JSON.parse(loadData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;
    emailValue.value = formData.email;
    messagevalue.value = formData.message;
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
    formData.email = '';
    formData.message = '';
    emailValue.value = '';
    messagevalue.value = '';
});

