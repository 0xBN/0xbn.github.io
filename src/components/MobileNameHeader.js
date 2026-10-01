import { usePortfolioContext } from 'hooks/usePortfolioContext'

export const MobileNameHeader = ({
  showMenu,
  setShowMenu,
  setCurrentSection,
}) => {
  const { site } = usePortfolioContext()
  const { user } = site

  const clickHeroLogo = () => {
    if (showMenu) setShowMenu(false)
    setCurrentSection('hero')
    window.location.href = '#'
  }

  return (
    <div onClick={clickHeroLogo} className='cursor-pointer py-3 md:hidden'>
      <h1 className='text-center text-xl font-bold'>
        {user.firstName} {user.lastName}
      </h1>
      <p className='text-center text-sm text-neutral-600 dark:text-neutral-400'>
        {user.title}
      </p>
    </div>
  )
}
