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

const getAllJavascriptPosts = async () => {
    const allPosts = await getAllPosts()
    const javascriptPosts = allPosts.filter((post) =>
        post.tagsValue.includes('javascript')
    )
    return javascriptPosts
}

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const addJavascriptPostsToSideList = async () => {
    const sideCardContainer = document.getElementById('sideCardContainer') //el papi
    const javascriptPosts = await getAllJavascriptPosts()
    console.log({ javascriptPosts })

    javascriptPosts.forEach((post) => {
        const {
            authorValue,
            avatar,
            contentValue,
            creationDate,
            id,
            imageValue,
            tagsValue,
            titleValue,
        } = post

        const container = document.createElement('div')
        container.classList.add('sideCard')

        // Create a div element for the linkAndCommentSection
        const linkAndCommentSection = document.createElement('div')
        linkAndCommentSection.classList.add('linkAndCommentSection')

        // Create an anchor element for the link
        const link = document.createElement('a')
        link.href = `https://dev.to/${authorValue}/${id}`
        link.classList.add('sideCardLink')

        // Create a paragraph element for the titleValue
        const titleParagraph = document.createElement('p')
        titleParagraph.textContent = titleValue

        // Create a paragraph element for the comment count
        const commentParagraph = document.createElement('p')
        commentParagraph.classList.add('sideCardComment')
        commentParagraph.textContent = `${randomNumber(1, 10)} comments`

        // Append the title and comment paragraphs to the anchor element
        link.appendChild(titleParagraph)
        link.appendChild(commentParagraph)

        // Append the anchor element to the linkAndCommentSection
        linkAndCommentSection.appendChild(link)

        // Append the linkAndCommentSection to the container
        container.appendChild(linkAndCommentSection)
        console.log({ linkAndCommentSection })
        console.log({ container })

        // Append the container to the sideCardContainer
        sideCardContainer.appendChild(container)
    })
}

addJavascriptPostsToSideList()
