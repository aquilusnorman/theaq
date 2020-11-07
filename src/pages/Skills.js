import React from 'react'
import './Skills.css'
import ReactMarkdown from 'react-markdown'
import skillsMd from './Skills.md'
import {Card, Button, CardDeck, Container, Row, Col} from 'react-bootstrap'

class Skills extends React.Component{

    constructor(props){
        super(props);

        this.state = {markdown: null}
    }

    componentWillMount() {
        fetch(skillsMd).then((response) => response.text()).then((text) => {
          this.setState({ markdown: text })
        })
      }

    render(){

        return(
            <div>
                <div className="title-block">
                    <h1 className="Skills-Block">Skills</h1>
                </div>
                <div className="skills-content shadow">
                    <ReactMarkdown source={this.state.markdown} allowDangerousHtml></ReactMarkdown>
                
                    <Container className="project-case" fluid={true}>
                        <Row>
                            <Card className="shadow tool-card" style={{ width: '10rem' }}>
                                <Card.Img className="tool-logo" variant="top" src="https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg" />
                                <Card.Body>
                                    <Card.Text>
                                        Finished : 1<br/>
                                        Pending : 2<br/>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="shadow tool-card" style={{ width: '10rem' }}>
                                <Card.Img className="tool-logo" variant="top" src="https://devicons.github.io/devicon/devicon.git/icons/python/python-original.svg" />
                                <Card.Body>
                                    <Card.Text>
                                        Finished : 1<br/>
                                        Pending : 1<br/>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="shadow tool-card" style={{ width: '10rem' }}>
                                <Card.Img className="tool-logo" variant="top" src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" />
                                <Card.Body>
                                    <Card.Text>
                                        Finished : 1<br/>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="shadow tool-card" style={{ width: '10rem' }}>
                                <Card.Img className="tool-logo" variant="top" src="https://devicons.github.io/devicon/devicon.git/icons/php/php-original.svg" />
                                <Card.Body>
                                    <Card.Text>
                                        Finished : 1<br/>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                        
                        <Row>
                            <Card className="shadow tool-card" style={{ width: '10rem' }}>
                                <Card.Img className="tool-logo" variant="top" src="https://devicons.github.io/devicon/devicon.git/icons/react/react-original-wordmark.svg" />
                                <Card.Body>
                                    <Card.Text>
                                        Finished : 1<br/>
                                        Pending : 1<br/>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className="shadow tool-card" style={{ width: '10rem' }}>
                                <Card.Img className="tool-logo" variant="top" src="https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg" />
                                <Card.Body>
                                    <Card.Text>
                                        Finished : 1<br/>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                        
                    </Container>
                        
                </div>
            </div>
        )
    }
}

export default Skills