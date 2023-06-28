import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import { Route, Router, Routes } from 'react-router-dom';
import About from './About';

function App() {
  return (

<div>
   
<Routes>
<Route path='/About' element={<About />}></Route>
<Route path='/' element={<Hello />} ></Route>
</Routes>

</div>

  );
}

export default App;