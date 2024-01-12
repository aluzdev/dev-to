const newPostForm = document.getElementById('newPostForm')
const author = document.getElementById('author')
const image = document.getElementById('image')
const title = document.getElementById('title')
const tags = document.getElementById('tags')
const content = document.getElementById('content')
const responseParagraph = document.getElementById('response')

newPostForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const url = 'https://dev-to-fcbcc-default-rtdb.firebaseio.com/posts/.json'

    const authorValue = author.value
    const imageValue = image.value
    const titleValue = title.value
    const tagsValue = tags.value
    const contentValue = content.value
    const creationDate = new Date()

    const postData = {
        authorValue,
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

    if (data.ok)
        responseParagraph.innerText =
            'Your post was successfuly published! - check your console for more info'
    else
        responseParagraph.innerText =
            'Something went horribly wrong - check your console'
    newPostForm.reset()
})
