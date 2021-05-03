import { couldStartTrivia } from "typescript";
import { DOM } from "../../js/DOM";

const getTemplate = (data = [], selectedId) => {

    let text = 'Выбери контакт'

    const items = data.map(el => {
        let cls = ''
        if (el.id === selectedId) {
            text = el.value
            cls = 'selected'
        }

        return `
                <li data-type='item' data-id='${el.id}' class="select__item ${cls}">
                ${el.value}
                </li>
                `
    })

    return `
    <div class="select__input" data-type="input">
    <span data-type='value'>${text}</span>
    </div>
    <div class="select__dropdown">
        <ul class="select__list">
          ${items.join('')}
        </ul>
    </div>
    `
}

export class Select {

    constructor(selector, options) {
        this.el = document.querySelector(selector);
        this.options = options;
        this.selectedId = options.selectedId;

        this.#render()
        this.#setup()
    }

    #render() {
        const { data } = this.options
        DOM.addClass(this.el, 'open')
        this.el.innerHTML = getTemplate(data, this.selectedId)
    }

    #setup() {
        this.clickHandler = this.clickHandler.bind(this)
        document.addEventListener('click', this.clickHandler)
        this.value = this.el.querySelector('[data-type = "value"]')
    }

    clickHandler(ev) {
        const { type } = ev.target.dataset;

        if (type === 'input' || type === 'value') {
            this.toggle()
        } else if (type === 'item') {
            const id = ev.target.dataset.id;
            this.select(id)
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

    select(id) {
        this.selectedId = id
        this.value.textContent = this.current.value;

        this.el.querySelectorAll('[data-type="item"]').forEach(el => DOM.removeClass(el, 'selected'))
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