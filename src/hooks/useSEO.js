import { useEffect, useRef } from "react"

export default function useSEO({ description, title }) {
  const prevTitle = useRef(document.title)
  const prevDescription = useRef(
    document.querySelector('meta[name="description"]').getAttribute("content")
  )

  useEffect(() => {
    const previusTitle = prevTitle.current
    if (title) {
      document.title = `${title} | Giffy`
    }
    //cuando se desmonte el componenete se devuelve el titulo de la pag anterior
    return () => (document.title = previusTitle)
  }, [title])

  useEffect(() => {
    const previusDescription = prevDescription.current
    const metaDescription = document.querySelector('meta[name="description"]')
    if (description) {
      metaDescription.setAttribute("content", description)
    }

    return () => metaDescription.setAttribute("content", previusDescription)
  }, [description])
}
