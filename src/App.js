//components
import Header from "./Components/Header/Header";
import Intro from "./Components/Intro/Intro";

//styles
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <img
        className="mobile-bg"
        src={process.env.PUBLIC_URL + "/images/background/bg-curvy-mobile.svg"}
        alt="mobile-bg"
      />
      <Intro />
    </div>
  );
}

export default App;
