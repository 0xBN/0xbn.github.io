import { useEffect } from 'react'
import { Button } from 'components'
import {
  GithubSvg,
  LinkedinSvg,
  MailSvg,
  DotPatternSvg,
  DownArrowSvg,
} from 'svgs'
import { user } from 'data'
import { animateHeroButtonsOptions, animateHeroTextOptions } from 'utils'

import { motion, useAnimationControls } from 'framer-motion'

export const Hero = ({ darkMode, isWindowSmall }) => {
  const slideRight = useAnimationControls()
  const slideDown = useAnimationControls()

  useEffect(() => {
    slideRight.start(animateHeroButtonsOptions)
  })

  useEffect(() => {
    slideDown.start(animateHeroTextOptions)
  })

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
          {user.first} {user.last}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -50 }}
          custom={0}
          animate={slideDown}
          className={`text-4xl text-primaryLight dark:text-primaryDark `}
        >
          Hello there!, I'm-
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
          {user.hero.line1}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          custom={5}
          animate={slideDown}
          className={`text-xl font-semibold md:text-3xl `}
        >
          {user.hero.line2}
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
        {/* <motion.div
          initial={{ opacity: 0, x: -125 }}
          custom={1}
          animate={slideRight}
        >
          <Button
            svg={<CalendarSvg />}
            label='Meet'
            newTab
            link={user.calendly}
          />
        </motion.div> */}
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
