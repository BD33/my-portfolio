//Libraries
import styled from 'styled-components'; // import the script
import '../index.css';
//Images
import uniWall from '../assests/UniWall.jpg'
import sanfran from '../assests/San-Francisco-4K.jpg'
//xs : 320px
//sm : 760px
//md: 992px
//lg: 1200px

export const AboutMe = styled.div`
   position: relative;
   font-size: 40px;
   text-align: left;
   width: 200px;
   transition: transform .5s;
    &:hover {
         transform: scale(1.2);
         }
         
    @media only screen and (max-width: 992px) {
        display: none;
     }
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

export const GeneralBody = styled.div`
    padding-top:200px
    padding: 80px;
    background-color: inherit;
    text-align: center;
    font-size: 30px;
    line-height: 2;
      @media only screen and (max-width: 1260px) {
       font-size: 20px; padding: 20px;
       background-color: transparent;
        }
            @media only screen and (max-width: 414px) {
       font-size: 20px; padding: 5px;
       width: 400px;
       background-color: transparent;
        }
        @media only screen and (max-width: 375px) {
       font-size: 15px;
       width: 355px;
       }
    `;

export const AboutContainer = styled.div`
    display: inline-block;
     padding: 100px;
     background: rgba(0, 0, 0, 0.6);
     opacity: 1;
     &:hover  {
      opacity: 1;
      transition: opacity .5s ease-in;
       transition: opacity 2s ease-out;
      }
      @media only screen and (max-width: 1720px) {
       
        padding: 0px;
        display: block;
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
  @media only screen and (max-width: 414px) {
       font-size: 20px;
       width: 400px;
       background-color: transparent;
       }
  @media only screen and (max-width: 360px) {
       font-size: 20px;
       width: 350px;
       background-color: transparent;
       }
`;

export const Body = styled.div`
   background-color: #13110f;
    scroll-behavior: smooth;
   color: white;
   scroll-behavior: smooth !important
   background-size:100% 100%;
    overflow-x: hidden;
    font-family: myriad-pro, sans-serif;
    font-weight: 200;
    font-style: normal;
`;

export const TopContainer = styled.div`
    background-image: url(${sanfran});
    background-repeat: no-repeat;
`;
export const GeneralHeader = styled.div`
     font-size: 50px;
      background-color: inherit;
      padding-top: 50px;
      padding-bottom: 100px;
      font-weight: 900;
      text-align: center;
       @media only screen and (max-width: 760px) {
       background-color: transparent;
       }
`;

export const WhatIUse = styled(GeneralHeader)`
      background-color: transparent; !important
`;

export const Lang = styled.div `
font-size: 20px;
background-color: inherit;
padding-top: 50px;
padding-bottom: 100px;
font-weight: 900;
text-align: center;
 @media only screen and (max-width: 760px) {
 background-color: transparent;
 }
`;

export const BigOverlay = styled.div`
     background: rgba(0, 0, 0, 0.6);
     border-radius: 100px;
     opacity: 1;
     transition: opacity 1s ease-in-out;
     padding: 20px;
        @media only screen and (max-width: 1260px) {

        border-radius: 0px;
        }
          @media only screen and (max-width: 360px) {

        padding: 5px;
        }
        
    \`;
`;

export const TopOverlay = styled.div`
    display: inline-block;
    background: rgba(0,0,0,0.5);
`;

export const EdHeader = styled(GeneralHeader)`
    padding-top: 0px;
    text-align: center;
    padding-top: 90px;
    margin-bottom: 0px;
    padding-left: 0px;
    background: none;    
`;

export const EdsubHead = styled(EdHeader)`
        padding-top:10px;
        padding-bottom: 10px;

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
      @media only screen and (max-width: 1260px) {
      
        padding: 0px;
        display: block;
        }
         @media only screen and (max-width: 760px) {
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
         @media only screen and (max-width: 360px) {
           width:100%
          display: block;
          margin-left: auto;
          margin-right: auto;
         
          }
    `;

export const DisplayBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 300px;
`;


export const DublyDisplayBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 300px;
    @media only screen and (max-width: 760px) {
      margin-left: auto;
  margin-right: auto;
  display: block;
      }
`;

export const EdBody = styled(GeneralBody)`
    padding-bottom: 0px;
    background: none;
    margin-bottom: 60px;
   @media only screen and (max-width: 360px) {
    width: 320px;
    }
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


export const SocialIcon = styled.img`
    height: 70px;
    width: 70px;
    margin-top: 40px;
    margin-bottom: 200px;
    margin-right: 40px;
    transition: transform .5s;
    background-color: rgba(255, 255, 255, 0.66);
    border-radius: 10px;
    &:hover {
    -webkit-transform: translateY(-25px);
    transform: translateY(-25px)  scale(1.3);
    }
          @media only screen and (max-width: 760px) {
             height: 40px;
             width: 40px;
             }
`;

export const ToolIcon = styled(SocialIcon)`
    background-color: transparent;
    @media only screen and (max-width: 400px) {
      height: 20px;
      width: 20px;
      }
`;
export const ArrowIcon = styled.img`
    height: 300px;
    opacity: 1;
    animation: bounce 2s infinite;dub
    @keyframes bounce {
       0%, 20%, 50%, 80%, 100% {
                  transform: translateY(0);
             }
         40% {
               transform: translateY(-30px);
            }
         60% {
    transform: translateY(-15px);
        }
    
  
    @media only screen and (max-width: 760px) {
      height: 150px;
      }
`;

export const MacScreens = styled.img`
         @media only screen and (max-width: 1660px) {
         height: 200px;
         }
         @media only screen and (max-width: 1460px) {
         height: 400px;
         }
         @media only screen and (max-width: 1060px) {
         height: 300px;
         }
          @media only screen and (max-width: 760px) {
         height: 150px;
         }
`;
export const PhoneScreens = styled.img`
    height: 600px;
     @media only screen and (max-width: 1460px) {
    height: 350px;
    }
         @media only screen and (max-width: 760px) {
    height: 150px;
    }
`;

export const DublyScreens = styled.img`
    height: 800px;
     @media only screen and (max-width: 1460px) {
    height: 600px;
    }
         @media only screen and (max-width: 760px) {
    height: 350px;
    }
`;

export const GithubIcon = styled.img`
    height: 60px;
    width: 60px;
    margin-top: 40px;
    padding: 5px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.66);
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
`;

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

