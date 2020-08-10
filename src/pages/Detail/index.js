import React from "react"
import Gif from "components/Gif"
import useGlobalGifs from "hooks/useGlobalGifs"

export default function Detail({ params }) {
  const gifs = useGlobalGifs()

  const gif = gifs.find((singleGif) => singleGif.id === params.id)
  const { id, title, url } = gif
  console.log(gif)

  return <Gif id={id} title={title} url={url} />
}
