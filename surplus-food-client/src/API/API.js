// This file is what links client to the server.
// (notice how the URIs have to match the server routes)

const URI = 'http://localhost:3001/api'

// API CALLS

async function loadEstablishments() {
    try {
        const response = await fetch(URI + '/establishments')
        if (response.ok) {
            const establishments = await response.json()
            return establishments
        } else {
            throw new Error("Application error in loadEstablishments")
        }
    } catch (ex) {
        throw new Error("Network error in loadEstablishments " + ex)
    }
}

async function loadPeople() {
    try {
        const response = await fetch(URI + '/people')
        if (response.ok) {
            const people = await response.json()
            return people
        } else {
            throw new Error("Application error in loadPeople")
        }
    } catch (ex) {
        throw new Error("Network error in loadPeople " + ex)
    }
}

export { loadEstablishments, loadPeople };