import { Footer, Main, Header } from 'components'
import { usePortfolio } from 'hooks/usePortfolio'

function App() {
  const {
    darkMode,
    toggleTheme,
    currentSection,
    setCurrentSection,
    isWindowSmall,
    pageLoaded,
  } = usePortfolio()

  const testSettings = `overflow-clip`

  return (
    <div
      className={`App mx-auto min-h-screen scroll-smooth  
       ${Boolean(darkMode) && 'dark'} md:flex
      ${true && testSettings}`}
    >
      <Header
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        isWindowSmall={isWindowSmall}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />

      <div className='md:col-span-full md:col-start-2 md:max-h-screen md:overflow-y-auto md:overflow-x-hidden'>
        <Main
          darkMode={darkMode}
          pageLoaded={pageLoaded}
          isWindowSmall={isWindowSmall}
          setCurrentSection={setCurrentSection}
        />
        <Footer />
      </div>
    </div>
  )
}

export default App
