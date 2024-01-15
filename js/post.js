import { getAllPosts, addPostsToList } from './utils.js'

getAllPosts().then((posts) => {
    addPostsToList(posts)

    // Now add the event listener
    const newPagePost = document.querySelectorAll('.postContainerPadding')

    newPagePost.forEach((div) => {
        div.addEventListener('click', (event) => {
            console.log(event.target.id)
            let id = event.target.id
            window.open(`views/post.html?.id=${id}`)
        })
    })
})
