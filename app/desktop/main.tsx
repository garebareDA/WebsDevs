import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='base64' element={<Base64 />} />
          <Route path='basenumber' element={<BaseNumber />} />
          <Route path='checksum' element={<Checksum />} />
          <Route path='colorBlind' element={<ColorBlind />} />
          <Route path='convert' element={<Convert />} />
          <Route path='diff' element={<Diff />} />
          <Route path='hash' element={<Hash />} />
          <Route path='html' element={<Html />} />
          <Route path='imageCompressor' element={<ImageCompressor />} />
          <Route path='imageConverter' element={<ImageConverter />} />
          <Route path='jsonFormatter' element={<JsonFormatter />} />
          <Route path='jwt' element={<Jwt />} />
          <Route path='loremIpsum' element={<LoremIpsum />} />
          <Route path='markdown' element={<Markdown />} />
          <Route path='regex' element={<Regex />} />
          <Route path='sqlFormatter' element={<SqlFormatter />} />
          <Route path='text' element={<Text />} />
          <Route path='url' element={<Url />} />
          <Route path='uuid' element={<Uuid />} />
          <Route path='xmlFormatter' element={<XmlFormatter />} />
          <Route path='zip' element={<Zip />} />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode >,
  document.getElementById('root')
);