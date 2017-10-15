import React, {Component} from 'react';
import Slider from './Slider';
import appDesign from '../../../decorators/scroll_resize_decorator';

class BlockSeven extends Component {
    render(){
        return (
            <section className="blockseven">
                <section className="blockseven--inner">
                    <section className="blockseven__container">
                        <section className="blockseven__container__header">
                            <section className="blockseven__container__header__container">
                                <h1>User Reviews</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    A aliquid blanditiis consequuntur debitis deserunt eaque eligendi
                                </p>
                                <div className="blockseven__header--divider"></div>
                            </section>
                        </section>
                        <section className="blockseven__container__gallery">
                            <Slider
                                width={this.props.width}
                            />
                        </section>
                    </section>
                </section>
            </section>
        )
    }
}

export default BlockSeven;