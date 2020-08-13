import { useState, useEffect, useRef } from "react"

export default function useNearScreen({
  distance = "100px",
  externalRef,
  once = true,
} = {}) {
  const [isNearScreen, setIsNearScreen] = useState(false)
  const fromRef = useRef()

  useEffect(() => {
    const element = externalRef ? externalRef.current : fromRef.current

    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setIsNearScreen(true)
        once && observer.disconnect()
      } else {
        !once && setIsNearScreen(false)
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    })

    if (element) observer.observe(element)

    return () => observer && observer.disconnect()
  }, [distance, externalRef])
  return { isNearScreen, fromRef }
}
