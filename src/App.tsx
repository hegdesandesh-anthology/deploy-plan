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
            <h4 className="text-primary text-center" >Deploy</h4>
        <GridContainer />
      </Container>
    </div>
  );
}

export default App;
