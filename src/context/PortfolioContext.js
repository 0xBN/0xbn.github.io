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
  const [headerLoaded, setHeaderLoaded] = useState(false)

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
    if (portfolioData?.user) {
      setPageLoaded(true)
    }
  }, [pageLoaded, portfolioData])

  useEffect(() => {
    if (data) {
      setPortfolioData(data)
    }
  }, [data])

  useEffect(() => {
    window.scrollTo(0, 0)
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
        headerLoaded,
        setHeaderLoaded,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}
