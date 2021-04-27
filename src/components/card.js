import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
     Card, CardTitle, CardText, Row, Col
    
  } from 'reactstrap';
export default({repo}) => {
    const  {
         name,
         html_url,
         description,
         stargazers_count,
         open_issues_count,
         pushed_at,
         owner
     }= repo;
     const {login,avatar_url}=owner;
 
     const GetDateInterval = push_date=>{
       const dateDiff = new Date(Date.now() - Date.parse(push_date));
       return Math.ceil(dateDiff / (1000 * 60 * 60 * 24));
     }
     const Optmize = number =>{
         if(number>=1000)
         number=(number/1000).toFixed(1).toString()+"K";
         return number;
     }
    return (
      <>
      <Card body onClick={() => {
                                window.open(html_url);
                            }}  style={{ backgroundColor: '#fff', borderColor: '#333' , margin:'20px 0' }}>
        
        <Row>
            <Col style={{ maxWidth:"20%" }}>
                
            <img src={avatar_url} alt = 'avatar' style={{ maxWidth:"-webkit-fill-available" }} />
            </Col>
            <Col>
                  <CardTitle>{name}</CardTitle>
                  <CardText>{description}</CardText>
                  <Row>
              <Col style={{ maxWidth:"fit-content" }}>
                   <CardTitle>Stars: {Optmize(stargazers_count)} </CardTitle>
              </Col>
              <CardText>Issues: {Optmize(open_issues_count)} </CardText>
              <Col>
              <CardText>submitted by {login} {GetDateInterval(pushed_at)} days ago</CardText>
              </Col>
                </Row>
            </Col>      
            </Row>   
                </Card>
        </>
    );
};