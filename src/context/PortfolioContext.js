import React, { createContext, useState, useEffect } from 'react'
import { useTheme } from 'hooks/useTheme'
import { useWindowSize } from 'hooks/useWindowSize'
import { useSanityData } from 'hooks/useSanityData'
import { useDocumentTitle } from 'hooks/useDocumentTitle'

export const PortfolioContext = createContext()

const PROJECT_ID = 'gm5jomue'
const DATASET = 'production'
const SCHEMA_TYPES = [
  'user',
  'aboutSection',
  'heroSection',
  'project',
  'projects',
  'tech',
]

export const PortfolioProvider = ({ children }) => {
  // State
  const [portfolioData, setPortfolioData] = useState()
  const { darkMode, toggleTheme } = useTheme()
  const [currentSection, setCurrentSection] = useState('hero')
  const [pageLoaded, setPageLoaded] = useState(false)

  // Hooks
  const { isWindowSmall } = useWindowSize()
  const { data, sanityClient } = useSanityData(
    PROJECT_ID,
    DATASET,
    SCHEMA_TYPES
  )
  useDocumentTitle(portfolioData)

  // Effects
  useEffect(() => {
    setPageLoaded(true)
  }, [pageLoaded])

  useEffect(() => {
    if (data) {
      setPortfolioData(data)
    }
  }, [data])

  return (
    <PortfolioContext.Provider
      value={{
        portfolioData,
        darkMode,
        toggleTheme,
        isWindowSmall,
        currentSection,
        setCurrentSection,
        pageLoaded,
        setPageLoaded,
        sanityClient,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}
