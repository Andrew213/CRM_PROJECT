import { body_lock_add, body_lock_remove, unlock } from "../../js/body_lock"
import { DOM } from "../../js/DOM";
// import { sendRequest } from "./saveStudent";






// #####################################################################

// const popup_open = item => {
//     if (unlock) {

//         if (!DOM.getEl('.menu__body._active')) {
//             body_lock_add(500);
//         }
//         DOM.addClass(item, '_active');
//         // focusManager.capture(item)
//     }
// }

// const popup_close = (item, bodyUnlock = true) => {
//     if (unlock) {
//         DOM.removeClass(item, '_active');;
//         if (!DOM.getEl('.menu__body._active') && bodyUnlock) {
//             body_lock_remove(500);
//         }
//     }
// }


// export const activatePopup = event => {
//     const popup_btnAddEl = event.target.closest('.hero__btn');
//     const popup_btnEditEl = event.target.closest('.hero__table-btn--edit');
//     const popup_addEL = DOM.getEl('.popup-add');
//     const popup_editEl = DOM.getEl('.popup-edit');
//     const popup_close_iconEl = event.target.closest('.popup__close');
//     const popupsAll = document.querySelectorAll('.popup');

//     if (popup_close_iconEl) {
//         const popup_activeEl = popup_close_iconEl.closest('.popup');
//         popup_close(popup_activeEl)
//     } else if (!event.target.closest('.popup__body')) {
//         popupsAll.forEach(el => {
//             el.classList.contains('_active') ? popup_close(el) : false
//         })
//     }

//     if (popup_btnAddEl) {
//         popup_open(popup_addEL)
//     }

//     if (popup_btnEditEl) {
//         popup_open(popup_editEl)
//     }
// }





class Popup extends DOM {
    constructor(el) {
        super()
        this.el = document.querySelector(el);
        this.addClickListener(this.a, this.b, this.clickHandler)
    }

    popup_close(el) {
        super.removeClass(el, '_active');
    }

    #setup() {
        this.a = this.a.bind(this)
        // this.el.addEventListener('click', this.clickHandler)
    }

    a = 221;
    b = 2

    // popup_open() {

    // }

    clickHandler(ev) {
        const popupsAll = document.querySelectorAll('.popup');
        console.log(ev)
        // let { type } = ev.target.dataset;
        // if (type === 'popup-close') {
        //     super.removeClass(this.el, '_active')
        // } else if (!ev.target.closest('.popup__body')) {
        //     popupsAll.forEach(el => {
        //         el.classList.contains('_active') ? this.popup_close(el) : false
        //     })
        // }
    }
    activate() {

    }
}

let popup = new Popup('.popup')

