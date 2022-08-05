import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import { DevSite, HomePage } from "./containers";
import { ROUTES } from "./utils/constant";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <React.Fragment>
      {/* <Header /> */}
      <BrowserRouter>
        <MainLayout>
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
                <Route path={"/dev-site"} element={<DevSite />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </MainLayout>
      </BrowserRouter>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
