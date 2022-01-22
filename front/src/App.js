import "./App.scss";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Admin from "./pages/Admin";
import SignIn from "./pages/Admin/SignIn";

function App() {
  return (
    <div className="app">
      <Home/>
      <Contact/>
      <Admin/>
      <SignIn/>
    </div>
  );
}

export default App;

