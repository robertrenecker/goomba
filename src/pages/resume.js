import React from 'react';
import styled from 'styled-components';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

// Photo by Jimmy Chang on Unsplash
import logo from '../images/unsplashBrandonWongTaxi.png';
import profilepic from '../images/profile.png';
import computericon from '../images/Computer-Hardware-Keyboard-icon.png';
import pixeltrophy from '../images/pixeltrophy.png';

const Resume = () => (
  <BackgroundImage>
    <ResumeDiv>
      <Row>
        <Jumbotron>
          <h1>Robert Renecker</h1>   
          <h2>Resume + Portfolio</h2>
        </Jumbotron>
      </Row>
      <Row>
        <LeftCol>
          <TopLeftCard>
            <img src={profilepic} alt="portrait" />
            <h1>About Me</h1>
            <h2>University of Colorado Boulder</h2>
            <h3>503-680-1282</h3>
            <h3>Mail: robertrenecker@gmail.com</h3>

          </TopLeftCard>
          <BottomLeftCard>
            <h1>Projects</h1>
            <ul>
              <li>Goomba.io -- This Website!</li>
              <li>Meal Generator</li>
              <li>Alexa Skill RSS Feed / Quiz Game</li>
              <li>Political Jokes RNN (Neural Network)</li> 
            </ul>
            <h1>Honors & Awards</h1>
            <Awards>
              <ul>
               <li>Kaggle Competition Winner</li>
               <li>Engineering Dean's List (Engineering Majors 3.6 GPA and above)</li>
              </ul>
            </Awards>
           
          </BottomLeftCard>
        </LeftCol>
        <TopRightCard1>
          <h1>Experience</h1>
          <ListGroup>
            <ListGroupItem>
              <h4>Synapse Innovation</h4>
              <h5>研修生 - RnD Intern</h5>
              <span>Designed nurse scheduling applications in MatLab and Python.
                Used Genetic Algorithms for optimization and also created a constraint solver to acknowledge
                nurse bids for days they wish to work.
              </span>
              <SmallText>Summer 2018</SmallText>
            </ListGroupItem>
            <ListGroupItem>
              <h4>Informu</h4>
              <h5>AI Specialist</h5>
              <span>Consulted and helped design a neurel network to distinguish whether an item left behind
                is in a dangerous area or not.
              </span>
              <SmallText>Summer 2017</SmallText>
            </ListGroupItem>
            <ListGroupItem>
              <h4>Grange Capital, LLC</h4>
              <h5>Intern</h5>
              <span>Researched cooling system technologies for the introduction of a new product into the refrigeration and subsiderary industries. </span>
              <SmallText>Summer 2016</SmallText>
            </ListGroupItem>
          </ListGroup>

        </TopRightCard1>
        <TopRightCard2>
          <h1> Skills </h1>
          <ul>
            <li>Programming Languages
              <li>Python</li>
              <li>C++</li>
              <li>C</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript</li>
              <li>MatLab</li>
            </li>
            <li>Frameworks / Libraries
              <li>Pandas</li>
              <li>Numba / Jit</li>
              <li>React Native</li>

            </li>
          </ul>
        </TopRightCard2>
      </Row>
    </ResumeDiv>
  </BackgroundImage>

);

export default Resume;

const BackgroundImage = styled.div`
  background-image: url('${logo}');
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 0vh;
  height:95vh;
  display: flex;
  justify-content: center;
`;
const ResumeDiv = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    background-color: rgb(255,255,255, .9);
    margin-top: 2.5em;
    width: 90vw;
    overflow: hidden;
    border-top: solid black 1px;
    border-bottom: solid black 1px;
    font-family: "Open Sans", Helvetica;
`;


const Row = styled.div`
    display: flex;
    flex-direction:row
    align-items: flex-start;
    padding-top: 5px;

`;

const Jumbotron = styled.div`
  height: 10vh;
  color: rgb(155,20,50);
  border-bottom: solid black 1px;
  width: 90vw;
  text-align: center;
  h1{
    font-size: 50px;
    font-weight:bold;
    
  }
  h2{
    color: gray;
    font-size:15px;

  }
`;

const LeftCol = styled.div`
  flex-basis: 40%;
  border-left: solid black 1px;

  height: 80vh;
`;


const TopLeftCard = styled.div`
  
  display: flex;
  flex-direction:column;
  align-items: center;

  border-bottom: solid black 1px;
  img{
    height: 200px;
  } 
  h1{
    background: gray;
    border-radius: 5px 5px 5px 5px;
    padding: 5px;
    margin: 1em;
    color: rgb(155,20,50);
    font-weight: 600;
    font-size:1.05em;
    text-align: center;
    text-transform: uppercase;

 
  }
  h2{
    color: gray;
    font-weight: 500;
    font-size:1em;
    text-align: center;
 
  }
  h3{
    color: gray;
    font-weight: 300;
    font-size:1em;
    font-style: italic;
    text-align: center;
 
  }

`;

const BottomLeftCard = styled.div`

ul {
  list-style-image: url(${computericon});
  display:flex;
  flex-direction:column;
  justify-content: space-evenly;
  li{
    margin-top: 1.5em;

  }
}


h1{
  background: gray;
  border-radius: 5px 5px 5px 5px;
  padding: 5px;
  margin: 1em;
  color: rgb(155,20,50);
  font-weight: 600;
  font-size:1.05em;
  text-align: center;
  text-transform: uppercase;


}

`;


const TopRightCard1 = styled.div`
  height: 80vh;

  flex-basis: 45%;
  padding: 5px 5px 5px 5px;
  border-right: solid black 1px;
  border-left: solid black 1px;
  display:flex;
  flex-direction:column;
  justify-content: flex-start;

  h1{
    background: gray;
    border-radius: 5px 5px 5px 5px;
    padding: 5px;
    margin: 1em;
    color: rgb(155,20,50);
    font-weight: 600;
    font-size:1.05em;
    text-align: center;
    text-transform: uppercase;
  
  
  }

`;

const TopRightCard2 = styled.div`
  
  height: 80vh;
  background-color: rgb(155,20,50,.95);
  color:grey;
  flex-basis: 35%;

  display: flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: center;

  h1{
    border-bottom: solid white 1px;
  }
`;


const SmallText = styled.div`
  font-size: 10px;
  color: gray;
`;

const Awards = styled.div`
  ul{
    list-style-image: url(${pixeltrophy});
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    li{
      margin-top: 1.5em;
  
    }
  }
`;