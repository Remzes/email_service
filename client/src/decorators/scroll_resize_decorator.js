import React, {Component} from 'react';
import {throttle} from 'lodash';

//Decorator for resize browser and scrolling pages
const Decorator = (OriginalComponent) => {
    return class WrappedComponent extends Component {
        state = {
            width: window.innerWidth,
            scroll: 0,
            throttler: throttle(() => {
                this.updateScroll()
            }, 100)
        };

        componentDidMount() {
            window.addEventListener("resize", this.updateDimensions, true);
            window.addEventListener("scroll", this.state.throttler, true);

        };

        componentWillUnmount() {
            window.removeEventListener("resize", this.updateDimensions, true);
            window.removeEventListener("scroll", this.state.throttler, true);
        }

        //Update width value
        updateDimensions = () => {
            this.setState({
                width: window.innerWidth,
            });
        };

        //Update scroll value
        updateScroll = () => {
            this.setState({
                scroll: document.body.scrollTop || document.documentElement.scrollTop
            });
        };

        render() {
            return <OriginalComponent {...this.props} {...this.state}/>
        }
    }
};

export default Decorator;