import React from "react"
import './App.css';
import ProfileMenu from "./ProfileMenu";
import RegistrationForm from "./RegistrationForm";

function App() {
  const [data, setData] = React.useState(null);
  
  //Gets data from backend
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
        <RegistrationForm />

      </header>
    </div>
  );
}

export default App;
