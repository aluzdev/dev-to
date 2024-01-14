import { getAllPosts } from './utils.js'

const posts = await getAllPosts()
const postsList = document.getElementById('postsList')
const firstPost = posts[0]
console.log({ firstPost })
postsList.innerHTML = ''

//helper function for addPostToList
const insertTagToTagList = (tagText, tagListID) => {
    const tag = `<p>${tagText}</p>`
    const tagList = getElementById(tagListID)
    tagList.innerHTML = tag
}
function createPostElement(postData) {
    const {
        authorValue,
        avatar,
        contentValue,
        creationDate,
        id,
        imageValue,
        tagsValue,
        titleValue,
    } = postData

    // Create the main post container
    const postContainer = document.createElement('div')
    postContainer.id = id
    postContainer.className = 'postContainerPadding'

    // Create the profile info section
    const profileInfo = document.createElement('aside')
    profileInfo.className = 'profileInfo'

    const profileImage = document.createElement('img')
    profileImage.src = avatar
    profileImage.className = 'profileImage'

    const profileColumn = document.createElement('div')
    profileColumn.className = 'column'

    const authorName = document.createElement('h3')
    authorName.style.fontSize = '16px'
    authorName.style.color = 'rgb(64, 64, 64)'
    authorName.textContent = authorValue

    const creationDateElement = document.createElement('h4')
    creationDateElement.className = 'profile-subtitle'
    creationDateElement.textContent = creationDate.slice(4, 9)

    // Append profile elements
    profileColumn.appendChild(authorName)
    profileColumn.appendChild(creationDateElement)
    profileInfo.appendChild(profileImage)
    profileInfo.appendChild(profileColumn)
    postContainer.appendChild(profileInfo)

    // Create the main content section
    const mainContent = document.createElement('div')
    mainContent.className = 'paddingOnDesktop'

    const title = document.createElement('h1')
    title.className = 'mainTitle'
    title.textContent = titleValue

    const tagSection = document.createElement('aside')
    tagSection.id = `tag${id}`
    tagSection.className = 'tagSection'
    tagSection.innerHTML = tagsValue // Assuming tagsValue is safe and already formatted HTML

    // Append main content elements
    mainContent.appendChild(title)
    mainContent.appendChild(tagSection)

    // Create the emoji section
    const emojiSection = document.createElement('div')
    emojiSection.className = 'emoji-section'

    const setOfEmojis = document.createElement('div')
    setOfEmojis.className = 'setOfEmojis'

    // Add emojis and counts
    const emojiList = ['💖', '🦄', '🤩', '🙌', '🔥']
    emojiList.forEach((emoji) => {
        const emojiElement = document.createElement('p')
        emojiElement.textContent = emoji
        setOfEmojis.appendChild(emojiElement)
    })

    const randomEmojiCount = Math.floor(Math.random() * 101)
    const randomCommentCount = Math.floor(Math.random() * 101)

    const emojiCountElement = document.createElement('p')
    emojiCountElement.className = 'emojiText'
    emojiCountElement.textContent = `${randomEmojiCount}`
    setOfEmojis.appendChild(emojiCountElement)

    const reactionsElement = document.createElement('p')
    reactionsElement.className = 'emojiText showOnTabletOnly'
    reactionsElement.style.marginLeft = '5px'
    reactionsElement.textContent = 'reactions'
    setOfEmojis.appendChild(reactionsElement)

    const commentElement = document.createElement('p')
    commentElement.className = 'emojiText'
    commentElement.style.marginLeft = '10px'
    commentElement.textContent = `💬 ${randomCommentCount}`
    setOfEmojis.appendChild(commentElement)

    const commentsLabelElement = document.createElement('p')
    commentsLabelElement.className = 'emojiText showOnTabletOnly'
    commentsLabelElement.style.marginLeft = '10px'
    commentsLabelElement.textContent = 'comments'
    setOfEmojis.appendChild(commentsLabelElement)

    emojiSection.appendChild(setOfEmojis)

    // Create and append the bookmark section
    const bookmarkSection = document.createElement('div')
    bookmarkSection.className = 'bookmarkSection'

    const randomReadTime = Math.floor(Math.random() * 10)
    bookmarkSection.textContent = `${randomReadTime} min read`

    const bookmarkIcon = document.createElement('img')
    bookmarkIcon.src = 'assets/bookmark.png'
    bookmarkIcon.alt = 'bookmark icon'
    bookmarkIcon.width = 15
    bookmarkIcon.height = 15
    bookmarkSection.appendChild(bookmarkIcon)

    emojiSection.appendChild(bookmarkSection)

    // Append the emoji section to the main content
    mainContent.appendChild(emojiSection)

    // Append the main content to the post container
    postContainer.appendChild(mainContent)

    return postContainer
}

function addPostToList(postData) {
    const postElement = createPostElement(postData)
    postsList.appendChild(postElement)
}

addPostToList(firstPost)
