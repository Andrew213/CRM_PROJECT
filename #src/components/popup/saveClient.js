import { DOM } from "../../js/DOM";
import { Fetch } from "../../js/fetch";
import { Select } from "./addContact/select/select";

// const validateForm = () => {
//     const inputs = document.querySelectorAll(`input[data-rule]`);

//     inputs.forEach(input => {
//         input.addEventListener('click', ev => {



//             const rule = input.dataset.rule;
//             const value = input.value.trim()
//             let check;
//             switch (rule) {
//                 case 'text':
//                     // check = /^\s*$/.test(value)
//                     check = value !== '' && value.match(/^[а-яёА-ЯЁ_ ]*$/) ? true : false

//                     console.log(check)
//                     break;
//                 case 'email':

//                     Inputmask({
//                         mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[*{2,6}].*{1,10}[*{2,6}]",
//                         definitions: {
//                             '*': {
//                                 validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
//                                 casing: "lower"
//                             }
//                         }
//                     }).mask(input)

//                     break;
//                 case 'phone':
//                     Inputmask({ mask: '+7(999)999-9999' }).mask(input)
//                     break
//                 default:
//                     break;
//             }

//             // if (!check) {
//             //     DOM.addClass(input, 'popup__input--err')
//             // } else {
//             //     DOM.removeClass(input, 'popup__input--err')
//             // }

//         })
//     })
// }
// validateForm()

const validateForm = () => {
    const inputs = document.querySelectorAll(`input[data-rule]`);
    let check;
    inputs.forEach(input => {
        const rule = input.dataset.rule;

        if (rule === 'text') {

            const value = input.value.trim()

            check = value !== '' && value.match(/^[а-яёА-ЯЁ_ ]*$/) ? true : false
        }

        !check ? DOM.addClass(input, 'popup__input--err') : DOM.removeClass(input, 'popup__input--err')
    })

}


const api_url = 'http://localhost:5000/api/clients'
class Client {

    constructor(name, surname, lastName, contacts) {
        this.name = name;
        this.surname = surname;
        this.lastName = lastName;
        this.contacts = contacts
    }
}

// export const select2 = new Select('.select-add--email', {
//     selectedId: '5',
//     data: [
//         { id: '1', type: 'tw', value: 'Твиттер' },
//         { id: '2', type: 'fb', value: 'Фейсбук' },
//         { id: '3', type: 'tg', value: 'Телеграмм' },
//         { id: '4', type: 'phone', value: 'Телефон' },
//         { id: '5', type: 'vk', value: 'Вконтакте' },
//         { id: '6', type: 'watsapp', value: 'Ватсап' },
//         { id: '7', type: 'email', value: 'Почта' }

//     ],
// })

// export const select3 = new Select('.select-add--phone', {
//     selectedId: '4',
//     data: [
//         { id: '1', value: 'Твиттер' },
//         { id: '2', value: 'Фейсбук' },
//         { id: '3', value: 'Телеграмм' },
//         { id: '4', value: 'Телефон' },
//         { id: '5', value: 'Вконтакте' },
//         { id: '6', value: 'Ватсап' },
//         { id: '7', value: 'Почта' }

//     ],
// })

// Fetch.sendRequest(api_url, new Client('Андрей', 'Андреевич', 'Кочанов', { type: 'vk', value: 'https://vk.com' }))


export const saveClient = (event) => {
    const { type } = event.target.dataset

    if (type === 'btn-save') {
        event.preventDefault()

        validateForm()

        const name = DOM.getEl('.popup-add__input--name').value.trim();
        const surname = DOM.getEl('.popup__add--surname').value.trim();
        const lastName = DOM.getEl('.popup-add__input--lastname').value.trim();
        const contacts = [];
        const contact = {
            type: select2.current.type,
            value: DOM.getEl('.popup__contact-input').value.trim()
        }
        contacts.push(contact)

        Fetch.sendRequest(
            api_url,
            new Client(
                name,
                surname,
                lastName,
                contacts
            )
        )

        DOM.getEl('.popup-add__input--name').value = '';
        DOM.getEl('.popup__add--surname').value = '';
        DOM.getEl('.popup-add__input--lastname').value = '';
        DOM.getEl('.popup__contact-input').value = '';



    }
}