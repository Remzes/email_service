import React, {Component} from 'react';
import {Icon} from 'react-fa';

//Block Three Component
class BlockThree extends Component {

    shouldComponentUpdate(nextProps){
        return this.props.width !== nextProps.width;
    }

    render() {

        //Image choice depends on the browser width
        let image = (this.props.width > 992) ? this.props.second_image : this.props.first_image;

        return (
            <section className="blockthree">
                <section className="blockthree--inner">
                    <section className="blockthree__container">
                        <section className="blockthree__container__text">
                            <Icon className="blockthree__icon" name="object-group" size="3x"/>
                            <h3>Cross-browser Application</h3>
                            <h2>It will work everywhere!</h2>
                            <div className="blockthree__container__divider"></div>
                            <section className="blockthree__container__image user_select" unselectable="on">
                                <img src={image} alt=""/>
                            </section>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Consequuntur, corporis culpa cum, cupiditate dignissimos
                            </p>
                        </section>
                    </section>
                </section>
            </section>
        )
    }
}

export default BlockThree;