import React, { Component } from 'react'
import Data from './Data.json'
type Myprop={
  
};
type Mystate={
   
  rows:any[];
};


const updatecomponent=(Originalcomponent:any)=>{
 class HOC extends Component<Myprop,Mystate> {
    constructor(props:Myprop) {
      super(props)
      this.state = {
        rows: []
      }
    }
    
   
      handleChange = (idx:number) => (e: { target: { name: string; value:string; }; }) => {
        const { name, value } = e.target;
        const rows = [...this.state.rows];
        rows[idx] = {
          [name]:value
        
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
          this.setState(JSON.parse(data||'')); 
        } 
      } 
      
      componentDidMount() { 
        // Fetch data from local storage 
        this.getStateFromLocalStorage(); 
      } 
      
      handleRemoveRow = () => {
        this.setState({
          
          rows: this.state.rows.slice(0, -1)
        });
      };
    render() {
        return (
            <div>
                <Originalcomponent addrow={this.handleAddRow} deletrow={this.handleRemoveRow}  save={this.saveStateToLocalStorage}
                 tablebody={this.state.rows.map((item, idx) => (
                    <tr key={idx}>
                      <td>{idx}</td>
                      <td>

                        
                        <select  name="item" value={this.state.rows[idx].Item} onChange={this.handleChange(idx)}  className="form-control">
                         
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
                           {
                             Data.status.map((result)=>(<option key={result.id}>{result.value}</option>))
                            
                           }
                        </select>
                      </td>
                      <td>
                      <select  name="owner" value={this.state.rows[idx].owner} onChange={this.handleChange(idx)}  className="form-control">
                          {
                             Data.owner.map((result)=>(<option key={result.id}>{result.owenername}</option>))
                            
                           }
                        </select>
                      </td>
                      <td><button onClick={this.handleRemoveRow}> click</button></td>
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
