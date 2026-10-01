import { usePortfolioContext } from 'hooks/usePortfolioContext'

export const About = () => {
  const { site } = usePortfolioContext()
  const { about, skills } = site

  const stack = skills.map((s) => s.name).join(' · ')

  return (
    <div className='select-text space-y-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-base'>
      {about.summary.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <p className='border-t border-white/10 pt-4 text-xs uppercase tracking-wide text-neutral-500'>
        <span className='text-primaryLight dark:text-primaryDark'>Stack</span>
        {' — '}
        {stack}
      </p>
    </div>
  )
}
