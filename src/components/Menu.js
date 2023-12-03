import React from 'react'
import { MenuItem } from 'components'
import { ContactSvg, GithubSvg, ProjectSvg, UserSvg, ResumeSvg } from 'svgs'
import { user } from 'data'

const MENU_ITEMS = [
  {
    link: '#about',
    label: 'About Me',
    svg: <UserSvg />,
  },
  {
    link: '#projects',
    label: 'Projects',
    svg: <ProjectSvg />,
  },
  {
    link: '#skills',
    label: 'Skills',
    svg: <GithubSvg />,
  },
  {
    link: '#contact',
    label: 'Contact Me',
    svg: <ContactSvg />,
  },
  {
    link: user.resume,
    label: 'Resume',
    svg: <ResumeSvg />,
    newTab: true,
  },
]

export const Menu = ({
  showMenu,
  setShowMenu,
  isWindowSmall,
  currentSection,
  setCurrentSection,
}) => {
  let showProperties = !showMenu
    ? 'opacity-0 pointer-events-none -translate-x-80'
    : null

  return (
    <ul
      className={`absolute ${showProperties} top-[72px] min-h-fullScreenMinHeight min-w-full bg-gray-300  outline-none transition-all duration-500 ease-in-out dark:bg-slate-800 md:pointer-events-auto md:relative md:top-auto
      md:mt-4 md:mb-14 md:block md:min-h-0 md:translate-x-0 md:bg-transparent md:opacity-100 dark:md:bg-transparent`}
      id='dropdown-menu'
    >
      {MENU_ITEMS.map((item, index) => (
        <MenuItem
          key={index}
          setShowMenu={setShowMenu}
          link={item.link}
          label={item.label}
          iconPlacement='right'
          svg={item.svg}
          smoothScrollTo={!isWindowSmall}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          newTab={item.newTab}
        />
      ))}
    </ul>
  )
}
