const owner = 'firebolt9907'
const repo = 'sharmaPhotography'
const defaultPath = 'photos'

async function fetchPhotoList (path: string = defaultPath): Promise<string[]> {
  try {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const data = await response.json()

    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']

    const imageFiles = Array.isArray(data)
      ? data.filter((file: any) => {
          if (file.type !== 'file') return false

          const extension = file.name
            .substring(file.name.lastIndexOf('.'))
            .toLowerCase()
          return imageExtensions.includes(extension)
        })
      : []

    console.log('imageFiles: ' + imageFiles)
    return imageFiles.map((file: any) => file.download_url)
  } catch (error) {
    console.error('Error fetching photos from GitHub:', error)
    return []
  }
}
export default fetchPhotoList
