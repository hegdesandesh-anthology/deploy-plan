import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'
import Data from './Data.json'
import { library } from '@fortawesome/fontawesome-svg-core';
type Myprop={
  
};
type Mystate={
   
  rows:any[];
};

library.add(faTrash);

const updatecomponent=(Originalcomponent:any)=>{
 class HOC extends Component<Myprop,Mystate> {
    constructor(props:Myprop) {
      super(props)
      this.state = {
        rows: []
      }
    }
    
   
      handleChange = (idx:number) => (e: { target: { value:string; } }) => {
        const { value } = e.target;
        const rows = [...this.state.rows];
        rows[idx] = {
          Item:value,
          status:value,
         owner:value,
          DueDate:value
        // [name]:value
        
        };
        this.setState({
          rows
        });
      };
      handleAddRow = () => {
        const item:any= {
          Item: " ",
          status: " ",
          owner:" ",
          DueDate:" "
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
        if(data !== undefined) { 
          this.setState(JSON.parse(data||'{}')); 
        } 
        
      } 
      
      componentDidMount() { 
        // Fetch data from local storage 
        this.getStateFromLocalStorage(); 
      } 
      
      handleRemoveRow = (idx:number) => {
        // this.setState({
          
        //   rows: this.state.rows.slice(idx, 1)
        // });
        const newrows = [...this.state.rows];
    newrows.splice(idx, 1);

    this.setState(state => ({
        rows: newrows
    }));
      };
    render() {
        return (
            <div>
                <Originalcomponent addrow={this.handleAddRow}  save={this.saveStateToLocalStorage}
                 tablebody={this.state.rows.map((item, idx) => (
                    <tr key={idx}>
                      <td>{idx}</td>
                      <td>

                        
                        <select  name="item" value={this.state.rows[idx].Item} onChange={this.handleChange(idx)}  className="form-control">
                         <option >----select value----</option>
                           {
                             Data.Item.map((result)=>(<option  key={result.id}>{result.Iname}</option>))
                            
                           }
                        </select>
                      </td>
                      <td>
                        <input type="date" name="date" value={this.state.rows[idx].DueDate}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        
                        <select name="status"  value={this.state.rows[idx].status} onChange={this.handleChange(idx)}  className="form-control">
                        <option >----select value----</option>
                           {
                             Data.status.map((result)=>(<option key={result.id}>{result.value}</option>))
                            
                           }
                        </select>
                      </td>
                      <td>
                      <select  name="owner" value={this.state.rows[idx].owner} onChange={this.handleChange(idx)}  className="form-control">
                      <option >----select value----</option>
                          {
                             Data.owner.map((result)=>(<option key={result.id}>{result.owenername}</option>))
                            
                           }
                        </select>
                      </td>
                      <td><FontAwesomeIcon icon={["fas", "trash"]} onClick={()=>this.handleRemoveRow(idx)} /></td>
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
