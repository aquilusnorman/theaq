import React from 'react'
import { Button } from 'react-bootstrap'
import './Creation.css'

function Creation(props){
    return(
        <div className="creation-box shadow">
            <img src={props.img} className="img-fluid"></img>
            <div className="creation-content">
                <h2 className="creation-title">
                    {props.title}
                </h2>
                <p align="justify">
                    {props.text}
                </p>
                <Button className="creation-btn" href={props.link} variant="dark">
                    {props.linkButton}
                </Button>
            </div>
        </div>
    )
}

export default Creation