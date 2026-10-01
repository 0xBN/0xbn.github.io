import { SimpleBrandIcon } from 'components/SimpleBrandIcon'
import { brandIcons } from 'data/brandIcons'
import { usePortfolioContext } from 'hooks/usePortfolioContext'
import { scrollAnimation } from 'utils'

const socialClass =
  'flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition duration-200 hover:bg-white/10 hover:text-neutral-900 dark:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryDark'

const primaryClass =
  'inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition duration-200 hover:bg-neutral-800 active:scale-[0.98] dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100'

const secondaryClass =
  'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-neutral-700 ring-1 ring-inset ring-neutral-900/10 transition duration-200 hover:bg-white/40 active:scale-[0.98] dark:text-neutral-200 dark:ring-white/15 dark:hover:bg-white/10'

export const Hero = () => {
  const { site } = usePortfolioContext()
  const { user, hero } = site

  return (
    <div className='flex flex-col gap-6 py-0.5'>
      <div className='space-y-2.5'>
        {hero.eyebrow ? (
          <p className='text-[13px] font-medium tracking-wide text-primaryLight dark:text-primaryDark'>
            {hero.eyebrow}
          </p>
        ) : null}
        <h1 className='text-balance text-[1.625rem] font-semibold leading-[1.12] tracking-tight md:text-[2rem] md:leading-[1.15]'>
          {hero.headline}
        </h1>
        <p className='max-w-[42ch] text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400'>
          {hero.subheadline}
        </p>
      </div>

      <div className='flex flex-wrap items-center gap-2.5'>
        <button type='button' className={primaryClass} onClick={() => scrollAnimation('#projects')}>
          Projects
        </button>
        <a
          href={user.resume}
          target='_blank'
          rel='noopener noreferrer'
          className={secondaryClass}
        >
          Resume
        </a>
      </div>

      <div className='flex items-center gap-1.5 border-t border-white/10 pt-5'>
        <a
          href={user.github}
          target='_blank'
          rel='noopener noreferrer'
          className={`${socialClass} hover:text-[#181717] dark:hover:text-white`}
          aria-label='GitHub'
        >
          <SimpleBrandIcon icon={brandIcons.github} className='size-[18px]' />
        </a>
        <a
          href={user.linkedin}
          target='_blank'
          rel='noopener noreferrer'
          className={`${socialClass} hover:text-[#0A66C2]`}
          aria-label='LinkedIn'
        >
          <SimpleBrandIcon icon={brandIcons.linkedin} className='size-[18px]' />
        </a>
        <a
          href={`mailto:${user.email}`}
          className={`${socialClass} hover:text-[#EA4335]`}
          aria-label='Email'
        >
          <SimpleBrandIcon icon={brandIcons.gmail} className='size-[18px]' />
        </a>
      </div>
    </div>
  )
}
