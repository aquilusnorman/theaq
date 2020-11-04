import React from 'react'
import home_bg from '../img/home-bg.jpg'
import './Home.css'
import {Jumbotron, Button, Card, CardDeck} from 'react-bootstrap';
import home_blog from '../img/home-blog.jpg';
import home_skills from '../img/home-skills.jpg';
import home_creations from '../img/home-creations.jpg';
import {Link} from 'react-router-dom'

function Home(){
    return(
            <div className="home-container">
            <div className="bg-img-holder">
                <img className="home-bg" src={home_bg} alt="home-bg"></img>
                <p className="home-bg-text">
                    WELCOME TO <br/><span className="brand-name">TheAQ</span>
                </p>
            </div>
            <Jumbotron>
                <h1>Hello, I'm Aquilus Norman</h1>
                <p align="justify">
                    My real name is Zwe Yan Naing. You can call me "Zwe", "Aquilus" or whatever. I'm interested in game development.
                    I look forward to create indie games and later on I'll be building a game development team where I can work with same-minded people.
                    I'm currently studying under Youth International University Higher National Diploma (HND) Program. I'll be achieving HND certificate in
                    mid 2021 and in late 2022, I'll be achieving Bachelor Degree.
                </p>
                <p>
                    <Link to="/about">
                        <Button variant="dark">Know me more</Button>
                    </Link>
                </p>
            </Jumbotron>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={home_blog} />
                    <Card.Body>
                        <Card.Title>Blog</Card.Title>
                        <Card.Text>
                            Here you can see my blog and my articles on technology and my experiences in self-development, coding and many others.
                        </Card.Text>
                        <Link to="/blog">
                            <Button variant="dark">Go To Blog</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={home_skills} />
                    <Card.Body>
                        <Card.Title>Skills</Card.Title>
                        <Card.Text>
                            Here you can see my skills. There's not much about it but it's like my portfolio.
                        </Card.Text>
                        <Link to="/skills">
                            <Button variant="dark">Go To Skills</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={home_creations} />
                    <Card.Body>
                        <Card.Title>Creations</Card.Title>
                        <Card.Text>
                            Right here you can see what I've done through my student life and yet. It includes the games, programs and others, I've created.
                        </Card.Text>
                        <Link to="/creations">
                            <Button variant="dark">Go To Creations</Button>                        
                        </Link>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    )
}

export default Home