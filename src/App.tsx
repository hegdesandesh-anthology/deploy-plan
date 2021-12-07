import React from 'react';

import Preparation from './Preparation';

import {Container} from 'react-bootstrap'
import GridContainer from './component/GridContainer';

function App() {
  return (
    <div className="App">
      <Container>
        <Preparation/>
            <br> 
            </br>
            <h4 className="text-left" >Deploy</h4>
            <br> 
            </br>
        <GridContainer />
      </Container>
    </div>
  );
}

export default App;
