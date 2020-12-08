import react from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Portfolio from './components/Portfolio';
import Onama from './components/Onama'
import Kontakt from './components/Kontakt/Kontakt';
import Usluge from './components/Usluge';

function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Switch>
       <Route path='/Famempire' exact component=
       {Home} />
       <Route path='/portfolio' component={Portfolio} />
       <Route path='/onama'  component={Onama} />
       <Route path='/kontakt' component={Kontakt} />
       <Route path='/usluge' component={Usluge} />
     </Switch>
     </Router>
     </>
  );
}

export default App;
