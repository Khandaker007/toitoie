import {Routes, Route} from 'react-router-dom'
// COMPONENTS
import Header from './components/header/header.component';

import Home from './pages/home/home.component';
import Package from './pages/package/package.component';

import './App.scss';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/package-list' element={<Package/>} />
      </Routes>
    </>
  );
}

export default App;
