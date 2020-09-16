import React from "react"
import "./Gif.css"
import { Link } from "wouter"

export function Gif({ id, title, url }) {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`} className="Gif-link">
        <h4>{title}</h4>
        <img loading="lazy" src={url} alt={title} />
      </Link>
    </div>
  )
}

export default React.memo(Gif, (prevProps, nextProps) => {
  //como las id seran iguales lo memoriza lo guarda y evita rendizar
  //cuando la prevProps.id y nextProps.id son iguales
  return prevProps.id === nextProps.id
})
