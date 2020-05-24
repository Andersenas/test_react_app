import React, { PureComponent } from 'react';
import ReactPlayer from 'react-player';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {
    StreamHeadContainer,
    AllStreams,
    StreamBody
} from '../../views/ui/stream';

class Streams extends PureComponent {
    state = {
        toggleStream: false,
        showStream: true,
        showToggleBtn: false,
        active: '',
        prevStream: null,
    };

    componentDidMount() {
        this.setState({
            streams: this.props.streams,
            active: this.props.streams[0].url,
            prevStream: this.props.streams[0].id
        });
        document.getElementById(`stream-${this.props.streams[0].id}`).classList.add('active')
    }

    selectStream = stream => {
        if(document.getElementById(`stream-${this.state.prevStream}`)){
            document.getElementById(`stream-${this.state.prevStream}`).classList.remove('active');
        }
        this.setState({
            active: stream.url,
            prevStream: stream.id
        });
        document.getElementById(`stream-${stream.id}`).classList.add('active');
        this.setState({ showStream: true });
    };

    render() {
        const { streams } = this.props;
        const { toggleStream, showStream, active } = this.state;
        return (
            <StreamBody>
                <StreamHeadContainer showStream={showStream}>
                    <div>
                        <AllStreams>
                            {streams.map(
                                (stream) =>
                                    !_.isEmpty(stream) && (
                                        <a
                                            key={stream.id}
                                            id={`stream-${stream.id}`}
                                            onClick={() => this.selectStream(stream)}>
                                            {stream.name}
                                        </a>
                                    )
                            )}
                        </AllStreams>
                    </div>
                </StreamHeadContainer>
                {showStream && <ReactPlayer url={active} width="calc(100% - 1px)" height={518} />}
            </StreamBody>
        );
    }
}
Streams.propTypes = {
    streams: PropTypes.array,
    active: PropTypes.string,
    selectStream: PropTypes.func,
    prevStream: PropTypes.number,
    t: PropTypes.func
};
export default Streams;
