import React,{ useState } from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddIcon from "@material-ui/icons/Add";
import { sidebarItemsData } from "../data/SidebarData";
import db from '../firebase'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function Sidebar(props) {

  const [open, setOpen] = React.useState(false);

  const [name, setName] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  const handleSubmit = (evt) => {
    if(name){
      db.collection('rooms').add({
        name: name
      })
    }
    setOpen(false);
}

  return (
    <Container>
      <WorkSpaceContainer>
        <Name>Prince Productions</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkSpaceContainer>

      <MainChannels>
        {sidebarItemsData.map((item) => (
          <MainChannelItem>
            {item.icon}
            {item.text}
          </MainChannelItem>
        ))}
      </MainChannels>

      <ChannelsContainer>
        <NewChannelContainer>
          <div>Channels</div>
          <AddIcon onClick={handleClickOpen} />
        </NewChannelContainer>

        <ChannelsList>

        {props.rooms.map((item) => (
          <Channel>
            # {item.name}
          </Channel>
        ))}
        </ChannelsList>
      </ChannelsContainer>


      <Dialog open={open} onClose={handleClose}>

      <DialogTitle id="form-dialog-title">Create new Channel</DialogTitle>

        <DialogContent>
        <DialogContentText>
        Channels are where your team communicates. They’re best when organized around a topic — #marketing, for example.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="channel_name"
            label="Enter Channel Name"
            type="text"
            fullWidth
            value={name}
            onChange={e => setName(e.target.value)}

          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>

    </Container>
    
  );
}

export default Sidebar;

const Container = styled.div`
  background: ${(props) => props.theme.sidebarColor};
`;

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`;

const WorkSpaceContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  border-bottom: .5px solid ${props => props.theme.borderColor};
`;

const Name = styled.div``;

const MainChannels = styled.div`
  padding-top: 20px;
`;

const MainChannelItem = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
    :hover {
        background: #350D36;
    }
`;

const ChannelsContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top: 10px;
`;

const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding-left: 19px;
  padding-right: 12px;
`;


const ChannelsList = styled.div``;

const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: #350D36;
    }
`;

