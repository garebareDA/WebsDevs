import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';

import { App } from '~/desktop/App';
import Base64 from '~/routes/base64';
import BaseNumber from '~/routes/basenumber';
import Checksum from '~/routes/checksum';
import ColorBlind from '~/routes/colorBlind';
import Convert from '~/routes/convert';
import Diff from '~/routes/diff';
import Hash from '~/routes/hash';
import Html from '~/routes/html';
import ImageCompressor from '~/routes/imageCompressor';
import ImageConverter from '~/routes/imageConverter';
import JsonFormatter from '~/routes/jsonFormatter';
import Jwt from '~/routes/jwt';
import LoremIpsum from '~/routes/loremIpsum';
import Markdown from '~/routes/markdown';
import Regex from '~/routes/regex';
import SqlFormatter from '~/routes/sqlFormatter';
import Text from '~/routes/text';
import Url from '~/routes/url';
import Uuid from '~/routes/uuid';
import XmlFormatter from '~/routes/xmlFormatter';
import Zip from '~/routes/zip';

ReactDOM.render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <Route path='/'>
          <App />
        </Route>

        <Route path='base64'>
          <Base64 />
        </Route>

        <Route path='basenumber'>
          <BaseNumber />
        </Route>

        <Route path='checksum'>
          <Checksum />
        </Route>

        <Route path='colorBlind'>
          <ColorBlind />
        </Route>

        <Route path='convert'>
          <Convert />
        </Route>

        <Route path='diff'>
          <Diff />
        </Route>

        <Route path='hash'>
          <Hash />
        </Route>

        <Route path='html'>
          <Html />
        </Route>

        <Route path='imageCompressor'>
          <ImageCompressor />
        </Route>

        <Route path='imageConverter'>
          <ImageConverter />
        </Route>

        <Route path='jsonFormatter'>
          <JsonFormatter />
        </Route>

        <Route path='jwt'>
          <Jwt />
        </Route>

        <Route path='loremIpsum'>
          <LoremIpsum />
        </Route>

        <Route path='markdown'>
          <Markdown />
        </Route>

        <Route path='regex'>
          <Regex />
        </Route>

        <Route path='sqlFormatter'>
          <SqlFormatter />
        </Route>

        <Route path='text'>
          <Text />
        </Route>

        <Route path='url'>
          <Url />
        </Route>

        <Route path='uuid'>
          <Uuid />
        </Route>

        <Route path='xmlFormatter'>
          <XmlFormatter />
        </Route>

        <Route path='zip'>
          <Zip />
        </Route>
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>,
  document.getElementById('root')
);