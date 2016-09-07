function generateEmptyBallotPromise(id) {
  return new Promise(
    function(resolve, reject) {
      resolve(
        {
          id: id,
          title: id,
          candidates: []
        }
      )
    }
  )
}

function findBallotPromise(id) {
  if(id=='abc') {
    return new Promise(
      function(resolve, reject) {
        resolve(
          {
            id: id,
            title: 'United States Senate',
            candidates: [
              {
                id: 1,
                name: "CAVASSO, Cam",
                party: "Republican"
              },
              {
                id: 2,
                name: "KOKOSKI, Michael",
                party: "Libertarian"
              },
              {
                id: 3,
                name: "SCHATZ, Brian",
                party: "Democrat"
              }
            ]
          }
        )
      }
    )
  }
  else {
    return generateEmptyBallotPromise(id)
  }
}

export function getBallot(id) {
  return findBallotPromise(id)
}