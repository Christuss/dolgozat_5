import Kerdesek from './components/Kerdesek';

import './App.css'
import CustomDropdown from './components/CustomDropdown';

function App() {
  return (
    <div className="App">
      <header>
        <nav className='nav'>
        <h1>Teszt</h1>
        <p>Menü</p>
        </nav>
      </header>
       <CustomDropdown/>
      <Kerdesek/>
    </div>
  );
}

export default App;
