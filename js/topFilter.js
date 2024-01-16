import { getAllPosts, addPostsToList } from './utils.js'

const topFilter = document.getElementById('top')
const HIGH_RATING = 8
topFilter.addEventListener('click', async () => {
    const allPosts = await getAllPosts()
    const highRatingPosts = allPosts.filter(
        (post) => post.rating >= HIGH_RATING
    )
    console.log({ highRatingPosts })
    addPostsToList(highRatingPosts)
})
