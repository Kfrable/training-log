import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom';
import All from './componets/listall'
import Insperation from './componets/insperation'
import Nave from './componets/nav'
import Single from './componets/single'
import Add from './componets/add'

const backGroundStyle={
  backgroundImage:"url('http://www.dohertysgym.com/wp-content/uploads/Dohertys-Gym-24-7-Campbellfield-img15-min.jpg')",
  backgroundRepeat:'no-repeat',
  height: '760px',
  backgroundSize: 'cover'
}

class App extends Component {
  constructor(){
    super()
    
  }




  

  
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
          

          
        </Switch>
        </div>
        </Router>

        
      </div>
    );
  }
}

export default App;
