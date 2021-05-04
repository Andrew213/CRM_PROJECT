export class DOM {

    // constructor(...callback) {
    //     this.addClickListener(...callback)
    // }

    getEl(selector) {
        return document.querySelector(selector)

    };

    setAttr(selector, attr) {
        selector.setAttribute(attr);
    }

    createEl(el) {
        return document.createElement(el)
    };

    addClass(el, selector) {
        return el.classList.add(selector)
    }

    removeClass(el, selector) {
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