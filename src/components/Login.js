import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import mystyles from "../assets/styles.css";

function Login(props) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const newUser = {
          name: result.user.displayName,
          photo: result.user.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        props.setUser(newUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <Content>
        <SlackImg src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/306_Slack_logo-512.png" />
        <h1>Sign in Slack</h1>
        <SignInButton onClick={() => signIn()}>
          Sign In With Google
        </SignInButton>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  // width: 100%;
  // height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  // background: ${(props) => props.theme.chatPageColor};
  background-color: #f8f8f8;
  color: ${(props) => props.theme.chatTextColor};
`;

const Content = styled.div`
  position: absolute;
  // background-color: white;
  padding: 100px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);

  color: #dddddd;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
`;

const SlackImg = styled.img`
  height: 100px;
`;

const SignInButton = styled.button`
  margin-top: 50px;
  background-color: #0a8d48;
  color: white;
  border: none;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
`;
