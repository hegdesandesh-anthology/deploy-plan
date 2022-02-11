import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'
import Data from './Data.json'
import { library } from '@fortawesome/fontawesome-svg-core';
import { Row } from 'react-bootstrap';


type Myprop = {

};
type Mystate = {

  rows: any[],
  releaseversion: any,
  releasedate: any;

};

library.add(faTrash);

const updatecomponent = (Originalcomponent: any) => {
  class HOC extends Component<Myprop, Mystate> {
    constructor(props: Myprop) {
      super(props)
      this.state = {
        rows: [],
        releaseversion: " ",
        releasedate: " "


      }
    }



    handleitemChange = (idx: number) => (e: { target: { value: string; } }) => {
      const { value } = e.target;
      const rows = [...this.state.rows];
      rows[idx] = {
        Item: value,
        DueDate: this.state.rows[idx].DueDate,
        status: this.state.rows[idx].status,
        owner: this.state.rows[idx].owner
      };
      this.setState({
        rows
      });
    };


    handledateChange = (idx: number) => (e: { target: { value: string; } }) => {
      const { value } = e.target;
      const rows = [...this.state.rows];
      rows[idx] = {
        Item: this.state.rows[idx].Item,
        DueDate: value,
        status: this.state.rows[idx].status,
        owner: this.state.rows[idx].owner
      };
      this.setState({
        rows
      });
    };


    handlestatusChange = (idx: number) => (e: { target: { value: string; } }) => {
      const { value } = e.target;
      const rows = [...this.state.rows];
      rows[idx] = {
        Item: this.state.rows[idx].Item,
        DueDate: this.state.rows[idx].DueDate,
        status: value,
        owner: this.state.rows[idx].owner
      };
      this.setState({
        rows
      });
    };

    handleownerChange = (idx: number) => (e: { target: { value: string; } }) => {
      const { value } = e.target;
      const rows = [...this.state.rows];
      rows[idx] = {
        Item: this.state.rows[idx].Item,
        DueDate: this.state.rows[idx].DueDate,
        status: this.state.rows[idx].status,
        owner: value
      };
      this.setState({
        rows
      });
    };

    handleAddRow = () => {
      const item: any = {
        Item: " ",
        DueDate: " ",
        status: " ",
        owner: " "
      };
      this.setState({

        rows: [...this.state.rows, item]

      });
      alert('A new row has been added');
    };

    saveStateToLocalStorage = () => {
      let formstate = this.state;
      localStorage.setItem('formstate', JSON.stringify(formstate));
      alert('The Data has been saved');
    }

    componentDidMount() {
      let localState: string | null = localStorage.getItem('formstate');
        if (localState) {
            this.setState(JSON.parse(localState));
        }
    }

    handleRemoveRow = (idx: number) => {

      const newrows = [...this.state.rows];
      newrows.splice(idx, 1);

      this.setState({
        rows: newrows
      });
      alert('The selected row has been deleted');
    };

    handlereleaseversion = (e: { target: { value: any; } }) => {
      const { value } = e.target;
      this.setState({
        ...this.state.releaseversion,
        releaseversion: value
      });
    };

    handlereleasedate = (e: { target: { value: any; } }) => {
      const { value } = e.target;

      this.setState({
        ...this.state.releasedate,
        releasedate: value
      });
    };
    
    render() {
      return (
        <div>
          <Originalcomponent addrow={this.handleAddRow} save={this.saveStateToLocalStorage} version={this.handlereleaseversion} date={this.handlereleasedate} versionvalue={this.state.releaseversion} datevalue={this.state.releasedate}
            tablebody={this.state.rows.map((item, idx) => (
              <Row key={idx} className="row">
                <div className="col-sm-1 border border-dark text-center">{idx+1}</div>
                <div className="col-sm border border-dark px-0">
                  <div>
                  <select className="form-control" name="item" value={this.state.rows[idx].Item} onChange={this.handleitemChange(idx)} >
                    <option >----Select Value----</option>
                    {
                      Data.Item.map((result) => (<option key={result.id}>{result.Iname}</option>))

                    }
                  </select>
                  </div>
                </div>
                <div className="col-sm border border-dark px-0">
                  <input type="date" name="date" value={this.state.rows[idx].DueDate}
                    onChange={this.handledateChange(idx)}
                    className="form-control"
                  />
                </div>
                <div className="col-sm border border-dark px-0">
                  <select name="status" value={this.state.rows[idx].status} onChange={this.handlestatusChange(idx)} className="form-control">
                    <option >----Select Value----</option>
                    {
                      Data.status.map((result) => (<option key={result.id}>{result.status}</option>))
                    }
                  </select>
                </div>
                <div className="col-sm border border-dark px-0">
                
                  {(() => {

                      switch (this.state.rows[idx].Item) {
                        
                          case 'Email':
                          return(
                          <input type="text" name="owner" value="Harsha B S" onChange={this.handleownerChange(idx)} className="form-control"/>
                          )
                          case 'Analytics':
                          return(
                          <input type="text" name="owner" value="Dwaipayan B" onChange={this.handleownerChange(idx)} className="form-control"/>
                          )
                          case 'Encompass Frontiers':
                          return(
                          <input type="text" name="owner" value="Subhas" onChange={this.handleownerChange(idx)} className="form-control"/>
                          )
                          case 'Foundations':
                          return(
                          <input type="text" name="owner" value="Deepak" onChange={this.handleownerChange(idx)} className="form-control"/>
                          )
                          case 'Online Giving':
                          return(
                          <input type="text" name="owner" value="Bhargava Raju" onChange={this.handleownerChange(idx)} className="form-control"/>
                          )  
                      }
                  })()}

                </div>
                <div className="col-sm-1 border border-dark text-center">
                  <FontAwesomeIcon icon={["fas", "trash"]} onClick={() => this.handleRemoveRow(idx)} />
                </div>
              </Row>
            ))}
          />
        </div>
      )
    }
  }
  return HOC;
}

export default updatecomponent;
