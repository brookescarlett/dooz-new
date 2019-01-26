import React, { Component } from 'react'
import Product from './Product'

export default class ShopContainer extends Component {

    renderProducts = () => {
        let arr = [
            ["No 26 Aries Bag", "aries/red", "../assets/imgs/1044052_e3_pp.jpg"], 
            ["No 27 Aries Bag", "aries/red", "../assets/imgs/1062006_fr_pp.jpg"], 
            ["No 28 Aries Bag", "aries/red", "../assets/imgs/8fd216bb993cf0ac43907cf26b2200c3.jpg"], 
        ]
        
        return arr.map(el => {
            return <Product 
                name={ el[0] }
                sign={ el[1] }
                imgUrl={ el[2] }
            />
        })
       
    }

    render() {
        return (
            <div className="site-container pl3">
                <div className="mx4 shop-header-container flex items-center">
                    <p className="outline-header">New Arrivals</p>
                    <div className="line"></div>
                </div>
                <div className="flex mx4">
                    { this.renderProducts() }
                </div>
            </div>
        )
    }
}
