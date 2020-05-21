import React from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import Streams from "./streams";

const csrfToken = document.querySelector('[name="csrf-token"]').content;
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

class Twitch extends React.Component {

	constructor() {
		super();
		this.state = {
			streams: [
				{id: 1, name: 'Olyashaa', url: 'https://www.twitch.tv/olyashaa', type: 1, show: true},
				{id: 2, name: 'Just_NS', url: 'https://www.twitch.tv/just_ns', type: 1, show: true},
				{id: 3, name: 'Ant1ka', url: 'https://www.twitch.tv/ant1ka', type: 1, show: true},
				{id: 4, name: 'CSGOMainCast_ru', url: 'https://www.twitch.tv/csgomc_ru', type: 1, show: true},
				{id: 5, name: 'Gensyxa', url: 'https://www.twitch.tv/gensyxa', type: 1, show: true},
				{id: 6, name: 'Ceh9', url: 'https://www.twitch.tv/ceh9', type: 1, show: true},
				{id: 7, name: 'Olyashaa', url: 'https://www.twitch.tv/olyashaa', type: 1, show: true},
				{id: 8, name: 'DreadzTV', url: 'https://www.twitch.tv/dreadztv', type: 1, show: true}
			]
		}
	}

	// handleSubmit(e){
	// 	let message = e.target.elements[0].value
	// 	axios.post('/contact', {message})
	// 		.then( (data)=> {
	// 			debugger
	// 		})
	// }

	// selectStream = stream => {
	// 	this.setState((stream: ));
	//
	// }

	render(){
		return(
			<div className="container" style={{padding: '40px 0'}}>
				<div className="row">
					<div className="col-md-8 offset-md-2">
						<button className="btn btn-primary" type="button">
							<Link to="/youtube" className="btn" > Go to YouTube </Link>
						</button>
						<h1>Twitch streams page</h1>
						{this.state.streams && this.state.streams.length ? (
						<Streams streams={this.state.streams}/>
						) : null}
					</div>
				</div>
			</div>
		)
	}
}

export default Twitch