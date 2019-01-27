import React, { Component } from 'react'
import O from '../assets/logos/navy-dooz-01.svg'
import whiteO from '../assets/logos/navy-dooz-01.png'

export default class AboutContainer extends Component {

    render() {
        return (
            <div className="site-container px2">
                <p className="ml4 outline-header">
                    Elevated closet staples inspired by the zodiac — the celestial twelve
                </p>
                <div className="m4 grid-container">
                    <div id="border"></div>
                    <div id="topLogo"><img src={whiteO} alt="logo" width="60"/></div>
                    <div id="topDot">&#8226;</div>
                    <div id="topBorder"></div>
                    <div id="img1"></div>
                    <div id="text1" className="flex flex-column">
                        <p class="bigger-body-text pt2">Astrology is assurance that the universe gets us, isn't that why we read our horoscopes?</p>
                        <br></br>
                        <p class="bigger-body-text">We are Dooz, a brand that embraces the dynamism of the zodiac. The 12 signs are embodied within all of us and we believe in owning that. Dooz celebrates the freedom of affirming who we are every time we get dressed.</p>
                    </div>
                    <div id="text2">
                        <div className="m0 text-container">
                            <p className="outline-header m1 ">Made in America</p>
                            <p class="body-text ">Supporting local (US) industry is a core belief of our brand. We partner with expert craftsmen and manufacturers in Los Angeles, California to execute our visions. Through thoughtful design decisions, perfect fit, and high-end finishes, we aim to make our products the best without compromising our values.</p>
                        </div>
                    </div>
                    <div id="img2"></div>
                    <div id="img3"></div>
                    <div id="text3">
                        <div className="m0 text-container">
                            <p className="m1 outline-header">Sourcing & Material</p>
                            <p class="body-text">Selecting materials is the first step in our creative process. We believe materials are as important as silhouettes; they inform design decisions and breathe life into each style. We work with specialized mills and tanneries, sourcing refined raw materials to ensure that each Dooz piece only gets better with time.</p>
                        </div>
                    </div>
                    <div id="bottom-border"><p className="dot">&#8226;</p></div>
                   
                   
                    <div id="text4">
                        <div className="m0 text-container">
                            <div className="flex items-center justify-end">
                                <p className="m0 outline-header">The Team</p>
                                <img src={O} alt="mini-logo" height="60" style={{marginRight: "-30px", paddingLeft: "20px"}}/>
                            </div>
                        </div>
                    </div>

                    <div id="team">
                        <p class="body-text">Rachel Borghard and Mia Kazovsky, a Taurus and Pisces respectively, met while studying Fashion Design at Pratt Institute where they bonded over interests and experiences outside of fashion. Influenced by global architecture and modern art, they shared similar design aesthetics: bold colors, clean lines, and effortless silhouettes. They often half-joked about starting a line together some day, and nearly 5 years after graduating their friendship turned into a creative partnership as the co-founders of Dooz.</p>
                    </div>
                    <div id="img4"></div>
                </div>
            </div>
        )
    }
}
