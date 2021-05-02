import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Join, Chat } from './components';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Join} />
      <Route exact path="/chat" component={Chat} />
    </Router>
  );
}

export default App;
