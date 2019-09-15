import React, { Component } from 'react';

class test extends Component {
    state = {
        email:'',
        pass:'',
        server:'http://localhost:3001/',
        returneds:''
      }
      signinbtn = (e) =>{
        e.preventDefault();
        fetch(this.state.server +'signin', {
      method: 'Post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        pass:this.state.pass,
      })
    }).then(res => res.json())
    .then((returned) =>{
      this.setState({
          returneds : returned
      });
      console.log(this.state.returned);
    });}

    signupbtn = (e) =>{
      e.preventDefault();
      fetch(this.state.server +'signup', {
    method: 'Post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: this.state.email,
      pass:this.state.pass,
    })
  }).then(res => res.json())
  .then((returned) =>{
    this.setState({
        returneds : returned
    });
    console.log(this.state.returneds);
  });}
    
      change = (e) =>{
        if(e.target.name === 'email'){
          this.setState({
            email:e.target.value
          })
        }else if(e.target.name === 'psw'){
          this.setState({
            pass:e.target.value
          })
        }
    
      }
    render(){
        return(
            <div>test has been completed
              <h1>{this.state.returneds}</h1>

            <div className='Form' >

            <form className='Form-content' onSubmit={this.signinbtn}>
              <div className="container">
                <h1> Sign in</h1>
                <br />
                <label> <b> Email </b></label>
                <input className='text' onChange={this.change} type="text" placeholder="Enter Email" name="email" required />
                <label><b> Password </b></label>
                <input className='pass'  onChange={this.change} type="password" placeholder="Enter Password" name="psw" required />
                <button type="submit" onClick={this.signinbtn} className="signupbtn" > Sign in </button>
                <h1>Enail and pass is {this.state.email + this.state.pass}</h1>
              </div>
            </form>
          </div>
  
  
  
  
          <div className='Form' >
                  <form className='Form-content'>
                    <div className="container" >
                      <h1> Sign Up </h1>
                      <p> Please fill in this form to create an account. </p> <br />
                      <label ><b> Email </b></label>
                      <input className='text' type="text" onChange={this.change} placeholder="Enter Email" name="email" required />
                      <label><b> Password </b></label>
                      <input  className='pass'  type="password" onChange={this.change} placeholder="Enter Password" name="psw" required />
                      <b> Repeat Password </b>
                      <input  type="password" className='pass' placeholder="Repeat Password" name="psw-repeat" required />
                      <button type="button"  className="cancelbtn" > Cancel </button>
                      <button type="submit" onClick={this.signupbtn} className="signupbtn" > Sign Up </button>
                      </div>
                      </form>
                </div>
                </div>
        )
    }
}

export default test;