// Note Taking Express Challenge 1  
//@Author Sagrika Aggarwal
  

import React , {Component} from 'react';
import axios from 'axios'
import { tsInterfaceBody } from '@babel/types';

class App extends Component {
  
  state = { 
    name:'',
    email:'',
    body:''
    }

  onChange = e => this.setState({[e.target.name] : e.target.value});     

  onSubmit = (e)=>{
     e.preventDefault()
     const headers = { 'Content-Type':'application/json'}
     axios.post(`https://cors-anywhere.herokuapp.com/https://ey8ola9nmf.execute-api.us-east-2.amazonaws.com/hiring`,this.state, {headers:headers}).then(res=>
     { alert('Congratulations for completing Stage 1')
       this.setState({ body:res.data.body}) 
     })
  }

 render(){
   const {body} = this.state;
  return (
    <div className="App" >

      <div className='col-md-4 offset-md-4' style={{marginTop:'50px'}}>

          <div className="card-header" style={{backgroundColor:'black',color:'white'}}>
            NOTE TAKING EXPRESS STAGE 1
          </div>

          <div className='card-body' >
            <form className="form" onSubmit={this.onSubmit}>
                            
                        <div className='m-3'>
                          <label>Name</label>
                        <input className="form-control" type="text" placeholder="Name"  name ='name' aria-label="Search"  value={this.state.name} onChange={this.onChange}/>
                        </div>

                        <div className='m-3'>
                        <label>Email</label>
                        <input className="form-control" type="text" placeholder="Email"  name ='email' aria-label="Search"  value={this.state.email} onChange={this.onChange}/>
                        </div>

                        <center><button className="btn m-3" type="submit" style={{color:'white',backgroundColor:'#3B9BCF'}}>Send</button></center>
                      
                      {
                        body?<div className='m-4'>
                          <label ><b>Message:</b> {body.message}</label><br></br>
                          <label><b>Test:</b> {body.test}</label><br></br>
                          <label><b>Credentials:</b></label><br></br>
                          <label><b>Host:</b></label>{body.host}<br></br>
                          <label><b>UserName:</b></label>{body.host}<br></br>
                          <label><b>Password:</b></label>{body.password}<br></br>
                          
                        </div>:null
                      } 
                        
            </form>
          </div>
     
      </div>
    </div>
  );
 }
  
}

export default App;
