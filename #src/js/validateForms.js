import { DOM } from "./DOM";



function validationRequire() {

    let flag;
    const inputs = DOM.getAllEl('[data-rule="text"]');
    inputs.forEach(input => {
        const value = input.value.trim()
        flag = value !== '' && value.match(/^[а-яёА-ЯЁ_ ]*$/) ? true : false
        !flag ? DOM.addClass(input, 'popup__input--err') : DOM.removeClass(input, 'popup__input--err')
    })
    return flag
}

function validationUnRequire(flag) {
    const input = DOM.getEl('[data-rule="text-unrequire"]');
    const value = input.value.trim()

    if (flag && value === '') {
        DOM.removeClass(input, 'popup__input--err')
        return flag
    } else if (flag && value.length > 0) {
        if (value.match(/^[а-яёА-ЯЁ_ ]*$/)) {
            DOM.removeClass(input, 'popup__input--err')
            return flag = true
        } else {
            DOM.addClass(input, 'popup__input--err')
            return flag = false
        }
    }
    return flag
}

function validationContacts(flag) {
    const inputs = DOM.getAllEl('[data-rule="contact"]');

    inputs.forEach(input => {
        if (input) {
            if (flag) {
                const value = input.value.trim()
                if (value !== '') {
                    DOM.removeClass(input, 'popup__input--err')
                    return flag = true
                } else {
                    DOM.addClass(input, 'popup__input--err')
                    return flag = false
                }
            } else {
                return flag = false
            }
    
        } 
    })
    
return flag
}

validationContacts()

export function validateForm() {
    let x = validationRequire()
    let y = validationUnRequire(x)
    return validationContacts(y)
}