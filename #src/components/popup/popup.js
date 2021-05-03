import { body_lock_add, body_lock_remove, unlock } from "../../js/body_lock"
import { DOM } from "../../js/DOM";
import { sendRequest } from "./saveStudent";


const input_lastNameEl = DOM.getEl('.popup__input--lastname');
const input_nameEl = DOM.getEl('.popup__input--name');
const input_surnameEl = DOM.getEl('.popup__input--middlename');
class Client {

    constructor(name, surname, lastName, ...contacts) {
        this.name = name;
        this.surname = surname;
        this.lastName = lastName;
        this.contacts = [...contacts]
    }

}


const addContact = () => {

}

export const savePerson = ev => {
    const btn_saveEl = ev.target.closest('.popup__btn-save');

    if (btn_saveEl) {

        ev.preventDefault()

        if (input_lastNameEl.value.trim() !== '' && input_nameEl.value.trim() !== '') {

            const newClient = new Client(input_nameEl.value, input_surnameEl.value, input_lastNameEl.value, { type: 'VK', value: 'hhtps://vk.com' }, { type: 'fb', value: 'hhtps://fb.com' })

            sendRequest('http://localhost:5000/api/clients', newClient)
        }



    }

};



// #####################################################################

const popup_open = item => {
    if (unlock) {

        if (!DOM.getEl('.menu__body._active')) {
            body_lock_add(500);
        }
        DOM.addClass(item, '_active');
        // focusManager.capture(item)
    }
}

const popup_close = (item, bodyUnlock = true) => {
    if (unlock) {
        DOM.removeClass(item, '_active');;
        if (!DOM.getEl('.menu__body._active') && bodyUnlock) {
            body_lock_remove(500);
        }
    }
}


export const activatePopup = event => {
    const popup_btnAddEl = event.target.closest('.hero__btn');
    const popup_btnEditEl = event.target.closest('.hero__table-btn--edit');
    const popup_addEL = DOM.getEl('.popup-add');
    const popup_editEl = DOM.getEl('.popup-edit');
    const popup_close_iconEl = event.target.closest('.popup__close');
    const popupsAll = document.querySelectorAll('.popup');

    if (popup_close_iconEl) {
        const popup_activeEl = popup_close_iconEl.closest('.popup');
        popup_close(popup_activeEl)
    } else if (!event.target.closest('.popup__body')) {
        popupsAll.forEach(el => {
            el.classList.contains('_active') ? popup_close(el) : false
        })
    }

    if (popup_btnAddEl) {
        popup_open(popup_addEL)
    }

    if (popup_btnEditEl) {
        popup_open(popup_editEl)
    }
}
