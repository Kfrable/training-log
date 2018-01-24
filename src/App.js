import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import All from './componets/listall'
import Insperation from './componets/insperation'
import Nave from './componets/nav'
import Single from './componets/single'
import Footer from './componets/footer'
import Profile from './componets/profile'




const backGroundStyle={
  backgroundImage:"url('http://www.dohertysgym.com/wp-content/uploads/Dohertys-Gym-24-7-Campbellfield-img15-min.jpg')",
  backgroundRepeat:'no-repeat',
  
   backgroundSize: 'cover',
   
}

const bufferDiv={
  
  height:'204px'
}

class App extends Component {
  
  
  render() {
    
     
    return (
      
      <div className="App" style={backGroundStyle}>
      
        
       
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
        <div style={bufferDiv}></div>
        <Footer/>
        
      </div>
    );
  }
}

export default App;
