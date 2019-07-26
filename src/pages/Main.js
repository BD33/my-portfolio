//Libraries
import React, {Component} from 'react'; // import the script

//Style Components
import {
    MainHeader,
    Body,
    TopBar,
    AboutMe,
    ColorContainer,
    MainDescription,
    SocialBar,
    SocialIcon,
    GithubIcon,
    AboutMeBody,
    Wrapper,
    AboutHeader,
    Headshot,
    Education,
    EdHeader,
    EdBody,
    CollegeIcon,
    Container,
    BigOverlay,
    GradIcon,
    AboutContainer,
    WorkExp,
    WorkHeader,
    WorkContainer,
    WhatIUse
} from './Main.components.js'

//Images
import github from '../assests/github.png'
import instagram from '../assests/instagram.png'
import linkin from '../assests/linkedin.png'
import twitter from '../assests/twitter.png'
import TheOhioState from  '../assests/TheOhioStateUniversity-Stacked.jpg'
import headshot from '../assests/headshot.jpg'
import grad from '../assests/grad.png'
import codeNinja from '../assests/codeninjas.jpeg'
import givegame from '../assests/givegame.jpg'
import html from '../assests/HTML.png'
import css from '../assests/CSS3.png'
import reactlogo from '../assests/reactlogo.png'
import javaslogo from '../assests/javascriptlogo.png'
import bootstrap from '../assests/bootstraplogo.png'

//Components
import Jobs from '../components/Jobs'


export default class Main extends Component {
    state = {
        isClicked: true,
    }

    handleClick = () => {
        if(this.state.isClicked === true) {
            this.setState({
                isClicked: false,
            })
        }
        else {
            this.setState({
                isClicked: true,
            })
        }
    }

    handleScroll = () =>{
        window.scroll({ top: 1050, left: 0, behavior: 'smooth' });
    }


    render() {
        return (
            <Wrapper>
                <Body>
                    <TopBar>
                        <AboutMe onClick={this.handleScroll}>About Me</AboutMe>
                        <ColorContainer onClick={this.handleClick}> Click Here to change the color! </ColorContainer>
                    </TopBar>
                    <Headshot src={headshot}/>
                    <MainHeader> Hello, I'm Bill!</MainHeader>
                    <MainDescription>Student | FullStack Devloper | Meme enthusiast | Sports Guy </MainDescription>
                    <SocialBar>
                        <a href='http://www.twitter.com/billydeniro3' target= '_blank' rel="noopener noreferrer">
                            <SocialIcon src={twitter}/>
                        </a>
                        <a href='https://www.linkedin.com/in/william-deniro/' target= '_blank' rel="noopener noreferrer">
                            <SocialIcon src={linkin}/>
                        </a>
                        <a href='http://www.instagram.com/billydeniro3' target= '_blank' rel="noopener noreferrer">
                            <SocialIcon src={instagram}/>
                        </a>
                        <a href='http://www.github.com/bd33' target= '_blank' rel="noopener noreferrer">
                            <GithubIcon src={github}/>
                        </a>
                    </SocialBar>
                    <AboutContainer>
                        <AboutHeader>ABOUT</AboutHeader>
                        <AboutMeBody id="about" data-aos="flip-left">
                            I like JavaScript and everything web.
                            When my dev senses kick-in I build presumably awesome stuff. I stay close to the community and try to keep tabs with the pace at which the web is evolving.
                            I built this site from scratch. By scratch, I mean absolutely from scratch without any UI framework (except React though) and had so much fun along the way.
                            Node.js, Ruby on Rails, Java, Python are the main tricks up my sleeve. I am also obsessed with making the web look pretty with CSS.
                            <WhatIUse>What do I use?</WhatIUse>
                            I have experience with the following tools & technologies:
                            <SocialBar>
                                <a href='https://reactjs.org/' target= '_blank'>
                                    <SocialIcon src={reactlogo}/>
                                </a>
                                <a href='https://www.w3schools.com/html/' target= '_blank'>
                                    <SocialIcon src={html}/>
                                </a>
                                <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target= '_blank'>
                                    <SocialIcon src={css}/>
                                </a>
                                <a href='https://www.javascript.com/' target= '_blank'>
                                    <SocialIcon src={javaslogo}/>
                                </a>
                                <a href='https://getbootstrap.com/' target= '_blank'>
                                    <SocialIcon src={bootstrap}/>
                                </a>
                            </SocialBar>
                        </AboutMeBody >
                    </AboutContainer>
                    <Education>
                        <BigOverlay>
                            <EdHeader>
                                <Container>Education</Container>
                            </EdHeader>
                            <GradIcon src={grad}/>
                            <CollegeIcon src={TheOhioState}/>
                            <EdBody> Currently pursuing a degree in Computer Science Engineering from The Ohio State University. </EdBody>
                        </BigOverlay>
                    </Education>
                    <WorkExp>
                        <WorkContainer>
                            <WorkHeader>Work Experience</WorkHeader>
                            <AboutMeBody>
                                <Jobs jobName={
                                    <div>Code Ninjas 2018 - 2019 | <i>Code Sensei</i> </div>
                                }
                                      logo={
                                         codeNinja
                                      }
                                      jobDescription={
                                          <div>  • Responsible for teaching children ages 7-14 on the core values of Computer Science using Java Script and Strach.
                                              <br />
                                              • Engaged with students and set up a good foundation for coding, math, logic, problem solving and teamwork
                                              <br />
                                              • Developed curriculum based on Java Script and Strach based on student’s skill set.
                                          </div>
                                      }/>
                                <Jobs jobName={
                                    <div>GiveGame 2019 | <i>Software Engineer</i> </div>
                                }
                                      logo={givegame}
                                      jobDescription={
                                          <div>• Responsible for contributing to brainstorming, designing, producing and implementing new components for an online mobile web app built in React.
                                              <br />
                                              • Worked directly with marketing team to come up with and build a website that was both efficient for getting new users and aesthetically pleasing for the user to interact with.
                                          </div>
                                      }
                                />
                            </AboutMeBody >
                        </WorkContainer>
                    </WorkExp>
                </Body>
            </Wrapper>
        );
    }
}