const urlParams = new URLSearchParams(window.location.search)
const postId = urlParams.get('.id')
const newPost = document.getElementById('postContainer')

const getPostById = async (postID) => {
    try {
        let response = await fetch(
            `https://dev-to-fcbcc-default-rtdb.firebaseio.com/posts/${postID}/.json`
        )

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`)
        }

        let data = await response.json()

        if (!data) {
            throw new Error('Invalid data format received from the API.')
        }

        let {
            authorValue,
            avatar,
            contentValue,
            imageValue,
            creationDate,
            titleValue,
            tagsValue,
        } = data

        document.getElementById('author').innerText = authorValue
        document.getElementById('cardAuthor').innerText = authorValue
        document.getElementById('name').innerText = authorValue
        document.getElementById('content').innerText = contentValue
        document.getElementById('contentTitle').innerText = titleValue
        document.getElementById('tags').innerText = tagsValue

        document.getElementById('avatar').setAttribute('src', avatar)
        document.getElementById('imgCard').setAttribute('src', avatar)
        document.getElementById('firstImage').setAttribute('src', imageValue)
    } catch (error) {
        // Handle errors gracefully, e.g., log or show an error message to the user
        console.error('Error fetching or processing data:', error)
    }
}

getPostById(postId)

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

window.onload = () => {
    updateHtml()
    console.log('Window loaded')
}

const updateHTMLAfterToken = () => {
    updateHtml()
}

const removeToken = () => {
    localStorage.removeItem('userToken')
    console.log('click')
    updateHTMLAfterToken()
}
