import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import animateScrollTo from 'animated-scroll-to';

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location) {
            const options = {
                speed: 1000,
                minDuration: 250,
                maxDuration: 1500,
                element: document.getElementById("container").parentNode,
                cancelOnUserAction: true
            };
            animateScrollTo(0, options);
        }
    }

    render() {
        return this.props.children
    }
}

export default withRouter(ScrollToTop)