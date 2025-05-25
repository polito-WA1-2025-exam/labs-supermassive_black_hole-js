import { Establishment } from "../models/SurplusModels.mjs"

const URI = 'http://localhost:3001/api'

// API CALLS

async function loadEstablishments() {
    try {
        const response = await fetch(URI + '/establishments')
        if (response.ok) {
            const establishments = await response.json()
            // console.log(questions)
            return establishments
        } else {
            throw new Error("Application error in loadQuestions")
        }
    } catch (ex) {
        // console.log("Network error in loadQuestions", ex)
        throw new Error("Network error in loadQuestions " + ex)
    }
}

export { loadEstablishments };