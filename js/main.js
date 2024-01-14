import { getAllPosts } from './utils.js'
import { addPostsToList } from './utils.js'

const posts = await getAllPosts()

addPostsToList(posts)
