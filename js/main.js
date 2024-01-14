import { getAllPosts } from './utils.js'
import { createPostElement } from './utils.js'

const posts = await getAllPosts()
const postsList = document.getElementById('postsList')
const locationToInsertFirstPostImage = document.getElementById('firstPostImage')
postsList.innerHTML = ''

const addPostToList = (postData) => {
    const firstPostImage = postData[0].imageValue
    locationToInsertFirstPostImage.src = firstPostImage

    postData.forEach((post) => {
        const postElement = createPostElement(post)
        postsList.appendChild(postElement)
    })
}

addPostToList(posts)
