import React, { useState } from "react";
import styled from "styled-components";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddIcon from "@material-ui/icons/Add";
import { sidebarItemsData } from "../data/SidebarData";
import db from "../firebase";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

import { useHistory, userHistory } from "react-router-dom";

function Sidebar(props) {
  const [open, setOpen] = React.useState(false);

  const [name, setName] = useState("");

  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (evt) => {
    if (name) {
      db.collection("rooms").add({
        name: name,
      });
    }
    setOpen(false);
  };

  const goToChannel = (id) => {
    if (id) {
      history.push(`/room/${id}`);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const openDropdown = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeDropdown = () => {
    setAnchorEl(null);
  };

  function changeTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
    setAnchorEl(null);
  }

  const icon =
    props.theme === "light" ? (
      <Brightness3Icon size={20} />
    ) : (
      <WbSunnyIcon size={20} />
    );

  return (
    <Container>
      <WorkSpaceContainer>
        <UserImage>
          <img
            alt="user img"
            src={
              props.user.photo
                ? props.user.photo
                : "https://i.imgur.com/6VBx3io.png"
            }
          />
        </UserImage>

        <Name>{props.user.name}</Name>
        <UserMenu
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={openDropdown}
        />

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={closeDropdown}
        >
          <MenuItem onClick={closeDropdown}>Profile</MenuItem>
          <MenuItem onClick={changeTheme}>SwitchMode &nbsp; {icon}</MenuItem>
          <MenuItem onClick={props.signOut}>Logout</MenuItem>
        </Menu>
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
          <AddChannel onClick={handleClickOpen} />
        </NewChannelContainer>

        <ChannelsList>
          {props.rooms.map((item) => (
            <Channel onClick={() => goToChannel(item.id)}>
              # {item.name}
            </Channel>
          ))}
        </ChannelsList>
      </ChannelsContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Create new Channel</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Channels are where your team communicates. They’re best when
            organized around a topic — #marketing, for example.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="channel_name"
            label="Enter Channel Name"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
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
  transition: all 2s ease;
  background: ${(props) => props.theme.sidebarColor};
  -webkit-transition: background-color 2s ease-out;
  -moz-transition: background-color 2s ease-out;
  -o-transition: background-color 2s ease-out;
  transition: background-color 2s ease-out;
`;

const WorkSpaceContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  position: relative;
  border-bottom: 0.5px solid ${(props) => props.theme.borderColor};
`;

const Name = styled.div``;

const MainChannels = styled.div`
  padding-top: 20px;
`;

const MainChannelItem = styled.div`
  color: white;
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: #8aafb7;
  }
`;

const ChannelsContainer = styled.div`
  color: white;
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
    background: #8aafb7;
  }
`;

const AddChannel = styled(AddIcon)`
  cursor: pointer;
`;

const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid white;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

const UserMenu = styled(MoreVertIcon)`
  cursor: pointer;
  position: absolute;
  right: 10px;
`;
