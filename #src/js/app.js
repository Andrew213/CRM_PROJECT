import { sendRequest } from "../components/popup/saveStudent";
import { Select } from "../components/popup/select";
import { addClickListener } from "./addClickListener.js";
import { DOM } from "./DOM";

addClickListener()

const select = new Select('.select', {
    selectedId: '4',
    data: [
        { id: '1', value: 'Твиттер' },
        { id: '2', value: 'Фейсбук' },
        { id: '3', value: 'Телеграмм' },
        { id: '4', value: 'Телефон' },
        { id: '5', value: 'Вконтакте' },
        { id: '6', value: 'Ватсап' }
    ],
    onSelect(item) {
        console.log('Selected item: ', item)
    }
})

// const select = DOM.getEl('.popup__contact-select');

// const choices = new Choices(select, {
//     searchEnabled: false,
//     itemSelectText: '',
// });


// select.addEventListener('change', ev => {

//     const changedEl = ev.target.closest('.choices__input').querySelector('option')

//     if (changedEl.textContent === 'Твиттер') {
//         console.log(changedEl.textContent)
//     }

// })