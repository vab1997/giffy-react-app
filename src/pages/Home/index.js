import React from "react"
import { useGifs } from "hooks/useGifs"
import ListOfGifs from "components/ListOfGifs"
import TrendingSearches from "components/TrendingSearches"
import SearchForm from "components/SearchForm"
import { Helmet } from "react-helmet"

export default function Home() {
  const { loading, gifs } = useGifs()

  return (
    <>
      <Helmet>
        <title>Home || Giffy</title>
      </Helmet>
      <header>
        <SearchForm />
      </header>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Ultima busqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </>
  )
}
