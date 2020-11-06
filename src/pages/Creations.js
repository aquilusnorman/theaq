import React from 'react'
import './Creations.css'
import Creation from '../components/Creation'

import post1_img from '../img/creation-post1.jpg'

class Creations extends React.Component{
    render(){
        return(
            <div>
                <div className="creations-title">
                <div className="title-block">
                    <h1 className="Creation-Block">Creations</h1>
                </div>
                </div>
                <div className="creations-holder">
                    <Creation
                        img={post1_img}
                        title="ParkourRun - Windows Game"
                        text="ParkourRun is about a mummy monster who have to escape the levels in order to get back to home.
                        There are mainly four levels and a tutorial in this game. It seems quite easy but the actual gameplay isn't
                        because I've adapted the player controls to make this game challenging. This game is only for Windows.
                        Android platform is going to be released soon. You can download it from the link below. For the unity project, 
                        you can ask me personally."
                        link="https://drive.google.com/file/d/1GIqvQ7dxxwDDGp1Z09_R8gmXGJ1QPztp/view?usp=sharing"
                        linkButton="Get ParkourRun"
                        />
                </div>
            </div>
            
        )
    }
}

export default Creations