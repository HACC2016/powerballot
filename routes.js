const path = require('path');

module.exports = {
  routes: {
    HelloWorld: {
      path: ['/'],
      method: 'get',
      page: path.join('.', 'pages', 'hello-world'),
    },
    HomePage: {
      path: ['/home'],
      method: 'get',
      page: path.join('.', 'pages', 'HomePage.jsx'),
    },
    ExampleBallot: {
      path: ['/ballot/:ballotId'],
      method: 'get',
      page: path.join('.', 'pages', 'ExampleBallot.jsx'),
    },
  },
};
