import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom';

const editStyle={
	textAlign:'center'
}

const Style={
	textAlign:'center',
	color:'white'
}

const changedStyle={
	margin:'0 auto',
	backgroundColor:'white',
	opacity:'.8',
	width:'518px'
}

const textStyle={
	textAlign:'center',
	color:'black'
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
				<h1 style={Style}>Edit</h1>
				
  				<div style={changedStyle}>
				<h1 style={textStyle}>Weight:<input name='weight' type='number' placeholder='weight' value={this.state.weight} onChange={this.handleWeight}/></h1>
				<h1 style={textStyle}> Reps:  <input name='reps' type='number' placeholder='reps' value={this.state.reps} onChange={this.handleReps}/></h1>
				<h1 style={textStyle}> Sets:  <input name='sets' type='number' placeholder='sets' value={this.state.sets} onChange={this.handleSets}/></h1>
				
				<Link to={`/${this.props.match.params.exercise}`}>back</Link>
				<input type='submit' value='Submit!' onClick={this.editing}/>
				</div>
			</div>

		)
	}
}

export default Single