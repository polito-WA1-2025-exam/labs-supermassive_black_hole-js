// import something

const URI = 'http://localhost:3001/api'

// API CALLS

/* Example:

async function loadQuestions() {
    try {
        const response = await fetch(URI + '/questions')
        if (response.ok) {
            const questions = await response.json()
            // console.log(questions)
            return questions
        } else {
            throw new Error("Application error in loadQuestions")
        }
    } catch (ex) {
        // console.log("Network error in loadQuestions", ex)
        throw new Error("Network error in loadQuestions " + ex)
    }
}

*/

// export something