import React from 'react'
import { SkillCard } from 'components'
import { usePortfolioContext } from 'hooks/usePortfolioContext'
import { sanityUrlBuilder } from 'utils/helpers'

const transformAboutRawData = (data) => {
  const obj = {
    summary: data?.aboutSection?.[0]?.summary?.map((child) => {
      return child
    }),
    techStack: data?.aboutSection?.[0]?.techStack,
    techDictionary: data?.tech,
  }
  return obj
}

const transformTechStack = (data, sanityClient) => {
  return data?.techStack?.map((tech) => {
    const techObj = data.techDictionary.find((obj) => obj._id === tech._ref)
    if (techObj?.imageUrl) {
      techObj.imageUrl = sanityUrlBuilder(sanityClient, techObj.imageUrl)
    }
    return techObj
  })
}

export const Skills = () => {
  const { portfolioData, sanityClient } = usePortfolioContext()
  const user = transformAboutRawData(portfolioData, sanityClient)
  const referencedTechStack = transformTechStack(user, sanityClient)

  const techStackToDisplay = referencedTechStack?.map((tech) => {
    const obj = {
      name: tech.name,
      imageUrl: tech.imageUrl,
      useWhiteBackground: tech.useWhiteBackground,
      link: tech.url,
    }
    return obj
  })

  return (
    <ul className='grid grid-cols-3 place-content-center p-4 md:grid-cols-4'>
      {techStackToDisplay?.map((tech) => {
        return (
          <SkillCard
            key={tech.name}
            label={tech.name}
            src={tech.imageUrl}
            bg={tech.useWhiteBackground ? 'white' : ''}
            link={tech.link}
          />
        )
      })}
    </ul>
  )
}
