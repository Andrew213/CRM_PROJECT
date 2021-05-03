import { fetch as fetchPolyfill } from 'whatwg-fetch'

export const sendRequest = async (url, item) => {
    const response = fetchPolyfill(url, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
}


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

// name: "Андрей",
//         surname: "Андреевич",
//         lastname: "Кочанов",
//         contacts: [
//             {
//                 type: 'vk',
//                 value: "https://vk.com"
//             }
//         ]

// let item = {
//     name: 'Maxim',
//     surname: 'Perepelica',
//     lastname: 'Vladimirovich',
//     contacts: [
//         {
//             type: 'vk',
//             value: 'https://vk.com'
//         },
//         {
//             type: 'telegram',
//             value: '@xyicgori'
//         }
//     ]
// }

// sendRequest('http://localhost:5000/api/clients', item)

// console.log(12)