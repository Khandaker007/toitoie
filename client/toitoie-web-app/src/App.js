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

import pkgData from "./pages/package-list/data";
import placesData from "./pages/place-list/data";

import "./App.scss";

function App() {
  const [packageId, setPackageId] = useState("");
  const [placeId, setPlaceId] = useState("");

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
          element={<PackageSingle packageId={packageId} />}
        />
        <Route
          path="/place-single"
          element={<PlaceSingle placeId={placeId} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
