export class DOM {

    constructor(...callback) {
        this.addClickListener(...callback)
    }

    static getEl(selector) {
        return document.querySelector(selector)
    };

    static getAllEl(selector) {
        return document.querySelectorAll(selector)
    }

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

    sayHello(string) {
        console.log('Hello', string)
    }

    addClickListener(...callback) {
        document.addEventListener('click', ev => {

            callback.forEach(func => {
                if (typeof func === 'function') {
                    func(ev)
                } else {
                    console.log(func)

                }
            })
        })
    }

}