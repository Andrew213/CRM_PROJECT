import { sendRequest } from "../components/popup/saveStudent";
import { addClickListener } from "./renderDom";



addClickListener()


let item = {
    name: 'Maxim',
    surname: 'Perepelica',
    lastname: 'Vladimirovich',
    contacts: [
        {
            type: 'vk',
            value: 'https://vk.com'
        },
        {
            type: 'telegram',
            value: '@xyicgori'
        }
    ]
}

sendRequest('http://localhost:5000/api/clients', item)

// ############################################



// fetch('http://localhost:5000/api/clients', {
//     method: 'POST',
//     body: JSON.stringify({
//         name: "Андрей",
//         surname: "Андреевич",
//         lastname: "Кочанов",
//         contacts: [
//             {
//                 type: 'vk',
//                 value: "https://vk.com"
//             }
//         ]
//     }),
//     headers: {
//         'Content-Type': 'application/json',
//     }
// });

// let x = Date.now.toString()
// console