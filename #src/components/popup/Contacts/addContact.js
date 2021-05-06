import { DOM } from "../../../js/DOM"
import { Select } from "./select/select"

const getTemplateContact = (count = 0) => {

    return `
    <div class="popup__contact-inner">
    <div class="select select-add select-add--email${count}">
    
    </div>
    <input data-rule="contact" type="text" class="popup__contact-input" placeholder="Введите данные контакта">
    <button type="reset" class="popup__contact-del" data-type="btn-removeContact" aria-label="Удалить контакт"></button>
    </div>
    `
}

const createContactInput = (num, selector) => {

    selector.insertAdjacentHTML('afterBegin', getTemplateContact(num))

    new Select(`.select-add--email${num}`, {
        selectedId: '5',
        data: [
            { id: '1', type: 'tw', value: 'Твиттер' },
            { id: '2', type: 'fb', value: 'Фейсбук' },
            { id: '3', type: 'tg', value: 'Телеграмм' },
            { id: '4', type: 'phone', value: 'Телефон' },
            { id: '5', type: 'vk', value: 'Вконтакте' },
            { id: '6', type: 'watsapp', value: 'Ватсап' },
            { id: '7', type: 'email', value: 'Почта' }
        ],
    })
}

export class Contact {

    constructor(el) {
        this.el = document.querySelector(el)

        this.#setup()
    }

    #setup() {
        this.clickHandler = this.clickHandler.bind(this)
        // const btn_addContactEl = this.el.querySelector('[data-type = "btn-addContact"]')

        this.el.addEventListener('click', this.clickHandler)
    }

    #a = 0;
    clickHandler(ev) {
        const { type } = ev.target.dataset
        ev.preventDefault()

        const message_errEl = DOM.getEl('.popup__error')

        switch (type) {
            case 'btn-addContact':
                if (this.#a < 5) {
                    createContactInput(this.#a, this.el)
                    ++this.#a
                } else {
                    message_errEl.textContent = 'Ошибка: Лимит контактов'
                    DOM.addClass(message_errEl, 'popup__error--active')
                }
                break;
            case 'btn-removeContact':
                DOM.removeClass(message_errEl, 'popup__error--active')
                ev.target.closest('.popup__contact-inner').remove()
                --this.#a
            default:
                break;
        }


    }

}

