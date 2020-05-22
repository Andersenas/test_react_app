import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <div className="container" style={{padding: '40px 0'}}>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <button className="btn btn-primary" type="button">
                            <Link to="/twitch" className="btn"> Go to Twitch Streams</Link>
                        </button>
                        <button className="btn btn-primary" type="button">
                            <Link to="/youtube" className="btn"> Go to YouTube Streams</Link>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Home)