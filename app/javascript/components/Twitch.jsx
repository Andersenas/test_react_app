import React, {Component, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import axios from "axios";
import Streams from "./streams";

class Twitch extends Component {

	constructor() {
		super();
		this.state = {
			interval: null,
			streams: [
				// {id: 1, name: 'Olyashaa', url: 'https://www.twitch.tv/olyashaa', type_platform: 'twitch', show: true},
				// {id: 2, name: 'Just_NS', url: 'https://www.twitch.tv/just_ns', type_platform: 'twitch', show: true},
				// {id: 3, name: 'Ant1ka', url: 'https://www.twitch.tv/ant1ka', type_platform: 'twitch', show: true},
				// {id: 4, name: 'CSGOMainCast_ru', url: 'https://www.twitch.tv/csgomc_ru', type_platform: 'twitch', show: true},
				// {id: 5, name: 'Gensyxa', url: 'https://www.twitch.tv/gensyxa', type_platform: 'twitch', show: true},
				// {id: 6, name: 'Ceh9', url: 'https://www.twitch.tv/ceh9', type_platform: 'twitch', show: true},
				// {id: 7, name: 'Olyashaa', url: 'https://www.twitch.tv/olyashaa', type_platform: 'twitch', show: true},
				// {id: 8, name: 'DreadzTV', url: 'https://www.twitch.tv/dreadztv', type_platform: 'twitch', show: true}
			]
		}
	}

	componentDidMount() {
		this.getData();
		this.setState({ interval: setInterval(() => this.getData(), 10000) });
	}

	componentWillUnmount() {
		clearInterval(this.state.interval);
	}

	getData(){
		axios.get('/twitch_streams')
			.then( data => {
				this.setState({ streams: data.data.data });
			})
			.catch( data => {
				console.log(data)
			});
	}

	handler () {
		this.props.history.push('/youtube');
	};

	render(){
		return(
			<div className="container" style={{padding: '40px 0'}}>
				<div className="row">
					<div className="col-md-8 offset-md-2">
						<button className="btn btn-danger mr-3" type="button" onClick={() => this.handler()}>
							YouTube Streams
						</button>
						<button className="btn btn-info" type="button" onClick={() => this.props.history.push('/')}>
							Home
						</button>
						<h1>Twitch streams page</h1>
						{this.state.streams && this.state.streams.length ? (
						<Streams
							streams={this.state.streams}
							context={this}
						/>
						) : null}
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(Twitch)