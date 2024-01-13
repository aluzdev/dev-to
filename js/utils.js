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
