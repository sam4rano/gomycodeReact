
import "./App.css";
import Introduction from "./component/Introduction";
import NavbarContainer from "./component/NavbarContainer";

const App = () => {
  // const userName = "John Doe";
  // const students = [
  //   "Emma",
  //   "Liam",
  //   "Olivia",
  //   "Noah",
  //   "Ava",
  //   "William",
  //   "Sophia",
  //   "James",
  //   "Isabella",
  //   "Benjamin",
  // ];

  // const userAge = () => {
  //   const age = 35;
  //   return `my name is ${students[3]} i am ${age}`;
  // };

  return (
    <div className="app">
      <NavbarContainer />
      <Introduction text="I am a Machine learning engineer" />

    </div>
  );
};

export default App;
