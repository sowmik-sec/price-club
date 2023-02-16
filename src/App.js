import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Pricing from "./components/Pricing/Pricing";
import AssignmentMarks from "./components/AssignmentMarks/AssignmentMarks";
import PhoneBar from "./components/PhoneBar/PhoneBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className="text-5xl underline">inside h1</h1>
      <p>paragraph</p>
      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
