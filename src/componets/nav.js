import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom'
import {
  Bootstrap,
  Button,
  DropdownButton,
  MenuItem,
  Nav,
  NavItem,
  Navbar,
  NavDropdown,
  FormGroup,
  FormControl
} from 'react-bootstrap';

class Nave extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="header-wrapper">

      <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
       <a href="/">Training Log</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      
      <Nav pullRight>
        <NavDropdown  title="Dropdown" id="basic-nav-dropdown">
          <MenuItem key={1} href='/bench'value='bench' >Bench Press</MenuItem>
                 <MenuItem key={2} href='/bent-row' value='bent-row' >Bent Row</MenuItem>
                 <MenuItem key={3} href='/clean' value='clean' >Clean</MenuItem>
                 <MenuItem key={4} href='/dead-lift' value='dead-lift' >Dead Lift</MenuItem>
                 <MenuItem key={5} href='/get-ups' value='get-ups' >Get Ups</MenuItem>
                 <MenuItem key={6} href='/kettle-bell-swings' value='kettle-bell-swings' >Kettle Bell Swings</MenuItem>
                 <MenuItem key={7} href='/lumberjacks' value='lumberjacks' >Lumber Jacks</MenuItem>
                 <MenuItem key={8} href='/overhead-press' value='overhead-press' >Overhead Press</MenuItem>
                 <MenuItem key={9} href='/power-cleans' value='power-cleans' >Power Cleans</MenuItem>
                 <MenuItem key={10} href='/push-ups' value='push-ups' >Push Ups</MenuItem>
                 <MenuItem key={11} href='/sit-ups' value='sit-ups' >Sit Ups</MenuItem>
                 <MenuItem key={12} href='/squat' value='squat' >Squats</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

      

        
      </div>
    )
  }
}

export default Nave;