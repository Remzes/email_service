import React, {Component} from 'react';
import image from '../../../assets/Images/123.png';
import $ from 'jquery';

//Library to add behavior to functional component
import functional from 'react-functional';

//Behavior
const options = {
    componentDidMount: (props) => {
        $('ul.tabs').tabs();
        $('.carousel').carousel({
            shift: props.width / 4
        });
        console.log("Slider is mounted");
    },
    componentDidUpdate: (props) => {
        $('.carousel').carousel({
            shift: props.width / 4
        });
        console.log("Slider is updated");
    },
    componentWillUpdate: () => {
        $(".carousel").carousel("destroy");
    }
};

//Functional Stateless Component
const Slider = ({styles, device_image}) => {
    return (

        <div className="blockfive__container__gallery__container">
            <img src={device_image} className="mac_monitor" style={styles.device} alt=""/>
            <div className="carousel" style={styles.carousel}>
                <a className="carousel-item" style={styles.carousel_item}>
                    <img src={image}/>
                </a>
                <a className="carousel-item" style={styles.carousel_item}>
                    <img src={image}/>
                </a>
                <a className="carousel-item" style={styles.carousel_item}>
                    <img src={image}/>
                </a>
                <a className="carousel-item" style={styles.carousel_item}>
                    <img src={image}/>
                </a>
                <a className="carousel-item" style={styles.carousel_item}>
                    <img src={image}/>
                </a>
            </div>
        </div>
    );
};

export default functional(Slider, options);