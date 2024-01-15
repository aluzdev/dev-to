import { getAllPosts, addPostsToList } from './utils.js'

getAllPosts().then((posts) => {
    addPostsToList(posts)

    // Now add the event listener
    const newPagePost = document.querySelectorAll('.postContainerPadding')

    newPagePost.forEach((div) => {
        console.log({ div })
        div.addEventListener('click', (event) => {
            console.log(event.target)
            let id = div.id
            window.open(`views/post.html?.id=${id}`)
        })
    })
})
