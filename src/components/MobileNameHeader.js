import React from 'react'
import { usePortfolioContext } from 'hooks/usePortfolioContext'

const transformMobileNameHeaderRawData = (data) => {
  return {
    firstName: data?.user?.[0]?.firstName,
    lastName: data?.user?.[0]?.lastName,
    title: data?.user?.[0]?.title,
  }
}

export const MobileNameHeader = ({
  showMenu,
  setShowMenu,
  setCurrentSection,
}) => {
  const { portfolioData } = usePortfolioContext()
  const user = transformMobileNameHeaderRawData(portfolioData)

  const clickHeroLogo = () => {
    if (showMenu) setShowMenu(false)
    setCurrentSection('hero')
    window.location.href = '#'
  }

  return (
    <div onClick={clickHeroLogo} className='py-3 md:hidden'>
      <h1 className=' text-center text-xl font-bold'>
        {user.firstName} {user.lastName}
      </h1>
      <p>{user.title}</p>
    </div>
  )
}
