import { DOM } from "../../js/DOM";
import { Fetch } from "../../js/fetch";
import { validateForm } from "../../js/validateForms";

const api_url = 'http://localhost:5000/api/clients'
class Client {

    constructor(name, surname, lastName, contacts) {
        this.name = name;
        this.surname = surname;
        this.lastName = lastName;
        this.contacts = contacts
    }
}

const getContacts = () => {
    const contacts = []
    const inputsContactsEl = DOM.getAllEl('.popup__contact-inner');

    inputsContactsEl.forEach(el => {
        const input = el.querySelector('.popup__contact-input')
        let obj = {
            type: input.getAttribute('data-type'),
            value: input.value.trim()
        }
        contacts.push(obj)
        input.value = ''
    })

    return contacts;
}

const sendNewClient = (url, name, surname, lastName) => {
    Fetch.sendRequest(url, new Client(
        name,
        lastName,
        surname,
        getContacts()
    ))
}



export const saveClient = (event) => {
    const { type } = event.target.dataset


    if (type === 'btn-save') {
        event.preventDefault()

        const name = DOM.getEl('.popup-add__input--name').value.trim();
        const surname = DOM.getEl('.popup-add__input--surname').value.trim();
        const lastName = DOM.getEl('.popup-add__input--lastname').value.trim();
        const message_errEl = DOM.getEl('.popup__error')

        if (validateForm()) {

            sendNewClient(api_url, name, lastName, surname)

            DOM.getEl('.popup-add__input--name').value = '';
            DOM.getEl('.popup-add__input--surname').value = '';
            DOM.getEl('.popup-add__input--lastname').value = ''
            DOM.removeClass(message_errEl, 'popup__error--active')


        } else {
            message_errEl.textContent = 'Ошибка: Введенные данные не корректны.'
            DOM.addClass(message_errEl, 'popup__error--active')
        }

    }
}
