import React, { Component, Fragment } from 'react'

import ProductImg from '../assets/imgs/8fd216bb993cf0ac43907cf26b2200c3.jpg' 

import Aries from '../assets/svgs/aries_FILLED.png'

export default class Product extends Component {

    state = {
        hovered: false
    }

    render() {
        return (
            <div>
                <img src={ProductImg} alt="product" width="90%"/>
                <div 
                    className="flex items-center justify-center"
                    onMouseEnter={ () => this.setState({ hovered: !this.state.hovered })}
                    >
                    { this.state.hovered ? 
                        <img src={Aries} alt="sign" className="m0 center" width="60" /> : (
                        <div>
                            <p className="center mr2 product-text">{this.props.name}</p>
                            <p className="center mr2 product-sub-text">{this.props.sign}</p> 
                        </div>
                    )}

                </div>
            </div>
        )
    }
}
