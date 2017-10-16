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
    },
    componentDidUpdate: (props) => {
        $('.carousel').carousel({
            shift: props.width / 4
        });
    },
    componentWillUpdate: () => {
        $(".carousel").carousel("destroy");
    }
};

//Functional Stateless Component
const Slider = ({device_image, high_resolution_styles, low_resolution_styles, width}) => {
    const styles = (width > 1400) ? high_resolution_styles : low_resolution_styles;
    console.log(width);
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