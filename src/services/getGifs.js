import { API_KEY, API_URL } from "services/settings"

const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map((image) => {
      const { images, title, id } = image
      const { url } = images.downsized_medium
      return { url, title, id }
    })
    return gifs
  }
  return []
}

export default function getGifs({
  limit = 10,
  keyword = "boca juniors",
  page = 0,
} = {}) {
  const api_url = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    limit * page
  }&rating=g&lang=en`

  return fetch(api_url)
    .then((res) => res.json())
    .then(fromApiResponseToGifs)
}
