import { fetchAllData } from './utils.js'

const posts = fetchAllData()
const postsList = document.getElementById('postsList')
postsList.innerHTML = ''

const postHTML = `<div class="postContainerPadding">
<aside>
    <div class="profileInfo">
        <img
            src="/assets/rounded-profile.png"
            class="profileImage"
            alt="profile picture of a guy smiling"
        />
        <div class="column">
            <h3
                style="
                    font-size: 16px;
                    color: rgb(64, 64, 64);
                "
            >
                Mateusz Charytoniuk
            </h3>
            <h4 class="profile-subtitle">Nov 15</h4>
        </div>
    </div>
</aside>
<div class="paddingOnDesktop">
    <h1 class="mainTitle">To Junior Developers</h1>
    <aside class="tagSection">
        <p class="tags">#programming</p>
        <p class="tags">#beginners</p>
        <p class="tags">#career</p>
        <p class="tags">#productivity</p>
    </aside>

    <div class="emoji-section">
        <div class="setOfEmojis">
            <p>💖</p>
            <p>🦄</p>
            <p>🤩</p>
            <p>🙌</p>
            <p>🔥</p>

            <p class="emojiText">286</p>
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
                💬 97
            </p>
            <p
                class="emojiText showOnTabletOnly"
                style="margin-left: 10px"
            >
                comments
            </p>
        </div>
        <div class="bookmarkSection">
            4 min read
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
