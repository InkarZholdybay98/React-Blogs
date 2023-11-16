import BlogDetails from "./components/BlogDetails";
import CreateBlog from "./components/CreateBlog";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/create">
            <CreateBlog />
          </Route>

          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
