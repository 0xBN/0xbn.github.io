import {
  Carousel,
  EmphasizedWord,
  SvgAndLabel,
  TechnologyList,
} from 'components';
import { ProjectSvg } from 'svgs';
import { CardLinkOut } from './CardLinkOut';

export const ProjectCard = ({ project }) => {
  return (
    <div
      className='flex w-full flex-col gap-6 overflow-hidden rounded-xl bg-slate-200 p-2 text-xl shadow-md shadow-black/30
    dark:bg-slate-700 md:max-w-[400px] md:p-4'
    >
      <Carousel images={project.images} />

      <div className='flex flex-col gap-2 p-2'>
        <h3 className='text-center text-3xl font-bold'>
          <SvgAndLabel
            iconPlacement='left'
            label={project.name}
            svg={<ProjectSvg />}
            customAlignment='flex w-full items-center justify-center gap-2 py-4'
          />
        </h3>
        <p>
          <EmphasizedWord word='Description' /> {project.description}
        </p>
        <p>
          <EmphasizedWord word='Challenges ' />
          {project.challenges}
        </p>

        <CardLinkOut codeLink={project.code} liveLink={project.link} />
        <>
          <EmphasizedWord word='Tech Stack' />
          <TechnologyList list={project.technologies} />
        </>
      </div>
    </div>
  );
};
