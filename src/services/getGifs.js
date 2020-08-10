const api_key = 'RuUXACjBdlasFAGcE0E21OUQwc8z9sK7'


export default function getGifs({keyword = 'boca juniors'} = {}) {
    const api_url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

    return fetch(api_url)
    .then(res => res.json())
    .then(response => {
      const {data} = response
      if(Array.isArray(data)){
        const gifs = data.map(image => {
            const {images, title, id} = image
            const {url} = images.downsized_medium
            return {url, title, id}
        })
        return gifs
      }
    })
}