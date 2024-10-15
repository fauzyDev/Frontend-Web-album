const apiUrl = import.meta.env.VITE_API_URL;

export const getData = async (path) => {
    const url = `${apiUrl}${path}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}