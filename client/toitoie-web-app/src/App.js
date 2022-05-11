import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// COMPONENTS
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import Home from "./pages/home/home.component";
import PackageList from "./pages/package-list/package-list.component";
import PlaceList from "./pages/place-list/place-list.component";
import SignInAndSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import PackageSingle from "./pages/package-single/package-single.component";
import PlaceSingle from "./pages/place-single/place-single.component";
import About from "./pages/about/about.component";
import SignUp from "./components/sign-up/sign-up.component";

import pkgData from "./pages/package-list/data";
import placesData from "./pages/place-list/data";

import "./App.scss";

function App() {
  const [packageId, setPackageId] = useState(1);
  const [placeId, setPlaceId] = useState(1);

  console.log(pkgData)
  console.log(placesData)

  const collectPackageId = (id) => {
    setPackageId(id);
  };

  const collectPlaceId = (id) => {
    setPlaceId(id);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/package-list"
          element={
            <PackageList
              collectPackageId={collectPackageId}
              pkgData={pkgData}
            />
          }
        />
        <Route
          path="/place-list"
          element={
            <PlaceList
              collectPlaceId={collectPlaceId}
              placesData={placesData}
            />
          }
        />
        <Route path="/sign-in-sign-up" element={<SignInAndSignUp />} />
        <Route
          path="/package-single"
          element={<PackageSingle packageId={packageId} data={pkgData}/>}
        />
        <Route
          path="/place-single"
          element={<PlaceSingle placeId={placeId} data={placesData}/>}
        />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
