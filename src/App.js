// App.js
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <LoadingBar color="#f11946" height={3} progress={progress} />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              country="in"
              category="general"
              pageSize={12}
            />
          </Route>
          <Route exact path="/general">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              country="in"
              category="general"
              pageSize={12}
            />
          </Route>
          <Route exact path="/business">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="business"
              country="in"
              category="business"
              pageSize={12}
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="entertainment"
              country="in"
              category="entertainment"
              pageSize={12}
            />
          </Route>
          <Route exact path="/health">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="health"
              country="in"
              category="health"
              pageSize={12}
            />
          </Route>
          <Route exact path="/science">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="science"
              country="in"
              category="science"
              pageSize={12}
            />
          </Route>
          <Route exact path="/sports">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="sports"
              country="in"
              category="sports"
              pageSize={12}
            />
          </Route>
          <Route exact path="/technology">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="technology"
              country="in"
              category="technology"
              pageSize={12}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
