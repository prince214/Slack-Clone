import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

function Header(props) {
  function changeTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  }

  const icon =
    props.theme === "light" ? (
      <Brightness3Icon size={20} />
    ) : (
      <WbSunnyIcon size={20} />
    );

  return (
    <Container>
      <Main>
        <AccessTimeIcon />

        <SearchContainer>
          <Search>
            <input type="text" placeholder="Search .... " />
          </Search>
        </SearchContainer>

        <HelpOutlineIcon />
      </Main>
      <UserContainer>
        <Name>{props.user.name}</Name>
        <UserImage onClick={props.signOut}>
          <img
            alt="user img"
            src={
              props.user.photo
                ? props.user.photo
                : "https://i.imgur.com/6VBx3io.png"
            }
          />
        </UserImage>
        <Toggle onClick={changeTheme}>{icon}</Toggle>
      </UserContainer>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  // background: ${(props) => props.theme.headerColor};
  background: #2b3c3e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 1px 0 0 1px rgb(255 255 255 /10 %);
`;

const Main = styled.div`
  display: flex;
  margin-left: 16px;
  margin-right: 16px;
`;

const SearchContainer = styled.div`
  min-width: 400px;
  margin-left: 16px;
  margin-right: 16px;
`;

const Search = styled.div`
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  width: 100%;
  border-radius: 6px;
  display: flex;
  align-items: center;

  input {
    background-color: transparent;
    border: none;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    color: white;
  }

  input:focus {
    outline: none;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-item: center;
  padding-right: 16px;
  position: absolute;
  right: 0;
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

const Name = styled.div`
  padding-right: 16px;
`;

const Toggle = styled.button`
  cursor: pointer;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.pageBackground};
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;

  align-items: center;
  display: flex;
  justify-content: center;
`;
