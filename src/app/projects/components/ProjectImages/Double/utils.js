const baseUrl = process.env.baseUrl
async function fetchQuery(path, params = null) {
  let url
  if (params !== null) {
    url = `${baseUrl}`
  } else {
    url = `${baseUrl}`
  }
  const response = await fetch(`${url}`)
  const data = await response.json()
  return data
}
export { baseUrl, fetchQuery }