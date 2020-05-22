import React, {Component} from 'react'
import axios from 'axios'
import {Link, withRouter} from "react-router-dom";
import Streams from "./streams";

class Youtube extends Component {
	constructor() {
		super();
		this.state = {
			streams: [
				// {id: 1, name: 'Lofi hip hop radio', url: 'https://www.youtube.com/watch?v=5qap5aO4i9A', type_platform: 'youtube', show: true},
				// {id: 2, name: 'Good Life Radio', url: 'https://www.youtube.com/watch?v=36YnV9STBqc', type_platform: 'youtube', show: true},
				// {id: 3, name: 'Deep House Radio', url: 'https://www.youtube.com/watch?v=wKOEl_vwPSo', type_platform: 'youtube', show: true}
			]
		}
	}

	componentDidMount() {
		this.getData();
		setInterval(() => this.getData(), 30000)
	}

	getData(){
		axios.get('/youtube_streams')
			.then( data => {
				this.setState({ streams: data.data.data });
			})
			.catch( data => {
				console.log(data)
			})
	}

	handler () {
		this.props.history.push('/twitch');
	};

	render(){
		return(
			<div className="container" style={{padding: '40px 0'}}>
				<div className="row">
					<div className="col-md-8 offset-md-2">
						<button className="btn btn-primary" type="button" onClick={() => this.handler()}>
							{/*<Link to="/twitch" className="btn"> Go to Twitch </Link>*/}
							Go to Twitch
						</button>
						<h1>YouTube streams page</h1>
						{this.state.streams && this.state.streams.length ? (
							<Streams
								streams={this.state.streams}
							/>
						) : null}

					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(Youtube)