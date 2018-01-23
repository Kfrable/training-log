import React,{Component} from 'react';
import axios from 'axios';
// import Footer from '../componets/footer'
import {
  Carousel,Item,Caption,wellInstance,Well,Jumbotron,Image
} from 'react-bootstrap';

const style={
	border:'solid black',
	height:'388px',
	width:'75%',
	margin:'0 auto',
	marginTop: '117px',
	opacity:'.8',
	backgroundColor:'white'
}

const textStyle={
	textAlign:'center',
	// fontSize:'64px',
	color:'black',
	fontFamily:"fantasy"
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
			<div>
				<div style={style}>

				    {this.quote()}
				    <Jumbotron> <p style={textStyle}>{this.state.theQuote}</p></Jumbotron>
				    
				</div>

				
				
			</div>
			)
	}
}

export default Insperation