import './App.css';
import Looptool from './components/Looptool';
import LoopState from './context/loopState';

function App() {
  return (
    <>
    <LoopState>
    <Looptool/>
    </LoopState>
    </>
  );
}

export default App;
