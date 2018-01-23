import React, {Component} from 'react';

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
  FormControl,
  Tooltip,
 OverlayTrigger
} from 'react-bootstrap';

  const myWeight = 260;
 const tooltip = (
  <Tooltip id="tooltip">
    <strong>Alan Thrall</strong> youtube page.
  </Tooltip>
);

class Nave extends Component {
  constructor(props) {
    super(props)
    

  }

  render() {
    return (
      <div className="header-wrapper">

      <Navbar inverse collapseOnSelect>
      <Nav pullRight>
      
        <NavItem >
          My Weight:   {myWeight} lbs
        </NavItem>
        
        
      </Nav>
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
      <Nav pullRight>
      <OverlayTrigger placement="left" overlay={tooltip}>
        <NavItem eventKey={1} href="https://www.youtube.com/user/athrall7">
          Alan Thrall
        </NavItem>
        </OverlayTrigger>
        
      </Nav>

    </Navbar.Collapse>
    
  </Navbar>

      

        
      </div>
    )
  }
}

export default Nave;