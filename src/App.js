import React, { Component } from 'react';
import Navbar from './home/Navbar';
import Splash from './home/Splash';
import Auth from './auth/Auth';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
class App extends React.Component {
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
           <Splash sessionT={this.state.sessionToken}/>
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
       
       <div className=  "Background">
         <Navbar clickLogout={this.logout}/>
         {this.protectedViews()}
       </div>
     </Router>
   );
 }
}
export default App;