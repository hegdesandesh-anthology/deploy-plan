import React, { Component } from 'react'
import Data from './Data.json'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default class DeploymentPlan extends Component {
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
                        <td><b>Release version</b></td>
                        <td>
                        <select   className="form-control">
                           {
                             Data.ReleaseVersion.map((result)=>(<option>{result.version}</option>))
                            
                           }
                        </select>
                        </td>
                    </tr>
                    
                    <tr>
                        <td><b>Release Date</b></td>
                    <td>
                    <input type="date" name="date"  className="form-control" />
                    </td>
                    </tr>
                    </div>
                </div>
                </table>
                </div>
                <div className="col"></div>
                
                </div>
                
                
            </>
        )
    }
}
