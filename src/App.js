import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Header from "./components/Header";
import styled from "styled-components";
import Sidebar from './components/Sidebar'

import { ThemeProvider } from "styled-components";

const LightTheme = {
  pageBackground: "#350d36;",
  headerColor: "#350d36",
  tagLineColor: "black",
  sidebarColor: "#3f0e40",
  chatPageColor: "white",
  chatTextColor: "black",
  borderColor: "#532753"
};

const DarkTheme = {
  pageBackground: "#282c36",
  headerColor: "#25272c",
  tagLineColor: "lavender",
  sidebarColor: "#282c36",
  chatPageColor: "#383838",
  chatTextColor: "white",
  borderColor: "#a3a3a3"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}


function App() {

  const [theme, setTheme] = useState("light")
  
  return (
    <div className="App">

    <ThemeProvider theme={themes[theme]}>
      <Router>
        <Container>
          <Header theme={theme} setTheme={setTheme} />
          <Main>
            <Sidebar theme={theme} setTheme={setTheme} />
            <Switch>
              <Route path="/room">
                <Chat theme={theme} setTheme={setTheme} />
              </Route>

              <Route path="/">
                <Login theme={theme} setTheme={setTheme} />
              </Route>
            </Switch>
          </Main>
        </Container>
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
  grid-template-rows: 38px auto;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`;