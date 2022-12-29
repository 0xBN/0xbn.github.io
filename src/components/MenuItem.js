import { SvgAndLabel } from 'components';
import { scrollAnimation, noScrollAnimation } from 'utils';

export const MenuItem = ({
  link,
  label,
  svg,
  setShowMenu,
  smoothScrollTo,
  currentSection,
  newTab,
}) => {
  if (!link) return;

  const handleClick = () => {
    setShowMenu(false);
    smoothScrollTo ? scrollAnimation(link) : noScrollAnimation(link, newTab);
  };

  const isActive = currentSection === link.slice(1);

  return (
    <li
      onClick={handleClick}
      className={`cursor-pointer py-6 pr-6 text-4xl hover:bg-slate-200 dark:hover:bg-slate-700 ${
        isActive
          ? 'md:border-r-4 md:border-primaryLight dark:md:border-primaryDark'
          : 'md:border-r-4 md:border-transparent '
      }`}
    >
      <div className='font-bold md:text-3xl'>
        <SvgAndLabel
          iconPlacement='right'
          customSize='w-14 md:w-10'
          label={label}
          svg={svg}
          customSvgColor={
            isActive
              ? 'fill-primaryLight dark:fill-primaryDark'
              : 'fill-primaryLight/50 dark:fill-primaryDark/50'
          }
        />
      </div>
    </li>
  );
};
