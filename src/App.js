import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ManuBar from './components/ManuBar/ManuBar';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Router>
        <ManuBar></ManuBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/Home">
            <Home></Home>
          </Route>
          <Route exact path="/About">
            <About></About>
          </Route>
          <Route exact path="/Services">
            <Services></Services>
          </Route>
          <Route exact path="/Contact">
            <Contact></Contact>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div >
  );
}

export default App;
