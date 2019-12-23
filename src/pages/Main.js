//Libraries
import React, {Component, Fragment} from 'react'; // import the script
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import { Helmet } from 'react-helmet';


//Style Components
import {
    MainHeader,
    Body,
    AboutMe,
    MainDescription,
    SocialBar,
    SocialIcon,
    GithubIcon,
    GeneralBody,
    GeneralHeader,
    Headshot,
    Education,
    EdHeader,
    EdBody,
    CollegeIcon,
    BigOverlay,
    GradIcon,
    AboutContainer,
    WorkContainer,
    WhatIUse,
    TopContainer,
    TopOverlay,
    ToolIcon,
    MacScreens,
    ArrowIcon,
    PhoneScreens,
    DisplayBox,
    Lang,
    EdsubHead,
    DublyScreens,
    DublyDisplayBox
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
import macscreen from '../assests/GiveGameMac.png'
import macscreen2 from '../assests/GiveGameMac2.png'
import macscreen3 from '../assests/GiveGameMac3.png'
import arrowDown from '../assests/white-down-arrow-png-2.png'
import iphone from '../assests/GiveGameIphone.png'
import iphone2 from '../assests/GiveGameIphone2.png'
import iphone3 from '../assests/GiveGameIphone3.png'
import iphone4 from '../assests/MainPageIphone.png'
import iphone5 from '../assests/LandingScreenIphone.png'
import dublyLogo from '../assests/DublyLogo.png'



//Components
import Jobs from '../components/Jobs'

//Constants
const AboutMeDesc = 'I am a software engineer based in Columbus, OH specializing in building and designing) exceptional, high-quality software, websites and native applications. When my dev senses kick-in I build presumably awesome stuff. I stay close to the community and try to keep tabs with the pace at which the web is evolving. I built this site from scratch. By scratch, I mean absolutely from scratch without any UI framework (except React though) and had so much fun along the way. Node.js, Ruby on Rails, Java, Python, Swift, and C are the main tricks up my sleeve. I am also obsessed with making the web look pretty with CSS.';
const EducationDesc = 'Currently pursuing a degree in Computer Science Engineering from The Ohio State University.';
const MainHeaderDesc =  'Student | Software Engineer | Sports Guy ';
const Languages = 'Java, Swift, JavasScript , C, Python, Ruby , HTML/CSS, X86-64 assembly'
const CourseWork = 'Discrete Structures,  Data Structures and Algorithms , Software Development and Design , Introduction to Low-Level Programming and Computer Organization, Probability and Statistics for Engineers, Database Systems, Higher Foundations of Mathematics, Intro to Artifical Intelligence, Web App Development'

export default class Main extends Component {
    handleScroll = () =>{
        window.scroll({ top: 1050, left: 0, behavior: 'smooth' });
    }

    render() {
        return (
            <Body>
             <Helmet>
                 <title>Billy DeNiro</title>
             </Helmet>
                <TopContainer>
                    <TopOverlay>
                        <AboutMe onClick={this.handleScroll}>About Me</AboutMe>
                        <Headshot src={headshot}/>
                        <MainHeader> Hello, I'm Bill!</MainHeader>
                        <MainDescription>{MainHeaderDesc}</MainDescription>
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
                            <Fade bottom>
                                <GeneralHeader>ABOUT</GeneralHeader>
                                <GeneralBody>
                                    {AboutMeDesc}
                                    <Fade left>
                                        <WhatIUse>What do I use?</WhatIUse>
                                        I have experience with the following languages:
                                        <Lang>{Languages}</Lang>
                                        I have experience with the following tools & technologies:
                                        <SocialBar>
                                            <a href='https://reactjs.org/' target= '_blank'>
                                                <ToolIcon src={reactlogo}/>
                                            </a>
                                            <a href='https://www.w3schools.com/html/' target= '_blank'>
                                                <ToolIcon src={html}/>
                                            </a>
                                            <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target= '_blank'>
                                                <ToolIcon src={css}/>
                                            </a>
                                            <a href='https://www.javascript.com/' target= '_blank'>
                                                <ToolIcon src={javaslogo}/>
                                            </a>
                                            <a href='https://getbootstrap.com/' target= '_blank'>
                                                <ToolIcon src={bootstrap}/>
                                            </a>
                                        </SocialBar>
                                    </Fade>
                                </GeneralBody >
                            </Fade>
                        </AboutContainer>
                    </TopOverlay>
                </TopContainer>
                <Education>
                    <BigOverlay>
                        <Fade down>
                            <EdHeader>
                                Education
                            </EdHeader>
                        </Fade>
                        <Fade left>
                            <GradIcon src={grad}/>
                        </Fade>
                        <Fade right>
                            <CollegeIcon src={TheOhioState}/>
                        </Fade>
                        <Fade up>
                            <EdBody>{EducationDesc}</EdBody>
                            <EdsubHead>Relative CourseWork:</EdsubHead>
                            <EdBody>{CourseWork}</EdBody>
                        </Fade>
                    </BigOverlay>
                </Education>
                <WorkContainer>
                    <GeneralBody>
                        <Rotate bottom left>
                            <GeneralHeader>Work Experience</GeneralHeader>
                        </Rotate>
                        <Rotate bottom right>
                            <Jobs jobTitle={'Code Sensei'}
                                  companyName={'CodeNinjas'}
                                  logo={codeNinja}
                                  jobDescription={
                                      <div>  • Responsible for teaching children ages 7-14 on the core values of Computer Science using Javascript and Strach.
                                          <br />
                                          • Engaged with students and set up a good foundation for coding, math, logic, problem solving and teamwork.
                                          <br />
                                          • Developed curriculum based on Javascript and Strach based on student’s skill set.
                                      </div>
                                  }/>
                        </Rotate>
                        <Rotate bottom left>
                            <Jobs  jobTitle={'Software Engineer'}
                                   companyName={'GiveGame'}
                                  logo={givegame}
                                  jobDescription={
                                      <div>• Responsible for contributing to brainstorming, designing, producing and implementing new components for an online mobile web app built in React.
                                          <br />
                                          • Worked directly with marketing team to come up with and build a website that was both efficient for getting new users and aesthetically pleasing for the user to interact with.
                                      </div>
                                  }
                            />
                        </Rotate>
                        <MacScreens src={dublyLogo}/>


                            <div>
                        <ArrowIcon src={arrowDown}/>

                        <EdBody>Dubly is an iOS app to help people strategically place sports bets using sports analytics and the Martingale Betting Algorithm, which allows users to set bankroll, get a recommended starting bet and gain a net profit over time. Written in Swift, designed in Xcode and backend implemented with Firebase.</EdBody>

                        <DublyDisplayBox>
                            <Fade right>
                                <DublyScreens src={iphone4}/>
                            </Fade>
                            <Fade right>
                            <DublyScreens src={iphone5}/>
                            </Fade>
                        </DublyDisplayBox>
                </div>



                        <div>GiveGame Portfolio</div>
                        <ArrowIcon src={arrowDown}/>
                        <DisplayBox>
                            <Fade left>
                                <MacScreens src={macscreen}/>
                            </Fade>
                            <Fade right>
                                <PhoneScreens src={iphone3}/>
                            </Fade>
                        </DisplayBox>
                        <DisplayBox>
                            <Fade left>
                                <MacScreens src={macscreen2}/>
                            </Fade>
                            <Fade right>
                                <PhoneScreens src={iphone2}/>
                            </Fade>
                        </DisplayBox>
                        <DisplayBox>
                            <Fade left>
                                <MacScreens src={macscreen3}/>
                            </Fade>
                            <Fade right>
                                <PhoneScreens src={iphone}/>
                            </Fade>
                        </DisplayBox>
                    </GeneralBody >
                </WorkContainer>
            </Body>
        );
    }
}