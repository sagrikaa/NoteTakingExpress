import React ,{Component} from 'react';
import axios from 'axios'

class App extends Component {
  
  state = { 
    name:'',
    email:'',
    message:'',
    test:'',
    host:'',
    password:'',
    }

  onChange = e => this.setState({[e.target.name] : e.target.value});     

  onSubmit = (e)=>{
     e.preventDefault()
     console.log(this.state)
     const headers = { 'Content-Type':'application/json'}

     axios.post(`https://cors-anywhere.herokuapp.com/https://ey8ola9nmf.execute-api.us-east-2.amazonaws.com/hiring`,this.state, {headers:headers}).then(res=>
     {
              console.log(res.data.body)
              this.setState({
                test:res.data.body.test,
                host:res.data.body.host,
                message:res.data.body.message
              }) 
             
      
     })
  }

 render(){
  return (
    <div className="App" >
    <div className='card col-md-8 offset-md-2 mt-4'>
      

    <form className="form m-2" onSubmit={this.onSubmit}>
                    
                <div className='m-4'>
                <input className="form-control m-3" type="text" placeholder="Name"  name ='name' aria-label="Search"  value={this.state.name} onChange={this.onChange}/>
                </div>
                <div className='m-4'>
                <input className="form-control m-3" type="text" placeholder="Email"  name ='email' aria-label="Search"  value={this.state.email} onChange={this.onChange}/>
                </div>
                <button className=" btn blue-gradient m-3 btn-md" type="submit" style={{color:'white'}}>Send</button>
                <div className='m-4'>
                  <label>{this.state.message}</label><br></br>
                  <label>{this.state.host}</label><br></br>
                  <label>{this.state.test}</label><br></br>
                  <label>{this.state.password}</label><br></br>

                </div>
                
    </form>
     </div>
    </div>
  );
 }
  
}

export default App;
