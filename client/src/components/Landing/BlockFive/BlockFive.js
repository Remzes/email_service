import React, {Component} from 'react';
import Slider from './Slider';
import {connect} from 'react-redux';
import * as actions from '../../../actions';

//Hint: Use container for the images in the slider
//Because errors with movement is appeared
class BlockFive extends Component {

    shouldComponentUpdate(nextProps){
        return nextProps.width !== this.props.width || nextProps.scroll < 100 || nextProps.config !== this.props.config;
    }

    render() {
        const configuration = this.props.initialConfiguration.data.SLIDER_CONFIGURATION;
        const {width, scroll, config, selectConfig} = this.props;
        return (
            <div className="blockfive" id="gallery">
                <div className="blockfive--inner">
                    <div className="blockfive__container">
                        <div className="blockfive__container__header">
                            <div className="blockfive__container__header__container">
                                <h1>Application Gallery</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    A aliquid blanditiis consequuntur debitis deserunt eaque eligendi
                                </p>
                                <div className="blockfive__header--divider"></div>
                            </div>
                        </div>
                        <div className="blockfive__container__device">
                            <h2>
                                Choose your device to what screenshots
                            </h2>
                            <ul className="tabs">
                                {
                                    configuration.map(item =>
                                        <li
                                            key={item.id}
                                            className="tab"
                                        >
                                            <a href="#"
                                               onClick={
                                                   () => selectConfig(item.id)
                                               }
                                            >
                                                {item.device}
                                            </a>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="blockfive__container__gallery">
                            {
                                <Slider
                                    width={width}
                                    scroll={scroll}
                                    high_resolution_styles={configuration[config].high_resolution_styles}
                                    low_resolution_styles={configuration[config].low_resolution_styles}
                                    device_image={configuration[config].image}
                                />
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({initialConfiguration, config}) => {
    return {
        initialConfiguration,
        config
    }
};

export default connect(mapStateToProps, actions)(BlockFive);