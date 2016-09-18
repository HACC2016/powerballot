import SuperAgent from 'superagent'

const API_BASE_URL = '/api'

export function getBallot (precinct) {
  const url = `${API_BASE_URL}/precincts/${precinct}`
  const request = SuperAgent.get(url)

  return request.then((data) => {
    return JSON.parse(data.text)
  })
}
