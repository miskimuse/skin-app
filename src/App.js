import React, { Component } from 'react';

class Login extends React.Component {

    constructor(){
      super();
      this.state = {
        sessionToken: ''
      }
    }
  
    componentWillMount(){
      const token = localStorage.getItem('token');
      if (token && !this.state.sessionToken){
        this.setState({sessionToken: token});
      }
    }
  
    setSessionState = (token) => {
      localStorage.setItem('token', token);
      this.setState({sessionToken: token});
    }
  
    logout = () => {
      this.setState({
        sessionToken: ''
      })
      localStorage.clear();
    }
  
    protectedViews = () => {
      if (this.state.sessionToken === localStorage.getItem('token')){
        return (
          <Switch>
            <Route path='/' exact>
              <Splash sessionToken={this.state.sessionToken}/>
            </Route>
          </Switch>
        )
      } else {
        return (
          <Route path="/auth">
            <Auth setToken={this.setSessionState}/>
          </Route>
        )
      }
    }
  
    render() {
      return (
        <Router>
          <div>
            <SiteBar clickLogout={this.logout}/>
            {this.protectedViews()}
          </div>
        </Router>
      );
    }
  }
  
  export default App;
  