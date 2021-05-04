import { fetch as fetchPolyfill } from 'whatwg-fetch'



export class Fetch {
    sendRequest(url) {
        fetchPolyfill(url, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
    async getRequest(url) {
        let response = await fetchPolyfill(url)
        return await response.json()
    }
    deleteRequest(url) {

    }
    patchRequest(url) {

    }
}