import { useState, useEffect } from 'react'

export const useWindowSize = () => {
  const [isWindowSmall, setIsWindowSmall] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsWindowSmall(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)

    // Call the handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isWindowSmall
}
