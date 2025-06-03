// This file is what links client to the server.
// (notice how the URIs have to match the server routes)

const URI = 'http://localhost:3001/api'

// API CALLS

// These three APIs should always be the same
async function logIn(credentials) {

    const bodyObject = {
        email: credentials.email,
        password: credentials.password
    }
    const response = await fetch(URI + `/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(bodyObject)
    })
    if (response.ok) {
        const user = await response.json();
        return user;

    } else {
        const err = await response.text()
        throw err;
    }
}

async function logout() {
    const response = await fetch(URI + `/logout`, {
        method: 'POST',
        credentials: 'include',
    });
    if (response.ok)
        return null;
}

async function getCurrentUser() {
  const res = await fetch(URI + '/session/current', {
    credentials: 'include'
  });

  if (!res.ok) throw new Error("Not authenticated");
  return res.json();
}

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

async function addPerson(name, surname) {
    try {
        const response = await fetch(URI + '/people', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, surname })
        })
        
        if (response.ok) {
            const person = await response.json()
            return person
        } else {
            throw new Error("Application error in addPerson")
        }
    } catch (ex) {
        throw new Error("Network error in addPerson " + ex)
    }
}

export { loadEstablishments, loadPeople, addPerson, logIn, logout, getCurrentUser };