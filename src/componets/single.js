import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom';
import {FormControl,FormGroup,Button,Well,Panel,Heading,Body,Title} from 'react-bootstrap'

const editStyle={
	textAlign:'center'
}

const st={
	height:'259px'
}

const Style={
	textAlign:'center',
	color:'darkslategray',
	width:'50%'
}

const changedStyle={
	margin:'0 auto',
	backgroundColor:'white',
	opacity:'.8',
	width:'50%',
	borderRadius:'8%'
}

const textStyle={
	textAlign:'center',
	color:'black'
}



const backStyle={
	
	width:'87px',
	color:'black'
}
const back ={
	width:'87px'
}

const submitStyle={
	float:'right',
	width:'87px',
	marginRight:'54px'
}

const stylePannel={
	margin:'0 auto',
	border:'black solid',
  height:'483px',
  width:'348px',
  textAlign:'center',
  backgroundColor:'white',
  opacity: '.8'
}

class Single extends Component{
	constructor(props){
		super(props)
		this.state={
			weight:'',
			reps:'',
			sets:''
		}
		
	    this.gettingOne = this.gettingOne.bind(this);
	    this.editing = this.editing.bind(this);
		this.handleWeight = this.handleWeight.bind(this);
		this.handleReps = this.handleReps.bind(this);
		this.handleSets = this.handleSets.bind(this);
	}

	componentDidMount(){
		 this.gettingOne()
	}


	

	gettingOne(e){
		axios.get(`https://secret-ridge-98402.herokuapp.com/${this.props.match.params.exercise}/${this.props.match.params.id}`).then((res)=>{
			console.log(res.data.data)
			let data = res.data.data
			this.setState({
				clicked:true,
				weight:res.data.data.weight,
				reps:res.data.data.reps,
				sets:res.data.data.sets
			})
		})
		
	}

			handleWeight(e){
				this.setState({
					weight:e.target.value
				})
			}

			handleReps(e){
				this.setState({
					reps:e.target.value
				})
			}

			handleSets(e){
				this.setState({
					sets:e.target.value
				})
			}

		editing(e){
			axios({
  method: 'PUT',
  url: `https://secret-ridge-98402.herokuapp.com/${this.props.match.params.exercise}/${this.props.match.params.id}`,
  data: {
    "weight": this.state.weight,
    "reps":this.state.reps,
    "sets":this.state.sets
  }
}).then((res)=>{
	res.redirect(`/${this.props.match.params.exercise}`)
})
		}


	render(){
		return(
			<div>
				
				<h1 style={textStyle}>EDIT</h1>
				<form  style={stylePannel} > 

        <Panel>
			<Panel.Heading>
				<Panel.Title componentClass="h3">
					Weight
				</Panel.Title>
			</Panel.Heading>
			<Panel.Body><input type="number" style={textStyle} value={this.state.weight} onChange={this.handleWeight}/></Panel.Body>
		</Panel>
		<Panel>
			<Panel.Heading>
				<Panel.Title componentClass="h3">
					Reps
				</Panel.Title>
			</Panel.Heading>
			<Panel.Body><input type="number" placeholder="Reps" style={textStyle} value={this.state.reps} onChange={this.handleReps}/></Panel.Body>
			</Panel>
			<Panel>
			<Panel.Heading>
				<Panel.Title componentClass="h3">
					sets
				</Panel.Title>
			</Panel.Heading>
			<Panel.Body><input type="number" placeholder="Sets" style={textStyle}  value={this.state.sets} onChange={this.handleSets}/></Panel.Body>
			</Panel>
			
			<Button bsStyle="primary" style={back}><Link to={`/${this.props.match.params.exercise}`} style={backStyle}> &larr;BACK</Link></Button>
			<Button bsStyle="primary" style={submitStyle} onClick={this.editing}>SUBMIT</Button>
			
        </form>
			
				
			</div>

		)
	}
}

export default Single