import React, { Component, Fragment } from 'react'
import O from '../assets/logos/navy-dooz-01.svg'

export default class AboutContainer extends Component {

    render() {
        return (
            <div className="site-container pl3">
                <p className="ml4 outline-header">
                    Elevated closet staples inspired by the zodiac <br></br>— the celestial twelve
                </p>
                <div className="m4 grid-container">
                    <div id="border"></div>
                    <div id="img1"></div>
                    <div id="text1">
                        <p class="bigger-body-text">Astrology is assurance that the universe gets us, isn't that why we read our horoscopes?</p>
                        <br></br>
                        <p class="bigger-body-text">We are Dooz, a brand that embraces the dynamism of the zodiac. The 12 signs are embodied within all of us and we believe in owning that. Dooz celebrates the freedom of affirming who we are every time we get dressed.</p>
                    </div>
                    <div id="text2">
                        <div className="m0 text-container">
                            <p className="center outline-header m1 pr3 ">Made in America</p>
                            <p class="center body-text pr3 ">Supporting local (US) industry is a core belief of our brand. We partner with expert craftsmen and manufacturers in Los Angeles, California to execute our visions. Through thoughtful design decisions, perfect fit, and high-end finishes, we aim to make our products the best without compromising our values.</p>
                        </div>
                    </div>
                    <div id="img2"></div>
                    <div id="img3"></div>
                    <div id="text3">
                        <div className="m0 text-container">
                            <p className="pl4 m1 center outline-header">Sourcing & Material</p>
                            <p class="pl4 center body-text">Selecting materials is the first step in our creative process. We believe materials are as important as silhouettes; they inform design decisions and breathe life into each style. We work with specialized mills and tanneries, sourcing refined raw materials to ensure that each Dooz piece only gets better with time.</p>
                        </div>
                    </div>
                    <div id="bottom-border"></div>
                    <div id="text4">
                        <div className="m0 text-container">
                            <div className="flex items-center justify-center">
                                <p className="m0 center outline-header">The Team</p>
                                <img src={O} alt="mini-logo" height="48"/>
                            </div>
                            <p class="center body-text">Rachel Borghard and Mia Kazovsky, a Taurus and Pisces respectively, met while studying Fashion Design at Pratt Institute where they bonded over interests and experiences outside of fashion. Influenced by global architecture and modern art, they shared similar design aesthetics: bold colors, clean lines, and effortless silhouettes. They often half-joked about starting a line together some day, and nearly 5 years after graduating their friendship turned into a creative partnership as the co-founders of Dooz.</p>
                        </div>
                    </div>
                    <div id="img4"></div>
                </div>
            </div>
        )
    }
}
