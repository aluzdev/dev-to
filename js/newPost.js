const newPostForm = document.getElementById('newPostForm')
const author = document.getElementById('author')
const image = document.getElementById('image')
const title = document.getElementById('title')
const tags = document.getElementById('tags')
const content = document.getElementById('content')

newPostForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // Extract data from input fields
    const authorValue = author.value
    const imageValue = image.value // This will give you the file path (if allowed by browser)
    const titleValue = title.value
    const tagsValue = tags.value
    const contentValue = content.value

    // You can now use these values as needed
    const postData = {
        authorValue,
        imageValue,
        titleValue,
        tagsValue,
        contentValue,
    }

    console.log({ postData })

    // Submit the form or perform other actions with the data
})
