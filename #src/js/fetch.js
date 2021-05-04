import { fetch as fetchPolyfill } from 'whatwg-fetch'



export class Fetch {
    static sendRequest(url, item) {
        fetchPolyfill(url, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
    static async getRequest(url) {
        let response = await fetchPolyfill(url)
        return await response.json()
    }
    static deleteRequest(url) {

    }
    static patchRequest(url) {

    }
}