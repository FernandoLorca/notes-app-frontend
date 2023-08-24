export const useFetch = async (path, options) => {
  const res = await fetch(path, options)
  const json = await res.json()

  return json
}
