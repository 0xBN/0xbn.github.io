import { useState } from 'react'

import {
  Menu,
  ThemeToggle,
  ProfilePicture,
  MenuButton,
  MobileNameHeader,
} from 'components'

export const NavBar = ({
  darkMode,
  isWindowSmall,
  currentSection,
  setCurrentSection,
  themePreference,
  setThemePreference,
}) => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu((prev) => !showMenu)
  }

  return (
    <nav className='flex flex-row-reverse justify-between  md:min-w-full md:flex-col md:items-end md:text-right'>
      {/* MOBILE ONLY  */}
      <MenuButton toggleMenu={toggleMenu} showMenu={showMenu} />
      <MobileNameHeader
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        setCurrentSection={setCurrentSection}
      />
      <div className='mr-8 mt-8 hidden w-1/2 overflow-clip rounded-full md:block'>
        <ProfilePicture darkMode={darkMode} />
      </div>
      <Menu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        isWindowSmall={isWindowSmall}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />

      <ThemeToggle
        themePreference={themePreference}
        setThemePreference={setThemePreference}
      />
    </nav>
  )
}

export default NavBar
