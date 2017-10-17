import React, {Component} from 'react';
import Slider from './Slider';
import {connect} from 'react-redux';
import * as actions from '../../../actions';

//Block Five Component
class BlockFive extends Component {

    //Update components
    shouldComponentUpdate(nextProps) {
        return nextProps.width !== this.props.width || nextProps.scroll < 200 || nextProps.config !== this.props.config;
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
                            <section className="blockfive__container__device__nav">
                                {
                                    configuration.map(item =>
                                        <a
                                           key={item.id}
                                           className="blockfive__container__device__nav__button btn"
                                           onClick={
                                               () => selectConfig(item.id)
                                           }
                                        >
                                            {item.device}
                                        </a>
                                    )
                                }
                            </section>
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

//Redux store data
const mapStateToProps = ({initialConfiguration, config}) => {
    return {
        initialConfiguration,
        config
    }
};

export default connect(mapStateToProps, actions)(BlockFive);