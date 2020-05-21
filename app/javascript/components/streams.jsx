import React, { PureComponent } from 'react';
import ReactPlayer from 'react-player';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {
    StreamContainer,
    StreamHeadContainer,
    AllStreams,
    StreamBody
} from '../../views/ui/stream';

class Streams extends PureComponent {
    state = {
        toggleStream: false,
        showStream: true,
        showToggleBtn: false,
        streams: [],
        active: '',
        prevStream: null,

    };

    componentDidMount() {
        this.setState({
            streams: this.props.streams,
            active: this.props.streams[0].url,
            prevStream: this.props.streams[0].id
        });
    }

    // componentWillUnmount() {
    //     this.setState({ streams: this.props.streams });
    // }

    selectStream = stream => {
        document.getElementById(`stream-${this.state.prevStream}`).classList.remove('active');
        this.setState({
            active: stream.url,
            prevStream: stream.id
        });
        document.getElementById(`stream-${stream.id}`).classList.add('active');
        this.setState({ showStream: true });
    };

    render() {
        const { toggleStream, showStream, streams, active } = this.state;
        return (
            <StreamBody>
                <StreamHeadContainer showStream={showStream}>
                    <StreamContainer id="lengthStream" ref="swipeSide" className={toggleStream ? 'ng_h100 ' : ''}>
                        <AllStreams>
                            {streams.map(
                                (stream, key) =>
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
                    </StreamContainer>
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
