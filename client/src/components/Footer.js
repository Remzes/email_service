import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer blue-grey lighten-2">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Email Service Think About You!</h5>
                            <p className="grey-text text-lighten-4">You can contact us 24/7 and we will help you with
                                problems and issues.</p>
                            <div className="row col s8">
                                <div>
                                    <label className="indigo-text darken-4">Email</label>
                                    <input type="text" id="footer_email" name="footer_email"/>
                                    <button className="btn">Send Email</button>
                                </div>
                            </div>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Useful links</h5>
                            <ul>
                                <li><a className="indigo-text text-darken-4"
                                       href="https://github.com/Remzes/email_service">
                                    <i className="small material-icons left indigo-text lighten-2">build</i>
                                    GitHub Repo
                                </a></li>
                                <li><a className="indigo-text text-darken-4" href="https://sendgrid.com/">
                                    <i className="small material-icons left indigo-text lighten-2">blur_on</i>
                                    SendGrip
                                </a></li>
                                <li><a className="indigo-text text-darken-4" href="https://stripe.com/ca">
                                    <i className="small material-icons left indigo-text lighten-2">cast_connected</i>
                                    Stripe
                                </a></li>
                                <li><a className="indigo-text text-darken-4"
                                       href="http://redux.js.org/docs/introduction/">
                                    <i className="small material-icons left indigo-text lighten-2">collections</i>
                                    Redux
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        Viktor Salnichenko @ 2017
                        <span className="grey-text text-lighten-4 right" href="#!">Email Service</span>
                    </div>
                </div>
            </footer>
        )
    }
}
;

export default Footer;