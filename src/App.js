import React, { Component } from 'react'

import Ballot from 'src/components/Ballot'

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

export default class App extends Component {
  render() {
    // const ballot = {
    //   contests: [
    //     {
    //       Contest_ID: "USS",
    //       candidates: [
    //         { id: 161,
    //           Candidate_ID: 'USSa',
    //           Contest_ID: 'USS',
    //           Candidate_Name: 'Allison, Joy J.',
    //           Candidate_Party: 'C',
    //           Candidate_FEC: 'S4HI00151',
    //           Candidate_CSC: 'see FEC',
    //           created_at: 'Sat Sep 10 2016 10:08:32 GMT-1000 (HST)',
    //           updated_at: 'Sat Sep 10 2016 10:08:32 GMT-1000 (HST)',
    //         },
    //       ],
    //     },
    //   ],
    //   amendments: [
    //     {
    //     },
    //   ],
    // }

    return (
      <Ballot
        ballot={window.__INITIAL_STATE__.data.ballot}
        precinct={window.__INITIAL_STATE__.precinct}
      />
    )
  }
}

// import React, { Component } from 'react'
// import Layout from './Layout'
// import Counter from './Counter'
//
// // If you use React Router, make this component
// // render <Router> with your routes. Currently,
// // only synchronous routes are hot reloaded, and
// // you will see a warning from <Router> on every reload.
// // You can ignore this warning. For details, see:
// // https://github.com/reactjs/react-router/issues/2182
//
// export default class App extends Component {
//   render() {
//     return (
//       <Layout>
//         <Counter />
//       </Layout>
//     )
//   }
// }
