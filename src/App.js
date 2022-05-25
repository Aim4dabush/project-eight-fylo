//components
import About from "./Components/About/About";
import Comments from "./Components/Comments/Comments";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Intro from "./Components/Intro/Intro";
import Productive from "./Components/Productive/Productive";
import SignUp from "./Components/SignUp/SignUp";

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
      <About />
      <Productive />
      <Comments />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
