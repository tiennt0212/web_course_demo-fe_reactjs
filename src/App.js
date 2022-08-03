import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DevSite } from './containers'

function App() {
  return (
    <React.Fragment>
      {/* <Header /> */}
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={"/dev-site"} element={<DevSite />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
