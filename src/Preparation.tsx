import React from "react";
import updatecomponent from './Hoc'

import Data from './Data.json'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
interface props{
  tablebody:any;
  addrow:any;
  save:any;
  version:any;
  date:any;
  versionvalue:any;
  datevalue:any;
}
class Preparation extends React.Component<props> {
  
  render() {
    return (
      <>
      <div className="row">
                   <div className="col-4"></div>
                   <div className="col-5">
                <h3>63.5.6 Deployment Plan (BLUE)</h3>
                <br/>
                <table >
                <div className="row clearfix">
               <div className="col-md-12 column">
                    <tr>
                        <td><h4>Release version</h4></td>
                        <td>
                        <select value={this.props.versionvalue}  className="form-control" onChange={this.props.version}>
                           {
                             Data.ReleaseVersion.map((result)=>(<option>{result.version}</option>))
                            
                           }
                        </select>
                        </td>
                    </tr>
                    
                    <tr>
                        <td><h4>Release Date</h4></td>
                    <td>
                    <input type="date"  value={this.props.datevalue}   className="form-control"  onChange={this.props.date}/>
                    </td>
                    </tr>
                    
                    </div>
                </div>
                </table>
                </div>
                <div className="col"></div>
                
                </div>
                

        




          <h3 className="text-center">Preparation </h3>
              <br></br>
          <h3>
              (Please HIGHLIGHT your item that needs to deploy and mark status DONE when completed)
          </h3>
          <br></br>
          <div className="row clearfix">
            <div className="col-md-12 column">
              <table className="table table-bordered table-hover" >
                <thead>
                  <tr className="row">
                    <th className="col-sm-1"> Sl.No </th>
                    <th className="col-sm"> Item </th>
                    <th className="col-sm"> Due Date </th>
                    <th className="col-sm"> Status </th>
                    <th className="col-sm"> Owner </th>
                    <th className="col-sm-1">  </th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.tablebody}
                </tbody>
              </table>
              <button onClick={this.props.addrow} className="btn btn-primary " >
                Add Row
              </button>
              &nbsp;  &nbsp;  &nbsp;
              <button onClick={this.props.save} className="btn btn-primary">
                Save
              </button>
            
            
            </div>
          </div>
        
      </>
    );
  }
}
//export default App;
export default updatecomponent(Preparation)

