import React from "react";
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

function Chat() {
  return (
    <Container>
      <ChatHeaderContainer>
        <Channel>
          <ChannelName>
            # prince-pro <StarBorderIcon />
          </ChannelName>

          <ChannelInfo>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print
          </ChannelInfo>
        </Channel>

        <Details>
          Details
          <Info />
        </Details>
      </ChatHeaderContainer>

      <MessageContainer>
        <ChatMessage />
      </MessageContainer>

      <ChatInput />
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  background: ${(props) => props.theme.chatPageColor};
  color: ${(props) => props.theme.chatTextColor};
  display: grid;
  grid-template-rows: 64px auto min-content;
`;

const ChatHeaderContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.borderColor};

  justify-content: space-between;
  // padding-top: 10px;
  // padding-bottom: 8px;
`;

const Channel = styled.div``;

const ChannelName = styled.div`
font-weight: 700;
  
`;

const ChannelInfo = styled.div`
font-weight: 400;
color: #606060;
font-size: 13px;
margin-top: 8px;
`;

const Details = styled.div`
  display: flex;
  align-items:center;
  color: #606060;
  justify-content: space-evenly;
`;

const Info = styled(InfoOutlinedIcon)`
  margin-left: 10px;
`;

const MessageContainer = styled.div``;
