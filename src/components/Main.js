import { useEffect } from 'react'
import { GlassPanel } from 'components/GlassPanel'
import { About, Projects, Skills, Hero } from 'pages'
import { useInView } from 'react-intersection-observer'

export const Main = ({ setCurrentSection }) => {
  const inViewOptions = {
    threshold: 0.25,
    rootMargin: '-40% 0px -40% 0px',
  }

  const { ref: aboutRef, inView: aboutInView } = useInView(inViewOptions)
  const { ref: projectsRef, inView: projectsInView } = useInView(inViewOptions)
  const { ref: skillsRef, inView: skillsInView } = useInView(inViewOptions)

  useEffect(() => {
    if (aboutInView) setCurrentSection('about')
  }, [aboutInView, setCurrentSection])

  useEffect(() => {
    if (projectsInView) setCurrentSection('projects')
  }, [projectsInView, setCurrentSection])

  useEffect(() => {
    if (skillsInView) setCurrentSection('skills')
  }, [skillsInView, setCurrentSection])

  return (
    <main className='flex flex-col gap-5 pb-8 font-display text-neutral-900 dark:text-neutral-100'>
      <GlassPanel id='hero' className='min-h-[min(70vh,640px)]'>
        <Hero />
      </GlassPanel>

      <div ref={aboutRef}>
        <GlassPanel id='about' title='About'>
          <About />
        </GlassPanel>
      </div>

      <div ref={projectsRef}>
        <GlassPanel id='projects' title='Projects'>
          <Projects />
        </GlassPanel>
      </div>

      <div ref={skillsRef}>
        <GlassPanel id='skills' title='Tools'>
          <Skills />
        </GlassPanel>
      </div>
    </main>
  )
}
