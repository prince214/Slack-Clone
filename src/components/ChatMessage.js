import React from "react";
import styled from "styled-components";

function ChatMessage() {
  return (
    <Container>
      <UserAvatar>
        <img alt="user avatar" src="https://randomuser.me/api/portraits/women/79.jpg" />
      </UserAvatar>

      <MessageContent>
        <Name>Jenny Seline
            <span>Date: 8/01/2021</span>
        </Name>

        <Text>Hello World</Text>
      </MessageContent>
    </Container>
  );
}

export default ChatMessage;

const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;

  :hover{
    background-color: #f6f6f6;
  }
`;

const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 2px;
  overflow: hidden;
  margin-right: 8px;
  img {
    width: 100%;
  }
`;

const MessageContent = styled.div`
display: flex;
flex-direction: column;
`;

const Name = styled.span`
font-weight: 900;
line-height: 1.4;
font-size: 15px;

span{
    margin-left: 8px;
    font-weight: 400;
    color: rgb(97,96,97);
    font-size: 13px;
}
`;

const Text = styled.span``;
