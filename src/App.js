
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import MainApp from './Modules/MainApp';


function App() {
  return (
<BrowserRouter>
  <Routes>
  <Route path='/' element={<MainApp/>}/>

  </Routes>
</BrowserRouter>
    
  );
}

export default App;
