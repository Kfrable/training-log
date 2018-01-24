import React,{Component} from 'react';
import axios from 'axios'
import Single from '../componets/single'
import Delete from '../componets/delete'
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom';
import {Panel,Heading,Title,Body,Modal,Header,Footer,Button,Tooltip,
 OverlayTrigger,Well,Alert} from 'react-bootstrap';

 const tooltip = (
  <Tooltip id="tooltip">
    <strong>Wanna Add Something</strong> press on this.
  </Tooltip>
);

const tooltip2 = (
  <Tooltip id="tooltip">
    <strong>SEE HOW IT'S DONE</strong> press on this.
  </Tooltip>
); 

const style = {
  border:'black solid',
  height:'483px',
  width:'242px',
  display:'inline-block',
  margin:'10px',
  textAlign:'center',
  backgroundColor:'white',
  opacity: '.8'
}

const style2={
	textAlign:'center',
	color:'white'
}
const style3={
	padding:'10px',
	width:'104px',
	margin:'8px'
}

const style4={
	
	width:'135px',
	marginLeft:'22px'
}

const createStyle={
	textAlign:'center',
	height: '183px',
    border: 'white solid',
    width: '218px',
    float:'right',
    marginRight:'69px'
}

const Align={
	textAlign:'center'
}

const editStyle={
	color:'white',
	float: 'right',
	width:'83px',
	marginRight:'7px'
}

const editStyle2={
	color:'white'
}

const deleteStyle={
	float:'left',
	width:'83px',
	marginLeft:'7px'
}



const bufferDiv={
	
	height:'66px'
}

const form={
	textAlign:'center'
}

const buttonDiv={
	textAlign:'center'
}

const modalStyle={
	textAlign:'center',
	backgroundColor:'red',
	color:'white'
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
		this.close = this.close.bind(this);
		this.han = this.han.bind(this);
		this.getRidOfIt = this.getRidOfIt.bind(this);
		this.deleteModel = this.deleteModel.bind(this);

		this.handleAlertShow = this.handleAlertShow.bind(this);
		this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
		


	}



	

	listall(){
		axios.get(`https://secret-ridge-98402.herokuapp.com/${this.props.match.params.exercise}`).then((res)=>{
			
			this.setState({
				all:res.data.data,
				exercise:this.props.match.params.exercise,
				url:res.data.data[0].url
			})
			
		})


		if(this.state.all === null){
      return(<img src='http://rs862.pbsrc.com/albums/ab187/rocker_4u/weight-lifting.gif~c200'/>)
    }else{

    let data = this.state.all.map((array,i)=>{
    	 let ok = Date.parse(array.ts)
    	 let date = new Date(ok)
		 let n = date.toDateString()

    
      return(<form key={i} style={style} onClick={this.gettingOne}> 

        <Panel>
			<Panel.Heading>
				<Panel.Title componentClass="h3">
					Weight
				</Panel.Title>
			</Panel.Heading>
			<Panel.Body>{array.weight}</Panel.Body>
		</Panel>
		<Panel>
			<Panel.Heading>
				<Panel.Title componentClass="h3">
					Reps
				</Panel.Title>
			</Panel.Heading>
			<Panel.Body>{array.reps}</Panel.Body>
			</Panel>
			<Panel>
			<Panel.Heading>
				<Panel.Title componentClass="h3">
					sets
				</Panel.Title>
			</Panel.Heading>
			<Panel.Body>{array.sets}</Panel.Body>
			</Panel>
			<Panel>
			<Panel.Heading>
				<Panel.Title componentClass="h3">
					Date
				</Panel.Title>
			</Panel.Heading>
			<Panel.Body>{n}</Panel.Body>
			</Panel>
			<Button bsStyle="danger" id={array.id} onClick={this.handleAlertShow} style={deleteStyle}>DELETE</Button>
			<Button bsStyle="primary" style={editStyle}><Link to={`/${this.props.match.params.exercise}/${array.id}`} style={editStyle2}>EDIT</Link></Button>
			
        </form>)
    })
    return data

   

 
    
  }
}

deleteModel(e){
	


}

handleClick(e){
	
	 e.preventdefault
	 console.log(this.state.individualId,'<-----')
	 axios.delete(`https://secret-ridge-98402.herokuapp.com/${this.props.match.params.exercise}/${this.state.individualId}`)
	 this.setState({ 
	 	modal: false 
	 });
}

getRidOfIt(e){
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
this.setState({
	showModal:false
})
}



han(){
	this.setState({ showModal: true });
	}

close(){
	this.setState({
		showModal:false,
		modal:false
	})
}

handleAlertDismiss() {
		this.setState({ alertVisible: false });
	}

	handleAlertShow(e) {
		this.setState({ modal: true ,
						individualId:e.target.id,
						exercise:this.props.match.params.exercise});
		console.log(this.state.individualId)
	}
	
		

render(){
	const show = this.state.modal
	return(
		
			<div>
			

			<h1 style={style2}>{this.props.match.params.exercise}</h1>
			<div style={buttonDiv}>
			<OverlayTrigger placement="left" overlay={tooltip}>

			<Button bsStyle="primary" style={style3}onClick={this.han}>ADD ENTRY</Button>
			
				
			</OverlayTrigger>

			<OverlayTrigger placement="right" overlay={tooltip2}>
			<a href={this.state.url}><Button bsStyle="primary" style={style3}>FORM</Button></a>
			</OverlayTrigger>
			</div>

			<div style={Align}>{this.listall()}</div>

			
			<Modal
				show={this.state.showModal} onHide={this.Close}
			>
				<Modal.Header>
					<Modal.Title id="contained-modal-title-sm">Add Entry</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					
					
		        <input  name='weight' type='number' placeholder='weight' onChange={this.handleWeight}/>
  				<input  name='reps' type='number' placeholder='reps' onChange={this.handleReps}/>
  				<input  name='sets' type='number' placeholder='sets' onChange={this.handleSets}/>


				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.close}>Close</Button>
					<Button onClick={this.create}>Add</Button>
				</Modal.Footer>
			</Modal>


				<Modal
				show={this.state.modal} onHide={this.Close} bsStyle="warning">
				<Modal.Header>
					<Modal.Title id="contained-modal-title-sm" style={modalStyle}>YOOOOOOOO HOMEGIRL!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					
					
		        <p style={buttonDiv}>Are you sure you want to delete this entry?</p>


				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.close}>Close</Button>
					<Button onClick={this.handleClick} bsStyle="danger">DELETE</Button>
				</Modal.Footer>
			</Modal>
			
				

				
			
		
			
			
			<div style={bufferDiv}></div>
			 </div>
		)
}
}

export default All