import React from "react"
import './App.css';
import ProfileMenu from "./ProfileMenu";

const user = {
  name: 'Danny Boy',
  phone: '647-696-devs',
  email: 'DevDaddys@uwo.ca',
  team: 'Purple Ponies'
};

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
        <ProfileMenu user = {user}/>
      </header>
    </div>
  );
}

export default App;
