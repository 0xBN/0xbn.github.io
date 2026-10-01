import { GlassPanel } from 'components/GlassPanel'
import { About, Projects, Skills, Hero } from 'pages'
import { useScrollSection } from 'hooks/useScrollSection'

export const Main = ({ setCurrentSection }) => {
  useScrollSection(setCurrentSection)

  return (
    <main className='flex flex-col gap-5 pb-8 font-display text-neutral-900 dark:text-neutral-100'>
      <GlassPanel id='hero' className='min-h-[min(70vh,640px)]'>
        <Hero />
      </GlassPanel>

      <GlassPanel id='about' title='About'>
        <About />
      </GlassPanel>

      <GlassPanel id='projects' title='Projects'>
        <Projects />
      </GlassPanel>

      <GlassPanel id='skills' title='Tools'>
        <Skills />
      </GlassPanel>
    </main>
  )
}
