import React from "react";
import updatecomponent from './PrepComponent'

import Data from './Data.json'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Col } from 'react-bootstrap';
import Calender from './Calender.js';

interface props {
  tablebody: any;
  addrow: any;
  save: any;
  version: any;
  date: any;
  versionvalue: any;
  datevalue: any;
  
}
class Preparation extends React.Component<props> {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-5">
            <h3 className="text-center">{this.props.versionvalue} Deployment Plan (BLUE)</h3>
            <br />
            <Container >
              <div className="row clearfix">
                <div className="col-md-12 column">
                  <Row>
                    <Col><h4>Release version</h4></Col>
                    <Col>
                      <select value={this.props.versionvalue} className="form-control text-center" onChange={this.props.version}>
                        {
                          Data.ReleaseVersion.map((result,i ) => (<option key={i}>{result.version}</option>))

                        }
                      </select>
                    </Col>
                  </Row><br/>
                  <Row>
                    <Col><h4>Release Date</h4></Col>
                    <Col>
                      <Calender/>
                      {/* <input type="date" value={this.props.datevalue} className="form-control text-center" onChange={this.props.date} /> */}
                    </Col>
                  </Row>

                </div>
              </div>
            </Container>
          </div>
          <div className="col"></div>

        </div>
        <br/>
        <h4 className="text-primary">Preparation
          (Please HIGHLIGHT your item that needs to deploy and mark status DONE when completed)
        </h4>
        <br/>
        <Container>
          <Row>
            <div className="col-sm-1 border border-dark text-center"> Sl.No </div>
            <div className="col-sm border border-dark text-center"> Item </div>
            <div className="col-sm border border-dark text-center"> Due Date </div>
            <div className="col-sm border border-dark text-center"> Status </div>
            <div className="col-sm border border-dark text-center"> Owner </div>
            <div className="col-sm-1 border border-dark text-center"></div>
          </Row>
          <div>
            {this.props.tablebody}
          </div>
        </Container>
        <br />
        <div className="no-print">
          <button onClick={this.props.addrow} className="btn btn-primary " >
            Add Row
          </button>
          &nbsp;  &nbsp;  &nbsp;
          <button onClick={this.props.save} className="btn btn-primary">
            Save
          </button>
        </div>
      </>
    );
  }
}
//export default App;
export default updatecomponent(Preparation)

