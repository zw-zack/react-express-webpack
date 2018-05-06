import React from 'react';
import {hot} from 'react-hot-loader';

import Items from './components/items/items';

const App = () => (
  <div>
    <Items />
  </div>
);

export default hot(module)(App);
