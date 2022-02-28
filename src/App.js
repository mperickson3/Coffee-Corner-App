import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import GetCoffee from "./components/getCoffee";
import AboutOurCoffee from "./components/AboutOurCoffee/aboutOurCoffee";
import Newsletter from "./components/Newsletter/newsletter";
import ContactUs from "./components/ContactUs/contactUs";

function App() {
  return (
    <div className="App">
      <NavBar />

      <GetCoffee></GetCoffee>
      <AboutOurCoffee />
      <Newsletter />
      <ContactUs />
    </div>
  );
}

export default App;
