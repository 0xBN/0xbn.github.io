import { EmphasizedWord, ProfilePicture } from 'components'
import React from 'react'
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

export const About = ({ darkMode, pageLoaded }) => {
  const { portfolioData, sanityClient } = usePortfolioContext()
  const user = transformAboutRawData(portfolioData, sanityClient)
  const referencedTechStack = transformTechStack(user, sanityClient)

  const techStackToDisplay = referencedTechStack
    ?.map((tech) => tech.name)
    .join(', ')
    .concat('.')

  const summaryToDisplay = user.summary?.map((child, index) => {
    return (
      <p key={index} className='my-4'>
        {child}
      </p>
    )
  })

  return (
    <div className='py-4 px-6 text-lg md:flex md:flex-col md:justify-center md:text-3xl'>
      <div className='mb-4 grid w-full place-content-center md:hidden'>
        <ProfilePicture
          darkMode={darkMode}
          customDisplay='block w-28 p-0 m-0'
          customRounded='rounded-md'
        />
      </div>
      {summaryToDisplay}
      <p className='py-2 md:py-4'>
        <EmphasizedWord word='Tech Stack ' />
        {techStackToDisplay}
      </p>
    </div>
  )
}
