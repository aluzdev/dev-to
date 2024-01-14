const API_URL = 'https://dev-to-fcbcc-default-rtdb.firebaseio.com/.json'

export const getAllPosts = async () => {
    try {
        const response = await fetch(API_URL)

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`)
        }

        const data = await response.json()

        if (!data || !data.posts) {
            throw new Error('Invalid data format received from the API.')
        }

        const allPosts = Object.keys(data.posts).map((id) => ({
            ...data.posts[id],
            id,
        }))
        console.log({ allPosts })

        return allPosts
    } catch (error) {
        // Handle errors gracefully, e.g., log or throw a custom error
        console.error('Error fetching data:', error)
        throw error
    }
}

export const createPostElement = (postData) => {
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
    creationDateElement.textContent = creationDate?.slice(4, 9)

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

    tagsValue?.split(', ').forEach((tag) => {
        const tagElement = document.createElement('p')
        tagElement.className = 'tags'
        tagElement.textContent = tag
        tagSection.appendChild(tagElement)
    })

    mainContent.appendChild(tagSection)

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
