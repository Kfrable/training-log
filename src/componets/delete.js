import React,{Component} from 'react';
import axios from 'axios';
import {Modal,Button} from 'react-bootstrap';


class Delete extends Component{
	constructor(props){
		super(props)
		this.state={
			showModal:this.props.modal
		}
		this.han = this.han.bind(this);
		this.close = this.close.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

componentDidMount(){
	console.log(this.props.data,'<-----props in delete')
	console.log(this.props.modal,'<-----props in delete')
}

han(){
	this.setState({ showModal: true });
	}

close(){
	this.setState({
		showModal:false
	})
}

handleClick(e){
e.preventdefault
	 console.log(this.state.individualId,'<-----')
	 axios.delete(`https://secret-ridge-98402.herokuapp.com/${this.props.exercise}/${this.props.data}`)
	 
}

render(){
	return(
		<div>

		<Modal
				show={this.state.showModal} onHide={this.Close}
			>
				<Modal.Header>
					<Modal.Title id="contained-modal-title-sm">YOOOOOOOO</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					
					
		        <p>You sure you want to delete</p>


				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.close}>Close</Button>
					<Button onClick={this.handleClick}>DELETE</Button>
				</Modal.Footer>
			</Modal>
		</div>

		)
	}

}

export default Delete