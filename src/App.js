import "./App.css";
import styled from "styled-components";
// import { AccountBox } from "./components/accountBox";
import About from './components/About';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
      {/* <AppContainer>
        <AccountBox />
      </AppContainer> */}
    </Router>
  );
}

// const AppContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;


const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);


export default App;
