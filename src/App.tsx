import React from 'react';

import Preparation from './Preparation';

import {Container} from 'react-bootstrap'
import GridContainer from './component/GridContainer';

// just a comment

function App() {
  return (
    <div className="App">
      <Container>
        <Preparation/>
        <br />
        <GridContainer />
        <br />
      </Container>
    </div>
  );
}

export default App;
