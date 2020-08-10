import React, { useState, useContext } from "react"
import { Link, useLocation } from "wouter"
import { useGifs } from "hooks/useGifs"
import ListOfGifs from "components/ListOfGifs"
import StaticContext from "context/StaticContext"
import GifsContext from "context/GifsContext"

const POPULARES_GIFS = ["messi", "cristiano", "neymar"]

export default function Home() {
  const [keyword, setKeyword] = useState("")
  const [path, pushLocation] = useLocation()
  const { loading, gifs } = useGifs()

  const context = useContext(GifsContext)
  console.log(context.gifs)

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
        <input
          type="text"
          value={keyword}
          onChange={handleChange}
          placeholder="Search a gif here..."
        />
      </form>
      <h3 className="App-title">Ultima busqueda</h3>
      <ListOfGifs gifs={gifs} />
      <h3 className="App-title">Los gifs mas populares</h3>
      <ul>
        {POPULARES_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
