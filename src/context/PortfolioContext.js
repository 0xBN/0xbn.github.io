import React, { createContext, useState } from 'react'
import { useTheme } from 'hooks/useTheme'
import { useWindowSize } from 'hooks/useWindowSize'
import { useDocumentTitle } from 'hooks/useDocumentTitle'
import { site } from 'data/site'

export const PortfolioContext = createContext()

export const PortfolioProvider = ({ children }) => {
  const { darkMode, themePreference, setThemePreference } = useTheme()
  const [currentSection, setCurrentSection] = useState('hero')
  const [pageLoaded] = useState(true)
  const [headerLoaded, setHeaderLoaded] = useState(false)

  const { isWindowSmall } = useWindowSize()
  useDocumentTitle(site)

  return (
    <PortfolioContext.Provider
      value={{
        site,
        darkMode,
        themePreference,
        setThemePreference,
        isWindowSmall,
        currentSection,
        setCurrentSection,
        pageLoaded,
        headerLoaded,
        setHeaderLoaded,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}
