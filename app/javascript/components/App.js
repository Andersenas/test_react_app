import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Twitch from './Twitch'
import Youtube from './Youtube'

class App extends React.Component {
	render () {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/twitch" component={Twitch} />
					<Route exact path="/youtube" component={Youtube} />
				</Switch>
			</div>
		)
	}
}

export default App