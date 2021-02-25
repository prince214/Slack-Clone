import React, { useState }  from 'react'
import styled from "styled-components";
import SendIcon from '@material-ui/icons/Send';
import Picker from 'emoji-picker-react';

import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoodIcon from '@material-ui/icons/Mood';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

function ChatInput() {

    return (
        <Container>
            <InputContainer>
                <form>
                    <input type="text" placeholder="Enter Message ..." />

                    <ExtraButtons>
                    <AttachFileIcon />
                    <AlternateEmailIcon />
                    <MoodIcon />
                    </ExtraButtons>

                    <SendButton>                    
                        <Send />
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
`;

const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;

    form{
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;

        input{
            flex: 1;
            border: none;
            font-size: 13px;
        }

        input: focus{
            outline: none;
        }
    }
`;

const SendButton = styled.div`
    background: #007a5a;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    cursor: pointer;

    .MuiSvgIcon-root{
        width: 18px;
    }

    :hover{
        background-color: #148567;
    }
`;

const Send = styled(SendIcon)`
    color: #D9D9D9;
`;

const ExtraButtons = styled.div`
color: #9c9797;
margin-right: 10px;
`;

