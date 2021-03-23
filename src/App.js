import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import { ThemeProvider } from "styled-components";
import Loading from "screens/Loading";
import constants from "atoms/constants";

const Main = lazy(() => import("screens/Main"));
const Art = lazy(() => import("screens/Art"));
const FourZeroFour = lazy(() => import("screens/FourZeroFour"));

function App() {
  const [theme] = useRecoilState(constants.theme);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/">
              <Main />
            </Route>
            <Route path="/art" exact>
              <Art />
            </Route>
            <Route>
              <FourZeroFour />
            </Route>
          </Switch>
        </Suspense>
      </ThemeProvider>
    </Router>
  );
}

export default App;
