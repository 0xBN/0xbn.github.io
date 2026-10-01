import { usePortfolioContext } from 'hooks/usePortfolioContext'

export const About = () => {
  const { site } = usePortfolioContext()
  const { about } = site

  return (
    <div className='select-text space-y-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-base'>
      {about.summary.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  )
}
