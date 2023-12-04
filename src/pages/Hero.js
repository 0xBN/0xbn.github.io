import { useEffect } from 'react'
import { Button } from 'components'
import {
  GithubSvg,
  LinkedinSvg,
  MailSvg,
  DotPatternSvg,
  DownArrowSvg,
} from 'svgs'
import { animateHeroButtonsOptions, animateHeroTextOptions } from 'utils'
import { motion, useAnimationControls } from 'framer-motion'
import { usePortfolioContext } from 'hooks/usePortfolioContext'

const transformHeroRawData = (data) => {
  return {
    firstName: data?.user?.[0]?.firstName,
    lastName: data?.user?.[0]?.lastName,
    title: data?.user?.[0]?.title,
    headline: data?.heroSection?.[0]?.headline,
    subheadline: data?.heroSection?.[0]?.subheadline,
    greeting: data?.heroSection?.[0]?.greeting,
    github: data?.user?.[0]?.socialLinks?.github,
    linkedin: data?.user?.[0]?.socialLinks?.linkedin,
    email: data?.user?.[0]?.socialLinks?.email,
  }
}

export const Hero = ({ darkMode, isWindowSmall }) => {
  const { portfolioData, pageLoaded, headerLoaded } = usePortfolioContext()
  const user = transformHeroRawData(portfolioData)

  const slideRight = useAnimationControls()
  const slideDown = useAnimationControls()

  useEffect(() => {
    if (pageLoaded && headerLoaded) {
      slideRight.start(animateHeroButtonsOptions)
      slideDown.start(animateHeroTextOptions)
    }
  }, [slideRight, slideDown, pageLoaded, headerLoaded])

  return (
    <div className='delay flex min-h-fullScreenMinHeight flex-col justify-evenly px-8 md:min-h-screen md:py-24'>
      <div
        className={`relative flex flex-col-reverse gap-6 text-3xl font-semibold`}
      >
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          custom={1}
          animate={slideDown}
          className={`animation-delay-4000 z-10 text-7xl font-bold md:text-9xl `}
        >
          {user.firstName} {user.lastName}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -50 }}
          custom={0}
          animate={slideDown}
          className={`text-4xl text-primaryLight dark:text-primaryDark `}
        >
          {user.greeting}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: -150 }}
          custom={2}
          animate={slideDown}
          className={`absolute -bottom-16 left-40 h-40 w-40 rotate-45 animate-spin-slow md:left-72 md:h-56 md:w-56`}
        >
          <DotPatternSvg dotColor={darkMode ? '#f7c1ea' : '#9E0000'} />
        </motion.div>
      </div>
      <div className='flex flex-col gap-6'>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          custom={3}
          animate={slideDown}
          className={`text-xl font-semibold md:text-3xl`}
        >
          {user.title}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          custom={4}
          animate={slideDown}
          className={`text-xl font-semibold text-secondaryLight dark:text-secondaryDark md:text-3xl `}
        >
          {user.headline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          custom={5}
          animate={slideDown}
          className={`text-xl font-semibold md:text-3xl `}
        >
          {user.subheadline}
        </motion.p>
      </div>
      <div className='flex items-center justify-center gap-4 py-8 md:justify-start'>
        <motion.div
          initial={{ opacity: 0, x: -125 }}
          custom={0}
          animate={slideRight}
        >
          <Button
            svg={<GithubSvg />}
            label='Github'
            newTab
            link={user.github}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -125 }}
          custom={1}
          animate={slideRight}
        >
          <Button
            svg={<LinkedinSvg />}
            label='LinkedIn'
            newTab
            link={user.linkedin}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -125 }}
          custom={2}
          animate={slideRight}
        >
          <Button
            svg={<MailSvg />}
            label='Contact'
            link='#contact'
            smoothScroll={isWindowSmall ? false : true}
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        custom={3}
        animate={slideRight}
        className='absolute right-1/2 bottom-0 translate-x-1/2 md:hidden'
      >
        <DownArrowSvg />
      </motion.div>
    </div>
  )
}
