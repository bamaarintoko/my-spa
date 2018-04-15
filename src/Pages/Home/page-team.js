import React, { Component } from 'react';
import { Col, Card, Row } from 'react-materialize'

class OurTeam extends Component {
    render() {
        return (
            <div style={{
                width: "100%",
                height: "100%",
                position: 'static',
                backgroundColor: '#FFFFFF'
            }}>
                <div className='parent' style={{backgroundColor: '#ffffff'
                }}>
                    <Row className='child'>
                        <Col m={3} s={12}>
                            
                        </Col>
                        <Col m={3} s={12}>
                            <Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
                                I am a very simple card.
                            </Card>
                        </Col>
                        <Col m={3} s={12}>
                            <Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
                                I am a very simple card.
                            </Card>
                        </Col>
                        <Col m={3} s={12}>
                        </Col>
                    </Row>
                </div>
                <div className='parent' style={{backgroundColor: '#ffffff'
                }}>
                    <Row className='child' style={{textAlign:'center'}}>
                    <h2>CREATED BY EXPERTS</h2>
We believe in a diverse range of talent and personality brings creative skills and ideas to the web.
                    </Row>
                </div>

            </div>
        );
    }
}

export default OurTeam;