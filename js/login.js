const loginHeader = document.getElementById('logInHeader')
const createAccount = document.getElementById('createAccountHeader')
const logoutContainer = document.getElementById('logOutButton')

const isAuthenticated = () => {
    const token = localStorage.getItem('userToken')
    return token !== null
}

const updateHtml = () => {
    if (loginHeader && createAccount && logoutContainer) {
        if (isAuthenticated()) {
            loginHeader.style.display = 'none'
            createAccount.style.display = 'none'
            logoutContainer.style.display = 'block'
        } else {
            loginHeader.style.display = 'block'
            createAccount.style.display = 'block'
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

    const storedCredentials =
        JSON.parse(localStorage.getItem('userCredentials')) || []

    storedCredentials.push({ email, password })

    localStorage.setItem('userCredentials', JSON.stringify(storedCredentials))

    updateHTMLAfterToken()
    createToken()
}

const checkData = () => {
    const enterEmail = document.getElementById('email').value
    const enterPwd = document.getElementById('pwd').value

    const storedCredentials =
        JSON.parse(localStorage.getItem('userCredentials')) || []

    const user = storedCredentials.find(
        (credential) => credential.email === enterEmail
    )

    if (user) {
        if (enterPwd === user.password) {
            createToken()
            alert('Login successful')
        } else {
            alert('Wrong password')
        }
    } else {
        alert('Invalid data')
    }
}

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
