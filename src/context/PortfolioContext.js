import React, { createContext, useContext, useState } from 'react'

// Creating the context
export const PortfolioContext = createContext()

export const PortfolioProvider = ({ children }) => {
  // State to hold your portfolio data
  const [portfolioData, setPortfolioData] = useState({
    // Initialize with your default data structure
    user: {},
    projects: [],
    techIcons: {},
    techWebsites: {},
    techWordUpperCase: [],
    // ... any other data you want to include
  })

  const [test, setTest] = useState('test')

  // Function to update the portfolio data
  const updatePortfolioData = (newData) => {
    setPortfolioData(newData)
  }

  return (
    <PortfolioContext.Provider
      value={{ portfolioData, updatePortfolioData, test, setTest }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}
