const API_URL = 'https://dev-to-fcbcc-default-rtdb.firebaseio.com/.json'
export const backend_url = 'http://localhost:1337'
export const getAllPosts = async () => {
    try {
        const response = await fetch(`${backend_url}/posts`)

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`)
        }

        const data = await response.json()
        const posts = data
        console.log({ posts })

        if (!data) {
            throw new Error('Invalid data format received from the API.')
        }

        return data
    } catch (error) {
        // Handle errors gracefully, e.g., log or throw a custom error
        console.error('Error fetching data:', error)
        throw error
    }
}

const formatDateAndTimeAgo = (dateString) => {
    const currentDate = new Date()
    const inputDate = new Date(dateString)

    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - inputDate

    // Define time intervals in milliseconds
    const minute = 60 * 1000
    const hour = 60 * minute
    const day = 24 * hour

    // Calculate the difference in days, hours, and minutes
    const daysAgo = Math.floor(timeDifference / day)
    const hoursAgo = Math.floor((timeDifference % day) / hour)
    const minutesAgo = Math.floor((timeDifference % hour) / minute)

    // Format the date
    const month = inputDate.toLocaleString('en-US', { month: 'short' })
    const dayOfMonth = inputDate.getDate()
    const formattedDate = `${month} ${dayOfMonth}`

    // Create the output string
    let output = `${formattedDate} - `

    if (daysAgo > 0) {
        output += `${daysAgo} day${daysAgo === 1 ? '' : 's'} ago`
    } else if (hoursAgo > 0) {
        output += `${hoursAgo} hour${hoursAgo === 1 ? '' : 's'} ago`
    } else {
        output += `${minutesAgo} minute${minutesAgo === 1 ? '' : 's'} ago`
    }

    return output
}

//helper function for addPostsToList
const createPostElement = (postData) => {
    const { author, avatar, content, createdAt, _id, image, tags, title } =
        postData

    // Create the main post container
    const postContainer = document.createElement('div')
    postContainer.id = _id
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
    authorName.textContent = author

    const creationDateElement = document.createElement('h4')
    creationDateElement.className = 'profile-subtitle'
    creationDateElement.textContent = formatDateAndTimeAgo(createdAt)

    // Append profile elements
    profileColumn.appendChild(authorName)
    profileColumn.appendChild(creationDateElement)
    profileInfo.appendChild(profileImage)
    profileInfo.appendChild(profileColumn)
    postContainer.appendChild(profileInfo)

    // Create the main content section
    const mainContent = document.createElement('div')
    mainContent.className = 'paddingOnDesktop'

    const h1 = document.createElement('h1')
    h1.className = 'mainTitle'
    h1.textContent = title

    const tagSection = document.createElement('aside')
    tagSection.id = `tag${_id}`
    tagSection.className = 'tagSection'

    tags?.split(', ').forEach((tag) => {
        const tagElement = document.createElement('p')
        tagElement.className = 'tags'
        tagElement.textContent = tag
        tagSection.appendChild(tagElement)
    })

    mainContent.appendChild(tagSection)

    // Append main content elements
    mainContent.appendChild(h1)
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

/*
description: Receives an array of posts and places them in the posts list
@param postData: an array of posts
@output: each post in the given array is placed in the main page.
*/
export const addPostsToList = (postsData) => {
    const postsList = document.getElementById('postsList')
    const locationToInsertFirstPostImage =
        document.getElementById('firstPostImage')
    postsList.innerHTML = ''
    const firstPostImage = postsData[0].image
    locationToInsertFirstPostImage.src = firstPostImage

    postsData.forEach((post) => {
        const postElement = createPostElement(post)
        postsList.appendChild(postElement)
    })

    const newPagePost = document.querySelectorAll('.postContainerPadding')

    newPagePost.forEach((postContainer) => {
        postContainer.addEventListener('click', () => {
            console.log({ postContainer })
            let id = postContainer.id
            window.location.href = `views/post.html?.id=${id}`
        })
    })
}
