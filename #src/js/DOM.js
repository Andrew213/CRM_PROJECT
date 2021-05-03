export class DOM {
    static getEl(selector) {
        return document.querySelector(selector)
    };

    static setAttr(selector, attr) {
        selector.setAttribute(attr);
    }

    static createEl(el) {
        return document.createElement(el)
    };

    static addClass(el, selector) {
        return el.classList.add(selector)
    }

    static removeClass(el, selector) {
        return el.classList.remove(selector)
    }

}