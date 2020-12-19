import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

const About = () => <div>You are on the about page</div>;
const Home = () => <div>You are home</div>;

const NavigatorSection = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </div>
);
const RoutesSection = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
  </Switch>
);
export const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
};

const App = () => (
  <div>
    <Router>
      <NavigatorSection />
      <RoutesSection />
      <LocationDisplay />
    </Router>
  </div>
);

export default App;
