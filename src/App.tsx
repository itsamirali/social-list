import "./App.css";
import Header from "./Components/Header/Header";
import SocialList from "./Components/SocialList/SocialList";

function App() {
  return (
    <div style={{ backgroundColor: "rgb(22, 27, 37)" }} className="appContainer">
      <div className="container px-5">
        <Header />
        <SocialList />
      </div>
    </div>
  );
}

export default App;
