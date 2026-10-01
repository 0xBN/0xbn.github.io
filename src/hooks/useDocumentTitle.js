import { useEffect } from 'react'

export const useDocumentTitle = (site) => {
  useEffect(() => {
    const { user } = site ?? {}
    const title = user
      ? `${user.firstName} ${user.lastName} | ${user.title}`
      : 'Brian N. | Software Engineer'

    document.title = title
  }, [site])
}
