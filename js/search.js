import { getAllPosts } from './utils.js';

const findPostByTitleValue = async () => {

        let postsObject = await getAllPosts();
        let searchInput = document.getElementById('search-input');
        let title = searchInput.value.toLowerCase();

        // Busca el primer post que cumple con el título
        const foundPost = Object.values(postsObject).find((post) => post.titleValue.toLowerCase().includes(title));

        if (foundPost) {
            console.log('Post Found:', foundPost);
        }
};

let searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', findPostByTitleValue);
