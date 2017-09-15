import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <main>
            <div>
                <h4>Welcome to Email Service application</h4>
                <h6>This is a great platform to send small surveys to any emails which you like</h6>
            </div>
            <div className="button_div">
                <Link to="/surveys/new" className="btn btn-large waves-effect red">
                    <i className="material-icons left">add</i>
                    Add New Survey
                </Link>
            </div>
        </main>
    )
};

export default Dashboard;