import { useState, useEffect, useContext } from "react"
import getGifs from "services/getGifs"
import GifsContext from "context/GifsContext"

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const { gifs, setGifs } = useContext(GifsContext)

  useEffect(() => {
    setLoading(true)
    const keywordToUse =
      keyword || localStorage.getItem("lastKeyword") || "random"
    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs)
      setLoading(false)
      localStorage.setItem("lastKeyword", keyword)
    })
  }, [keyword, setGifs])

  return { loading, gifs }
}
