import React, {Component} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";

const csrfToken = document.querySelector('[name="csrf-token"]').content;
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

class Youtube extends Component {
	constructor() {
		super();
		this.state = {
			streams: [
				{id: 1, name: 'Lofi hip hop radio', url: 'https://www.youtube.com/watch?v=5qap5aO4i9A', type: 2, show: true},
				{id: 2, name: 'Good Life Radio', url: 'https://www.youtube.com/watch?v=36YnV9STBqc', type: 2, show: true},
				{id: 3, name: 'Deep House Radio', url: 'https://www.youtube.com/watch?v=wKOEl_vwPSo', type: 2, show: true}
			]
		}
	}

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
							<Link to="/twitch" className="btn"> Go to Twitch </Link>
						</button>
						{/*{this.state.streams.map(*/}
						{/*	(stream, key) =>*/}

						{/*		)*/}
						{/*)}*/}

					</div>
				</div>
			</div>
		)
	}
}

export default Youtube