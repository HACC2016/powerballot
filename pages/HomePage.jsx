import React from 'react';
import {RootContainer, RootElement, TheFold, ReactServerAgent} from 'react-server';

import Home from '../components/Home.jsx';

export default class HomePage {
  handleRoute(next) {
    const baseUrl = 'http://services2.arcgis.com/tuFQUQg1xd48W6M5/ArcGIS/rest/services/HACC_HI2016G_Candidates/FeatureServer/1/query'
    const result = ReactServerAgent.get(baseUrl)
    .query({
      where: "DP='02-03'",
      outFields: '*',
      returnGeometry: false,
      f: 'pjson',
    })

    this.data = result.then((data) => {
      return {
        precincts: data.text,
      }
    })

    return next()
  }

  getElements() {
    return <RootContainer>
      <RootElement when={this.data}>
        <Home/>
      </RootElement>
      <TheFold />
    </RootContainer>
  }



  getMetaTags() {
    return [
      {charset: 'utf8'},
      {'http-equiv': 'x-ua-compatible', 'content': 'ie=edge'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    ];
  }
}
