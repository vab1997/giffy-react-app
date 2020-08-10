import React from "react"
import "./Gif.css"
import { Link } from "wouter"

const Gif = ({ id, title, url }) => {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`} className="Gif-link">
        <h4>{title}</h4>
        <img loading="lazy" src={url} alt={title} />
      </Link>
    </div>
  )
}

export default Gif
