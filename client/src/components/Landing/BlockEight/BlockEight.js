import React, {Component} from 'react';
import MapContainer from './GoogleMap/MapContainer';
import {findDOMNode} from 'react-dom';
import Icon from 'react-fa';

class BlockEight extends Component {

    componentDidUpdate(){
        const height = findDOMNode(this.refs.list).clientHeight;
        this.refs.list.style.top = `-${height / 1.8}px`;
        this.refs.container.style.height = `${height / 1.3}px`;
    }

    render() {
        return (
            <section className="blockeight" id="contact">
                <section className="blockeight--inner">
                    <section className="blockeight__container">
                        <MapContainer/>
                        <section className="blockeight__container__contact-info" ref="container">
                            <ul className="blockeight__container__contact-info__list" ref="list">
                                <li className="blockeight__container__contact-info__list--item">
                                        <Icon
                                            size="2x"
                                            name="rocket"
                                        />
                                        <p>
                                        937 Progress Ave <br/>
                                        Toronto, ON, M1G3T8
                                        </p>
                                </li>
                                <li className="blockeight__container__contact-info__list--item">
                                        <Icon
                                            size="2x"
                                            name="rocket"
                                        />
                                    <p>
                                        salnichenkoviktor@gmail.com <br/>
                                        viktor.salnichenko@hatchcanada.com
                                    </p>
                                </li>
                                <li className="blockeight__container__contact-info__list--item">
                                        <Icon
                                            size="2x"
                                            name="rocket"
                                        />
                                    <p>
                                        +1 (647) 877 2298 <br/>
                                        +7 (928) 957 8728
                                    </p>
                                </li>
                            </ul>
                        </section>
                    </section>
                </section>
            </section>
        )
    }
}

export default BlockEight;