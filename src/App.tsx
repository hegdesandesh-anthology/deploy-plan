import React from 'react';

import Preparation from './Preparation';

import { Container } from 'react-bootstrap'
import GridContainer from './component/GridContainer';

function App() {
  return (
    <div className="App">
      <div className="p-3 mb-2 container-fluid">
        <br />
        <Container>
          <br/>
          <Preparation />
          <br/>
          <GridContainer />
          <br/>
        </Container>
      </div>
    </div>
  );
}

export default App;
