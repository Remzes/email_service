import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Typist from 'react-typist';
import classNames from 'classnames';

//To prevent errors at IE
import "babel-polyfill";

class BlockOne extends Component {

    render() {

        let blockone_class_object = classNames({
            "block-one": true,
            "is-comp": this.props.width >= 993,
            "is-mobile": this.props.width < 993
        });

        return (
            <section style={{textAlign: 'center'}} className={blockone_class_object}>
                <div className="block-one__jumbotron">
                    <div className="block-one__jumbotron__text">
                        <h1 className="block-one__jumbotron__text__header">
                            Email Service
                        </h1>
                        <section className="block-one__jumbotron__text__typed">
                            <Typist
                                className="block-one__jumbotron__text__typed--typist"
                            >
                                This open source software will become the best friend at email marketing
                            </Typist>
                        </section>
                        <section className="block-one__jumbotron__text__btn">
                            {
                                (this.props.auth)
                                    ? <Link
                                    to="/surveys"
                                    className="btn orange waves-effect red-text lighten-4"
                                >
                                    Start Your Journey!
                                </Link>
                                    :
                                    <a className="btn orange waves-effect red-text lighten-4" href="/auth/google">Login
                                        with Google</a>
                            }
                        </section>
                    </div>
                </div>
                <section className="block-one__ipad">
                    <img src={this.props.image} alt=""/>
                </section>
            </section>
        );
    }
}

function mapStateToProps({auth}) {
    return {
        auth
    };
}

export default connect(mapStateToProps)(BlockOne);