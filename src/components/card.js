import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
     Card, CardTitle, CardText, Row, Col,Container
    
  } from 'reactstrap';

class Carrd extends Component{
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          username:"",
          skills:"",
          courseName: "",
        };
      }
      render(){
        return (
          <Container>
        <Card body  style={{ backgroundColor: '#fff', borderColor: '#333' , margin:'20px 0' }}>
        <Row>
            <Col style={{ maxWidth:"20%" }}>
                
            <img src="https://avatars.githubusercontent.com/u/37313564?v=4" alt = 'avatar' style={{ maxWidth:"-webkit-fill-available" }} />
            </Col>
            <Col>
                  <CardTitle>Spiral-Up-Cut-Router-Bit </CardTitle>
                  <CardText>1/4&quot; Spiral Up Cut Bits </CardText>
                  <Row>
              <Col style={{ maxWidth:"fit-content" }}>
                   <CardTitle>426 Stars </CardTitle>
              </Col>
              <CardText>0 Issues </CardText>
              <Col>
              <CardText>Created @ 2019-03-06 by MaslowCommunityGarden </CardText>
              </Col>
                </Row>
            </Col>      
            </Row>
                  
                </Card>
                <Card body  style={{ backgroundColor: '#fff', borderColor: '#333' , margin:'20px 0' }}>
        <Row>
            <Col style={{ maxWidth:"20%" }}>
                
            <img src="https://avatars.githubusercontent.com/u/37313564?v=4" alt = 'avatar' style={{ maxWidth:"-webkit-fill-available" }} />
            </Col>
            <Col>
                  <CardTitle>Spiral-Up-Cut-Router-Bit </CardTitle>
                  <CardText>1/4&quot; Spiral Up Cut Bits </CardText>
                  <Row>
              <Col style={{ maxWidth:"fit-content" }}>
                   <CardTitle>426 Stars </CardTitle>
              </Col>
              <CardText>0 Issues </CardText>
              <Col>
              <CardText>Created @ 2019-03-06 by MaslowCommunityGarden </CardText>
              </Col>
                </Row>
            </Col>      
            </Row>
                  
                </Card>
         </Container>



        )}
}
export default Carrd;