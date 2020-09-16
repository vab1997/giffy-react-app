import { useState, useEffect, useContext } from "react"
import getGifs from "services/getGifs"
import GifsContext from "context/GifsContext"

const INITIAL_PAGE = 0

export function useGifs({ keyword, rating } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const { gifs, setGifs } = useContext(GifsContext)

  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "random"

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword: keywordToUse, rating }).then((gifs) => {
      setGifs(gifs)
      setLoading(false)
      localStorage.setItem("lastKeyword", keyword)
    })
  }, [keyword, keywordToUse, setGifs, rating])

  useEffect(() => {
    if (page === INITIAL_PAGE) return
    setLoadingNextPage(true)
    getGifs({ keyword: keywordToUse, rating, page }).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs))
      setLoadingNextPage(false)
    })
  }, [page, keywordToUse, rating, setGifs])

  return { loading, loadingNextPage, gifs, setPage }
}
