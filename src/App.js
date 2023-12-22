import './App.css';
import Counter from './Counter/counter';
// import A from './components/A';
// import TextField, { PasswordField, NumberField } from './inputCompont';

function App() {

  console.log("App Commponent");

  return (
    <div className="App">
      {/* <TextField ph="Enter first name" value ="name"/>
      <TextField ph="Enter last name"/>
      <TextField ph="Enter email"/>
      <PasswordField />
      <NumberField /> */}

      {/* <A name="Dhruv"/>
      <A name="John"/>
      <A name="John"/>
      <A name="John"/>
      <A name="John"/>
      <A name="John"/> */}
      {/* <A name="John" /> */}
      <Counter />
    </div>
  );
}

export default App;
