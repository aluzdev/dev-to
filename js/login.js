const loginHeader = document.getElementById('logInHeader')
const createAccount = document.getElementById('createAccountHeader')
const logoutContainer = document.getElementById('logOutButton')
const asideDev = document.getElementById('devCommunity')
const enterEmail = document.getElementById('email').value
const enterPwd = document.getElementById('pwd').value

const isAuthenticated = () => {
    const token = localStorage.getItem('userToken')
    return token !== null
}

const updateHtml = () => {
    if (loginHeader && createAccount && logoutContainer && asideDev) {
        if (isAuthenticated()) {
            loginHeader.style.display = 'none'
            createAccount.style.display = 'none'
            asideDev.style.display = 'none'
            logoutContainer.style.display = 'block'
        } else {
            loginHeader.style.display = 'block'
            createAccount.style.display = 'block'
            asideDev.style.display = 'block'
            logoutContainer.style.display = 'none'
        }
    } else {
        console.error('One or more elements not found.')
    }
}

window.onload = updateHtml

const updateHTMLAfterToken = () => {
    updateHtml()
}

const addData = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('pwd').value

    fetch('http://localhost:1337/users', {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

        //make sure to serialize your JSON body
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    }).then((response) => {
        //do something awesome that makes the world a better place
    })

    // const storedCredentials =
    //     JSON.parse(localStorage.getItem('userCredentials')) || []

    // storedCredentials.push({ email, password })

    // localStorage.setItem('userCredentials', JSON.stringify(storedCredentials))

    // updateHTMLAfterToken()
    // createToken()
}

const checkData = () => {
    const enterEmail = document.getElementById('email').value
    const enterPwd = document.getElementById('pwd').value
    fetch('http://localhost:1337/users/login', {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

        //make sure to serialize your JSON body
        body: JSON.stringify({
            email: enterEmail,
            password: enterPwd,
        }),
    }).then((response) => {
        //do something awesome that makes the world a better place
    })

    // const storedCredentials =
    //     JSON.parse(localStorage.getItem('userCredentials')) || []

    // const user = storedCredentials.find(
    //     (credential) => credential.email === enterEmail
    // )

    // if (user) {
    //     if (enterPwd === user.password) {
    //         alert('login Successful')
    //         createToken()
    //     } else {
    //         alert('wrong password')
    //     }
    // } else {
    //     alert('Invalid data')
    // }
}

const getUser = async () => {
    try {
        const response = await fetch(`http://localhost:1337/users/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: enterEmail,
                password: enterPwd,
            }),
        })

        const data = await response.json()
        const token = data.data
        console.log({ token })
        if (!data) {
            throw new Error('Invalid data format received from the API.')
        }
        return data
    } catch (error) {
        // Handle errors gracefully, e.g., log or throw a custom error
        console.error('Error fetching data:', error)
        throw error
    }
}

getUser()

const createToken = () => {
    const token =
        Math.random().toString(36).substring(2) + Date.now().toString(36)

    localStorage.setItem('userToken', token)
    updateHTMLAfterToken()
}

const removeToken = () => {
    localStorage.removeItem('userToken')
    updateHTMLAfterToken()
}
