import React, { useRef, useEffect, useCallback } from "react"
import Spinner from "components/Spinner"
import ListOfGifs from "components/ListOfGifs"
import SearchForm from "components/SearchForm"
import { useGifs } from "hooks/useGifs"
import useNearScreen from "hooks/useNearScreen"
import debounce from "just-debounce-it"
import { Helmet } from "react-helmet"

export default function SearchResults({ params }) {
  const { keyword, rating = "g" } = params
  const { loading, gifs, setPage } = useGifs({ keyword, rating })
  const visorRef = useRef()
  const { isNearScreen } = useNearScreen({
    externalRef: !loading && visorRef,
    once: false,
  })

  const title = gifs
    ? `${gifs.length} Resultados de ${decodeURI(keyword)}`
    : loading
    ? "Cargando..."
    : ""

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  )

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={title} />
            <meta name="rating" content="General" />
          </Helmet>
          <header>
            <SearchForm initialKeyword={keyword} initialRating={rating} />
          </header>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={visorRef}></div>
        </>
      )}
    </>
  )
}
