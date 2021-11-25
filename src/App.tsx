import React from 'react';

import Preparation from './Preparation';

import {Container} from 'react-bootstrap'
import GridContainer from './component/GridContainer';

// just a comment

function App() {
  return (
    <div className="App">
      <Preparation/>
      <Container>
        <h4 className="text-primary">Deploy</h4>
        <GridContainer />
        <br />
      </Container>
    </div>
  );
}

export default App;
