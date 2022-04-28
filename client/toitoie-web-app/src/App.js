import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
// COMPONENTS
import Header from './components/header/header.component';

import Home from './pages/home/home.component';
import PackageList from './pages/package-list/package-list.component';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import PackageSingle from './pages/package-single/package-single.component';

import './App.scss';

function App() {

  const [packageId, setPackageId] = useState('');

  const collectPackageId = (id) => {
    setPackageId(id)
  }

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/package-list' element={<PackageList collectPackageId={collectPackageId}/>} />
        <Route path='/sign-in-sign-up' element={<SignInAndSignUp/>} />
        <Route path='/package-list/{packageId}' element={<PackageSingle packageId={packageId}/>} />
      </Routes>
    </>
  );
}

export default App;
