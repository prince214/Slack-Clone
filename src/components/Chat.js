import React from "react";
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function Chat() {
  return (
    <Container>
      <ChatHeaderContainer>

        <ChatHeader>
          # Prince PRO <StarBorderIcon />
          <br />
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print,
        </ChatHeader>

        <Details>
          Details
          <InfoContainer>
            <InfoOutlinedIcon />
          </InfoContainer>
        </Details>

      </ChatHeaderContainer>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
background: ${props => props.theme.chatPageColor};
color: ${props => props.theme.chatTextColor};
`;

const ChatHeaderContainer = styled.div`
  height: 46px;
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 8px;
  padding-left: 15px;
  padding-right: 15px;
  border-bottom: .5px solid ${props => props.theme.borderColor};
`;

const ChatHeader = styled.div``;

const Details = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const InfoContainer = styled.div`
  margin-left: 10px;
`;
