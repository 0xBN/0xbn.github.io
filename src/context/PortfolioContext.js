import { useTheme } from 'hooks/useTheme'
import { useWindowSize } from 'hooks/useWindowSize'
import React, { createContext, useState } from 'react'
import { useEffect } from 'react'

// Creating the context
export const PortfolioContext = createContext()

export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState({
    // Initialize with your default data structure
    user: {},
    projects: [],
    techIcons: {},
    techWebsites: {},
    techWordUpperCase: [],
    // ... any other data you want to include
  })

  // Additional states
  const isWindowSmall = useWindowSize()
  const { darkMode, toggleTheme } = useTheme()
  const [currentSection, setCurrentSection] = useState('hero')
  const [pageLoaded, setPageLoaded] = useState(false)

  useEffect(() => {
    setPageLoaded(true)
  }, [pageLoaded])

  // Function to update the portfolio data
  const updatePortfolioData = (newData) => {
    setPortfolioData(newData)
  }

  return (
    <PortfolioContext.Provider
      value={{
        portfolioData,
        updatePortfolioData,
        darkMode,
        toggleTheme,
        isWindowSmall,
        currentSection,
        setCurrentSection,
        pageLoaded,
        setPageLoaded,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}
