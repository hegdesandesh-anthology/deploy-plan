import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'
import Data from './Data.json'
import { library } from '@fortawesome/fontawesome-svg-core';


type Myprop = {

};
type Mystate = {

  rows: any[],
  releaseversion:any,
  releasedate:any;
  
};

library.add(faTrash);

const updatecomponent = (Originalcomponent: any) => {
  class HOC extends Component<Myprop, Mystate> {
    constructor(props: Myprop) {
      super(props)
      this.state = {
        rows: [],
        releaseversion:" ",
         releasedate:" "
        

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
        Item: this.state.rows[idx].item,
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

    };


    saveStateToLocalStorage = () => {
      localStorage.setItem('state', JSON.stringify(this.state));

    }
    getStateFromLocalStorage = () => {
      let data: string | null
      data = localStorage.getItem('state');
      if (data !== undefined) {
        this.setState(JSON.parse(data || '{}'));
      }

    }

    componentDidMount() {
      // Fetch data from local storage 
      this.getStateFromLocalStorage();
    }

    handleRemoveRow = (idx: number) => {

      const newrows = [...this.state.rows];
      newrows.splice(idx, 1);

      this.setState(state => ({
        rows: newrows
      }));
    };

    handlereleaseversion=(e: { target: { value:any; } })=>{
      const { value } = e.target;
       this.setState({
        ...this.state.releaseversion,
      releaseversion:value
    });
  };

  handlereleasedate=(e: { target: { value:any; } })=>{
      const { value } = e.target;
      
       this.setState({
           ...this.state.releasedate,
      releasedate:value
    });
  };
    render() {
      return (
        <div>
          <Originalcomponent addrow={this.handleAddRow} save={this.saveStateToLocalStorage} version={this.handlereleaseversion} date={this.handlereleasedate} versionvalue={this.state.releaseversion} datevalue={this.state.releasedate}
            tablebody={this.state.rows.map((item, idx) => (
              <tr key={idx} className="row">
                <td className="col-sm-1">{idx}</td>
                <td className="col-sm">


                  <select name="item" value={this.state.rows[idx].Item} onChange={this.handleitemChange(idx)} className="form-control">
                    <option >----select value----</option>
                    {
                      Data.Item.map((result) => (<option key={result.id}>{result.Iname}</option>))

                    }
                  </select>
                </td>
                <td className="col-sm">
                  <input type="date" name="date" value={this.state.rows[idx].DueDate}
                    onChange={this.handledateChange(idx)}
                    className="form-control"
                  />
                </td>
                <td className="col-sm">

                  <select name="status" value={this.state.rows[idx].status} onChange={this.handlestatusChange(idx)} className="form-control">
                    <option >----select value----</option>
                    {
                      Data.status.map((result) => (<option key={result.id}>{result.value}</option>))

                    }
                  </select>
                </td>
                <td className="col-sm">
                  <select name="owner" value={this.state.rows[idx].owner} onChange={this.handleownerChange(idx)} className="form-control">
                    <option >----select value----</option>
                    {
                      Data.owner.map((result) => (<option key={result.id}>{result.owenername}</option>))

                    }
                  </select>
                </td>
                <td className="col-sm-1"><FontAwesomeIcon icon={["fas", "trash"]} onClick={() => this.handleRemoveRow(idx)} /></td>
              </tr>
            ))}
          />
        </div>
      )
    }
  }
  return HOC;
}

export default updatecomponent;
