import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { TechnologyList } from 'components'
import { LeftChevronSvg, RightChevronSvg, ExternalLinkSvg } from 'svgs'
import { SimpleBrandIcon } from 'components/SimpleBrandIcon'
import { brandIcons } from 'data/brandIcons'

const linkBarClass =
  'flex flex-1 items-center justify-center gap-2 py-2.5 text-xs font-semibold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-primaryLight dark:focus-visible:outline-primaryDark'

export const ProjectKeenSlider = ({ projects }) => {
  const [current, setCurrent] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    rubberband: false,
    slideChanged(slider) {
      setCurrent(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  if (!projects?.length) {
    return (
      <p className='text-center text-sm text-neutral-500'>
        Projects coming soon.
      </p>
    )
  }

  return (
    <div className='relative'>
      <div ref={sliderRef} className='keen-slider'>
        {projects.map((project) => (
          <div key={project.id} className='keen-slider__slide min-w-0'>
            <div className='flex flex-col gap-3'>
              <div className='overflow-hidden rounded-xl border border-white/10 bg-black/40'>
                <img
                  src={project.images[0]}
                  alt=''
                  className='aspect-video w-full object-cover object-top'
                  loading='lazy'
                />
                <div
                  className='grid grid-cols-2 border-t border-neutral-200/90 bg-neutral-50/95 backdrop-blur-sm dark:border-white/15 dark:bg-neutral-800/95'
                  role='group'
                  aria-label={`${project.name} links`}
                >
                  <a
                    href={project.code}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`${linkBarClass} border-r border-neutral-200/90 text-neutral-800 hover:bg-neutral-200/70 dark:border-white/15 dark:text-neutral-50 dark:hover:bg-white/10`}
                  >
                    <SimpleBrandIcon
                      icon={brandIcons.github}
                      className='size-3.5'
                    />
                    Code
                  </a>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`${linkBarClass} text-primaryLight hover:bg-primaryLight/10 dark:text-primaryDark dark:hover:bg-primaryDark/20 [&_path]:fill-current`}
                  >
                    <span className='inline-flex size-3.5 shrink-0 items-center justify-center [&_svg]:h-full [&_svg]:w-full'>
                      <ExternalLinkSvg />
                    </span>
                    Live
                  </a>
                </div>
              </div>

              <div>
                <p className='text-lg font-semibold tracking-tight'>
                  {project.name}
                </p>
                <p className='mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300'>
                  {project.description}
                </p>
              </div>

              <TechnologyList list={project.technologies} />
            </div>
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && projects.length > 1 && (
        <>
          <button
            type='button'
            aria-label='Previous project'
            className='absolute left-0 top-[22%] z-10 -translate-x-1/2 rounded-full border border-white/10 bg-neutral-900/80 p-2 shadow-lg backdrop-blur md:-translate-x-full md:left-2'
            onClick={() => instanceRef.current?.prev()}
          >
            <LeftChevronSvg />
          </button>
          <button
            type='button'
            aria-label='Next project'
            className='absolute right-0 top-[22%] z-10 translate-x-1/2 rounded-full border border-white/10 bg-neutral-900/80 p-2 shadow-lg backdrop-blur md:translate-x-full md:right-2'
            onClick={() => instanceRef.current?.next()}
          >
            <RightChevronSvg />
          </button>
        </>
      )}

      {projects.length > 1 && (
        <div className='mt-4 flex items-center justify-center gap-2'>
          {projects.map((project, idx) => (
            <button
              key={project.id}
              type='button'
              aria-label={`Go to ${project.name}`}
              aria-current={current === idx}
              className={`h-2 rounded-full transition-all ${
                current === idx
                  ? 'w-6 bg-primaryDark'
                  : 'w-2 bg-white/25 hover:bg-white/40'
              }`}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
            />
          ))}
          <span className='ml-2 text-xs tabular-nums text-neutral-500'>
            {current + 1} / {projects.length}
          </span>
        </div>
      )}
    </div>
  )
}
