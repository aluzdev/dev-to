export const fetchAllData = async () => {
    const url = 'https://dev-to-fcbcc-default-rtdb.firebaseio.com/.json'
    const response = await fetch(url)
    const data = await response.json()
    const dataArray = Object.keys(data.posts).map((key) => ({
        ...data.posts[key],
        key,
    }))
    console.log({ dataArray })
    return dataArray
}
