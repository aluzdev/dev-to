import { getAllPosts, backend_url } from './utils.js'

const newPostForm = document.getElementById('newPostForm')
const authorInput = document.getElementById('author')
const imageInput = document.getElementById('image')
const titleInput = document.getElementById('title')
const tagsInput = document.getElementById('tags')
const contentInput = document.getElementById('content')
const avatarInput = document.getElementById('avatar')

const randomBoolean = () => Math.random() < 0.5
const randomRating = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

newPostForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const url = 'https://dev-to-fcbcc-default-rtdb.firebaseio.com/posts/.json'

    const author = authorInput.value
    const avatar = avatarInput.value
    const image = imageInput.value
    const title = titleInput.value
    const tags = tagsInput.value
    const content = contentInput.value
    const creationDate = new Date()
    const relevant = randomBoolean()
    const rating = randomRating(1, 10)

    const postData = {
        author,
        avatar,
        image,
        title,
        tags,
        content,
        creationDate,
        relevant,
        rating,
    }

    console.log('sending the following information to the database:', {
        postData,
    })

    const response = await fetch(`${backend_url}/posts`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
    })
    const data = await response
    console.log('database response:', { data })

    if (data.ok) console.log('data succesfuly posted')
    else console.log('error: Could not post', { data })
    newPostForm.reset()
    window.location.href = '/'
})
