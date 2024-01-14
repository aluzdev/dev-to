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

const addPostToList = (postData) => {
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
    const tagListID = `tag${id}`

    const postHTML = `<div id=${id} class="postContainerPadding">
<aside>
    <div class="profileInfo">
        <img
            src=${avatar}
            class="profileImage"
        />
        <div class="column">
            <h3
                style="
                    font-size: 16px;
                    color: rgb(64, 64, 64);
                "
            >
                ${authorValue}
            </h3>
            <h4 class="profile-subtitle">${creationDate.slice(4, 9)}</h4>
        </div>
    </div>
</aside>
<div class="paddingOnDesktop">
    <h1 class="mainTitle">${titleValue}</h1>
    <aside id=${tagListID} class="tagSection">
    tags go here
        
    </aside>

    <div class="emoji-section">
        <div class="setOfEmojis">
            <p>💖</p>
            <p>🦄</p>
            <p>🤩</p>
            <p>🙌</p>
            <p>🔥</p>

            <p class="emojiText">${Math.floor(Math.random() * 101)}</p>
            <p
                class="emojiText showOnTabletOnly"
                style="margin-left: 5px"
            >
                reactions
            </p>
            <p
                class="emojiText"
                style="margin-left: 10px"
            >
                💬 ${Math.floor(Math.random() * 101)}
            </p>
            <p
                class="emojiText showOnTabletOnly"
                style="margin-left: 10px"
            >
                comments
            </p>
        </div>
        <div class="bookmarkSection">
            ${Math.floor(Math.random() * 10)} min read
            <img
                src="assets/bookmark.png"
                alt="bookmark icon"
                width="15px"
                height="15px"
                />
            </div>
        </div>
    </div>
</div>`

    postsList.innerHTML = postHTML
}

addPostToList(firstPost)
