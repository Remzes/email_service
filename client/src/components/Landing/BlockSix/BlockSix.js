import React, {Component} from 'react';
import {Icon} from 'react-fa';

//Block Six component
const BlockSix = ({image}) => {
    return (
        <section className="blocksix">
            <section className="blocksix--inner">
                <section className="blocksix__container">
                    <section className="blocksix__container__column column--left">
                        <ul className="blocksix__container__column__list list--left">
                            <li className="blocksix__container__column__list__item">
                                <section className="blocksix__container__column__list__item__text">
                                    <Icon
                                        className="blocksix__icon blocksix__icon--left"
                                        size="3x"
                                        name="rocket"
                                    />
                                    <h3>Feature 1</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit.
                                    </p>
                                </section>
                            </li>
                            <li className="blocksix__container__column__list__item">
                                <section className="blocksix__container__column__list__item__text">
                                    <Icon
                                        className="blocksix__icon blocksix__icon--left"
                                        size="3x"
                                        name="rocket"
                                    />
                                    <h3>Feature 2</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit.
                                    </p>
                                </section>
                            </li>
                            <li className="blocksix__container__column__list__item">
                                <section className="blocksix__container__column__list__item__text">
                                    <Icon
                                        className="blocksix__icon blocksix__icon--left"
                                        size="3x"
                                        name="rocket"
                                    />
                                    <h3>Feature 3</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit.
                                    </p>
                                </section>
                            </li>
                        </ul>
                    </section>
                    <section className="blocksix__container__column column--center">
                        <img src={image} alt="Iphone Eight"/>
                    </section>
                    <section className="blocksix__container__column">
                        <ul className="blocksix__container__column__list list--right">
                            <li className="blocksix__container__column__list__item">
                                <section className="blocksix__container__column__list__item__text">
                                    <Icon
                                        className="blocksix__icon blocksix__icon--right"
                                        size="3x"
                                        name="rocket"
                                    />
                                    <h3>Feature 4</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit.
                                    </p>
                                </section>
                            </li>
                            <li className="blocksix__container__column__list__item">
                                <section className="blocksix__container__column__list__item__text">
                                    <Icon
                                        className="blocksix__icon blocksix__icon--right"
                                        size="3x"
                                        name="rocket"
                                    />
                                    <h3>Feature 5</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit.
                                    </p>
                                </section>
                            </li>
                            <li className="blocksix__container__column__list__item">
                                <section className="blocksix__container__column__list__item__text">
                                    <Icon
                                        className="blocksix__icon blocksix__icon--right"
                                        size="3x"
                                        name="rocket"
                                    />
                                    <h3>Feature 6</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit.
                                    </p>
                                </section>
                            </li>
                        </ul>
                    </section>
                </section>
            </section>
        </section>
    )
};

export default BlockSix