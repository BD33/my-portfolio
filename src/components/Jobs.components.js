import styled from "styled-components";

export const Icon = styled.img`
  display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 100px;
    margin-top: 40px;
    margin-bottom: 60px;
    max-width:50%; 
    height: 200px; 
    @media only screen and (max-width: 760px) {
        height: 150px;
    }
`

export const JobDesc = styled.div`
    padding-top:200px
    padding: 80px;
    background-color: inherit;
    text-align: center;
    font-size: 30px;
    line-height: 2;
    padding-bottom: 200px;
    
   opacity: 1;
      @media only screen and (max-width: 760px) {
        font-size: 20px;
        text-align: left;
        padding: 15px;
        margin-bottom: 100px; !important
     }
    `;


export const JobContainer = styled.div`
  
  
    `;