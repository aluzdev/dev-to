import { getAllPosts } from './utils.js'
import { addPostsToList } from './utils.js'

document.addEventListener('DOMContentLoaded', function () {
    const latestButton = document.getElementById('latestButton')

    if (latestButton) {
        latestButton.addEventListener('click', async function () {
            try {
                await latestPost()
            } catch (error) {
                console.error('Error in latestPost:', error.message)
                // Puedes mostrar un mensaje de error al usuario si es necesario
            }
        })
    }
})

const sortByDate = (posts) => {
    return posts.sort(
        (a, b) => new Date(b.creationDate) - new Date(a.creationDate)
    )
}

const latestPost = async () => {
    try {
        const data = await getAllPosts()
        console.log('Data received:', data)

        if (!data || data.length === 0) {
            console.log('No matching posts found.')
            return
        }

        // Ordenar los posts por fecha
        const sortedPosts = sortByDate(data)

        console.log('Sorted posts:', sortedPosts)

        // Agregar los posts ordenados a la lista HTML
        addPostsToList(sortedPosts)
    } catch (error) {
        console.error('Error fetching or processing posts:', error.message)
        throw error
    }
}
