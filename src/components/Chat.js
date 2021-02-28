import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import db from "../firebase";
import firebase from "firebase";
import "../assets/styles.css";
import chatIcon from "../assets/chat.svg";

import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function Chat({ user }) {
  let { channelId } = useParams();
  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    db.collection("rooms")
      .doc(channelId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        let messages = snapshot.docs.map((doc) => doc.data());
        setMessages(messages);
      });
  };

  const sendMessage = (text) => {
    if (channelId) {
      let payload = {
        text: text,
        timestamp: firebase.firestore.Timestamp.now(),
        user: user.name,
        userImage: user.photo,
      };
      db.collection("rooms").doc(channelId).collection("messages").add(payload);
    }
  };

  const getChannel = () => {
    db.collection("rooms")
      .doc(channelId)
      .onSnapshot((snapshot) => {
        setChannel(snapshot.data());
      });
  };

  useEffect(() => {
    getChannel();
    getMessages();
  }, [channelId]);

  return (
    <Container>
      <ChatHeaderContainer>
        <Channel>
          <ChannelHeader>
            <ChannelName>
              # {channel && channel.name}
              <Details>
                <Star />
                <NotificationsNoneIcon />
              </Details>
            </ChannelName>

            <ChannelInfo>Building | Coding | Working</ChannelInfo>
          </ChannelHeader>

          <SearchContainer>
            <Search>
              <SearchOutlinedIcon />
              <input type="text" placeholder="Search .... " />
            </Search>
          </SearchContainer>
        </Channel>
      </ChatHeaderContainer>

      <MessageContainer>
        {messages.length > 0 ? (
          messages.map((data, index) => (
            <ChatMessage
              text={data.text}
              name={data.user}
              image={data.userImage}
              timestamp={data.timestamp}
            />
          ))
        ) : (
          <EmptyChatContainer>
            <ChatSvg src={chatIcon} />
            <h2>Start Chatting by typing something ...</h2>
          </EmptyChatContainer>
        )}
      </MessageContainer>
      <ChatInput sendMessage={sendMessage} />
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  background: ${(props) => props.theme.chatPageColor};
  color: ${(props) => props.theme.chatTextColor};
  display: grid;
  grid-template-rows: 65px auto min-content;
  min-height: 0;
`;

const ChatHeaderContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.headerColor};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  justify-content: space-between;
`;

const ChannelHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
`;

const Channel = styled.div`
  display: flex;
  width: 100%;
`;

const ChannelName = styled.div`
  font-weight: 700;
  display: flex;
  align-items: center;
`;

const ChannelInfo = styled.div`
  font-weight: 400;
  color: #606060;
  font-size: 13px;
  margin-top: 8px;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  color: #606060;
  justify-content: space-evenly;
  margin-left: 15px;

  svg {
    font-size: 1.2rem !important;
    cursor: pointer;
  }
`;

const Star = styled(StarBorderIcon)``;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 20px;
`;

const SearchContainer = styled.div``;

const Search = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 7px;

  input {
    border: none;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    color: #606060;
    border: none;
    background-color: transparent;
  }

  input:focus {
    outline: none;
  }

  svg {
    color: #606060;
    font-size: 1.2rem !important;
  }
`;

const EmptyChatContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: grey;
  }
`;

const ChatSvg = styled.img`
  width: 300px;
`;
