import React from 'react'
import { Col, Container, Row, Carousel, Button } from 'react-bootstrap'
import './About.css'
import skills_profile from '../img/skills-profile.jpg'
import skills_profile1 from '../img/skills-profile1.jpg'
import skills_profile2 from '../img/skills-profile2.jpg'
import facebook_logo from '../img/social-media-logo/facebook.png'
import youtube_logo from '../img/social-media-logo/youtube.png'
import twitter_logo from '../img/social-media-logo/twitter.png'
import linkedin_logo from '../img/social-media-logo/linkedin.png'

function Skills(){
    return(
        <div>
            <div className="title-block">
                <h1 className="About-Me">About Me</h1>
            </div>
            <div className="body-block">
                <Carousel>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block  img-fluid"
                            src={skills_profile}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block  img-fluid"
                            src={skills_profile1}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block  img-fluid"
                            src={skills_profile2}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                </Carousel>
                <div className="main-about">
                    <h2>HELLO, I'M AQUILUS NORMAN</h2>
                    <br/>
                    <p align="justify" className="main-about-body">&emsp;My real name is Zwe Yan Naing. You can call me "Zwe", "Aquilus" or whatever. I'm interested in game development.
                    I look forward to create indie games and later on I'll be building a game development team where I can work with same-minded people.
                    I'm currently studying under Youth International University Higher National Diploma (HND) Program. I'll be achieving HND certificate in
                    mid 2021 and in late 2022, I'll be achieving Bachelor Degree.<br/>
                    &emsp;I am a CNC Programmer, Game Tester and an IT Student. 
                    I’m currently working at KSP manufacturing in Yangon where I work as a CNC Programmer and I’m studying at Youth International University (YIU) since 2018. 
                    Next year, I’ll be achieving Higher National Diploma in Information Technology given by BTEC Pearson. 
                    I’m greatly interested in Game Development, Robotics and Mobile App Development. I’m not an expert in 
                    Photo and Video editing with Adobe software but I’ve gained an intermediate level that I can create minimalistic logos, 
                    mesmerizing background theme designs and video editing with Premiere Pro.
                    I usually test android games uploaded on Google Play Store. 
                    I review and give them feedbacks for those developers to detect 
                    the program leaks and unfortunate graphic placements and performance which will slightly affect user experience.<br/>
                    &emsp;I also would like to grow my youtube channel but for a while, 
                    I don’t have equipments for clear audio recording and an environment where I can record myself. 
                    But now, I’ll be writing my experiences, tips and tricks, trending things and other useful contents.</p>
                </div>
                <div className="connect-me">
                    <div className="social-media-icons">
                        <a href="">
                            <img className="img-fluid facebook" src={facebook_logo}></img>
                        </a>
                        <a href="">
                            <img className="img-fluid youtube" src={youtube_logo}></img>
                        </a>
                        <a href="">
                            <img className="img-fluid twitter" src={twitter_logo}></img>
                        </a>
                        <a href="">
                            <img className="img-fluid linkedin" src={linkedin_logo}></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;