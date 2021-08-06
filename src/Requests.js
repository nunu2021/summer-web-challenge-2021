export var url = "https://api.hackillinois.org"

export function mentorsRequest(handler, method, body, callback) {
    

    
    const xml = new XMLHttpRequest()
    xml.responseType = 'json'

    xml.open(method, url + handler, true)

    if (body != null) {
        xml.setRequestHeader('Content-Type', 'application/json')
    }
    xml.onload = function () {
        callback(xml.response)
    }

    xml.send(JSON.stringify(body))
}