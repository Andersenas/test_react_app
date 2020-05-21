import React from 'react'
import {Link} from "react-router-dom";
import axios from "axios";

const csrfToken = document.querySelector('[name="csrf-token"]').content;
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

class Twitch extends React.Component {

	handleSubmit(e){
		let message = e.target.elements[0].value
		axios.post('/contact', {message})
			.then( (data)=> {
				debugger
			})
	}

	render(){
		return(
			<div className="container" style={{padding: '40px 0'}}>
				<div className="row">
					<div className="col-md-8 offset-md-2">
						<button className="btn btn-primary" type="button">
							<Link to="/youtube" className="btn" > Go to YouTube </Link>
						</button>
						<h1>This is the YouTube page.</h1>

					</div>
				</div>
			</div>
		)
	}
}

export default Twitch