import { DOM } from "../../../js/DOM"

const getTemplateContact = () => {
    return `
    <div class="popup__contact-inner">
    <div class="select select-add select-add--email">
    </div>
    <input type="text" class="popup__contact-input" placeholder="Введите данные контакта">
    <button type="reset" class="popup__contact-del" aria-label="Удалить контакт"></button>
    </div>
    `
}

export class Contact {

    constructor(el) {
        this.el = DOM.getEl(el)

        this.#setup()
    }

    #setup() {
        this.clickHandler = this.clickHandler.bind(this)
        const btn_addContactEl = this.el.querySelector('[data-type = "btn-addContact"]')
        btn_addContactEl.addEventListener('click', this.clickHandler)
    }

    a = 5;

    clickHandler() {
        alert(this.a)
    }

}

