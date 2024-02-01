import React from "react";
import './landing.css'
import group from "../Assets/group.png"
import people from "../Assets/people.png"
import bell from "../Assets/bell.png"
import rightArrow from "../Assets/rightArrow.png"
import imageright from "../Assets/imageright.png"
import Star1 from "../Assets/Star1.png"
import tweet from "../Assets/tweet.png"
import telegram from "../Assets/telegram.png"
import discord from "../Assets/discord.png"
import iconBox from "../Assets/iconBox.png"
import reload from "../Assets/reload.png"
import icon from "../Assets/icon.png"
import wallet from "../Assets/wallet.png"
import main from "../Assets/main.png"
const Landing = () => {
    return (
        <div>
            <div className="top-nav">
                <div className="left-nav">
                    <img className="profile-image" src={group} alt="Profile" />
                    <div >Launchpad</div>
                    <div className="last-div" >Nexus</div>
                </div>
                <div className="right-nav">
                    <span ><img className="icon" src={people} /></span>
                    <span ><img className="icon" src={bell} /></span>
                    <div className="navButton" ><span>Connet Wallet </span><img className="icon3" src={rightArrow} /></div>
                </div>
            </div>
            <div className="right-content">

                <div className="left-side">
                    <div>
                        <span className="mainText1">Ultimate,</span> <br />
                        <span className="mainText"> Crypto<img className="image-in-text" src={Star1} /></span><br />
                        <span className="mainText">Launchpad</span>
                    </div>
                    <div className="buttonsleft">
                        <div className="navButton" ><span>Get Started </span><img className="icon3" src={rightArrow} /></div>
                        <div className="navButton2" ><span>Know More </span></div>
                        <div className="navButton3" ><img className="icon3" src={telegram} />
                            <img className="icon3" src={tweet} />
                            <img className="icon3" src={discord} />
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <img className="image-on-right" src={imageright} alt="Image on Right" />
                </div>


            </div>
            <div className="your-parent-container">
                <div className="left-div">
                    <img className="iconBox" src={iconBox} alt="Image" />
                    <div className="textleft">
                        <p>Revolutionizing</p>
                        <p>Launchpad</p>
                    </div>
                    <div style={{ paddingLeft: "110px" }}>
                        <img src={rightArrow} alt="Second Image" className="second-image" /></div>
                </div>
                <div className="right-div">
                    <div className="vbnm">
                        <img src={reload} alt="Icon" />
                        <div className="IconsText">
                            <span>AVG ROI</span>
                            <span className="SecondCal">15X</span>
                        </div>
                    </div>
                    <div>
                        <img src={icon} alt="Icon" />
                        <div className="IconsText">
                            <span>Total Participants</span>
                            <span className="SecondCal">200,000+</span>
                        </div>
                    </div>
                    <div>
                        <img src={wallet} alt="Icon" />
                        <div className="IconsText">
                            <span>FTotal Assets Connected</span>
                            <span className="SecondCal">1 Billion</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imhContainer"><img className="imgSixze" src={main}></img></div>
        </div>

    );

}
export default Landing