import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import About from './components/About';
import Info from './components/Info';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/info" component={Info}/>
        <Route path="/login" component={AccountBox}/>
      </Switch>
    </Router>
  );
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);


export default App;
