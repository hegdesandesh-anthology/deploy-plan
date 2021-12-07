import React from "react";
import updatecomponent from './Hoc'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
interface props{
  tablebody:any;
  addrow:any;
  save:any;
}
class Preparation extends React.Component<props> {
  
  render() {
    return (
      <>
      
        
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
                  <tr>
                    <th className="text-center"> Sl.No </th>
                    <th className="text-center"> Item </th>
                    <th className="text-center"> Due Date </th>
                    <th className="text-center"> Status </th>
                    <th className="text-center"> Owner </th>
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

