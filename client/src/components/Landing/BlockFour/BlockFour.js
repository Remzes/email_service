import React, {Component} from 'react';
import {Icon} from 'react-fa';

//Block Four component
class BlockFour extends Component {
    render() {

        //Image choice depends on the browser width
        let image = (this.props.width > 992) ? this.props.second_image : this.props.first_image;

        return (
            <section className="blockfour">
                <section className="blockfour--inner">
                    <section className="blockfour__container">
                        <section className="blockfour__container__text">
                            <Icon
                                className="blockfour__icon"
                                name="object-group"
                                size="3x"
                            />
                            <h3>Cross-browser Application</h3>
                            <h2>It will work everywhere!</h2>
                            <div className="blockfour__container__divider"></div>
                            <section className="blockfour__container__image user_select" unselectable="on">
                                <img src={image} alt=""/>
                            </section>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Consequuntur, corporis culpa cum, cupiditate dignissimos
                            </p>
                        </section>
                    </section>
                </section>
            </section>
        )
    }
}

export default BlockFour;