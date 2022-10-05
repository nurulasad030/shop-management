import logo from "./logo.svg";
import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
import HeaderNav from "./Components/HeaderNav/HeaderNav";
import Body from "./Components/Body/Body";

function App() {
  return (
    <div className="App grid ">
      <div>
      <SideBar></SideBar>
      </div>

     <div>
     <HeaderNav></HeaderNav>

    <Body></Body>
     </div>
    </div>
  );
}

export default App;
