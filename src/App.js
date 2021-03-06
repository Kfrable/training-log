import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import All from './componets/listall'
import Insperation from './componets/insperation'
import Nave from './componets/nav'
import Single from './componets/single'
import Footer from './componets/footer'
import Profile from './componets/profile'




const backGroundStyle={
  backgroundImage:"url('../trainglogImg.jpg')",
  backgroundRepeat:'no-repeat',
  
   backgroundSize: 'cover',
   
}

const bufferDiv={
  
  height:'204px'
}

class App extends Component {
  
  
  render() {
    
     
    return (
      
      <div className="App main-container" style={backGroundStyle}>
      
        
       
        <Router>
        <div>
        <Nave/>


        <Switch>
          
          <Route exact path='/' component={Insperation} />
          <Route exact path='/:exercise'  component={All} />
          <Route exact path='/:exercise/:id'  component={Single} />
          <Route exact path='/profile/profile/profile'  component={Profile} />
          
          
          
        </Switch>
        </div>
        </Router>
        
        
        <Footer/>
        
      </div>
    );
  }
}

export default App;
