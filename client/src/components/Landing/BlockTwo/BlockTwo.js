import React, {Component} from 'react';
import {Icon} from 'react-fa';

//Block Two
const BlockTwo = () => {

    return (
        <section className="blocktwo" id="features">
            <section className="blocktwo--inner">
                <section className="blocktwo__header">
                    <section className="blocktwo__header__container center-align">
                        <h1>Top Features</h1>
                        <p>Our service has many different features
                            which will make you happy. With our platform,
                            your business will grow and you will increase
                            your income in times.</p>
                        <div className="blocktwo__header--divider"></div>
                    </section>
                </section>
                <section className="blocktwo__features">
                    <section className="blocktwo__features__container">
                        <section className="blocktwo__features__container__feature center-align">
                            <Icon className="blocktwo__icon" name="rocket" size="3x"/>
                            <h2>'Furious' Send</h2>
                            <p>
                                No complicity!
                                You just need click
                                one button to send the survey
                                to the list of recipients
                            </p>
                        </section>
                        <section className="blocktwo__features__container__feature center-align">
                            <Icon className="blocktwo__icon" name="envelope" size="3x"/>
                            <h2>Mail Template</h2>
                            <p>
                                Our service provides a fabulous
                                email template to be send. You will
                                love it from the first glance
                            </p>
                        </section>
                        <section className="blocktwo__features__container__feature center-align">
                            <Icon className="blocktwo__icon" name="users" size="3x"/>
                            <h2>User Friendly</h2>
                            <p>
                                Your users will feel comfortable
                                answering the questions
                                and send feedback
                            </p>
                        </section>
                        <section className="blocktwo__features__container__feature center-align">
                            <Icon
                                className="blocktwo__icon"
                                name="users"
                                size="3x"
                            />
                            <h2>User Friendly</h2>
                            <p>
                                Your users will feel comfortable
                                answering the questions
                                and send feedback
                            </p>
                        </section>
                        <section className="blocktwo__features__container__feature center-align">
                            <Icon className="blocktwo__icon" name="users" size="3x"/>
                            <h2>User Friendly</h2>
                            <p>
                                Your users will feel comfortable
                                answering the questions
                                and send feedback
                            </p>
                        </section>
                        <section className="blocktwo__features__container__feature center-align">
                            <Icon className="blocktwo__icon" name="users" size="3x"/>
                            <h2>User Friendly</h2>
                            <p>
                                Your users will feel comfortable
                                answering the questions
                                and send feedback
                            </p>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default BlockTwo;