import React, { useState } from "react";
import styled from "styled-components";

import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoodIcon from "@material-ui/icons/Mood";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import AddIcon from "@material-ui/icons/Add";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function ChatInput({ sendMessage }) {
  const [input, setInput] = useState("");

  const send = (e) => {
    e.preventDefault();
    if (!input) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <Container>
      <InputContainer>
        <AddIconBtn />
        <form>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
            placeholder="Enter Message ..."
          />

          <ExtraButtons>
            <AttachFileIcon />
            <AlternateEmailIcon />
            <MoodIcon />
          </ExtraButtons>

          <SendButton type="submit" onClick={send}>
            <Send />
          </SendButton>
        </form>
      </InputContainer>
    </Container>
  );
}

export default ChatInput;

const Container = styled.div`
  padding-bottom: 20px;
  padding-top: 20px;
  border-top: 0.5px solid #e9e9e9;
  margin-left: 40px;
  margin-right: 40px;
`;

const InputContainer = styled.div`
  border-radius: 4px;

  padding: 15px;
  background-color: ${(props) => props.theme.inputBarColor};
  display: flex;

  form {
    display: flex;
    height: 42px;
    align-items: center;
    padding-left: 10px;
    width: 100%;

    input {
      flex: 1;
      border: none;
      background-color: transparent;
      color: ${(props) => props.theme.chatTextColor};
      font-size: 13px;
    }

    input: focus {
      outline: none;
    }
  }
`;

const SendButton = styled.button`
  background-image: linear-gradient(
    to right,
    #ffbb76,
    #ffb077,
    #ffa57a,
    #ff9a7e,
    #fe9084
  );
  border-radius: 2px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  cursor: pointer;
  border: none;
  border-radius: 50%;

  .MuiSvgIcon-root {
    width: 18px;
  }

  :hover {
    background-color: #148567;
  }
`;

const Send = styled(ArrowForwardIcon)`
  color: white;
`;

const ExtraButtons = styled.div`
  color: #9c9797;
  margin-right: 10px;
  cursor: pointer;
`;

const AddIconBtn = styled(AddIcon)`
  cursor: pointer;
  border-right: 0.5px solid #cecdcd;
  height: 40px;
  padding-right: 10px;
  font-size: 2.2rem !important;
  color: grey;
`;
