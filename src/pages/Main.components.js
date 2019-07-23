import React from 'react';
import styled from 'styled-components'; // import the script
import uniWall from '../assests/UniWall.jpg'
var randomColor = require('randomcolor');

const color1 = randomColor();
const color2 = randomColor();

//xs : 320px
//sm : 760px
//md: 992px
//lg: 1200px

export const AboutMe = styled.div`
   position: relative;
   font-size: 40px;
   text-align: right;
   width: auto;
    transition: transform .5s;
    &:hover {
  transform: scale(1.1);
    }
  @media only screen and (max-width: 992px) {
        display: none;
  }
`;

export const Container = styled.div`
    display: inline-block;
     padding: 20px;

`;

export const AboutMeBody = styled.div`
    padding-top:200px
    padding: 80px;
    background-color: inherit;
    text-align: center;
    font-size: 30px;
    line-height: 2;
      @media only screen and (max-width: 760px) {
       font-size: 20px; padding: 20px;
       background-color: transparent;
        }
     

    `;

export const AboutContainer = styled.div`
    display: inline-block;
     padding: 100px;
     background: rgba(0, 0, 0, 0.6);
     opacity: 0;
     &:hover  {
      opacity: 1;
      transition: opacity .5s ease-in;
       transition: opacity 2s ease-out;
      }
      @media only screen and (max-width: 760px) {
        opacity: 1;
        padding: 0px;
        display: block;
        }
     
      
`;

export const WorkContainer = styled(AboutContainer)`
    display: inline-block;
     padding: 100px;
     background: rgba(0, 0, 0, 0.6);
`;



export const ColorContainer = styled.button`
    position: relative;   
    padding: 10px;
    font-size: 20px;
    background-color: inherit;
    color: white;
    transition: transform .5s;
    border-radius: 15px;
    &:hover {
  transform: scale(1.1);
  }
`;

export const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    animation-duration: 2s;
    animation-name: slideUp;
    padding: 50px;
  @keyframes slideUp{
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }

 }
`;

export const MainHeader = styled.div`
   position: relative;
   font-size: 80px;
   text-align: center;
   margin-top: 50px;
   margin-bottom: 50px;
   
  animation-duration: 3s;
    animation-name: slideDown;
  
@keyframes slideDown{
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
 }
   @media only screen and (max-width: 992px) {
        font-size: 40px;
  }
`;


export const MainDescription = styled.div`
   position: relative;
   font-size: 40px;
   text-align: center;
  animation-duration: 3s;
    animation-name: slideleft;
  
      @keyframes slideleft {
      from {
        width: 200%; 
      }
      to {
        width: 100%;
      }
    }
 
       @media only screen and (max-width: 992px) {
        font-size: 25px;
  }
`;

export const Body = styled.div`
   background-color: ${(props) => props.isClicked ? randomColor() : randomColor()} !important
    scroll-behavior: smooth;
  
   font-family: Helvetica;
   color: white;
   scroll-behavior: smooth !important
   background-size:100% 100%;
`;

export const Wrapper = styled.html`
 overflow-x: hidden;
`;

export const AboutHeader = styled.div`
     font-size: 50px;
      background-color: inherit;
      padding-top: 200px;
      font-weight: 900;
      text-align: center;
       @media only screen and (max-width: 760px) {
       background-color: transparent;
       }
`;

export const WhatIUse = styled(AboutHeader)`
      background-color: transparent; !important
`
export const WorkHeader = styled(AboutHeader)`
   padding-left: 0px;
`;

export const BigOverlay = styled.div`
     background: rgba(0, 0, 0, 0.6);
     border-radius: 100px;
     opacity: 0;
     transition: opacity 1s ease-in-out;
     padding: 20px;
        @media only screen and (max-width: 760px) {
        opacity: 1;
        border-radius: 0px;
        }
    \`;
`;


export const EdHeader = styled(AboutHeader)`
    padding-top: 0px;
    text-align: center;
    padding-top: 90px;
    margin-bottom: 0px;
    padding-left: 0px;
    background: none;
     
`;

export const  Education = styled.div`
    padding: 250px
    background-image: url(${uniWall});
    no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  animation-name: slideleft;
       &:hover ${BigOverlay} {
      opacity: 1;
    }
      @media only screen and (max-width: 760px) {
        opacity: 1;
        padding: 0px;
        display: block;
        }
    \`;

`;
export const SocialBar = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    animation-duration: 4s;
    animation-name: slideover;
      @keyframes slideover {
      from {
        width: 0%; 
      }
      to {
        width: 100%;
      }
     }
    `;

export const JobDesc = styled.div`
    padding-top:200px
    padding: 80px;
    background-color: inherit;
    text-align: center;
    font-size: 30px;
    line-height: 2;
    padding-bottom: 200px;
    
   opacity: 0;
   transition: opacity .5s ease-in-out;
      @media only screen and (max-width: 760px) {
        opacity: 1;
        font-size: 20px;
        text-align: left;
        padding: 0px;
        margin-bottom: 100px; !important
     }
    `;

export const EdBody = styled(AboutMeBody)`
    padding-bottom: 0px;
    background: none;
`;

export const CollegeIcon = styled.img`
  display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 100px;
    max-width:100%; 
    height: 300px; 
     @media only screen and (max-width: 760px) {
     height: 200px;
     }
`;


export const CodeNinjaIcon = styled.img`
  display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 100px;
    margin-top: 40px;
    margin-bottom: 60px;
    max-width:100%; 
    height:auto; 
    
`


export const GivegameIcon = styled.img`
  display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 100px;
    margin-top: 40px;
    margin-bottom: 60px;
    height: 300px;
     @media only screen and (max-width: 760px) {
     height: 150px;
     
   
`

export const SocialIcon = styled.img`
    height: 70px;
    width: 70px;
    padding-top: 40px;
    margin: 20px;
    margin-bottom: 200px;
    transition: transform .5s;
    &:hover {
    -webkit-transform: translateY(-25px);
    transform: translateY(-25px)  scale(1.3);
    }
          @media only screen and (max-width: 760px) {
             height: 40px;
             width: 40px;
             }

`;

export const GithubIcon = styled.img`
    height: 60px;
    width: 60px;
    padding-top: 40px;
    margin: 20px;
    animation-duration: 3s;
     transition: transform .5s;
      &:hover {
    -webkit-transform: translateY(-25px);
    transform: translateY(-25px)  scale(1.3);
    }
    @media only screen and (max-width: 760px) {
             height: 30px;
             width: 30px;
             }
`;

export const GradIcon = styled.img`
       display: block;
       margin-left: auto;
       margin-right: auto;
`


export const Headshot = styled.img`
    border-radius: 100px;
    height: 150px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 150px;
    animation-duration: 3s;
    animation-name: fade;
      @keyframes fade{
  from {
    
    opacity: 0;
  }
  to {
    
    opacity: 1;
  }
    `;

export const WorkExp = styled.div``;

export const JobContainer = styled.div`
  
      &:hover ${JobDesc} {
      opacity: 1;
    `;