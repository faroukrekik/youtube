import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Headernav from "./components/Headernav";
import Videoplayer from "./components/Videoplayer";
import Profile from "./components/Profile";
import Comments from "./components/Comments";
import Videolist from "./components/Videolist";

function App() {
  return (
    <div className="App">
      <Headernav />

      <div style={{ display: "flex" }}>
        <div>
          <Videoplayer />
          <Profile />
          <Comments />
        </div>
        <Videolist />
      </div>
    </div>
  );
}

export default App;
