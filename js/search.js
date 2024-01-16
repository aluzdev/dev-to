import { getAllPosts } from './utils.js'
import { addPostsToList } from './utils.js'

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

const getAllFilteredPosts = async (filter) => {
    const allPosts = await getAllPosts()
    const filteredPosts = allPosts.filter((post) =>
        post.tagsValue.includes(filter)
    )
    return filteredPosts
}

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const addFilteredPostsToSideBar = async (filter) => {
    const sideCardContainer = document.getElementById('sideCardContainer') //el papi
    const filteredPosts = await getAllFilteredPosts(filter)
    const firstThreePosts = filteredPosts.slice(0, 3)
    // Create the outer div with the "sideCard" class
    const sideCard = document.createElement('div')
    sideCard.classList.add('sideCard')
    // Create the card title paragraph with the "cardTitle" class
    const cardTitle = document.createElement('p')
    cardTitle.classList.add('cardTitle')
    cardTitle.textContent = `${filter}`
    sideCard.append(cardTitle)

    firstThreePosts.forEach((post) => {
        const { id, titleValue } = post

        // Create the first link and comment section
        const linkAndCommentSection1 = document.createElement('div')
        linkAndCommentSection1.classList.add('linkAndCommentSection')

        const link1 = document.createElement('a')
        link1.href = `/views/post.html?.id=${id}`
        link1.classList.add('sideCardLink')

        const title1 = document.createElement('p')
        title1.textContent = `${titleValue}`

        const comment1 = document.createElement('p')
        comment1.classList.add('sideCardComment')
        comment1.textContent = `${randomNumber(3, 100)} comments`

        link1.appendChild(title1)
        link1.appendChild(comment1)

        linkAndCommentSection1.appendChild(link1)

        // Append all link and comment sections to the outer div
        sideCard.appendChild(linkAndCommentSection1)

        // Append the entire sideCard to your document or a parent container as needed
        sideCardContainer.appendChild(sideCard) // You can adjust this to your needs
    })
}

addFilteredPostsToSideBar('#javascript')
addFilteredPostsToSideBar('#css')
addFilteredPostsToSideBar('#python')
