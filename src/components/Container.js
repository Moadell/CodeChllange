import React from 'react';
import Card from './card'
import styled from "styled-components"

export const Wraper=styled.div`
    margin: 0 auto;
    width:80%;
    min-height:100vh;
`; 

export default ({repositories}) => {
    
    return (
       <Wraper>
      
            {
             repositories.map((repo)=> <Card key={repo.id} repo={repo}/>)
            }
       </Wraper>
    );
} ;