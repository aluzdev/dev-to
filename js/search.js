
import { getAllPosts } from './utils.js'
import { addPostsToList } from './utils.js'

console.log('Si está jalando')

const findPostsByTitleValue = async () => {
    let postsObject = await getAllPosts()
    let searchInput = document.getElementById('search-input')
    let title = searchInput.value.toLowerCase()

    // Filtra todos los posts que cumplen con el título
    const matchingPosts = Object.values(postsObject).filter((post) =>
        post.titleValue.toLowerCase().includes(title)
    )

    if (matchingPosts.length > 0) {
        //console.log('Posts Found:', matchingPosts);
        addPostsToList(matchingPosts)
    } else {
        console.log('No matching posts found.')
    }
}

let searchInput = document.getElementById('search-input')
searchInput.addEventListener('input', findPostsByTitleValue)

