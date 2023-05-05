import React from 'react';
import { MenuItem } from 'components';
import { ContactSvg, GithubSvg, ProjectSvg, ResumeSvg, UserSvg } from 'svgs';
import { user } from 'data';

export const Menu = ({
  showMenu,
  setShowMenu,
  isWindowSmall,
  currentSection,
  setCurrentSection,
}) => {
  let showProperties = !showMenu
    ? 'opacity-0 pointer-events-none -translate-x-80'
    : null;

  return (
    <ul
      className={`absolute ${showProperties} top-[72px] min-h-fullScreenMinHeight min-w-full bg-gray-300  outline-none transition-all duration-500 ease-in-out dark:bg-slate-800 md:pointer-events-auto md:relative md:top-auto
      md:mt-4 md:mb-14 md:block md:min-h-0 md:translate-x-0 md:bg-transparent md:opacity-100 dark:md:bg-transparent`}
      id='dropdown-menu'
    >
      <MenuItem
        setShowMenu={setShowMenu}
        link='#about'
        label='About Me'
        iconPlacement='right'
        svg={<UserSvg />}
        smoothScrollTo={!isWindowSmall}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <MenuItem
        setShowMenu={setShowMenu}
        link='#projects'
        label='Projects'
        iconPlacement='right'
        svg={<ProjectSvg />}
        smoothScrollTo={!isWindowSmall}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <MenuItem
        setShowMenu={setShowMenu}
        link='#skills'
        label='Skills'
        iconPlacement='right'
        svg={<GithubSvg />}
        smoothScrollTo={!isWindowSmall}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <MenuItem
        setShowMenu={setShowMenu}
        link='#contact'
        label='Contact Me'
        iconPlacement='right'
        svg={<ContactSvg />}
        smoothScrollTo={!isWindowSmall}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      {/* <MenuItem
        setShowMenu={setShowMenu}
        link={user.resume}
        label='Resume'
        iconPlacement='right'
        svg={<ResumeSvg />}
        smoothScrollTo={false}
        newTab={true}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      /> */}
    </ul>
  );
};
