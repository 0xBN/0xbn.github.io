import { useState, useEffect } from 'react';
import { Footer, Main, Header } from 'components';

function App() {
  const root = document.getElementById('root');

  const [pageLoaded, setPageLoaded] = useState(false);
  const [darkMode, setDarkMode] = useState(Boolean(localStorage.darkTheme));
  const [isWindowSmall, setIsWindowSmall] = useState(null);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    setPageLoaded(true);
  }, [pageLoaded]);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setIsWindowSmall(newWidth < 768);
    };

    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  useEffect(() => {
    // SAVE DARK THEME IN LOCAL STORAGE
    if (localStorage.darkTheme === undefined) {
      localStorage.setItem('darkTheme', 'true');
    }
    if (localStorage.darkTheme === 'true') {
      setDarkMode(true);
    }
    if (localStorage.darkTheme === 'false') {
      setDarkMode(false);
    }
  }, []);

  // HANDLE HTML BACKGROUND COLOR
  if (darkMode) {
    root.classList.add('bg-slate-900');
    root.classList.remove('bg-white');
  } else {
    root.classList.add('bg-white');
    root.classList.remove('bg-slate-900');
  }

  const toggleTheme = () => {
    setDarkMode((prev) => {
      localStorage.setItem('darkTheme', !Boolean(prev));
      return !darkMode;
    });
  };

  const testSettings = `overflow-clip`;

  return (
    <div
      className={`App mx-auto min-h-screen scroll-smooth  
       ${Boolean(darkMode) && 'dark'}   md:flex
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
  );
}

export default App;
