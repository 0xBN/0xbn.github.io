import React from 'react'
import { Button } from 'components'
import { GithubSvg, ExternalLinkSvg } from 'svgs'

export const CardLinkOut = ({ codeLink, liveLink }) => {
  return (
    <p className='flex flex-col justify-evenly gap-2 pt-4'>
      <Button svg={<GithubSvg />} label='Code' link={codeLink} newTab />
      <Button
        svg={<ExternalLinkSvg />}
        label='Live Site'
        link={liveLink}
        newTab
      />
    </p>
  )
}
