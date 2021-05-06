import { DOM } from "../../../../js/DOM";
import Inputmask from "inputmask";


const getTemplate = (data = [], selectedId, selector) => {

    let text = 'Выберите контакт'

    const items = data.map(el => {
        let cls = ''
        if (el.id === selectedId) {
            text = el.value
            cls = 'selected'
        }
        return `
                <li data-type='${selector}-item' data-id='${el.id}' class="select__item ${cls}">
                ${el.value}
                </li>
                `
    })

    return `
    <div class="select__input" data-type="${selector}-input">
    <span data-type='${selector}-value'>${text}</span>
    </div>
    <div class="select__dropdown">
        <ul class="select__list">
          ${items.join('')}
        </ul>
    </div>
    `
}

const getEmailInputMask = (input) => {
    return Inputmask({
        mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[*{2,6}].*{1,10}[*{2,6}]",
        definitions: {
            '*': {
                validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
                casing: "lower"
            }
        }
    }).mask(input)
}

export class Select {

    constructor(selector, options) {

        this.el = document.querySelector(selector);
        this.options = options;
        this.selectedId = options.selectedId;
        this.selector = selector
        this.#render()
        this.#setup()
    }

    get input() {
        let input = this.el.nextElementSibling
        return input
    }

    #render() {
        const { data } = this.options
        this.el.innerHTML = getTemplate(data, this.selectedId, this.selector)
        this.input.setAttribute('data-type', this.current.type)
    }

    #setup() {
        this.clickHandler = this.clickHandler.bind(this)
        document.addEventListener('click', this.clickHandler)
        this.value = this.el.querySelector(`[data-type = "${this.selector}-value"]`)
    }

    clickHandler(ev) {
        const { type } = ev.target.dataset;

        if (type === `${this.selector}-input` || type === `${this.selector}-value`) {
            this.toggle()
        } else if (type === `${this.selector}-item`) {
            const id = ev.target.dataset.id;
            this.select(id)
            this.setMask()
        } else if (ev.target !== this.el) {
            this.close()
        }

    }

    get isOpen() {
        return this.el.classList.contains('open')
    }

    get current() {
        return this.options.data.find(item => {
            return item.id === this.selectedId
        })
    }

    setMask() {
        this.input.setAttribute('data-type', this.current.type)
        switch (this.current.type) {
            case 'phone':
                this.input.setAttribute('data-rule', 'phone')
                Inputmask({ mask: '+7(999)999-9999' }).mask(this.input)
                break;
            case 'email':
                this.input.setAttribute('data-rule', 'mail')
                getEmailInputMask(this.input)
                break
            default:
                this.input.inputmask ? this.input.inputmask.remove() : false
                break;
        }
    }

    select(id) {
        this.selectedId = id
        this.value.textContent = this.current.value;
        this.el.querySelectorAll(`.select__item`).forEach(el => DOM.removeClass(el, 'selected'))
        this.el.querySelector(`[data-id="${id}"]`).classList.add('selected')

        this.options.onSelect ? this.options.onSelect(this.current) : null

        this.close()
    }

    toggle() {
        this.isOpen ? this.close() : this.open()
    }

    open() {
        DOM.addClass(this.el, 'open')
    }

    close() {
        DOM.removeClass(this.el, 'open')
    }

    destroy() {
        this.el.removeEventListener('click', this.clickHandler)

    }

}