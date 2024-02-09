import { getAllPosts, addPostsToList } from './utils.js'

getAllPosts().then((posts) => {
    addPostsToList(posts)

    // Now add the event listener
    const newPagePost = document.querySelectorAll('.postContainerPadding')

    newPagePost.forEach((postContainer) => {
        postContainer.addEventListener('click', () => {
            let id = postContainer.id
            window.location.href = `views/post.html?.id=${id}`
        })
    })
})
