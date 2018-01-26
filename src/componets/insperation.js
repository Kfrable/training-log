import React,{Component} from 'react';
import axios from 'axios';
 import Add from '../componets/add'
import {
  Carousel,Item,Caption,wellInstance,Well,Jumbotron,Image
} from 'react-bootstrap';

const style={
	// border:'solid black',
	// height:'388px',
	width:'91%',
	margin:'0 auto',
	marginTop: '20%',
	
	// backgroundColor:'white',
	boxShadow: '11px 8px 8px 3px black',
	
 
}

const textStyle={
	textAlign:'center',
	// fontSize:'64px',
	color:'rgb(85,85,85)',
	fontFamily:"fantasy",
	fontSize:'38px',
	textShadow: '-4px 2px 18px rgb(85,85,85)',
	// color: 'darkgray',
	font: '35px LeagueGothicRegular',
	overflow: 'hidden', 
  borderRight: '.15em solid orange', 
  whiteSpace: 'nowrap',
  margin: '0 auto', 
  letterSpacing: '.15em', 
  animation: 'typing 3.5s steps(40, end),blink-caret .75s step-end infinite'
}

const textStyle1={
	textAlign:'center',
	// fontSize:'64px',
	color:'rgb(85,85,85)',
	fontFamily:"fantasy",
	fontSize:'38px',
	textShadow: '-4px 2px 18px rgb(85,85,85)',
	// color: 'darkgray',
	
}
const imgStyle={
	height:'400px',
	width:'50%'
}



class Insperation extends Component{

	constructor(){
		super()
		this.state = {
			theQuote:null
		}
		this.quote = this.quote.bind(this);
	}
	componetDidMount(){
		
	}

	quote(){
		axios.get('https://quotes.rest/qod').then((res)=>{
			
			this.setState({
				theQuote:res.data.contents.quotes[0].quote
			})
			
			
		})
		
	}

	render(){
		return(
			<div  >
				

				    {this.quote()}
				    <Jumbotron  style={style} className="fade-in two parent perspective"> <p  style={textStyle1} className='child'>
				    {this.state.theQuote}</p>
			
				    </Jumbotron>
				    


				<Add/>
				
			</div>
			)
	}
}

export default Insperation