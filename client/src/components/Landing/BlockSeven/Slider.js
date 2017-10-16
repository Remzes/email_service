import React from 'react';
import $ from 'jquery';
import Icon from 'react-fa';
import {lifecycle} from 'recompose';

const Slider = () => {
    return (
        <section className="blockseven__container__gallery__container">
            <div className="carousel carousel-slider">
                <a className="carousel-item">
                    <section className="carousel-item__container">
                        <section className="header">
                        <span className="stars">
                        <Icon
                            size="2x"
                            name="star"
                        /><Icon
                            size="2x"
                            name="star"
                        /><Icon
                            size="2x"
                            name="star"
                        /><Icon
                            size="2x"
                            name="star"
                        /><Icon
                            size="2x"
                            name="star"
                        />
                        </span>
                            <h2>Great Application!</h2>
                        </section>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            A, adipisci alias aliquid amet animi consequatur consequuntur
                            cum deserunt illo ips
                        </p>
                        <small className="copyright">-- Nikolay, Russian Federation</small>
                    </section>
                </a>
                <a className="carousel-item">
                    <section className="carousel-item__container">
                        <section className="header">
                        <span className="stars">
                        <Icon
                            size="2x"
                            name="star"
                        /><Icon
                            size="2x"
                            name="star"
                        /><Icon
                            size="2x"
                            name="star"
                        /><Icon
                            size="2x"
                            name="star"
                        /><Icon
                            size="2x"
                            name="star"
                        />
                        </span>
                            <h2>Great Application!</h2>
                        </section>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            A, adipisci alias aliquid amet animi consequatur consequuntur
                            cum deserunt illo ips
                        </p>
                        <small className="copyright">-- Nikolay, Russian Federation</small>
                    </section>
                </a>
                <a className="carousel-item">
                    <section className="carousel-item__container">
                        <section className="header">
                        <span className="stars">
                            <Icon
                                size="2x"
                                name="star"
                            /><Icon
                            size="2x"
                            name="star"
                        /><Icon
                            size="2x"
                            name="star"
                        /><Icon
                            size="2x"
                            name="star"
                        /><Icon
                            size="2x"
                            name="star"
                        />
                        </span>
                            <h2>Great Application!</h2>
                        </section>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            A, adipisci alias aliquid amet animi consequatur consequuntur
                            cum deserunt illo ips
                        </p>
                        <small className="copyright">-- Nikolay, Russian Federation</small>
                    </section>
                </a>
            </div>
        </section>
    );
};

export default lifecycle ({
    componentDidUpdate: (props) => {
        $('.blockseven .carousel').carousel({
            shift: 100,
            fullWidth: props.width < 993
        });
    },
    componentWillUpdate: () => {
        $(".blockseven .carousel").carousel("destroy");
    }
})(Slider);