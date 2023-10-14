
import "./App.css";
import Introduction from "./component/Introduction";

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
      <Introduction text="I am a Machine learning engineer" />
      <Introduction text="I am a QA engineer" />
      <Introduction text="I am a Backend engineer" />
      
    </div>
  );
};

export default App;
