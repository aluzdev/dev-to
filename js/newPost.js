import { getAllPosts } from './utils.js'

const newPostForm = document.getElementById('newPostForm')
const author = document.getElementById('author')
const image = document.getElementById('image')
const title = document.getElementById('title')
const tags = document.getElementById('tags')
const content = document.getElementById('content')
const avatarIcon = document.getElementById('avatar')
const submitButton = document.getElementById('submitPost')

newPostForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const url = 'https://dev-to-fcbcc-default-rtdb.firebaseio.com/posts/.json'

    const authorValue = author.value
    const avatar = avatarIcon.value
    const imageValue = image.value
    const titleValue = title.value
    const tagsValue = tags.value
    const contentValue = content.value
    const creationDate = new Date()

    const postData = {
        authorValue,
        avatar,
        imageValue,
        titleValue,
        tagsValue,
        contentValue,
        creationDate,
    }

    console.log('sending the following information to the database:', {
        postData,
    })

    const response = await fetch(url, {
        method: 'post',
        body: JSON.stringify(postData),
    })
    const data = await response
    console.log('database response:', { data })

    if (data.ok) console.log('data succesfuly posted')
    else console.log('error: Could not post', { data })
    newPostForm.reset()
    window.location.href = '/'
})
