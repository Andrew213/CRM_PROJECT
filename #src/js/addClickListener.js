import { activatePopup, savePerson } from "../components/popup/popup.js"

export function addClickListener() {
    document.addEventListener('click', function (event) {
        activatePopup(event);
        savePerson(event)
    });
};








