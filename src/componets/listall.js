import React,{Component} from 'react';
import axios from 'axios'
import Single from '../componets/single'
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom';

const style = {
  border:'black solid',
  height:'286px',
  width:'187px',
  display:'inline-block',
  margin:'10px',
  textAlign:'center',
  backgroundColor:'white',
  opacity: '.8'
}

const style2={
	textAlign:'center'
}

const createStyle={
	textAlign:'center',
	height: '183px',
    border: 'white solid',
    width: '218px',
    float:'right'
}

const Align={
	textAlign:'center'
}

class All extends Component{
	constructor(props){
		super()
		this.state={
			all:null,
			clicked:false
		}
		this.listall = this.listall.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.create = this.create.bind(this);
		this.handleWeight = this.handleWeight.bind(this);
		this.handleReps = this.handleReps.bind(this);
		this.handleSets = this.handleSets.bind(this);

	}



	

	listall(){
		axios.get(`https://secret-ridge-98402.herokuapp.com/${this.props.match.params.exercise}`).then((res)=>{
			
			this.setState({
				all:res.data.data,
				exercise:this.props.match.params.exercise
			})
			let ok = Date.parse(res.data.data[0].ts)
			// let date = new Date(ok)
			// let date = new Date(ok).toString()
		})


		if(this.state.all === null){
      return(<img src='http://rs862.pbsrc.com/albums/ab187/rocker_4u/weight-lifting.gif~c200'/>)
    }else{

    let data = this.state.all.map((array,i)=>{
    	 let ok = Date.parse(array.ts)
    	 let date = new Date(ok)
		 let n = date.toDateString()

    
      return(<form key={i} style={style} onClick={this.gettingOne}> <h1 style={style2}>{array.weight}</h1> 
        <h1 style={style2}>{array.reps}</h1> 
        <h1 style={style2}>{array.sets}</h1>
        <li style={style2}>{n}</li>
        
        
         
        <Link to={`/${this.props.match.params.exercise}/${array.id}`}>edit</Link>
        <h6 id={array.id} onClick={this.handleClick}>Delete</h6>
        </form>)
    })
    return data

   

 
    
  }
}

handleClick(e){
	e.preventdefault
	console.log(e.target.id)
	axios.delete(`https://secret-ridge-98402.herokuapp.com/${this.props.match.params.exercise}/${e.target.id}`)
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
create(e){
	e.preventdefault
	console.log(this.state.sets)
axios({
  method: 'POST',
  url: `https://secret-ridge-98402.herokuapp.com/${this.props.match.params.exercise}`,
  data: {
    "weight": this.state.weight,
    "reps":this.state.reps,
    "sets":this.state.sets
  }
}).then(()=> {
  console.log("done");
});
}
render(){
	
	return(

			<div>

				<div style={createStyle}>
    			<input style={style2} name='weight' type='number' placeholder='weight' onChange={this.handleWeight}/>
  				<input style={style2} name='reps' type='number' placeholder='reps' onChange={this.handleReps}/>
  				<input style={style2} name='sets' type='number' placeholder='sets' onChange={this.handleSets}/>
  				<input type='submit' value='Submit!' onClick={this.create}/>
				</div>

			<div style={Align}>{this.listall()}</div>

			
			
			 </div>
		)
}
}

export default All