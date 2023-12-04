import { useState, useEffect } from 'react'

export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(
    Boolean(localStorage.getItem('darkTheme'))
  )

  // Function to toggle the theme
  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode
      localStorage.setItem('darkTheme', String(newMode))
      return newMode
    })
  }

  useEffect(() => {
    const root = document.getElementById('root')
    if (darkMode) {
      root.classList.add('bg-neutral-900')
      root.classList.remove('bg-white')
    } else {
      root.classList.add('bg-white')
      root.classList.remove('bg-neutral-900')
    }
  }, [darkMode])

  return { darkMode, toggleTheme }
}
