import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <main style={{textAlign: 'center'}} className="landing">
                <div className="landing__jumbotron">
                    <div className="landing__jumbotron__text">
                        <h1 className="landing__jubmotron__text__header">
                            Email Service
                        </h1>
                        <p className="lan">Collect feedback from your users</p>
                        {
                            (this.props.auth)
                                ? <Link
                                   to="/surveys"
                                   onClick={() => {this.props.history.push("/surveys")}}
                                   className="btn"
                                   >
                                    Start Your Journey!
                                  </Link>
                                : <a className="btn" href="/auth/google">Login with Google</a>
                        }
                    </div>
                </div>
            </main>
        );
    }
};

function mapStateToProps({auth}) {
    return {
        auth
    };
};

export default withRouter(connect(mapStateToProps)(Landing));