import './App.css';
import Nav from './components/Nav.js';
import WhatsH from './components/WhatsH';
import Feed from './components/Feed'

function App() {
  return (
    <div className="App">
      <Nav />
      <Feed />
      <WhatsH />
    </div>
  );
}

export default App;
