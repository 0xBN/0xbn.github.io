import { useEffect } from 'react'

export const useDocumentTitle = (portfolioData) => {
  useEffect(() => {
    const user = portfolioData?.user?.[0]
    const title = user
      ? `${user.firstName} ${user.lastName} | ${user.title}`
      : 'Loading Profile...'

    document.title = title
  }, [portfolioData])
}
