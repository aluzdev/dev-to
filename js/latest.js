import { getAllPosts, addPostsToList } from './utils.js';

const latestFilter = document.getElementById('latest');

latestFilter.addEventListener('click', async () => {
    const allPosts = await getAllPosts();

    const sortedPosts = allPosts.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));

    console.log({ sortedPosts });
    addPostsToList(sortedPosts);
});
