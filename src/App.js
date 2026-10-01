import { Footer, Main, SiteHeader } from 'components'
import { usePortfolioContext } from 'hooks/usePortfolioContext'

function App() {
  const {
    darkMode,
    themePreference,
    setThemePreference,
    currentSection,
    setCurrentSection,
  } = usePortfolioContext()

  return (
    <div className={`site-shell min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className='site-bg' aria-hidden='true' />

      <div className='relative mx-auto max-w-2xl px-4 py-4 md:px-6 md:py-6'>
        <SiteHeader
          darkMode={darkMode}
          themePreference={themePreference}
          setThemePreference={setThemePreference}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />

        <div className='mt-4'>
          <Main setCurrentSection={setCurrentSection} />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
