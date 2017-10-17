import React, {Component} from 'react';
import {throttle} from 'lodash';

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

        //Update width variable, and re-render the web app
        //Hint: arrow function to not use 'bind' this
        updateDimensions = () => {
            this.setState({
                width: window.innerWidth,
            });
        };

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