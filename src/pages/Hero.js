import { SimpleBrandIcon } from 'components/SimpleBrandIcon'
import { brandIcons } from 'data/brandIcons'
import { usePortfolioContext } from 'hooks/usePortfolioContext'
import { scrollAnimation } from 'utils'

const iconButtonClass =
  'flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-neutral-600 transition duration-300 hover:border-white/25 hover:bg-white/10 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryDark'

export const Hero = () => {
  const { site } = usePortfolioContext()
  const { user, hero } = site

  return (
    <div className='flex min-h-[70vh] flex-col justify-center gap-8 py-4'>
      <div>
        <p className='text-sm font-medium text-primaryDark'>
          Available for interesting work
        </p>
        <h1 className='mt-3 text-4xl font-bold tracking-tight md:text-5xl'>
          {user.firstName}{' '}
          <span className='text-neutral-500 dark:text-neutral-400'>
            {user.lastName}
          </span>
        </h1>
        <p className='mt-2 text-lg text-neutral-600 dark:text-neutral-300'>
          {user.title}
        </p>
      </div>

      <div className='space-y-3 border-l-2 border-primaryDark/50 pl-4'>
        <p className='text-base font-medium leading-snug md:text-lg'>
          {hero.headline}
        </p>
        <p className='text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-base'>
          {hero.subheadline}
        </p>
      </div>

      <div className='flex items-center gap-3'>
        <a
          href={user.github}
          target='_blank'
          rel='noopener noreferrer'
          className={`${iconButtonClass} hover:text-[#181717] dark:hover:text-white`}
          aria-label='GitHub'
        >
          <SimpleBrandIcon icon={brandIcons.github} className='size-5' />
        </a>
        <a
          href={user.linkedin}
          target='_blank'
          rel='noopener noreferrer'
          className={`${iconButtonClass} hover:text-[#0A66C2]`}
          aria-label='LinkedIn'
        >
          <SimpleBrandIcon icon={brandIcons.linkedin} className='size-5' />
        </a>
        <a
          href={`mailto:${user.email}`}
          className={`${iconButtonClass} hover:text-[#EA4335]`}
          aria-label='Email'
        >
          <SimpleBrandIcon icon={brandIcons.gmail} className='size-5' />
        </a>
      </div>
    </div>
  )
}
