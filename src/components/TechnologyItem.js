import { SvgAndLabel } from 'components';
import { techIcons, techWordUpperCase, techWebsites } from 'data';

export const TechnologyItem = ({ item }) => {
  if (!item) return;

  const formatTechnology = (word) => {
    if (techWordUpperCase.includes(word)) {
      return word.toUpperCase();
    } else {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
  };

  return (
    <li
      className={`items-center rounded-md bg-gray-300 p-0.5 text-sm hover:bg-gray-100 hover:saturate-150 dark:bg-gray-600 dark:hover:bg-gray-400`}
    >
      {
        <a href={techWebsites[item]} target='_blank' rel='noreferrer'>
          <SvgAndLabel
            iconPlacement='left'
            label={formatTechnology(item)}
            svg={techIcons[item]}
            customSize='w-4 md:w-6'
            customAlignment='gap-1 flex items-center'
            customFontColor={`dark:text-white text-black font-bold`}
          />
        </a>
      }
    </li>
  );
};
