import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Header from "./components/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import startChatImg from "./assets/chat-message";
import Lottie from "react-lottie";

import db, { auth } from "./firebase";

import { ThemeProvider } from "styled-components";

const LightTheme = {
  pageBackground: "#350d36;",
  headerColor: "#fcfcfc",
  sidebarColor:
    "linear-gradient(to bottom, #273333, #354f56, #4a6b7f, #6e85a9, #a29dce )",
  chatPageColor: "white",
  chatTextColor: "black",
  borderColor: "#6c6b6c",
  hoverTextColor: "#f6f6f6",
  textColor: "#606060",
  inputBarColor: "#f1f1f1",
  sidebarShadow: "-3px 2px 0px #3f3f3f82 inset",
};

const DarkTheme = {
  pageBackground: "#222831;",
  headerColor: "#222222",
  sidebarColor:
    "linear-gradient(to bottom, #090501, #141110, #1b1919, #212021, #282828)",
  chatPageColor: "#393e46",
  chatTextColor: "white",
  borderColor: "#6c6b6c",
  hoverTextColor: "#2b2e32",
  textColor: "white",
  inputBarColor: "#222222",
  sidebarShadow: "-3px 2px 0px #3f3f3f82 inset",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

function App() {
  const [theme, setTheme] = useState("light");

  const [rooms, setRooms] = useState([]);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user");
      setUser(null);
    });
  };

  const getChannels = () => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name };
        })
      );
    });
  };

  useEffect(() => {
    getChannels();
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: startChatImg,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="App">
      <ThemeProvider theme={themes[theme]}>
        <Router>
          {!user ? (
            <Login setUser={setUser} />
          ) : (
            <Container>
              {/* <Header theme={theme} setTheme={setTheme} user={user} signOut={signOut}  /> */}
              <Main>
                <Sidebar
                  user={user}
                  signOut={signOut}
                  rooms={rooms}
                  theme={theme}
                  setTheme={setTheme}
                />
                <Switch>
                  <Route path="/room/:channelId">
                    <Chat theme={theme} setTheme={setTheme} user={user} />
                  </Route>

                  <Route path="/room">
                    <StartChat>
                      <Lottie
                        options={defaultOptions}
                        height={200}
                        width={200}
                      />
                      <h3>Click any of the Channels to start the chat !!</h3>
                    </StartChat>
                  </Route>
                </Switch>
              </Main>
            </Container>
          )}
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px minmax(0, 1fr);
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;

  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
`;

const StartChat = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #606060;
  justify-content: center;
`;
