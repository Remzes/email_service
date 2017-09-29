import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'react-compose';

class Dashboard extends Component {
    render(){
        let fullName;
       (this.props.auth) ? {fullName} = this.props.auth : "";

        return (
            <main>
                <div>
                    <h4>Welcome to Email Service application, {fullName}</h4>
                    <h6>This is a great platform to send small surveys to any emails which you like</h6>
                </div>
                <div className="button_div">
                    <Link to="/surveys/new"
                          onClick={() => {this.props.history.push('/')}}
                          className="btn btn-large waves-effect red"
                          >
                        <i className="material-icons left">add</i>
                        Add New Survey
                    </Link>
                </div>
            </main>
        )
    }
};

const mapStateToProps = ({auth}) => {
    return {
        auth
    }
};

//envelop the whole component to prevent updates from being blocked by shouldComponentUpdate
export default withRouter(connect(mapStateToProps)(Dashboard));


// export default compose (
//     withRouter,
//     connect(mapStateToProps)
// )(Dashboard);
