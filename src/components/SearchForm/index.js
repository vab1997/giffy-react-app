import React from "react"
import { useLocation } from "wouter"
import useForm from "./hook"

const RATINGS = ["g", "pg", "pg-13", "r"]

export default function SearchForm({
  initialKeyword = "",
  initialRating = "g",
}) {
  const {
    keyword,
    rating,
    times,
    updateKeyword,
    updateRating,
    updateForm,
  } = useForm({
    initialKeyword,
    initialRating,
  })

  const [_, pushLocation] = useLocation()

  const handleChange = (e) => {
    updateKeyword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    pushLocation(`/search/${keyword}/${rating}`)
    updateForm()
  }

  const handleChangeRating = (e) => {
    updateRating(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <button>Search</button>
      <input
        type="text"
        value={keyword}
        onChange={handleChange}
        placeholder="Search a gif here..."
      />
      <select value={rating} onChange={handleChangeRating}>
        <option disable>Rating Type</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <small>{times}</small>
    </form>
  )
}
