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
import star2 from "../Assets/star2.png"
import nexun from "../Assets/nexun.png"
import hammer from "../Assets/hammer.png"
import textcard from "../Assets/textcard.png"
import textcard2 from "../Assets/textcard2.png"
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
            <div className="imhContainer">
                <img className="imgSize" src={main} alt="Main Image" />
                <div className="overlay">
                    <span style={{ color: "white" }}>Elevating Crypto</span>
                    <span ><img className="overlay-image" src={star2} alt="Overlay Image" /> <span className="linear">Innovations</span></span>

                </div>
            </div>
            <div className="centered-div">
                <span className="forBetter">Makes us <span style={{ color: "#0075FF" }}>Better</span></span>
                <br />
                <div className="betterPara">
                    <p>We provide straight forward tools that maximize</p>
                    <p>financial opportunities.
                    </p></div>
            </div>
            <div className="boxes">
                <div className="box-div" style={{ background: "#0075FF" }}>
                    <img className="iconBoxes" src={nexun} alt="Image" />
                    <div className="textleft">
                        <p>Native super-app + trading terminal supported on <br></br> desktop & mobile.</p>
                        {/* <p>Launchpad</p> */}
                    </div>

                </div>
                <div className="box-div">
                    <img className="iconBoxes" src={hammer} alt="Image" />
                    <div className="textleft">
                        <p>Native super-app + trading terminal supported on <br></br> desktop & mobile.</p>
                    </div>

                </div>
                <div className="box-div">
                    <img className="iconBoxes" src={hammer} alt="Image" />
                    <div className="textleft">
                        <p>Native super-app + trading terminal supported on <br></br> desktop & mobile.</p>
                    </div>

                </div>
            </div>
            <div className="centered-div">
                <span className="forBetter">Easy & <span style={{ color: "#0075FF" }}>Cutting Edge </span></span>
                <br />
                <div className="betterPara">
                    <p>We provide straight forward tools that maximize</p>
                    <p>financial opportunities.
                    </p></div>
            </div>
            <div className="next-div">
                <div className="left-side">
                    <img src={imageright} alt="Icon" className="icon-image" />
                    <div>
                        <h3>Your Heading</h3>
                        <p>First paragraph with text.</p>
                        <p>Second paragraph after some space.</p>
                        <ul className="key-list">
                            <li>Your first key point</li>
                            <li>Your second key point</li>
                            <li>Your third key point</li>
                            {/* Add more list items as needed */}
                        </ul>
                    </div>
                </div>
                <div className="right-sides">
                    <img className="image-on-rights" src={imageright} alt="Image on Right" />
                </div>
            </div>
            <div className="custom">
                <div className="custom-div">
                    <div className="left-siders">
                        <p>YLorem Ipsum is simply dummy text of the printing and typesetting industry. survived not only five centuries,
                            when an
                            <br></br>
                            <br></br>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            <br></br>   <br></br>
                            took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            when an unknown printer
                        </p>
                    </div>
                    <div className="right-siders">
                        <img src={textcard} alt="Image" className="bottom-image" />
                        <img src={textcard2} alt="Image" className="top-left-overlay" />
                    </div>

                </div>
                <div className="bottom-line">
                    <p>Our transactions algorithm functions on the following principle: <span className="lastSnap">If you don’t generate yield, the transaction doesn’t go through.</span></p>
                    
                </div>
            </div>
            <div className="footer">
                <div><img style={{ paddingLeft: "20px" }} className="profile-image" src={group} alt="Profile" /></div>
                <div style={{ padding: "11px" }} className="navButton3" ><img className="icon3" src={telegram} />
                    <img className="icon3" src={tweet} />
                    <img className="icon3" src={discord} />
                </div></div>

        </div>

    );

}
export default Landing