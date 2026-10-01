import { ContactOption } from 'components'
import { SimpleBrandIcon } from 'components/SimpleBrandIcon'
import { brandIcons } from 'data/brandIcons'
import { usePortfolioContext } from 'hooks/usePortfolioContext'
import { cleanUrl } from 'utils/helpers'

export const Contact = () => {
  const { site } = usePortfolioContext()
  const { user } = site

  return (
    <div className='select-text flex flex-col gap-3 text-base md:text-lg'>
      <ContactOption
        label={user.email}
        link={`mailto:${user.email}`}
        svg={<SimpleBrandIcon icon={brandIcons.gmail} className='size-6' />}
      />
      <ContactOption
        label={cleanUrl(user.github)}
        link={user.github}
        newTab={true}
        svg={<SimpleBrandIcon icon={brandIcons.github} className='size-6' />}
      />
      <ContactOption
        label={cleanUrl(user.linkedin)}
        link={user.linkedin}
        svg={<SimpleBrandIcon icon={brandIcons.linkedin} className='size-6' />}
        newTab={true}
      />
    </div>
  )
}
