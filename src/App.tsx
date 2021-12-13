import React from 'react';

import Preparation from './Preparation';
import DeploymentPlan from './DeploymentPlan';
import {Container} from 'react-bootstrap'
import GridContainer from './component/GridContainer';

function App() {
  return (
    <div className="App">
      <div className="p-3 mb-2 bg-light text-dark container-fluid">
          <p>   <br></br> </p>
          <Container>
      <DeploymentPlan/>
      <p>   <br></br> </p>

      <Preparation/>
      <p>   <br></br> </p>
        <GridContainer />
        <br />
      </Container>
    </div>
    </div>
  );
}

export default App;
