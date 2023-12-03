import { useState, useEffect } from 'react'
import { createClient } from '@sanity/client'

export function useSanityData(projectId, dataset, schemaTypes) {
  const [data, setData] = useState({})

  const sanityClient = createClient({
    projectId: projectId,
    dataset: dataset,
    useCdn: true,
    apiVersion: '2023-05-03',
  })

  useEffect(() => {
    const fetchDataForType = async (type) => {
      return await sanityClient.fetch(`*[_type == "${type}"]`)
    }

    const fetchData = async () => {
      let fetchedData = {}
      for (const type of schemaTypes) {
        const result = await fetchDataForType(type)
        fetchedData[type] = result
      }
      setData(fetchedData)
    }

    fetchData()
  }, [projectId, dataset]) // Removed schemaTypes from dependencies

  return { data, sanityClient }
}
