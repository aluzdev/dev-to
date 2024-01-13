export const fetchAllData = async () => {
    const url = 'https://dev-to-fcbcc-default-rtdb.firebaseio.com/.json'
    const response = await fetch(url)
    const data = await response.json()
    console.log({ data })
    return data
}
