import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'themePreference'

const readPreference = () => {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'system' || stored === 'light' || stored === 'dark') {
    return stored
  }
  const legacy = localStorage.getItem('darkTheme')
  if (legacy === 'false') return 'light'
  if (legacy === 'true') return 'dark'
  return 'system'
}

const getSystemDark = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches

export const useTheme = () => {
  const [themePreference, setThemePreferenceState] = useState(readPreference)
  const [systemDark, setSystemDark] = useState(getSystemDark)

  const darkMode =
    themePreference === 'system'
      ? systemDark
      : themePreference === 'dark'

  const setThemePreference = useCallback((preference) => {
    setThemePreferenceState(preference)
    localStorage.setItem(STORAGE_KEY, preference)
    localStorage.removeItem('darkTheme')
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (event) => setSystemDark(event.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const root = document.getElementById('root')
    if (!root) return
    if (darkMode) {
      root.classList.add('bg-neutral-950')
      root.classList.remove('bg-neutral-100')
    } else {
      root.classList.add('bg-neutral-100')
      root.classList.remove('bg-neutral-950')
    }
  }, [darkMode])

  return { themePreference, setThemePreference, darkMode }
}
