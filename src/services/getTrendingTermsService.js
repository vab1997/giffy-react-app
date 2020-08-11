import { API_KEY, API_URL } from "services/settings"

const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse
  return data
}

export default function getTrendingTerms() {
  const api_url = `${API_URL}/trending/searches?api_key=${API_KEY}`

  return fetch(api_url)
    .then((res) => res.json())
    .then(fromApiResponseToGifs)
}
