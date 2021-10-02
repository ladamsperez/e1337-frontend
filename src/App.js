import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: right;
`;

function App() {
  return (
    <AppContainer>
      <AccountBox />
    </AppContainer>
  );
}

export default App;
