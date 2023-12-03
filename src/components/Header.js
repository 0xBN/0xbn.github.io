import { useEffect } from 'react'
import { NavBar } from 'components'
import { motion, useAnimationControls } from 'framer-motion'
import { animateHeaderOptions } from 'utils'

export const Header = ({
  darkMode,
  toggleTheme,
  isWindowSmall,
  currentSection,
  setCurrentSection,
}) => {
  const slideRight = useAnimationControls()

  useEffect(() => {
    slideRight.start(animateHeaderOptions)
  }, [slideRight])

  return (
    <motion.header
      initial={{ opacity: 0, x: -50 }}
      custom={1}
      animate={slideRight}
      className={`sticky top-0 z-30 bg-navLight shadow-sm shadow-gray-500 dark:bg-navDark dark:text-white dark:shadow-md md:relative md:max-h-screen
      md:min-w-[250px] md:max-w-[300px] md:overflow-y-auto`}
    >
      <NavBar
        toggleTheme={toggleTheme}
        darkMode={darkMode}
        isWindowSmall={isWindowSmall}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </motion.header>
  )
}
