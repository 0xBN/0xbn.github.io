import {
  Carousel,
  EmphasizedWord,
  SvgAndLabel,
  TechnologyList,
} from 'components'
import { ProjectSvg } from 'svgs'
import { CardLinkOut } from './CardLinkOut'

export const ProjectCard = ({ project }) => {
  return (
    <div
      className='project-card m-4 flex w-full flex-col overflow-hidden rounded-xl border border-neutral-200/80 bg-slate-100 p-2 text-xl shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-800/90 dark:shadow-black/20 md:w-11/12 md:p-4 lg:w-2/5 xl:w-1/3'
      style={{ justifyContent: 'space-between' }}
    >
      <h3 className='text-center text-2xl font-bold' style={{ padding: '0' }}>
        <SvgAndLabel
          iconPlacement='left'
          label={project.name}
          svg={<ProjectSvg />}
          customAlignment='flex w-full items-center justify-center gap-2'
        />
      </h3>
      <div className='grid w-full place-content-center'>
        <Carousel images={project.images} />
      </div>

      <div className='flex flex-col gap-2 p-2'>
        {project.description && (
          <div>
            <p>
              <EmphasizedWord word='Description' custom={'text-md'} />
            </p>
            {project.description}
          </div>
        )}

        {project.purpose && (
          <div>
            <p>
              <EmphasizedWord word='Purpose' custom={'text-md'} />
            </p>
            {project.purpose}
          </div>
        )}

        <>
          <EmphasizedWord word='Tech Stack' />
          <TechnologyList list={project.technologies} />
        </>
        <CardLinkOut codeLink={project.code} liveLink={project.link} />
      </div>
    </div>
  )
}
