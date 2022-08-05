import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ErrorBoundary from "./components/ErrorBoundary";
import { DevSite, HomePage } from "./containers";
import { ROUTES } from "./utils/constant";
import MainLayout from "./layouts/MainLayout";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <React.Fragment>
      {/* <Header /> */}
      <Provider store={store}>
        <BrowserRouter>
          <MainLayout>
            {/* <ErrorBoundary> */}
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
                <Route path={"/dev-site"} element={<DevSite />} />
              </Routes>
            </Suspense>
            {/* </ErrorBoundary> */}
          </MainLayout>
        </BrowserRouter>
      </Provider>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
