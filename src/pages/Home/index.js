import React, { useState, useContext } from "react"
import { Link, useLocation } from "wouter"
import { useGifs } from "hooks/useGifs"
import ListOfGifs from "components/ListOfGifs"
import GifsContext from "context/GifsContext"
import TrendingSearches from "components/TrendingSearches"

export default function Home() {
  const [keyword, setKeyword] = useState("")
  const [path, pushLocation] = useLocation()
  const { loading, gifs } = useGifs()

  const context = useContext(GifsContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    pushLocation(`/search/${keyword}`)
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Search</button>
        <input
          type="text"
          value={keyword}
          onChange={handleChange}
          placeholder="Search a gif here..."
        />
      </form>
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
