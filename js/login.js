const addData = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('pwd').value

    const storedCredentials =
        JSON.parse(localStorage.getItem('userCredentials')) || []

    storedCredentials.push({ email, password })

    localStorage.setItem('userCredentials', JSON.stringify(storedCredentials))
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
            alert('login Successful')
        } else {
            alert('wrong password')
        }
    } else {
        alert('Invalid data')
    }
}
