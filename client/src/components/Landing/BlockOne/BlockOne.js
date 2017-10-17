import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Typist from 'react-typist';

//Block One component
class BlockOne extends Component {

    render() {

        return (
            <section style={{textAlign: 'center'}} className="block-one" id="home">
                <div className="block-one__jumbotron">
                    <div className="block-one__jumbotron__text">
                        <h1 className="block-one__jumbotron__text__header">
                            Email Service
                        </h1>
                        <section className="block-one__jumbotron__text__typed">
                            <Typist className="block-one__jumbotron__text__typed--typist">
                                This open source software will become the best friend at email marketing
                            </Typist>
                        </section>
                        <section className="block-one__jumbotron__text__btn">
                            {
                                (this.props.auth)
                                    ? <Link to="/surveys" className="btn waves-effect">Start Your Journey!</Link>
                                    : <a className="btn waves-effect" href="/auth/google">Login with Google</a>
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

//Redux store data
function mapStateToProps({auth}) {
    return {
        auth
    };
}

export default connect(mapStateToProps)(BlockOne);