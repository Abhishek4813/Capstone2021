import React,{Component} from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.firstname=React.createRef();
    this.lastname=React.createRef();
  }

  submit(ev){
    ev.preventDefault();
    var firstname=this.firstname.current.value;
    var lastname=this.lastname.current.value;
    fetch("http://localhost:8000/people",{
      method:'POST',
      body:JSON.stringify({firstname:firstname,lastname:lastname}),
      headers:{
        'Content-Type':'application/json',
        credentials:'cross-origin',
      }
    })
  }

  render(){
  return (
    <div className="App">
      <form onSubmit={(ev)=>this.submit(ev)}>
        <label>FIRST NAME :</label>
        <input type="text" ref={this.firstname}/>
        <label>LAST NAME :</label>
        <input type="text" ref={this.lastname}/>
        <label></label>
        <input type="submit" value="submit"/>
      </form>
    </div>
  );
}
}

export default App;
