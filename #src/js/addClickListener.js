import { activatePopup } from "../components/popup/popup.js"
import { saveClient } from "../components/popup/saveClient.js";

export function addClickListener() {
    document.addEventListener('click', function (event) {
        activatePopup(event);
        saveClient(event)
    });
};








