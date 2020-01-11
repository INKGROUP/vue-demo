export function getQueryString () {
  let result = {}
  let queryString = location.search.slice(1)
  let re = /([^&=]+)=([^&]*)/g
  let m
  while ((m = re.exec(queryString))) {
    result[decodeURIComponent(m[1])] = decodeURIComponent(m[2])
  }

  return result
}
