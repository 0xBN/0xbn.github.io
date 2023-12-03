import { ContactOption } from 'components'
import React from 'react'
import { DotPatternSvg, GithubSvg, LinkedinSvg, MailSvg } from 'svgs'
import { user } from '../data/userData'
import { usePortfolioContext } from 'hooks/usePortfolioContext'
import { cleanUrl } from 'utils/helpers'

const transformHeroRawData = (data) => {
  return {
    github: data?.user?.[0]?.socialLinks?.github,
    linkedin: data?.user?.[0]?.socialLinks?.linkedin,
    email: data?.user?.[0]?.socialLinks?.email,
  }
}

export const Contact = () => {
  const { portfolioData } = usePortfolioContext()
  const user_v2 = transformHeroRawData(portfolioData)

  return (
    <div className='relative flex flex-col gap-4 p-4 text-2xl md:p-8'>
      <ContactOption
        label={user_v2.email}
        link={`mailto:${user_v2.email}`}
        svg={<MailSvg />}
      />
      <ContactOption
        label={cleanUrl(user_v2.github)}
        link={user_v2.github}
        newTab={true}
        svg={<GithubSvg />}
      />
      <ContactOption
        label={cleanUrl(user_v2.linkedin)}
        link={user_v2.linkedin}
        svg={<LinkedinSvg />}
        newTab={true}
      />
      {/* <ContactOption
        label={user_v2.calendly.split('https://www.')[1]}
        link={user_v2.calendly}
        svg={<CalendarSvg />}
        newTab={true}
      /> */}

      <div className='absolute bottom-24 left-48 z-0 h-40 w-40 animate-spin-slow md:bottom-40 md:left-96 md:h-56 md:w-56'>
        <DotPatternSvg dotColor={`#888`} />
      </div>
    </div>
  )
}
