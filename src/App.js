import React from "react";
import Styled from 'styled-components';
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';
import Input from "./components/Input";
import Button from "./components/Button";
import Icons from "./components/Icons";

const Container = Styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const Heading2 = Styled.h2`
  margin: 3rem 0 2rem 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-color: #a4508b;
  background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);
  font-size: 28px

`;

const InputDiv = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;

`;

const ButtonDiv = Styled.div`
  margin: 2rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginWith = Styled.h5`
  cursor: pointer;
  background-image: linear-gradient(315deg, #d4418e 0%, #0652c5 74%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 14px
  font-weight: bold;
  `;

const HorizontalLine = Styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;
const IconsDiv = Styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const ForgotPassword = Styled.h4`
  cursor: pointer;
  background-image: linear-gradient(315deg, #d4418e 0%, #0652c5 74%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 15px
  font-weight: bold;
`;
function App() {
  const fbBG =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstaBG =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBG =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  return (
    <Container>
      <Heading2>Welcome</Heading2>
      <InputDiv>
      <Input type="text" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      </InputDiv>
      <ButtonDiv><Button content = "Sign In"/></ButtonDiv>
      <LoginWith>Or Login With</LoginWith>
      <HorizontalLine></HorizontalLine>
      <IconsDiv>
      <Icons color={fbBG}>
          <FaFacebookF />
        </Icons>
        <Icons color={InstaBG}>
          <FaInstagram />
        </Icons>
        <Icons color={TwitterBG}>
          <FaTwitter />
        </Icons>
      </IconsDiv>
      <ForgotPassword>Forgot Password? </ForgotPassword>
    </Container>
  )
}

export default App; 
