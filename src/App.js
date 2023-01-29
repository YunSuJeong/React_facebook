import './App.css';
import Left from './components/left/left';
import Right from './components/right/right';

function App() {
  return (
    <div className="App">
        <div className="left">
          <Left/>
        </div>
        <div className="right">
          <Right/>
        </div>
    </div>
  );
}

export default App;
