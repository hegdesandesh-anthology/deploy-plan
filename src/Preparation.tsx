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
      
        <div className="container">
<<<<<<< HEAD
          <h3>Preparation (please HIGHLIGHT your item that needs to deploy and mark status DONE when complete)  </h3>
=======
          <h3>Preparation 
              <br></br>
              (Please HIGHLIGHT your item that needs to deploy and mark status DONE when completed)  
          </h3>
>>>>>>> af68cf2 (Added FontAwesome Pack of Icons)
          <div className="row clearfix">
            <div className="col-md-12 column">
              <table className="table table-bordered table-hover" >
                <thead>
                  <tr>
<<<<<<< HEAD
                    <th className="text-center"> sl.no </th>
                    <th className="text-center"> Item </th>
                    <th className="text-center"> Due Date </th>
                    <th className="text-center"> Status </th>
                    <th className="text-center"> owner </th>
=======
                    <th className="text-center"> Sl.no </th>
                    <th className="text-center"> Item </th>
                    <th className="text-center"> Due Date </th>
                    <th className="text-center"> Status </th>
                    <th className="text-center"> Owner </th>
>>>>>>> af68cf2 (Added FontAwesome Pack of Icons)
                  </tr>
                </thead>
                <tbody>
                  {this.props.tablebody}
                </tbody>
              </table>
              <button onClick={this.props.addrow} className="btn btn-primary " >
                Add Row
              </button>
<<<<<<< HEAD

=======
              &nbsp;  &nbsp;  &nbsp;
>>>>>>> af68cf2 (Added FontAwesome Pack of Icons)
              <button onClick={this.props.save} className="btn btn-primary">
                Save
              </button>
            
            
            </div>
          </div>
        </div>
      </>
    );
  }
}
//export default App;
export default updatecomponent(Preparation)

