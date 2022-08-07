import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea')
}
const STORAGE_VALUE = 'feedback-form-state'
const formData = {};

function onFormSubmit(e) {
    if (refs.input.value === "" || refs.message.input === "") {
        return alert('Заполните все поля')
    } else {
        e.preventDefault();
        e.target.reset();
        localStorage.removeItem(STORAGE_VALUE)
    }
}

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    const stringData = JSON.stringify(formData);
    localStorage.setItem(STORAGE_VALUE, stringData);
}

function restoreData() {
    const restData = JSON.parse(localStorage.getItem(STORAGE_VALUE));

    if (restData) {
        refs.input.value = restData.email || '';
        refs.message.value = restData.message || '';
    }
}
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
restoreData()
