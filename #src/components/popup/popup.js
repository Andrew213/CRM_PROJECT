import { body_lock_add, body_lock_remove, unlock } from "../../js/body_lock"
import { DOM } from "../../js/DOM";


// #####################################################################

const popup_open = item => {
    if (unlock) {

        if (!DOM.getEl('.menu__body._active')) {
            body_lock_add(500);
        }
        DOM.addClass(item, '_active');
        focusManager.capture(item)
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
    const { type } = event.target.dataset;
    const popup_addEl = DOM.getEl('.popup-add')
    const popup_editEl = DOM.getEl('.popup-edit');

    switch (type) {
        case 'btn-add':
            popup_open(popup_addEl)
            break;
        case 'btn-edit':
            popup_open(popup_editEl)
            break;
        case 'btn-close':
            popup_close(event.target.closest('.popup'))
            break
        case 'popup-backdrop':
            popup_close(event.target.closest('.popup'))

        default:
            break;
    }
}
// #####################################################################
//  
