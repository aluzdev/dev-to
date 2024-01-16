import { getAllPosts, addPostsToList } from './utils.js'

const relevantFilter = document.getElementById('relevant')

relevantFilter.addEventListener('click', async () => {
    const allPosts = await getAllPosts()
    const relevantPosts = allPosts.filter(
        (post) => post.relevant === true
    )
    console.log({ relevantPosts })
    addPostsToList(relevantPosts)
})
