import React,{Component} from 'react';
import axios from 'axios';

const style={
	border:'solid black',
	height:'388px',
	width:'930px',
	margin:'0 auto',
	marginTop: '117px',
	opacity:'.8',
	backgroundColor:'white'
}

const textStyle={
	textAlign:'center',
	fontSize:'64px',
	padding: '40px',
	color:'black',
	fontFamily:"fantasy"
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
				    <p style={textStyle}>{this.state.theQuote}</p>
				</div>
			</div>
			)
	}
}

export default Insperation