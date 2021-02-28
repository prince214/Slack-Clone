import { React, useRef } from "react";
import styled from "styled-components";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

function ChatMessage({ text, name, image, timestamp }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  scrollToBottom();
  return (
    <Container>
      <UserAvatar>
        <img alt="user avatar" src={image} />
      </UserAvatar>
      <MessageContent>
        <Name>
          {name}
          <span>{new Date(timestamp.toDate()).toUTCString()}</span>
        </Name>

        <Text>{text}</Text>
        {/* <DeleteMsg /> */}
      </MessageContent>
      <div ref={messagesEndRef} />
    </Container>
  );
}

export default ChatMessage;

const DeleteMsg = styled(DeleteOutlineIcon)`
  position: absolute;
  right: 20px;
`;

const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;

  :hover {
    background-color: ${(props) => props.theme.hoverTextColor};
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
  font-weight: 700;
  line-height: 1.4;
  font-size: 15px;

  span {
    margin-left: 8px;
    font-weight: 400;
    color: rgb(97, 96, 97);
    font-size: 13px;
  }
`;

const Text = styled.span``;
