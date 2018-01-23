import React,{Component} from 'react';
import {
  Well
} from 'react-bootstrap';


const style={
	textAlign:'center',
	position:'relative',
left:'0',
bottom:'0',
right:'0'
}
class Footer extends Component{

	

	render(){
		return(
			<div>
				
  <Well bsSize="small" style={style}>&#8258;Training Log</Well>
	</div>
			)
	}
}

export default Footer