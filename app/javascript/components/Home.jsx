import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <div className="container" style={{padding: '40px 0'}}>
                <button className="btn btn-primary ml-3 mb-3" type="button">
                    <Link to="/twitch" className="btn text-white"> Twitch Streams</Link>
                </button>
                <button className="btn btn-danger ml-3 mb-3" type="button">
                    <Link to="/youtube" className="btn text-white"> YouTube Streams</Link>
                </button>
            </div>
        )
    }
}

export default withRouter(Home)