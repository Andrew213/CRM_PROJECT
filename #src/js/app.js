import { Contact } from "../components/popup/addContact/addContact";
import { Select } from "../components/popup/addContact/select/select";
import { addClickListener } from "./addClickListener.js";

addClickListener()

export const select1 = new Select('.select-edit', {
    selectedId: '2',
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
});

let newContact = new Contact('.popup__contact')





